---
package: rjm
name: Chain of Responsibility
slug: chain-of-responsibility
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

# Chain of Responsibility

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
A request or event and a sequence of handler objects capable of processing it.

## Produces
A pipeline of loosely coupled handlers that pass requests along until handled or terminated.

## When applied
When multiple objects may handle a request and the specific handler is determined dynamically at runtime.

## Sub-concepts
none

## Part of
gof-wisdom

## Implementation status
defects: missing-path, internal-contradiction, cross-file-contradiction

## Design notes
Chain of Responsibility decouples request senders from receivers by passing commands through a linked sequence of handlers in rjm. It allows validators, interceptors, and filters to operate modularly without monolithic branching logic.
