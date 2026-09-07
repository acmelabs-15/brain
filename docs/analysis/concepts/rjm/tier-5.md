---
package: rjm
name: Tier 5
slug: tier-5
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/specs/requirements/REQ-016-spec-step0-first-principles-gate.md, sha256: bada92fac80c619ad829da39e28a6a11b87601aa8487d5f8cfd46edbb0d7637b}
  - {path: .claude/skills/analyze/references/engineering-complexity-tiers.md, sha256: 05278447141bdd73073aeed6363d837300adc6fe9dd1c8c1f85c011de321f243}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Tier 5

## Definition — verbatim
> "Tier 5 (Principal)" — .claude/skills/analyze/references/engineering-complexity-tiers.md:74

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/specs/requirements/REQ-016-spec-step0-first-principles-gate.md | 118 | used here | Specified in REQ-016-08 requiring Tier 5 specifications to re-validate Step 0 outputs rather than running a separate simplicity check. |
| .claude/skills/analyze/references/engineering-complexity-tiers.md | 74 | defined here | Defined in Problem Domain Cross-Reference table as the Principal tier covering governance frameworks, Lindy effect, and platform strategy. |

## Consumes
engineering-complexity-tiers

## Produces
ad-review-policy

## When applied
> "WHEN the complexity tier is Tier 5" — .agents/specs/requirements/REQ-016-spec-step0-first-principles-gate.md:118

## Sub-concepts
none

## Part of
engineering-complexity-tiers

## Implementation status
defects: doc-drift, missing-path

## Design notes
Tier 5 represents the highest engineering complexity tier in rjm (Principal level, 15+ years experience), characterized by multi-organization scope, cross-group ambiguity, governance board oversight, and multi-year technical strategy. In the specification lifecycle, Tier 5 triggers mandatory architecture decision records (ADRs) and replaces separate simplicity challenges by rigorously re-validating Step 0 first principles against emerged architectural complexity.
