---
package: rjm
name: UX-Justified Defaults
slug: ux-justified-defaults
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/prompt-engineer/references/prompt-engineering-single-turn.md, sha256: 18d14cb05a5fae5714355776fc4016fe1af5af0709f06bc8b4745e30b2771db9}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# UX-Justified Defaults

## Definition — verbatim
> "When establishing default behaviors, explain the _user experience rationale_, not just the technical rationale." — .claude/skills/prompt-engineer/references/prompt-engineering-single-turn.md:1397

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/prompt-engineer/references/prompt-engineering-single-turn.md | 1395 | defined here | Defined as a prompt pattern explaining the user experience rationale behind default choices to steer behavior toward user satisfaction. |

## Consumes
Alternative tool options, system defaults, and UX impact assessments.

## Produces
Justified default selections aligned with user satisfaction rather than naive technical efficiency.

## When applied
> "This shifts the model's optimization target from "technically correct" to "user-optimal."" — .claude/skills/prompt-engineer/references/prompt-engineering-single-turn.md:1397

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
UX-Justified Defaults articulates the end-user experience rationale for choosing one valid action over another. This ensures that the agent optimizes for overall user satisfaction (such as avoiding repeated frustrating error states) rather than merely minimizing technical prompts (such as avoiding permission dialogs).
