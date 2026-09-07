---
package: rjm
name: Tier 5 operating-model elicitation
slug: tier-5-operating-model-elicitation
kind: technique
package_phase: rjm:spec
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/spec-generator/references/spec-prior-art-schema.md, sha256: 8202f29a8ee823367505128164055e0d25fc83557ae3a3055396c0ecab7f7978}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Tier 5 operating-model elicitation

## Definition — verbatim
> "**Tier 5 operating-model elicitation (work-operating-model)**: when the Step 0.5 ProvisionalTier is 5" — .claude/skills/spec-generator/references/spec-prior-art-schema.md:132

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/spec-generator/references/spec-prior-art-schema.md | 132 | defined here | Specifies the invocation of work-operating-model for Tier 5 specifications to elicit the 5-layer team operating model before Step 6. |

## Consumes
Tier 5 complexity assignment and access to involved cross-organizational teams.

## Produces
An "Operating Model Context" section embedded into the PRD detailing decision rights, communication patterns, intake, conflict resolution, and retrospection.

## When applied
Applied during Step 1 (or supplementally before Step 6) when a spec is classified as Tier 5 (Principal/cross-team).

## Sub-concepts
none

## Part of
step-1

## Implementation status
defects: missing-path, doc-drift

## Design notes
Forces principal-level cross-team initiatives to explicitly elicit and document team operating models and decision rights, preventing high-tier technical designs from failing due to organizational misalignment.
