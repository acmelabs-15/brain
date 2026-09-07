---
package: rjm
name: Demand Reality
slug: demand-reality
kind: checklist
package_phase: rjm:spec
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/specs/requirements/REQ-016-spec-step0-first-principles-gate.md, sha256: bada92fac80c619ad829da39e28a6a11b87601aa8487d5f8cfd46edbb0d7637b}
  - {path: .claude/commands/spec.md, sha256: f7da01531eeb6c779e39894ebbf99c076b122fed686f185c99b0306abf65f350}
  - {path: .claude/skills/panning-for-gold/SKILL.md, sha256: 1f40dc18c6cd6fb4bd569c0803ca82dc42d45a86b7277259f9781a32c1afe286}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Demand Reality

## Definition — verbatim
> "| **Q1 Demand Reality** | Who has explicitly requested this? Name three or more individuals, teams, or systems by name. (Question is about requesters; production signals go to Q5.) |" — .claude/commands/spec.md:24

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/specs/requirements/REQ-016-spec-step0-first-principles-gate.md | 55 | defines | Mandated as Question 1 of Step 0, requiring three or more named requesters. |
| .claude/commands/spec.md | 24 | defines | Formatted as Question 1 in the /spec command forcing questions table. |
| .claude/skills/panning-for-gold/SKILL.md | 57 | defines | Adapted as Phase 0 front-gate question checking whether anyone is waiting on transcript insights. |

## Consumes
Proposer's statement of requester demand.

## Produces
List of verified requesters or gate halt on aspirational demand.

## When applied
Asked as Question 1 in Step 0 First Principles Gate and Phase 0 of panning-for-gold.

## Sub-concepts
aspirational

## Part of
step-0-first-principles-gate

## Implementation status
defects: doc-drift, missing-path

## Design notes
The first forcing question in the Step 0 gate requiring proof of explicit demand by naming at least three concrete people, teams, or systems requesting the feature to prevent speculative development.
