---
package: matt
name: scratch pad
slug: scratch-pad
kind: pattern
package_phase: matt:domain-modeling
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: external/domain-modeling.md, sha256: 18546db105cf8763aaccf28c655624c963f84ed3638ce7a1e1e65277c9b758d8}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# scratch pad

## Definition — verbatim
(used, not defined)

> "Implementation details, a <a class=\"decoration-primary/40 underline-offset-4 hover:decoration-primary\" data-state=\"closed\" href=\"/ai-coding-dictionary/spec\">spec</a>, a scratch pad, general programming concepts" — external/domain-modeling.md:40

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| external/domain-modeling.md | 40 | used here | Prohibited anti-pattern for CONTEXT.md, forbidding the glossary from being misused as an informal scratch pad. |

## Consumes
none

## Produces
none

## When applied
During domain modeling when recording canonical vocabulary, as an explicit anti-pattern constraint.

## Sub-concepts
none

## Part of
domain-modeling

## Implementation status
clean

## Design notes
A scratch pad represents an informal, unstructured dumping ground for temporary notes, thoughts, or implementation details. Matt's domain modeling explicitly prohibits turning CONTEXT.md into a scratch pad, requiring it to remain strictly a curated glossary of canonical domain terms.
