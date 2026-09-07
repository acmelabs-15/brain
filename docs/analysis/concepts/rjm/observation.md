---
package: rjm
name: Observation
slug: observation
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

# Observation

## Definition — verbatim
> "| **Q5 Observation** | What direct production signal proves the gap exists? Cite a metric, log entry, error count, ticket, retro line, or trend. (Question is about signals; requesters go to Q1.) |" — .claude/commands/spec.md:28

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/specs/requirements/REQ-016-spec-step0-first-principles-gate.md | 55 | defines | Mandated as Question 5 of Step 0, requiring empirical production evidence. |
| .claude/commands/spec.md | 28 | defines | Formatted as Question 5 in the /spec command forcing questions table. |
| .claude/skills/panning-for-gold/SKILL.md | 61 | defines | Adapted as Question 5 in panning-for-gold front-gate checking if transcript was re-read recently. |

## Consumes
Production metrics, logs, error reports, or tickets.

## Produces
Grounded production evidence citation proving the problem exists.

## When applied
Asked as Question 5 in Step 0 First Principles Gate.

## Sub-concepts
speculative

## Part of
step-0-first-principles-gate

## Implementation status
defects: doc-drift, missing-path

## Design notes
The fifth forcing question in Step 0 requiring concrete production signals (logs, metrics, tickets) rather than speculative predictions to substantiate the problem before specification.
