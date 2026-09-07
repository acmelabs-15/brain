---
package: rjm
name: Narrowest Wedge
slug: narrowest-wedge
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

# Narrowest Wedge

## Definition — verbatim
> "| **Q4 Narrowest Wedge** | What is the smallest possible deliverable that unblocks Q3, measured in hours of implementation? |" — .claude/commands/spec.md:27

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/specs/requirements/REQ-016-spec-step0-first-principles-gate.md | 55 | defines | Mandated as Question 4 of Step 0, requiring minimal unblocking deliverable in hours. |
| .claude/commands/spec.md | 27 | defines | Formatted as Question 4 in the /spec command forcing questions table. |
| .claude/skills/panning-for-gold/SKILL.md | 60 | defines | Adapted as Question 4 in panning-for-gold front-gate checking for 10-minute manual extraction. |

## Consumes
Blocked state from Q3, scope estimate.

## Produces
Scope definition for minimal unblocking deliverable and hours estimate.

## When applied
Asked as Question 4 in Step 0 First Principles Gate.

## Sub-concepts
none

## Part of
step-0-first-principles-gate

## Implementation status
defects: doc-drift, missing-path

## Design notes
The fourth forcing question in Step 0 requiring authors to define the absolute smallest implementation deliverable (in hours) that unblocks the entity identified in Q3, containing scope inflation.
