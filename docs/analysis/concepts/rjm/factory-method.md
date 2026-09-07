---
package: rjm
name: Factory Method
slug: factory-method
kind: pattern
package_phase: rjm:spec
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/cva-analysis/references/coplien-multi-paradigm-design.md, sha256: 4a86a3ee91148a5880b2869964e16797165c46953558c23a4d197f96bd467903}
  - {path: .claude/skills/cva-analysis/references/gof-pattern-selection.md, sha256: 34cc2ef5cd7eac203c23dca08b88810c37bf3dad586cbc5fddb859ea7ff50fb8}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Factory Method

## Definition — verbatim
(used, not defined)

> "| Object creation | Factory Method | When subclasses decide which class to instantiate. |" — .claude/skills/cva-analysis/references/coplien-multi-paradigm-design.md:56

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/cva-analysis/references/coplien-multi-paradigm-design.md | 56 | used here | Mapped to object creation where subclasses decide which class to instantiate. |
| .claude/skills/cva-analysis/references/gof-pattern-selection.md | 21 | used here | Decision table recommendation when object creation varies by context. |

## Consumes
Object creation variations where creation context dictates which subclass to instantiate.

## Produces
Method interfaces deferred to subclasses or specialized creators for instantiation.

## When applied
Applied when object creation must vary by context and subclasses decide concrete instances.

## Sub-concepts
none

## Part of
factory

## Implementation status
defects: missing-path

## Design notes
Factory Method in CVA pattern mapping handles localized creation variations where subclasses or context-specific creators decide which implementation to instantiate, decoupling client logic from concrete class bindings.
