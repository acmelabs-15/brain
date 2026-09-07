---
package: rjm
name: Taste
slug: taste
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/autoplan/SKILL.md, sha256: 96706c2d86a99a812a776ad92981eeeaabd975776e4eeb30b7ba6809cfe18fd9}
  - {path: scripts/validation/git_hook_policy.py, sha256: 43137253ce418f1bb7e76d0eeddf685cbc9041c84c49e2b38395d0605bdf5ada}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Taste

## Definition — verbatim
> "| Taste | Viable trade-offs, low reversal cost (naming, small refactor shape) | Decide, surface at the final gate |" — .claude/skills/autoplan/SKILL.md:169

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/autoplan/SKILL.md | 169 | defined here | Defines the decision class for viable trade-offs with low reversal cost, decided autonomously and surfaced at the gate. |
| scripts/validation/git_hook_policy.py | 8402 | defined here | Registers the taste advisory check subcommand in the validation git hook policy dispatch table. |

## Consumes
Low-reversal-cost subjective trade-offs (naming conventions, local code refactoring shape).

## Produces
Autonomous decision paired with a one-line rationale surfaced at the final gate; validation hook advisory results.

## When applied
When evaluating stylistic or structural trade-offs that are easily reversible, or running pre-commit taste hooks.

## Sub-concepts
none

## Part of
phase-3-execute-with-defaults

## Implementation status
clean

## Design notes
Taste is the intermediate decision tier in rjm. It encompasses subjective implementation choices—such as variable naming, code layout, and localized refactoring shapes—that present viable trade-offs but carry negligible reversal cost. Agents decide these autonomously rather than pausing execution, but must record each decision with a one-line rationale in the Phase 4 final gate. In validation hooks, taste also functions as an advisory pre-commit check verifying codebase style and convention consistency.
