---
package: matt
name: multi-session
slug: multi-session
kind: pattern
package_phase: matt:The Main Flow
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: external/to-spec.md, sha256: 41628409b39e15d59b669342fc26a9416c89af7eb2295fed324138e7e3dba8fd}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# multi-session

## Definition — verbatim
(used, not defined)
> "the spec earns its step only on multi-session work." — external/to-spec.md:45

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| external/to-spec.md | 45 | used here | Explains that the formal to-spec step is justified only for multi-session initiatives spanning multiple ticket lifecycles. |

## Consumes
Complex feature initiatives that exceed the capacity of a single conversational context window.

## Produces
Durable specifications and sliced tickets designed to be executed across independent agent sessions.

## When applied
When scoping a feature change during grilling to determine whether to write a spec or proceed directly to implementation.

## Sub-concepts
none

## Part of
to-spec

## Implementation status
defects: orphan, doc-drift

## Design notes
Multi-session describes development efforts whose scope exceeds a single conversation turn and context window. In Matt's framework, multi-session work justifies the overhead of formal specifications and ticket slicing, ensuring that as individual tickets and sessions are closed, the foundational reasoning remains durable.
