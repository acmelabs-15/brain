---
package: addy
path: .github/workflows/test-plugin-install.yml
type: config
bytes: 2703
unit: inv-addy-3
deprecated: false
aliases: []
verified: 2026-09-04 quote-check+coverage
memo_inputs:
  - {path: .github/workflows/test-plugin-install.yml, sha256: a4bb5dbf0d3a2c81d405722a100b9de1256130512e74ca8561f6ec61281cc5f5}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
---

# .github/workflows/test-plugin-install.yml

## Purpose — required, verbatim
> "name: Test Plugin Installation" (no explicit purpose statement) — .github/workflows/test-plugin-install.yml:1

## Design intent — required
Continuous integration workflow that validates skill files, command parity, manifest consistency, and tests installation of the plugin via Claude Code CLI. Ensures quality and structural integrity across PRs and main branch commits.

## Phase — required
addy:Ship

## Inputs — required
Repository code triggered by push (.github/workflows/test-plugin-install.yml:4), pull_request (.github/workflows/test-plugin-install.yml:5), or workflow_dispatch (.github/workflows/test-plugin-install.yml:6).

## Outputs — required
GitHub Actions test status, validation reports, and installation verification logs.

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
- `validate-skills` — .github/workflows/test-plugin-install.yml:9 — defined here
- `validate-commands` — .github/workflows/test-plugin-install.yml:43 — defined here
- `validate` — .github/workflows/test-plugin-install.yml:66 — defined here
- `test-install` — .github/workflows/test-plugin-install.yml:79 — defined here

## Structure
- name: Test Plugin Installation — .github/workflows/test-plugin-install.yml:1
- on: — .github/workflows/test-plugin-install.yml:3
- jobs: — .github/workflows/test-plugin-install.yml:8
- validate-skills: — .github/workflows/test-plugin-install.yml:9
- validate-commands: — .github/workflows/test-plugin-install.yml:43
- validate: — .github/workflows/test-plugin-install.yml:66
- test-install: — .github/workflows/test-plugin-install.yml:79

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Executes 4 jobs in two tiers: `validate-skills` and `validate-commands` run in parallel, followed by `validate` (Claude Code plugin validation), followed by `test-install` which tests full plugin installation into a clean user scope.

## Context cost
2703 bytes, ~700 tokens.
