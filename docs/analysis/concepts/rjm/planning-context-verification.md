---
package: rjm
name: planning_context_verification
slug: planning-context-verification
kind: checklist
package_phase: rjm:plan
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/planner/scripts/planner.py, sha256: 7c8c5cbbaace2e7111150238c7aac48963f1395180196f85ca965bb7ede4dfaf}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# planning_context_verification

## Definition — verbatim
> "TW and QR consume this section VERBATIM. Quality here =" — .claude/skills/planner/scripts/planner.py:39

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/planner/scripts/planner.py | 38 | defined here | Pre-write verification checklist for Decision Log, Micro-decisions, Rejected Alternatives, and Known Risks. |

## Consumes
Architectural decisions, micro-decisions, rejected alternatives, and known risk behavioral claims.

## Produces
Verified Planning Context section in the plan, ensuring downstream review agents receive unambiguous rationales and code anchors.

## When applied
Enforced during the final completion verification step of the planning phase prior to writing the plan to disk.

## Sub-concepts
micro-decisions

## Part of
planner

## Implementation status
defects: missing-path, doc-drift, internal-contradiction

## Design notes
A planning pre-write checklist ensuring that architectural choices, micro-decisions, rejected options, and risk anchors are completely documented so that review agents can inspect decisions without guessing author intent.
