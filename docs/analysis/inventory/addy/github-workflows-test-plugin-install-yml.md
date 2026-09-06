---
package: addy
path: .github/workflows/test-plugin-install.yml
type: config
bytes: 2703
unit: inv-addy-3
aliases: []
memo_inputs:
  - {path: .github/workflows/test-plugin-install.yml, sha256: a4bb5dbf0d3a2c81d405722a100b9de1256130512e74ca8561f6ec61281cc5f5}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# .github/workflows/test-plugin-install.yml

## Purpose — required, verbatim
> "name: Test Plugin Installation" — .github/workflows/test-plugin-install.yml:1

## Design intent — required
Continuous integration workflow that automates regression testing and packaging verification across four sequential and dependent jobs: validating skill markdown structure and reference links, validating command parity across harnesses, validating plugin manifests via Claude Code CLI, and testing live plugin marketplace installation.

## Phase — required
none

## Inputs — required
Repository git events (push, pull_request, workflow_dispatch) executing on GitHub Actions ubuntu-latest runners.

## Outputs — required
CI execution status, test execution results, console logs, and validation failure reports.

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
none

## Concepts named — required, verbatim
- `Test Plugin Installation` — .github/workflows/test-plugin-install.yml:1 — defined here
- `Validate skill content` — .github/workflows/test-plugin-install.yml:10 — defined here
- `Validate command parity and description sync` — .github/workflows/test-plugin-install.yml:44 — defined here
- `Validate plugin structure` — .github/workflows/test-plugin-install.yml:67 — defined here
- `Test plugin installation` — .github/workflows/test-plugin-install.yml:80 — defined here

## Structure
- name: Test Plugin Installation
- on: push, pull_request, workflow_dispatch
- jobs: validate-skills
- jobs: validate-commands
- jobs: validate
- jobs: test-install

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Verifies real-world plugin installation by running `npm install -g @anthropic-ai/claude-code` and invoking `claude plugin marketplace add ./` and `claude plugin install agent-skills@addy-agent-skills --scope user` in CI (lines 74, 93, 99).

## Context cost
2703 bytes (~675 tokens) for the workflow definition; invokes 11 scripts totaling ~22,000 bytes.
