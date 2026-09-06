---
package: addy
name: three-tier eval framework
slug: three-tier-eval-framework
kind: technique
package_phase: addy:Verify
implementation_in_scope: true
memo_inputs:
  - {path: docs/comparison.md, sha256: 652e4df31f4bc1e1d456db768ee15c6cc5fdd6dee754d9dfccffe5ce1eac7194}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# three-tier eval framework

## Definition — verbatim
(used, not defined)
> "Anti-rationalization tables and Red Flags in every skill; parallel review **personas** in `/ship`; reference checklists; a **three-tier eval framework** in CI" — docs/comparison.md:24

## Also called — verbatim
- `eval framework` — docs/comparison.md:11
- `The three tiers` — evals/README.md:14

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/comparison.md | 24 | used here | Listed as a distinctive mechanism of agent-skills providing automated CI checks and behavioral evaluation. |

## Consumes
Skill definitions (`SKILL.md`), eval case configurations (`evals/cases/*.json`), and workspace fixtures (`evals/fixtures/`).

## Produces
Tier 1 structural validation verdicts, Tier 2 trigger ranking and collision metrics, and Tier 3 behavioral grading reports (`grading.json`).

## When applied
Applied during continuous integration (Tier 1 and Tier 2) and during local pre-release testing (Tier 3) to prevent skill regression and description collision.

## Sub-concepts
- `tier-1`
- `tier-2`
- `tier-3`
- `evals`

## Part of
none

## Implementation status
clean

## Design notes
The three-tier eval framework establishes a multi-layered verification strategy for the agent-skills catalog. By separating fast, zero-token structural checks (Tier 1) and deterministic TF-IDF routing validation (Tier 2) from token-intensive behavioral grading (Tier 3), it allows the repository to enforce skill quality and prevent routing drift in CI without incurring model inference costs.
