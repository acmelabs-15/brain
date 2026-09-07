---
package: rjm
name: Observable checkpoints
slug: observable-checkpoints
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ASSESSMENT-session-qa-validation-options.md, sha256: aa0addafd86d94a96103609af0a4d8879cbe3b4ef76eb51d8d89b36ae6d138c4}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Observable checkpoints

## Definition — verbatim
> "Observable checkpoints that produce verifiable evidence" — .agents/architecture/ASSESSMENT-session-qa-validation-options.md:17

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ASSESSMENT-session-qa-validation-options.md | 17 | used here | Identified as a core architectural principle of the session protocol enforcement model. |

## Consumes
Execution logs, completed work artifacts, and validation command outputs.

## Produces
Verifiable evidence artifacts and deterministic pass/fail signals confirming task compliance.

## When applied
Enforced across phase boundaries and session milestones before code or artifacts can progress downstream.

## Sub-concepts
none

## Part of
quality-gates

## Implementation status
defects: orphan, missing-path

## Design notes
Observable checkpoints represent explicit protocol boundaries that require agents to produce tangible, verifiable evidence (such as test runs, structured markdown reports, or lint logs) before proceeding. In rjm, this principle ensures that task completion is independently verifiable by automated hooks and subsequent agents rather than asserted on trust.
