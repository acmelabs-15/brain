---
package: rjm
name: Flyweight
slug: flyweight
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/agents/implementer.md, sha256: 053d58a6aa0561ea927aa8383c9bab695e477c89c1210f1d053b627ec8a382a3}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Flyweight

## Definition — verbatim
(used, not defined)

> "Strategy, Bridge, Adapter, Facade, Proxy, Decorator, Chain of Responsibility, Singleton, Abstract Factory, Template Method, Flyweight" — .claude/agents/implementer.md:173

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/implementer.md | 173 | used here | Listed among intentional GoF design patterns in the implementer agent specification. |

## Consumes
Large numbers of fine-grained objects with shareable intrinsic state.

## Produces
Shared flyweight instances paired with external extrinsic state context.

## When applied
When a massive quantity of similar objects causes high memory overhead and state can be split into intrinsic and extrinsic.

## Sub-concepts
none

## Part of
gof-wisdom

## Implementation status
defects: missing-path, internal-contradiction, cross-file-contradiction

## Design notes
Flyweight minimizes memory consumption by sharing common intrinsic state across large numbers of fine-grained objects in rjm. It represents a specialized structural optimization pattern to be used intentionally when profiling confirms excessive instance allocation.
