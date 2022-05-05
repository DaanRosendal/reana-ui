/*
  -*- coding: utf-8 -*-

  This file is part of REANA.
  Copyright (C) 2020, 2022 CERN.

  REANA is free software; you can redistribute it and/or modify it
  under the terms of the MIT License; see LICENSE file for more details.
*/

import { useCallback, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { Container, Dimmer, Loader, Tab } from "semantic-ui-react";

import { fetchWorkflow, fetchWorkflowLogs } from "~/actions";
import {
  getWorkflow,
  getWorkflowRefresh,
  loadingWorkflows,
  isWorkflowsFetched,
  getConfig,
} from "~/selectors";
import BasePage from "../BasePage";
import { Notification, WorkflowDeleteModal } from "~/components";
import {
  WorkflowInfo,
  WorkflowLogs,
  WorkflowFiles,
  WorkflowSpecification,
} from "./components";

export default function WorkflowDetailsPage() {
  return (
    <BasePage>
      <WorkflowDetails />
    </BasePage>
  );
}

const FINISHED_STATUSES = ["finished", "failed", "stopped", "deleted"];

function WorkflowDetails() {
  const { id: workflowId } = useParams();

  const dispatch = useDispatch();
  const workflow = useSelector(getWorkflow(workflowId));
  const loading = useSelector(loadingWorkflows);
  const workflowsFetched = useSelector(isWorkflowsFetched);
  const { pollingSecs } = useSelector(getConfig);
  const interval = useRef(null);
  const workflowRefresh = useSelector(getWorkflowRefresh);

  const refetchWorkflow = useCallback(() => {
    const options = { refetch: true, showLoader: false };
    dispatch(fetchWorkflow(workflowId, options));
    dispatch(fetchWorkflowLogs(workflowId, options));
  }, [dispatch, workflowId]);

  useEffect(() => {
    dispatch(fetchWorkflow(workflowId));
    if (!interval.current && pollingSecs) {
      interval.current = setInterval(refetchWorkflow, pollingSecs * 1000);
    }
    return cleanPolling;
  }, [dispatch, refetchWorkflow, workflowId, pollingSecs]);

  // FIXME: workflowRefresh is a temporary solution to refresh the workflow
  // by saving random number in redux. It should be refactored in the future
  // once websockets will be implemented
  useEffect(refetchWorkflow, [dispatch, refetchWorkflow, workflowRefresh]);

  useEffect(() => {
    if (workflow && FINISHED_STATUSES.includes(workflow.status)) {
      cleanPolling();
    }
  }, [workflow]);

  const cleanPolling = () => {
    clearInterval(interval.current);
    interval.current = null;
  };

  if (!workflowsFetched || loading) {
    return (
      <Dimmer active inverted>
        <Loader>Loading workflow...</Loader>
      </Dimmer>
    );
  }

  if (!workflow) {
    return (
      <Notification
        icon="warning sign"
        header="An error has occurred"
        message="Sorry, this workflow either does not exist or you are not authorised to see it."
        closable={false}
        error
      />
    );
  }

  const panes = [
    {
      menuItem: { key: "job-logs", icon: "terminal", content: "Job logs" },
      render: () => <WorkflowLogs workflow={workflow} />,
    },
    {
      menuItem: {
        key: "engine-logs",
        icon: "cogs",
        content: "Engine logs",
      },
      render: () => <WorkflowLogs engine workflow={workflow} />,
    },
    {
      menuItem: {
        key: "workspace",
        icon: "folder outline",
        content: "Workspace",
      },
      render: () => <WorkflowFiles title="Workspace" id={workflow.id} />,
    },
    {
      menuItem: {
        key: "specification",
        icon: "file code outline",
        content: "Specification",
      },
      render: () => <WorkflowSpecification id={workflow.id} />,
    },
  ];

  return (
    <Container>
      <WorkflowInfo workflow={workflow} />
      <Tab menu={{ secondary: true, pointing: true }} panes={panes} />
      <WorkflowDeleteModal />
    </Container>
  );
}
