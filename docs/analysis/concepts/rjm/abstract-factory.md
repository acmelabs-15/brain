---
package: rjm
name: Abstract Factory
slug: abstract-factory
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/agents/implementer.md, sha256: 053d58a6aa0561ea927aa8383c9bab695e477c89c1210f1d053b627ec8a382a3}
  - {path: .claude/skills/cva-analysis/references/SKILL_SPEC.md, sha256: bbd5bfc3a226248265e589c01e3fd36d3855ad83010b7eeeee3e2f2576bb8b4a}
  - {path: .claude/skills/cva-analysis/references/coplien-multi-paradigm-design.md, sha256: 4a86a3ee91148a5880b2869964e16797165c46953558c23a4d197f96bd467903}
  - {path: .claude/skills/cva-analysis/references/gof-pattern-selection.md, sha256: 34cc2ef5cd7eac203c23dca08b88810c37bf3dad586cbc5fddb859ea7ff50fb8}
  - {path: .claude/skills/cva-analysis/references/matrix-building-examples.md, sha256: b35b45be548e503e2ead370599be57167c7ff1d6100a3eef5378be3977052b69}
  - {path: .claude/skills/cva-analysis/references/multidimensional-cva.md, sha256: c39379f31807b748e77ce3e4b0b869d5fe7cf13c886b5609740ac6770f8714a9}
  - {path: .claude/skills/cva-analysis/references/pattern-mapping-guide.md, sha256: cbc82064f5e347105b11ee8eed31b6f2e1898088c0b52f8723177d2101c339ad}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Abstract Factory

## Definition — verbatim
> "Builds only valid combinations. Each column becomes a concrete factory." — .claude/skills/cva-analysis/references/gof-pattern-selection.md:17

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/implementer.md | 173 | used here | Listed among intentional GoF design patterns in the implementer agent specification. |
| .claude/skills/cva-analysis/references/coplien-multi-paradigm-design.md | 46 | used here | Cites pattern ensuring only valid combinations of co-dependent products are instantiated. |
| .claude/skills/cva-analysis/references/gof-pattern-selection.md | 17 | used here | Pattern mapping recommendation where each column with co-dependent items becomes a concrete factory. |
| .claude/skills/cva-analysis/references/matrix-building-examples.md | 5 | used here | Section title introducing payment processing matrix mapping to Abstract Factory. |
| .claude/skills/cva-analysis/references/multidimensional-cva.md | 33 | used here | Recommends Abstract Factory to constrain valid pairs in sparse combinations. |
| .claude/skills/cva-analysis/references/pattern-mapping-guide.md | 75 | used here | Pattern mapping guideline for varying implementations across product families. |
| .claude/skills/cva-analysis/references/SKILL_SPEC.md | 70 | used here | Context assumption stating user understands basic design patterns including Abstract Factory. |

## Consumes
Families of related or dependent product abstractions.

## Produces
Concrete factory instances that create compatible product families without specifying concrete classes.

## When applied
When a system must be independent of how its products are created, composed, and represented, especially across product suites.

## Sub-concepts
none

## Part of
gof-wisdom

## Implementation status
defects: missing-path, internal-contradiction, cross-file-contradiction, doc-drift

## Design notes
Abstract Factory coordinates the creation of families of related objects without binding to concrete implementations in rjm. In CVA analysis, it enforces structural validity across multi-dimensional variation matrices, guaranteeing that only compatible subsystem components are instantiated together.
