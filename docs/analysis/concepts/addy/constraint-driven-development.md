---
package: addy
name: constraint-driven-development
slug: constraint-driven-development
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .gemini/commands/constraints.toml, sha256: 149ae460288b1f86487bb842ea5cf3476cdb2766a3f703985d83499cf8f6c817}
  - {path: README.md, sha256: 70d0e32bfa384c6093229bab18802d475112168033e182caeb0328330a492bbc}
  - {path: evals/cases/constraint-driven-development.json, sha256: 45bb9aa099816de69a42147e0f217ffd03e8c6d97d4599a44ae40dec4d95625e}
  - {path: skills/constraint-driven-development/SKILL.md, sha256: 19d0aba70ced988c67739d5edd2a9b124a0783788c2baa70a8cc64cdd90612e5}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# constraint-driven-development

## Definition — verbatim
> "Constraint-driven development defines what \"good enough to ship\" means, before anyone argues about it in a pull request." — skills/constraint-driven-development/SKILL.md:16

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .gemini/commands/constraints.toml | 4 | used here | Invoked by the /constraints slash command. |
| evals/cases/constraint-driven-development.json | 2 | used here | Evaluation test case for the constraint-driven development skill. |
| README.md | 237 | used here | Catalog entry describing interviews, default thresholds, and guardrails against lowering standards. |
| skills/constraint-driven-development/SKILL.md | 6 | defined here | Title heading and main skill documentation. |

## Consumes
Repository code, test runners, and developer quality preferences.

## Produces
CONSTRAINTS.md, package.json scripts (check:fast/task/full), and diff guard hooks.

## When applied
At project start, when defining standards, or when agents produce unreviewed volume.

## Sub-concepts
constraints-md, floor-section, exceptions-table, check-fast, check-task, check-full, constraints-check, constraints-guard

## Part of
none

## Implementation status
clean

## Design notes
A development methodology that shifts quality enforcement from post-hoc prose guidelines to explicit, mechanically checked threshold constraints that run inside the inner development loop.
