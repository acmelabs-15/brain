---
package: rjm
name: Singleton
slug: singleton
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/agents/implementer.md, sha256: 053d58a6aa0561ea927aa8383c9bab695e477c89c1210f1d053b627ec8a382a3}
  - {path: .claude/skills/cva-analysis/references/matrix-building-examples.md, sha256: b35b45be548e503e2ead370599be57167c7ff1d6100a3eef5378be3977052b69}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Singleton

## Definition — verbatim
(used, not defined)

> "Strategy, Bridge, Adapter, Facade, Proxy, Decorator, Chain of Responsibility, Singleton, Abstract Factory, Template Method, Flyweight" — .claude/agents/implementer.md:173

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/implementer.md | 173 | used here | Listed among intentional GoF design patterns in the implementer agent specification. |
| .claude/skills/cva-analysis/references/matrix-building-examples.md | 201 | used here | Table entry contrasting Transient, Scoped, and Singleton lifecycle lifetime scopes. |

## Consumes
A class requiring a single shared instance throughout application lifetime.

## Produces
A globally accessible single instance with controlled lifecycle management.

## When applied
When exactly one instance of a class must coordinate actions across the system (e.g. caches, shared registries).

## Sub-concepts
none

## Part of
gof-wisdom

## Implementation status
defects: missing-path, internal-contradiction, cross-file-contradiction

## Design notes
Singleton restricts object instantiation to a single shared instance in rjm. While cataloged as a standard GoF pattern, rjm emphasizes intentional use to avoid hidden global state, preferring dependency injection and explicit lifecycle scoping.
