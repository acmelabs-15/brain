---
package: rjm
name: Bridge
slug: bridge
kind: pattern
package_phase: rjm:build
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/agents/implementer.md, sha256: 053d58a6aa0561ea927aa8383c9bab695e477c89c1210f1d053b627ec8a382a3}
  - {path: .claude/skills/cva-analysis/SKILL.md, sha256: 43e45215d0c6aa5ae0d384806b42a6bbe2610a1cb5c2b73b2a840b6c44ea85a9}
  - {path: .claude/skills/cva-analysis/references/SKILL_SPEC.md, sha256: bbd5bfc3a226248265e589c01e3fd36d3855ad83010b7eeeee3e2f2576bb8b4a}
  - {path: .claude/skills/cva-analysis/references/coplien-multi-paradigm-design.md, sha256: 4a86a3ee91148a5880b2869964e16797165c46953558c23a4d197f96bd467903}
  - {path: .claude/skills/cva-analysis/references/gof-pattern-selection.md, sha256: 34cc2ef5cd7eac203c23dca08b88810c37bf3dad586cbc5fddb859ea7ff50fb8}
  - {path: .claude/skills/cva-analysis/references/multidimensional-cva.md, sha256: c39379f31807b748e77ce3e4b0b869d5fe7cf13c886b5609740ac6770f8714a9}
  - {path: .claude/skills/golden-principles/references/design-solid-principles.md, sha256: 5aa244c1fbe421aafa6b7abc0e8161e548ed359cc09d88985371d294cbfb9144}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Bridge

## Definition — verbatim
> "| Two independent variation axes | **Bridge** | Decouples abstraction from implementation. Each axis varies independently. |" — .claude/skills/cva-analysis/references/gof-pattern-selection.md:18

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/implementer.md | 173 | used here | Listed under Level 4 Patterns in the Software Hierarchy of Needs. |
| .claude/skills/cva-analysis/references/coplien-multi-paradigm-design.md | 31 | used here | Coplien multi-paradigm design reference mapping correlated variation to Bridge. |
| .claude/skills/cva-analysis/references/gof-pattern-selection.md | 18 | used here | Pattern selection guide recommending Bridge for two independent variation axes. |
| .claude/skills/cva-analysis/references/multidimensional-cva.md | 32 | used here | CVA guide mapping correlated variability axes to the Bridge pattern. |
| .claude/skills/cva-analysis/references/SKILL_SPEC.md | 311 | used here | Skill specification option recommending Bridge when variability axes are correlated. |
| .claude/skills/cva-analysis/SKILL.md | 194 | used here | CVA workflow rule prescribing Bridge when one abstraction drives another. |
| .claude/skills/golden-principles/references/design-solid-principles.md | 27 | used here | Recommending Bridge to support Open-Closed Principle without modifying base code. |

## Consumes
Domain abstractions that exhibit two or more independent or correlated axes of variability.

## Produces
Decoupled abstraction and implementation class hierarchies connected via delegation.

## When applied
Selected during Commonality Variability Analysis when domain elements vary along multiple independent dimensions.

## Sub-concepts
none

## Part of
software-hierarchy-of-needs

## Implementation status
defects: missing-path, internal-contradiction, cross-file-contradiction

## Design notes
The Bridge pattern decouples an abstraction from its implementation so that both can vary independently. In rjm's Commonality Variability Analysis (CVA), Bridge is prescribed when a system contains correlated or independent variation axes, avoiding an unmanageable combinatorial explosion of subclasses.
