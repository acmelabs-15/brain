---
package: addy
name: Place each check by cost
slug: place-each-check-by-cost
kind: pattern
package_phase: addy:Define
implementation_in_scope: true
memo_inputs:
  - {path: commands/constraints.toml, sha256: bcc519db853a0ebdf0b07f378e2bc87cb112508d28e41f0d39dd1b17aa68def4}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# Place each check by cost

## Definition — verbatim
> "5. **Place each check by cost.** Types, lint and secrets in the edit loop (seconds). Related tests and changed-line coverage at task end (under 90s). Everything else at review or in CI. Scope checks to the diff, not the whole repo." — commands/constraints.toml:22

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| commands/constraints.toml | 22 | defines | Distributes verification checks into tiered execution budgets based on run time: edit loop, task end, and review/CI. |

## Consumes
Identified repository quality checks and their measured execution runtimes.

## Produces
Tiered package scripts (`check:fast`, `check:task`, `check:full`) in package.json mapped to lifecycle checkpoints.

## When applied
During step 5 of establishing project constraints via `/constraints`.

## Sub-concepts
check-fast, check-task, check-full

## Part of
constraint-driven-development

## Implementation status
clean

## Design notes
Placing each check by cost balances rapid developer feedback with thorough quality assurance. By running near-instant checks (type-checking, linting, secrets) in the inner edit loop, keeping task-end checks under 90 seconds, and relegating long-running regression suites to review or CI, agents remain productive without bottlenecking on expensive validations.
