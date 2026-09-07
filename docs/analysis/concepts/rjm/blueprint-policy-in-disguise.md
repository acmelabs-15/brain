---
package: rjm
name: Blueprint/Policy in Disguise
slug: blueprint-policy-in-disguise
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/adr-generator/references/ad-quality-frameworks.md, sha256: 45f86306ae19ffd5bfea272c9f4db21a6effca28b85e4a9fa4d096b26f8d7d8e}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Blueprint/Policy in Disguise

## Definition — verbatim
> "Cookbook/law style instead of decision journal" — .claude/skills/adr-generator/references/ad-quality-frameworks.md:122

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/adr-generator/references/ad-quality-frameworks.md | 122 | defines | Tabulated under Size and Content anti-patterns as writing in an authoritative cookbook or legal policy style instead of maintaining a decision journal. |

## Consumes
Document tone, prescriptive rules, and explanatory argumentation in an ADR.

## Produces
Rejection of prescriptive policy documents that misuse the ADR format without articulating decision forces and trade-offs.

## When applied
Applied when an ADR reads like an organizational mandate, static design blueprint, or style guide rather than an architectural decision.

## Sub-concepts
none

## Part of
adr-creation-anti-patterns

## Implementation status
clean

## Design notes
Blueprint/Policy in Disguise occurs when an author misuses an ADR to unilaterally decree coding standards, organizational edicts, or static blueprints without documenting the forces, alternative options, or trade-offs that led to the choice. In rjm's architecture methodology, ADRs record historical decision forks, not prescriptive policy handbooks.
