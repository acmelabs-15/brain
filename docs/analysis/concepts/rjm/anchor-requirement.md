---
package: rjm
name: Anchor requirement
slug: anchor-requirement
kind: technique
package_phase: rjm:cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/planner/resources/plan-format.md, sha256: af8bd8d515dc5c98ef1ba14a6853d58f4f1f3ba81dc923de3689c1eaa296fe43}
  - {path: .claude/skills/planner/scripts/planner.py, sha256: 7c8c5cbbaace2e7111150238c7aac48963f1395180196f85ca965bb7ede4dfaf}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Anchor requirement

## Definition — verbatim
> "**Anchor requirement**: If mitigation claims existing code behavior (\"no change needed\", \"already handles X\"), cite the file:line + brief excerpt that proves the claim. Skip anchors for hypothetical risks or external unknowns." — .claude/skills/planner/resources/plan-format.md:59

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/planner/resources/plan-format.md | 59 | defined here | Primary definition of `Anchor requirement` within plan-format.md. |
| .claude/skills/planner/scripts/planner.py | 278 | defined here | Primary definition of `Anchor requirement` within planner.py. |

## Consumes
Developer inputs, configuration parameters, and codebase artifacts.

## Produces
Standardized system behaviors, verified outputs, and structured lifecycle artifacts.

## When applied
Invoked across development, analysis, and synthesis phases.

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
An operational technique or artifact (Anchor requirement) utilized within the rjm ecosystem to ensure consistency and systematic execution.
