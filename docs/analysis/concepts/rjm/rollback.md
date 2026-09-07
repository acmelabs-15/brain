---
package: rjm
name: rollback
slug: rollback
kind: pattern
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-039-agent-model-cost-optimization.md, sha256: 8c22565f67ff3b903c9bd5e455b5c11eb7d858702eff435639b0ce127ebccf1f}
  - {path: .agents/devops/arm-runner-migration-analysis.md, sha256: c627ff100a42c17095b24e52adc39572afcf3cb52527d55a5114ab0cdba43530}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# rollback

## Definition — verbatim
(used, not defined)
> "**Rollback**: Revert to `ubuntu-latest` if workflow fails" — .agents/devops/arm-runner-migration-analysis.md:127

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-039-agent-model-cost-optimization.md | 33 | used here | References the per-agent reversion procedures planned for downgraded models |
| .agents/devops/arm-runner-migration-analysis.md | 127 | used here | Specifies fallback reversion to standard GitHub-hosted runners if ARM runner workflow execution fails |

## Consumes
Identified regression, test failure, or quality degradation in newly migrated workflows or agent assignments.

## Produces
Restored previous working state across configuration or infrastructure definitions.

## When applied
Triggered when validation criteria fail following an architectural change or migration.

## Sub-concepts
none

## Part of
none

## Implementation status
defects: doc-drift, missing-path (ADR-039 rollback procedures were never executed; arm-runner-migration analysis cited misallocated ADR-007)

## Design notes
Rollback is a core operational safety pattern providing explicit instructions and fallback paths to revert changes whenever new migrations or configurations fail verification gates.
