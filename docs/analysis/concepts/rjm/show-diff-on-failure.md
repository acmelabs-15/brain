---
package: rjm
name: Show diff on failure
slug: show-diff-on-failure
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .github/workflows/validate-generated-agents.yml, sha256: bfec11e4e278d7959a9341743431c53b8f4c68ee7d453a25390ec6e58777e6ca}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Show diff on failure

## Definition — verbatim
> "- name: Show diff on failure" — .github/workflows/validate-generated-agents.yml:253

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .github/workflows/validate-generated-agents.yml | 253 | defined here | Workflow step invoking `scripts/ci/show_generated_agent_diff.py` when validation steps fail. |

## Consumes
Failure condition of preceding workflow jobs and git repository diff state.

## Produces
Diagnostic diff logs emitted to the GitHub Actions workflow console.

## When applied
`failure() && steps.should-run.outputs.skip != 'true'`

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
A diagnostic CI reporting technique that automatically prints git diffs when validation checks fail, enabling contributors and reviewers to immediately pinpoint generated file drift directly in CI build logs.
