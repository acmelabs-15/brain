---
package: addy
name: Floor
slug: floor
kind: gate
package_phase: addy:Define
implementation_in_scope: true
memo_inputs:
  - {path: commands/constraints.toml, sha256: bcc519db853a0ebdf0b07f378e2bc87cb112508d28e41f0d39dd1b17aa68def4}
  - {path: skills/constraint-driven-development/SKILL.md, sha256: 19d0aba70ced988c67739d5edd2a9b124a0783788c2baa70a8cc64cdd90612e5}
  - {path: skills/constraint-driven-development/references/floor-guard.md, sha256: dba15dad8f5a5cbae464ec8457e6dd014a7bcb3ad13a360a6908d54991a5415e}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# Floor

## Definition — verbatim
> "The **floor** does not: it is a diff-scoped check for the five moves in Step 6, and without a shipped reference every agent invents its own, so two runs (or a Python repo and a Go one) produce two different guards." — skills/constraint-driven-development/references/floor-guard.md:3

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| commands/constraints.toml | 18 | defines | Specifies writing a Floor section in CONSTRAINTS.md at the repo root with non-negotiable baselines. |
| skills/constraint-driven-development/references/floor-guard.md | 3 | applies | Defines the contract and diff-scoped enforcement of the floor against five evasive agent moves. |
| skills/constraint-driven-development/SKILL.md | 38 | defines | Mandates applying the Floor in non-interactive contexts when interactive constraint interviews cannot run. |

## Consumes
Merge base diff against working tree, including tracked and untracked files.

## Produces
Pass or fail verification gate blocking any change that weakens constraints, skips tests, or silences checks.

## When applied
Always enforced across all tasks and CI without requiring setup or external tooling.

## Sub-concepts
floor-guard, silenced-checker, unfinished-work, test-made-easier, new-exception, threshold-lowered

## Part of
constraint-driven-development, CONSTRAINTS.md

## Implementation status
defects: doc-drift

## Design notes
The Floor establishes a non-negotiable quality baseline across the entire repository that requires zero configuration. It explicitly targets the five moves AI agents use to fake passing results (such as suppressing linter errors, leaving stub implementations, skipping existing tests, or leaking secrets), ensuring that quality standards cannot be eroded during development.
