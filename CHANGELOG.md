# Changelog

## [0.9.5](https://github.com/DaanRosendal/reana-ui/compare/v0.9.4...0.9.5) (2024-03-13)


### Build

* fix build ([2e6ccbc](https://github.com/DaanRosendal/reana-ui/commit/2e6ccbcc8c4c7ff8e0e0879072ecf7da8a8913a2))
* **package:** require jsroot&lt;7.6.0 ([#399](https://github.com/DaanRosendal/reana-ui/issues/399)) ([d53b290](https://github.com/DaanRosendal/reana-ui/commit/d53b290f7264e5da8e7b31c6ef2015748146e2f0))
* **package:** update yarn.lock ([#399](https://github.com/DaanRosendal/reana-ui/issues/399)) ([10e41b1](https://github.com/DaanRosendal/reana-ui/commit/10e41b17cc45cb43fafa5f755c2730aa6c047933))


### Features

* **footer:** link privacy notice to configured URL ([#393](https://github.com/DaanRosendal/reana-ui/issues/393)) ([f0edde6](https://github.com/DaanRosendal/reana-ui/commit/f0edde6bf4ceb8a92915446d0353df009919b8f3)), closes [#392](https://github.com/DaanRosendal/reana-ui/issues/392)


### Bug fixes

* **launcher:** remove dollar sign in generated Markdown ([#389](https://github.com/DaanRosendal/reana-ui/issues/389)) ([8ad4afd](https://github.com/DaanRosendal/reana-ui/commit/8ad4afdf9053a3736e4df036646aa114260f79d9))
* **progress:** update failed workflows duration using finish time ([#387](https://github.com/DaanRosendal/reana-ui/issues/387)) ([809fdc5](https://github.com/DaanRosendal/reana-ui/commit/809fdc5e8b35ef03490921d15febcdb819fa6df7)), closes [#386](https://github.com/DaanRosendal/reana-ui/issues/386)
* **router:** show 404 page for invalid URLs ([#382](https://github.com/DaanRosendal/reana-ui/issues/382)) ([c18e81d](https://github.com/DaanRosendal/reana-ui/commit/c18e81ded87db6fbbbf06237d747f9655e0e5cc9)), closes [#379](https://github.com/DaanRosendal/reana-ui/issues/379)


### Code refactoring

* **docs:** move from reST to Markdown ([#391](https://github.com/DaanRosendal/reana-ui/issues/391)) ([8d58277](https://github.com/DaanRosendal/reana-ui/commit/8d582775ab1a0779601e37f9b9498f76cc5ce4cd))


### Continuous integration

* add eslint job ([d4e456d](https://github.com/DaanRosendal/reana-ui/commit/d4e456d263599276b73c8ec8ca1e405a4de825be))
* add hadolint linter ([3c94e25](https://github.com/DaanRosendal/reana-ui/commit/3c94e2534384f41a054bbbeab4df3506f967c0f1))
* added github actions workflow ([ad531b0](https://github.com/DaanRosendal/reana-ui/commit/ad531b0a83b5d72fff1b5d64cc55e491a3ced686))
* **commitlint:** addition of commit message linter ([#380](https://github.com/DaanRosendal/reana-ui/issues/380)) ([1c9ec74](https://github.com/DaanRosendal/reana-ui/commit/1c9ec7493a28c8c482acb6a90e4c4baf16bf9507))
* **commitlint:** allow release commit style ([#400](https://github.com/DaanRosendal/reana-ui/issues/400)) ([426a2b0](https://github.com/DaanRosendal/reana-ui/commit/426a2b0c3c401c52a3ad39fa7d5c5d3834eb2082))
* **commitlint:** check for the presence of concrete PR number ([#390](https://github.com/DaanRosendal/reana-ui/issues/390)) ([e938f60](https://github.com/DaanRosendal/reana-ui/commit/e938f60440bb8c48ac8f00637e44d5f34980137e))
* pin hadolint version ([d3dd143](https://github.com/DaanRosendal/reana-ui/commit/d3dd1434a2e26644b31ed527a13619e9bda9a9b5))
* publish docker image after new release ([bdbf705](https://github.com/DaanRosendal/reana-ui/commit/bdbf705c59d42fb40f0473b9305d1f2cb0a633c8))
* **release-please:** initial configuration ([#380](https://github.com/DaanRosendal/reana-ui/issues/380)) ([db2e82b](https://github.com/DaanRosendal/reana-ui/commit/db2e82b454ba80b93895835e7c95ae96f3ff5dc9))
* **release-please:** switch to `simple` release strategy ([#383](https://github.com/DaanRosendal/reana-ui/issues/383)) ([2c64085](https://github.com/DaanRosendal/reana-ui/commit/2c64085dd8dc70ceaf775b527f5467ae297e09e5))
* **release-please:** update version in package.json and Dockerfile ([#385](https://github.com/DaanRosendal/reana-ui/issues/385)) ([5d232af](https://github.com/DaanRosendal/reana-ui/commit/5d232aff36d1f795df1fc8736ae3825a2b763750))
* **shellcheck:** exclude node_modules from the analyzed paths ([#387](https://github.com/DaanRosendal/reana-ui/issues/387)) ([8913e4d](https://github.com/DaanRosendal/reana-ui/commit/8913e4dd58250bf30318539c8f75abda0b024e43))
* **shellcheck:** fix exit code propagation ([#390](https://github.com/DaanRosendal/reana-ui/issues/390)) ([7b5f29e](https://github.com/DaanRosendal/reana-ui/commit/7b5f29ebc604a2d27d76f8a51b437c3e561fec32))
* update all actions ([fa1417a](https://github.com/DaanRosendal/reana-ui/commit/fa1417ac376a4e7d53cc9ca2be63eaefdcff4613))
* use same node version as in dockerfile ([e37d4ee](https://github.com/DaanRosendal/reana-ui/commit/e37d4ee6e1c346e4320144c9ba161b575f68393b))


### Documentation

* add .readthedocs.yaml to migrate to RTD v2 ([5cbcacc](https://github.com/DaanRosendal/reana-ui/commit/5cbcacc582b78c99341099f6ed8bd8d780e09838))
* add sso and gitlab integration sections ([6c82093](https://github.com/DaanRosendal/reana-ui/commit/6c820932a9610d9f92978400f5e7477ccfe1a79d)), closes [#39](https://github.com/DaanRosendal/reana-ui/issues/39)
* adding package.json + logo-reana.png ([f002bd6](https://github.com/DaanRosendal/reana-ui/commit/f002bd6ecd2fddb54e7157f9c3a9b77d4c4b9246))
* adding run_test.sh + extending .gitignore ([fa223f8](https://github.com/DaanRosendal/reana-ui/commit/fa223f8882a4c5f9d6463c98ff29ecc61d8a1144))
* authors email change ([9633380](https://github.com/DaanRosendal/reana-ui/commit/9633380adce09a31fc5562319fe15ae96ce2527f))
* **authors:** complete list of contributors ([#396](https://github.com/DaanRosendal/reana-ui/issues/396)) ([814d68e](https://github.com/DaanRosendal/reana-ui/commit/814d68ef5e2103a5f33e0dcf97bd8ffd777db78f))
* basic deployment guide ([072185b](https://github.com/DaanRosendal/reana-ui/commit/072185bf90b84dac8a5626d17bc429c17346c833))
* downgrade urllib3 ([ddb62ed](https://github.com/DaanRosendal/reana-ui/commit/ddb62edc00712e62ea8a279bb54cdd507d226511))
* fix readme shield URLs ([c2aa002](https://github.com/DaanRosendal/reana-ui/commit/c2aa0024b8ce948b3d669855b589151af5eebe06))
* fix rtfd build badge so it shows the real status ([d5b6289](https://github.com/DaanRosendal/reana-ui/commit/d5b6289687857fa4e34c683911ede01b24826411))
* get rid of REANA_GITLAB_OAUTH_REDIRECT_URL ([f6ee57e](https://github.com/DaanRosendal/reana-ui/commit/f6ee57eca4f53d0e3b8e511a9e54e4876fad2c49))
* including common reana .rst ([4d7c815](https://github.com/DaanRosendal/reana-ui/commit/4d7c815b5bf4972d54ee91c1c47646ef138a8b52))
* introducing Prettier ([c764510](https://github.com/DaanRosendal/reana-ui/commit/c76451072c27e047abe23d0852a5fa568966dccc))
* remove reana-cluster references ([8cd0a90](https://github.com/DaanRosendal/reana-ui/commit/8cd0a907ade11e179025b1210345cd6e14b43d56))
* remove vbox port forwarding section ([de71267](https://github.com/DaanRosendal/reana-ui/commit/de71267f97e191740829e84c6cf1a7f8b7a1cdb2))
* set default language to English ([8ac6852](https://github.com/DaanRosendal/reana-ui/commit/8ac6852d7440349073c65530f2a982ac6f4c6790))
* single-page RTFD outline ([b9ce1cf](https://github.com/DaanRosendal/reana-ui/commit/b9ce1cf1b9fcffcd1fcf00a2a35007810092748a))

## [0.9.4](https://github.com/reanahub/reana-ui/compare/0.9.3...0.9.4) (2024-03-04)


### Build

* **package:** require jsroot&lt;7.6.0 ([#399](https://github.com/reanahub/reana-ui/issues/399)) ([d53b290](https://github.com/reanahub/reana-ui/commit/d53b290f7264e5da8e7b31c6ef2015748146e2f0))
* **package:** update yarn.lock ([#399](https://github.com/reanahub/reana-ui/issues/399)) ([10e41b1](https://github.com/reanahub/reana-ui/commit/10e41b17cc45cb43fafa5f755c2730aa6c047933))


### Features

* **footer:** link privacy notice to configured URL ([#393](https://github.com/reanahub/reana-ui/issues/393)) ([f0edde6](https://github.com/reanahub/reana-ui/commit/f0edde6bf4ceb8a92915446d0353df009919b8f3)), closes [#392](https://github.com/reanahub/reana-ui/issues/392)


### Bug fixes

* **launcher:** remove dollar sign in generated Markdown ([#389](https://github.com/reanahub/reana-ui/issues/389)) ([8ad4afd](https://github.com/reanahub/reana-ui/commit/8ad4afdf9053a3736e4df036646aa114260f79d9))
* **progress:** update failed workflows duration using finish time ([#387](https://github.com/reanahub/reana-ui/issues/387)) ([809fdc5](https://github.com/reanahub/reana-ui/commit/809fdc5e8b35ef03490921d15febcdb819fa6df7)), closes [#386](https://github.com/reanahub/reana-ui/issues/386)
* **router:** show 404 page for invalid URLs ([#382](https://github.com/reanahub/reana-ui/issues/382)) ([c18e81d](https://github.com/reanahub/reana-ui/commit/c18e81ded87db6fbbbf06237d747f9655e0e5cc9)), closes [#379](https://github.com/reanahub/reana-ui/issues/379)


### Code refactoring

* **docs:** move from reST to Markdown ([#391](https://github.com/reanahub/reana-ui/issues/391)) ([8d58277](https://github.com/reanahub/reana-ui/commit/8d582775ab1a0779601e37f9b9498f76cc5ce4cd))


### Continuous integration

* **commitlint:** addition of commit message linter ([#380](https://github.com/reanahub/reana-ui/issues/380)) ([1c9ec74](https://github.com/reanahub/reana-ui/commit/1c9ec7493a28c8c482acb6a90e4c4baf16bf9507))
* **commitlint:** allow release commit style ([#400](https://github.com/reanahub/reana-ui/issues/400)) ([426a2b0](https://github.com/reanahub/reana-ui/commit/426a2b0c3c401c52a3ad39fa7d5c5d3834eb2082))
* **commitlint:** check for the presence of concrete PR number ([#390](https://github.com/reanahub/reana-ui/issues/390)) ([e938f60](https://github.com/reanahub/reana-ui/commit/e938f60440bb8c48ac8f00637e44d5f34980137e))
* **release-please:** initial configuration ([#380](https://github.com/reanahub/reana-ui/issues/380)) ([db2e82b](https://github.com/reanahub/reana-ui/commit/db2e82b454ba80b93895835e7c95ae96f3ff5dc9))
* **release-please:** switch to `simple` release strategy ([#383](https://github.com/reanahub/reana-ui/issues/383)) ([2c64085](https://github.com/reanahub/reana-ui/commit/2c64085dd8dc70ceaf775b527f5467ae297e09e5))
* **release-please:** update version in package.json and Dockerfile ([#385](https://github.com/reanahub/reana-ui/issues/385)) ([5d232af](https://github.com/reanahub/reana-ui/commit/5d232aff36d1f795df1fc8736ae3825a2b763750))
* **shellcheck:** exclude node_modules from the analyzed paths ([#387](https://github.com/reanahub/reana-ui/issues/387)) ([8913e4d](https://github.com/reanahub/reana-ui/commit/8913e4dd58250bf30318539c8f75abda0b024e43))
* **shellcheck:** fix exit code propagation ([#390](https://github.com/reanahub/reana-ui/issues/390)) ([7b5f29e](https://github.com/reanahub/reana-ui/commit/7b5f29ebc604a2d27d76f8a51b437c3e561fec32))


### Documentation

* **authors:** complete list of contributors ([#396](https://github.com/reanahub/reana-ui/issues/396)) ([814d68e](https://github.com/reanahub/reana-ui/commit/814d68ef5e2103a5f33e0dcf97bd8ffd777db78f))

## 0.9.3 (2023-12-12)

- Adds metadata labels to Dockerfile.
- Changes version of NGINX Docker image from 1.19 to 1.25.

## 0.9.2 (2023-12-06)

- Adds automated multi-platform container image building for amd64 and arm64 architectures.
- Adds option to delete all the runs of a workflow.
- Adds form to generate the launcher URL of any user-provided analysis, together with the markdown snippet for the corresponding Launch-on-REANA badge.
- Changes the Launch-on-REANA page to improve how workflow parameters are shown by displaying them inside a table.
- Changes the Launch-on-REANA page to show improved validation warnings which also indicate where unexpected properties are located in the REANA specification file.
- Changes version of Node.js Docker image from 16 to 18.
- Fixes container image building on the arm64 architecture.

## 0.9.1 (2023-09-27)

- Adds support for previewing PDF files present in a workflow's workspace.
- Adds support for previewing ROOT files present in a workflow's workspace.
- Adds support for signing-in with a custom third-party Keycloak instance.
- Adds a new menu item to the workflow actions popup to allow stopping running workflows.
- Changes the workflow deletion message to clarify that attached interactive sessions are also closed when a workflow is deleted.
- Changes the workflow progress bar to always display it as completed for finished workflows.
- Changes the interactive session notification to also report that the session will be closed after a specified number of days of inactivity.
- Changes the workflow-details page to make it possible to scroll through the list of workflow steps in the job logs section.
- Changes the workflow-details page to not automatically refresh the selected job when viewing the related logs, but keeping the user-selected one active.
- Changes the page titles to conform to the same sentence case style.
- Changes workspace file preview to support customisable maximum file size limit allowed for previewing.
- Changes nginx configuration to save bandwidth by serving gzip-compressed static files.
- Changes the launcher page to show warnings when validating the REANA specification file of the workflow to be launched.
- Changes the launcher page to allow showing custom demo examples.
- Fixes calculation of workflow runtime durations for stopped workflows.

## 0.9.0 (2023-01-19)

- Adds Launch on REANA page allowing the submission of workflows via badge-clicking.
- Adds notifications to inform users when critical levels of quota usage is reached.
- Adds 404 Not Found error page.
- Adds tab titles to all the pages.
- Changes OAuth configuration to enable the new CERN SSO.
- Changes the workflow-details page to show the logs of the workflow engine.
- Changes the workflow-details page to show file sizes in a human-readable format.
- Changes the workflow-details page to show the workspace's retention rules.
- Changes the workflow-details page to show the duration of the workflow's jobs.
- Changes the workflow-details page to display a label of the workflow launcher URL remote origin.
- Changes the workflow-details page to periodically refresh the content of the page.
- Changes the workflow-details page to refresh after the deletion of a workflow.
- Changes the workflow-list page to add a way to hide deleted workflows.
- Changes the workflow-list page to add new workflows sorting options by most used disk and cpu quota.
- Changes the deletion of a workflow to always clean up the workspace.
- Changes the announcements to support limited HTML markup.
- Fixes redirection chain for non-signed-in CERN SSO users to access the desired target page after sign-in.
- Fixes `fetchWorkflow` action to fetch a specific workflow instead of the entire user workflow list.
- Fixes the ordering by size of the files showed in the `Workspace` tab of the workflow-details page.

## 0.8.2 (2022-02-15)

- Changes `node-sass` dependency to version 7.

## 0.8.1 (2022-02-02)

- Adds support for HTML preview of workspace files.
- Adds search by name in workflow file list page.
- Adds support for Create React App v5.
- Changes cluster health status page to represent availability instead of usage.
- Changes Docker image Node version from 12 to 16.

## 0.8.0 (2021-11-22)

- Adds user quota usage pie charts in Profile page.
- Adds a more generic notifications system.
- Adds a way to open, list and closes interactive sessions.
- Adds the possibility of deleting workflows to save disk space.
- Adds filtering by status and search by name in workflow list page.
- Adds import aliases.
- Adds cluster health status page.

## 0.7.2 (2021-02-04)

- Adds option to require user email confirmation after sign-up.
- Adds option to display CERN Privacy Notice for CERN installations.
- Changes notification system to improve sign-in and sign-up messages.

## 0.7.1 (2020-11-24)

- Fixes error handling behaviour for several server-side exceptions.

## 0.7.0 (2020-10-20)

- Adds user profile page.
- Adds local user forms for sign-in and sign-up functionalities.
- Adds home page suitable for standalone vs CERN deployments.
- Adds page refresh button to workflow detailed page.
- Adds favicon to the web interface pages.
- Adds basic theme scaffolding.
- Adds announcement configuration to easily display messages on the web interface.
- Adds pagination on the workflow list and workflow detailed pages.
- Fixes loading workflow indicator.
- Fixes displaying of non-existing workflows.
- Fixes file preview functionality experience to allow/disallow certain file formats.
- Fixes workflow specification display to show runtime parameters.
- Fixes display of footer links in case they are not set during deployment.
- Changes configuration to dynamically detect URL.
- Changes main loader of the web interface.
- Changes workflow list page and all the code base to use hooks everywhere.
- Changes pre-requisites to node version 12 and latest npm dependencies.
- Changes polling to improve performance.
- Changes default font to Open Sans.
- Changes code formatting to respect updated `prettier` version coding style.
- Changes documentation to single-page layout.

## 0.6.0 (2019-12-20)

- Basic login/user page using CERN SSO.
- Simple user page showing user access token.
- Adds GitLab projects integration.
- Allows enabling/disabling GitLab project integration.
- Improves UX in projects page.
- Adds state management with Redux.
- Includes SASS and CSS-modules support.
- Loads config from server and store it in Redux state.

## 0.3.0 (2018-07-04)

- Initial public release.
