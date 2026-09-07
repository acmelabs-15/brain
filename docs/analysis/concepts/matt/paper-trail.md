---
package: matt
name: paper trail
slug: paper-trail
kind: artifact
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

# paper trail

## Definition — verbatim
(used, not defined)

> "The paper trail" — external/grill-with-docs.md:35

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| external/grill-with-docs.md | 35 | used here | Heading introducing the tangible outputs (CONTEXT.md and ADRs) created by grilling with docs. |

## Consumes
Settled domain terms and qualifying architectural trade-offs from an interview.

## Produces
Persistent files on disk (CONTEXT.md and numbered ADR files under docs/adr/).

## When applied
Whenever an interview session resolves terms or formal architectural decisions that should survive beyond conversation context.

## Sub-concepts
none

## Part of
grill-with-docs

## Implementation status
defects: orphan, doc-drift

## Design notes
The paper trail represents the durable, repository-committed residue of an architectural conversation. By recording settled terms in CONTEXT.md and hard-to-reverse choices in ADRs, it ensures that subsequent sessions and other agents inherit agreed constraints without paying to re-derive them from scratch.
