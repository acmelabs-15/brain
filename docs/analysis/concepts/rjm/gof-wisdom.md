---
package: rjm
name: GoF Wisdom
slug: gof-wisdom
kind: reference
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/agents/implementer.md, sha256: 053d58a6aa0561ea927aa8383c9bab695e477c89c1210f1d053b627ec8a382a3}
  - {path: .claude/skills/analyze/references/engineering-complexity-tiers.md, sha256: 05278447141bdd73073aeed6363d837300adc6fe9dd1c8c1f85c011de321f243}
  - {path: templates/agents/implementer.shared.md, sha256: e6d56f2b4a0192790499debada060e68c8924504f73b3a7142c50bb27d327ab5}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# GoF Wisdom

## Definition — verbatim
> "## GoF Wisdom (Applied)" — .claude/agents/implementer.md:282

## Also called — verbatim
> "| Design | Code Qualities, SOLID | Common Patterns, POD | CVA, GoF Wisdom | Design Principles, Services | Governance Frameworks |" — .claude/skills/analyze/references/engineering-complexity-tiers.md:79

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/implementer.md | 282 | used here | Section heading grouping applied Gang of Four design heuristics. |
| .claude/skills/analyze/references/engineering-complexity-tiers.md | 79 | defined here | Complexity tier matrix placement at Tier 3 under Design concepts. |
| templates/agents/implementer.shared.md | 290 | used here | Section heading presenting applied GoF design principles in the shared template. |

## Consumes
Object designs, class relationships, and inheritance hierarchies.

## Produces
Decoupled component architectures favoring interfaces and delegation over rigid inheritance.

## When applied
During software design and refactoring passes to evaluate whether code favors composition, encapsulates variance, and separates creation from use.

## Sub-concepts
none

## Part of
implementer

## Implementation status
defects: missing-path, internal-contradiction, cross-file-contradiction, doc-drift

## Design notes
GoF Wisdom encapsulates classic Gang of Four heuristics in rjm: designing to interfaces, favoring delegation over inheritance, encapsulating concepts that vary, and separating use from creation. It elevates pattern philosophy over rote pattern application.
