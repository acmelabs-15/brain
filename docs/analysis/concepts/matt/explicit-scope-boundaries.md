---
package: matt
name: Explicit scope boundaries
slug: explicit-scope-boundaries
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: skills/engineering/triage/AGENT-BRIEF.md, sha256: 7f5f87fed3033df1b06e083c480f3e847b1fbb0647746b8a4c6a50f9f26ef44f}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Explicit scope boundaries

## Definition — verbatim
> "Explicit scope boundaries" — skills/engineering/triage/AGENT-BRIEF.md:35

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/engineering/triage/AGENT-BRIEF.md | 35 | defined here | Establishes the authoring rule requiring explicit declarations of what is out of scope to prevent agent gold-plating. |

## Consumes
Adjacent features, prospective refactors, and non-essential enhancements identified during triage.

## Produces
An explicit out-of-scope section within an agent brief comment.

## When applied
Applied when authoring agent briefs before transitioning issues or PRs to `ready-for-agent`.

## Sub-concepts
none

## Part of
triage

## Implementation status
defects: doc-drift

## Design notes
A bounding pattern in agent brief authoring that explicitly defines what an autonomous agent must NOT touch or implement. This prevents agents from over-engineering solutions, expanding refactor blast radiuses, or making unwarranted assumptions about adjacent systems.
