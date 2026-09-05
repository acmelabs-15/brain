---
package: addy
path: .github/workflows/test-plugin-install.yml
type: config
bytes: 2703
unit: inv-addy-3
deprecated: false
aliases: []
memo_inputs:
  - {path: .github/workflows/test-plugin-install.yml, sha256: a4bb5dbf0d3a2c81d405722a100b9de1256130512e74ca8561f6ec61281cc5f5}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .github/workflows/test-plugin-install.yml

## Purpose — required, verbatim
> "name: Test Plugin Installation" — .github/workflows/test-plugin-install.yml:1 (no explicit purpose statement)

## Design intent — required
Continuous integration workflow automating skill content validation, manifest version checks, skill eval execution, reference link validation, command parity verification, artifact path verification, Claude Code plugin schema validation, and end-to-end installation testing on Ubuntu with Node.js 24. It guards against broken links, schema drift, unparseable plugins, or command divergence.

## Phase — required
none

## Inputs — required
Git push and pull request triggers (.github/workflows/test-plugin-install.yml:4,5), Node.js runtime environment (.github/workflows/test-plugin-install.yml:20), and repository scripts.

## Outputs — required
CI job statuses and reports across four workflow jobs: "validate-skills" — .github/workflows/test-plugin-install.yml:9, "validate-commands" — .github/workflows/test-plugin-install.yml:43, "validate" — .github/workflows/test-plugin-install.yml:66, and "test-install" — .github/workflows/test-plugin-install.yml:79.

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
- `validate-commands` — .github/workflows/test-plugin-install.yml:43 — defined here
- `validate` — .github/workflows/test-plugin-install.yml:66 — defined here
- `test-install` — .github/workflows/test-plugin-install.yml:79 — defined here
- `claude plugin validate` — .github/workflows/test-plugin-install.yml:77 — used here
- `claude plugin install` — .github/workflows/test-plugin-install.yml:99 — used here

## Structure
- Workflow triggers (push, pull_request, workflow_dispatch) — .github/workflows/test-plugin-install.yml:3-6
- Job: validate-skills — .github/workflows/test-plugin-install.yml:9-42
- Job: validate-commands — .github/workflows/test-plugin-install.yml:43-65
- Job: validate (plugin structure) — .github/workflows/test-plugin-install.yml:66-78
- Job: test-install (live install verification) — .github/workflows/test-plugin-install.yml:79-100

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
The workflow installs "@anthropic-ai/claude-code" — .github/workflows/test-plugin-install.yml:74 and performs live plugin marketplace registration and installation verification in CI.

## Context cost
2703 bytes, ~650 tokens. Invokes 11 distinct validation scripts under scripts/.
