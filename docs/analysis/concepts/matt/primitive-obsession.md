---
package: matt
name: Primitive Obsession
slug: primitive-obsession
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: docs/engineering/code-review.md, sha256: 124f2e73633621d31e199b6e3ccf05df0fca692c79080f1ebf1222688e098dd0}
  - {path: external/code-review.md, sha256: 1c9c0d7d352d7c5d0f51a406007e349c392ea24427fbf2a5352934eaead4dd75}
  - {path: skills/engineering/code-review/SKILL.md, sha256: 47f4e52c21694def9c7c11cbfbf891ca35eac7a93e395797515be3c8a409ae50}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# Primitive Obsession

## Definition — verbatim
> "**Primitive Obsession**: a primitive or string standing in for a domain concept that deserves its own type. → give the concept its own small type." — skills/engineering/code-review/SKILL.md:49

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/engineering/code-review.md | 46 | used here | Listed in the baseline smell catalog from Refactoring chapter 3. |
| external/code-review.md | 44 | used here | Listed in the web documentation baseline smell inventory. |
| skills/engineering/code-review/SKILL.md | 49 | defined here | Defined with the prescription to wrap raw strings and primitives in dedicated small types. |

## Consumes
Primitive variables or string-typed identifiers representing domain entities.

## Produces
Proposal to create a small branded or nominal type representing the domain concept.

## When applied
Evaluated by Standards sub-agents inspecting typed interfaces and data modeling in diffs.

## Sub-concepts
none

## Part of
smell-baseline

## Implementation status
defects: doc-drift, other (shadowing of built-in tool and unbounded agent spawning)

## Design notes
Discourages using generic primitives (strings, numbers) for rich domain concepts. Creating small dedicated types improves type safety, eliminates validation scattering, and increases code clarity.
