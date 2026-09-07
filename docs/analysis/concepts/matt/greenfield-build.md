---
package: matt
name: greenfield build
slug: greenfield-build
kind: pattern
package_phase: matt:shaping
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: external/grill-with-docs.md, sha256: 706924ca05e4ec81b47bacac031741a17ca381af5aa7c8baf8f7494669f01e4d}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# greenfield build

## Definition — verbatim
(used, not defined)

> "An effort too big to hold in one session (a greenfield build, a large feature)" — external/grill-with-docs.md:30

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| external/grill-with-docs.md | 30 | used here | Cited in the situation matrix as an effort requiring multi-session planning via /wayfinder. |

## Consumes
A new product concept or large greenfield architectural vision.

## Produces
A multi-session project plan decomposed into dependency graphs and tickets.

## When applied
When starting a brand-new project or massive feature whose decisions cannot fit in a single conversation.

## Sub-concepts
none

## Part of
wayfinder

## Implementation status
defects: orphan, doc-drift

## Design notes
In Matt's taxonomy, a greenfield build represents an architectural effort whose scope and uncertainty exceed the capacity of a single context window. The methodology routes greenfield initiatives away from single-session grilling toward /wayfinder, which creates a durable dependency map of decision tickets before implementation begins.
