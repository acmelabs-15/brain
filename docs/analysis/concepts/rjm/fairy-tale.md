---
package: rjm
name: Fairy Tale
slug: fairy-tale
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

# Fairy Tale

## Definition — verbatim
> "Shallow justification: only pros, no cons" — .claude/skills/adr-generator/references/ad-quality-frameworks.md:105

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/adr-generator/references/ad-quality-frameworks.md | 105 | defines | Tabulated under Subjectivity anti-patterns describing shallow justifications that document only positive outcomes while omitting drawbacks. |

## Consumes
Decision justification and trade-off sections of an ADR draft.

## Produces
Defect flag identifying one-sided, unrealistic technical justifications requiring balanced trade-off analysis.

## When applied
Checked during ADR review whenever a proposed solution is depicted as having exclusively positive consequences.

## Sub-concepts
none

## Part of
adr-creation-anti-patterns

## Implementation status
clean

## Design notes
Fairy Tale designates an authoring anti-pattern where a proposal is presented as having unmitigated benefits with no downsides or risks. Because all real-world architectural decisions trade off competing quality attributes (such as simplicity versus flexibility, or performance versus cost), an ADR lacking negative consequences is recognized as superficial and rejected for lack of balanced analysis.
