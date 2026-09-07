---
package: rjm
name: Validation
slug: validation
kind: phase
package_phase: rjm:cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/business-strategy/SKILL.md, sha256: 367a3f83f1a5a7da8258c8cfb0d0c98909a69c4c84976f869c6a17d7b19ba1db}
  - {path: .claude/skills/observability/references/otel-migration-reference.md, sha256: 9fb61670c70cb6839e200e0ca0e19771a0d1eab3ed5292345a86f8c490811bbd}
  - {path: .claude/skills/skillforge/references/script-integration-framework.md, sha256: f533a0f41ac2f818a735eb708e431d07a64afb758f20e2d3e7b8a618cd1ecda5}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Validation

## Definition — verbatim
> "Verify artifacts meet standards" — .claude/skills/skillforge/references/script-integration-framework.md:77

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/business-strategy/SKILL.md | 9 | used here | Frontmatter JTBD stage classifying demand verification and proof frameworks. |
| .claude/skills/observability/references/otel-migration-reference.md | 16 | defined here | Migration Phase 2 comparing legacy vs OTel metrics and verifying telemetry parity. |
| .claude/skills/skillforge/references/script-integration-framework.md | 77 | defined here | Script category dedicated to verifying artifacts against deterministic quality standards. |

## Consumes
Software artifacts, dual-ingestion telemetry feeds, or customer interview findings.

## Produces
Deterministic pass/fail verdict, parity confirmation, or empirical proof of market demand.

## When applied
Applied during script execution gates, observability migration phase 2, and business concept testing.

## Sub-concepts
none

## Part of
none

## Implementation status
defects: missing-path

## Design notes
Across rjm, Validation represents the formal discipline of proving conformance before proceeding. Whether validating that script outputs meet structural standards, verifying OpenTelemetry metric parity against legacy systems, or proving customer willingness-to-pay, Validation establishes falsifiable criteria that prevent premature progression.
