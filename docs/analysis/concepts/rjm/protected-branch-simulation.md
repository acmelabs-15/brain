---
package: rjm
name: Protected Branch Simulation
slug: protected-branch-simulation
kind: technique
package_phase: rjm:test
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/agents/devops.md, sha256: 8dc48d7779930048a9825e98331e249ec727f2291767402e0f3b17a61ad8029f}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Protected Branch Simulation

## Definition — verbatim
> "### Protected Branch Simulation" — .claude/agents/devops.md:349

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/devops.md | 349 | defined here | Heading defining local simulation procedures to verify that scripts skip destructive operations on protected branches. |

## Consumes
Workflow scripts and environment simulation commands.

## Produces
Verified branch protection handling (`GITHUB_REF_PROTECTED=true`, `GITHUB_REF=refs/heads/main`).

## When applied
When testing workflow and release scripts locally before deploying to production.

## Sub-concepts
none

## Part of
local-ci-simulation

## Implementation status
defects: missing-path

## Design notes
A local testing technique in rjm that simulates execution against a protected branch. By mocking `$env:GITHUB_REF_PROTECTED = 'true'`, it verifies that scripts correctly detect protected branch conditions and bypass destructive operations without risking real branch state.
