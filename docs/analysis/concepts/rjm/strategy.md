---
package: rjm
name: Strategy
slug: strategy
kind: pattern
package_phase: rjm:Build
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/specs/design/DESIGN-004-agent-eval-harness-spike.md, sha256: c78ffe7b595e3503e943096d96075d95ee31b4e6051ae84f07721549cf829b38}
  - {path: .claude/agents/implementer.md, sha256: 053d58a6aa0561ea927aa8383c9bab695e477c89c1210f1d053b627ec8a382a3}
  - {path: .claude/skills/cva-analysis/references/SKILL_SPEC.md, sha256: bbd5bfc3a226248265e589c01e3fd36d3855ad83010b7eeeee3e2f2576bb8b4a}
  - {path: .claude/skills/cva-analysis/references/coplien-multi-paradigm-design.md, sha256: 4a86a3ee91148a5880b2869964e16797165c46953558c23a4d197f96bd467903}
  - {path: .claude/skills/cva-analysis/references/gof-pattern-selection.md, sha256: 34cc2ef5cd7eac203c23dca08b88810c37bf3dad586cbc5fddb859ea7ff50fb8}
  - {path: .claude/skills/cva-analysis/references/matrix-building-examples.md, sha256: b35b45be548e503e2ead370599be57167c7ff1d6100a3eef5378be3977052b69}
  - {path: .claude/skills/cva-analysis/references/multidimensional-cva.md, sha256: c39379f31807b748e77ce3e4b0b869d5fe7cf13c886b5609740ac6770f8714a9}
  - {path: .claude/skills/cva-analysis/references/pattern-mapping-guide.md, sha256: cbc82064f5e347105b11ee8eed31b6f2e1898088c0b52f8723177d2101c339ad}
  - {path: .claude/skills/golden-principles/references/design-solid-principles.md, sha256: 5aa244c1fbe421aafa6b7abc0e8161e548ed359cc09d88985371d294cbfb9144}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Strategy

## Definition — verbatim
> "Encapsulates a family of algorithms. Each row cell becomes a concrete strategy." — .claude/skills/cva-analysis/references/gof-pattern-selection.md:16

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/specs/design/DESIGN-004-agent-eval-harness-spike.md | 100 | used here | Applied to decouple polymorphic dispatch over AssertionKind in ScoringEngine. |
| .claude/agents/implementer.md | 173 | used here | Listed under Level 4 (Patterns) of the implementer's design knowledge hierarchy. |
| .claude/skills/cva-analysis/references/coplien-multi-paradigm-design.md | 30 | used here | Positioned in the CVA-to-pattern pipeline as the pattern emerging from concrete implementation variabilities. |
| .claude/skills/cva-analysis/references/gof-pattern-selection.md | 16 | used here | Prescribed in the decision table for CVA matrix rows with two or more varying implementations. |
| .claude/skills/cva-analysis/references/matrix-building-examples.md | 126 | used here | Evaluated and rejected as an alternative to Abstract Factory when operations share payment method context. |
| .claude/skills/cva-analysis/references/multidimensional-cva.md | 31 | used here | Recommended as two separate Strategy hierarchies when matrix relationships feature independent variation axes. |
| .claude/skills/cva-analysis/references/pattern-mapping-guide.md | 33 | used here | Identified as the pattern to vary algorithms for the same operation across columns. |
| .claude/skills/cva-analysis/references/SKILL_SPEC.md | 70 | used here | Cited as foundational design pattern knowledge assumed of software engineers using CVA. |
| .claude/skills/golden-principles/references/design-solid-principles.md | 27 | used here | Recommended under Open-Closed Principle (OCP) to encapsulate what varies without modifying existing classes. |

## Consumes
Commonality-Variability Analysis (CVA) matrix rows identifying operations that have multiple differing implementations across use cases.

## Produces
An abstract strategy interface and distinct concrete strategy implementations adhering to the Open-Closed Principle.

## When applied
Applied when a family of algorithms or business rules varies independently from the clients that execute them, or when CVA reveals a row with multiple varying implementations.

## Sub-concepts
regexscorer, verdictscorer

## Part of
cva

## Implementation status
clean

## Design notes
In rjm's design architecture, `Strategy` is the primary behavioral pattern derived from Commonality-Variability Analysis (CVA). When analyzing requirements, rows in a CVA matrix represent shared operations whose varying implementations across columns naturally map to concrete strategies. Encapsulating algorithmic variations behind uniform interfaces satisfies the Open-Closed Principle and prevents fragile conditional dispatch.
