---
package: rjm
name: Migration Recommendation
slug: migration-recommendation
kind: name-only
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/devops/arm-runner-migration-analysis.md, sha256: c627ff100a42c17095b24e52adc39572afcf3cb52527d55a5114ab0cdba43530}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Migration Recommendation

## Definition — verbatim
(used, not defined)

> "**Migration Recommendation**: MIGRATE to ubuntu-24.04-arm" — .agents/devops/arm-runner-migration-analysis.md:69

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/devops/arm-runner-migration-analysis.md | 69 | used here | Field label stating the per-workflow migration verdict in the runner migration analysis. |

## Consumes
none

## Produces
none

## When applied
none

## Sub-concepts
none

## Part of
none

## Implementation status
defects: missing-path

## Design notes
A report field label specifying the adoption decision for individual GitHub Actions workflows, representing an analytical report metadata attribute rather than an agent lifecycle concept.
