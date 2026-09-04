---
package: addy
path: .github/workflows/test-plugin-install.yml
type: config
bytes: 2703
unit: inv-addy-1
aliases: []
memo_inputs:
  - {path: .github/workflows/test-plugin-install.yml, sha256: a4bb5dbf0d3a2c81d405722a100b9de1256130512e74ca8561f6ec61281cc5f5}
method_sha: 363a57b543666244096e150abfb5435c4aa6c3c72e543f90b5600ab3507ac791
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-04 quote-check+coverage
---

# .github/workflows/test-plugin-install.yml

## Purpose — required, verbatim
> "name: Test Plugin Installation" — .github/workflows/test-plugin-install.yml:1
(no explicit purpose statement)

## Design intent — required
Automates CI validation across skill metadata, command parity, artifact paths, reference links, and plugin installation using GitHub Actions, ensuring pull requests and pushes do not break plugin integrity or CLI installation.

## Phase — required
addy:VERIFY

## Inputs — required
Trigger events (`push`, `pull_request`, `workflow_dispatch`).

## Outputs — required
GitHub Actions check run outcomes and test execution results.

## Invokes — required
- script scripts/validate-skills.js — .github/workflows/test-plugin-install.yml:23
- script scripts/validate-versions.js — .github/workflows/test-plugin-install.yml:26
- script scripts/validate-versions-test.js — .github/workflows/test-plugin-install.yml:29
- script scripts/run-evals-test.js — .github/workflows/test-plugin-install.yml:32
- script scripts/run-evals.js — .github/workflows/test-plugin-install.yml:35
- script scripts/validate-reference-links.js — .github/workflows/test-plugin-install.yml:38
- script scripts/validate-reference-links-test.js — .github/workflows/test-plugin-install.yml:41
- script scripts/validate-commands.js — .github/workflows/test-plugin-install.yml:55
- script scripts/validate-commands-test.js — .github/workflows/test-plugin-install.yml:58
- script scripts/validate-artifact-paths.js — .github/workflows/test-plugin-install.yml:61
- script scripts/validate-artifact-paths-test.js — .github/workflows/test-plugin-install.yml:64

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `Test Plugin Installation` — .github/workflows/test-plugin-install.yml:1 — defined here
- `validate-skills` — .github/workflows/test-plugin-install.yml:9 — defined here
- `Validate skill content` — .github/workflows/test-plugin-install.yml:10 — defined here
- `validate-commands` — .github/workflows/test-plugin-install.yml:43 — defined here
- `Validate command parity and description sync` — .github/workflows/test-plugin-install.yml:44 — defined here
- `validate` — .github/workflows/test-plugin-install.yml:66 — defined here
- `Validate plugin structure` — .github/workflows/test-plugin-install.yml:67 — defined here
- `test-install` — .github/workflows/test-plugin-install.yml:79 — defined here

## Structure
- name
- on (push, pull_request, workflow_dispatch)
- jobs
  - validate-skills
  - validate-commands
  - validate
  - test-install

## Scripts — required if type is script or the skill ships scripts
Workflow executes 6 test scripts and 5 validation scripts via Node.js test runner and CLI scripts.

## Defects — required
none

## Observations
Workflow uses Node 24 on ubuntu-latest and installs `@anthropic-ai/claude-code` globally to test CLI marketplace registration and user-scoped installation.

## Context cost
2703 bytes, ~600 tokens.
