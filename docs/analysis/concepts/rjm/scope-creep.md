---
package: rjm
name: Scope Creep
slug: scope-creep
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/AGENT-SYSTEM.md, sha256: c11a55e17a0f0d0eca7936fc3ba2f3a071fcedf37fcf1a462a65a77831259641}
  - {path: scripts/error_classification.py, sha256: 3484ef44fd2a97b6598992c1270e09d269abc214304607bf05653a9f763dab85}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Scope Creep

## Definition — verbatim
> "Orchestrator enforces boundaries:" — .agents/AGENT-SYSTEM.md:1696

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/AGENT-SYSTEM.md | 1694 | defines | Boundary enforcement protocol comparing current work against original scope and routing additions. |
| scripts/error_classification.py | 43 | defines | Classifies scope creep as a recognized failure pattern in the autonomous agent error taxonomy. |

## Consumes
Ongoing implementation activities, proposed code diffs, original requirement specifications, and task boundaries.

## Produces
Scope boundary enforcement decisions: rejection of unauthorized changes, or formal routing to milestone-planner for approved scope revisions.

## When applied
When an agent or task attempts to introduce functionality or modifications outside approved requirements.

## Sub-concepts
none

## Part of
none

## Implementation status
defects: orphan, exit-code-mismatch

## Design notes
A scope enforcement pattern and classified agent failure mode. The orchestrator actively monitors implementation diffs against original requirements; when unauthorized functionality is identified, it enforces boundaries by either rejecting the unapproved modifications or routing them to milestone-planner for formal scope expansion.
