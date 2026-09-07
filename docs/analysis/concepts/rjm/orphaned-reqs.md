---
package: rjm
name: Orphaned REQs
slug: orphaned-reqs
kind: checklist
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/retrospective/references/diagnosis-and-actions.md, sha256: 54a8b65f88e7e48d47a34309d5e919d861b0e0fe1a13167a618ddece47794629}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Orphaned REQs

## Definition — verbatim
> "Requirements with no implementing design" — .claude/skills/retrospective/references/diagnosis-and-actions.md:39

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/retrospective/references/diagnosis-and-actions.md | 39 | defined here | Traceability metric defining requirements that have no implementing design, targeted at zero. |

## Consumes
Requirements artifacts lacking associated design specifications.

## Produces
Non-blocking warning count of orphaned requirements requiring design spec creation.

## When applied
Evaluated during retrospective evaluation of specification layer coherence.

## Sub-concepts
none

## Part of
traceability-metrics

## Implementation status
clean

## Design notes
Orphaned REQs detects requirements that were approved but never translated into design specifications, highlighting specification gaps before implementation begins.
