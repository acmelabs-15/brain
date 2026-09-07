---
package: rjm
name: Free Lunch Coupon
slug: free-lunch-coupon
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/adr-generator/SKILL.md, sha256: 24f61b48fb967e2617d4a41e1d0e5c34f1895f3b9b69764f5b778692c18b34bb}
  - {path: .claude/skills/adr-generator/references/ad-quality-frameworks.md, sha256: 45f86306ae19ffd5bfea272c9f4db21a6effca28b85e4a9fa4d096b26f8d7d8e}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Free Lunch Coupon

## Definition — verbatim
> "No consequences documented, or only harmless ones" — .claude/skills/adr-generator/references/ad-quality-frameworks.md:107

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/adr-generator/references/ad-quality-frameworks.md | 107 | defines | Tabulated under Subjectivity anti-patterns as failing to document consequences or only citing harmless, trivial ones. |
| .claude/skills/adr-generator/SKILL.md | 204 | applies | Cited in common anti-patterns table as dishonest trade-off analysis requiring the inclusion of at least one negative consequence. |

## Consumes
Consequences and risks sections of an architectural decision record.

## Produces
Review rejection finding compelling the author to document genuine negative consequences and operational trade-offs.

## When applied
Checked during ADR authoring validation and review gates to ensure decision consequences are not trivialized.

## Sub-concepts
none

## Part of
adr-creation-anti-patterns

## Implementation status
clean

## Design notes
Free Lunch Coupon describes an authoring flaw where negative consequences are either completely ignored or minimized into trivial inconveniences (such as 'developers must install a package'). In rjm, this pattern is treated as dishonest trade-off analysis because every architectural commitment entails real operational, cognitive, or financial costs; at least one meaningful negative consequence must be documented.
