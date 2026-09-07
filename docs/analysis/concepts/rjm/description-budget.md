---
package: rjm
name: Description budget
slug: description-budget
kind: gate
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified:
memo_inputs:
  - {path: .claude/skills/ai-agents-diagnostics-toolkit/SKILL.md, sha256: e828ecf0ae117cb6cce4e44b70d490dee5da7418f2129f6801e9f6e9f9513d71}
  - {path: .claude/skills/ai-agents-diagnostics-toolkit/references/instrument-guides.md, sha256: be47542008b1aef449e2366ade2f13b336d8de6f05a426d4234572a8e97a6f7a}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Description budget

## Definition — verbatim
> "Every skill description is resident in context on every turn, before any work begins. This instrument sums them (issue #2794)." — .claude/skills/ai-agents-diagnostics-toolkit/references/instrument-guides.md:11

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/ai-agents-diagnostics-toolkit/references/instrument-guides.md | 9 | defined here | Section heading defining the description budget diagnostic instrument and its execution commands. |
| .claude/skills/ai-agents-diagnostics-toolkit/SKILL.md | 26 | used here | Instrument index row mapping description budget to the question of standing context cost. |

## Consumes
All skill description strings declared in SKILL.md frontmatter across the repository.

## Produces
Character and token consumption metrics, top-offender rankings, and pass/fail gate verdicts against token ceilings.

## When applied
Run via skill_description_budget.py to monitor standing prompt token overhead and prevent context bloat.

## Sub-concepts
description-max-length

## Part of
ai-agents-diagnostics-toolkit

## Implementation status
defects: unfailable-gate, other

## Design notes
A diagnostic instrument and gating mechanism in rjm that measures the total token cost of skill descriptions. Because every skill description is resident in the model's context window on every turn before any task begins, Description budget tracks cumulative character counts and enforces limits to prevent unmonitored standing context inflation.
