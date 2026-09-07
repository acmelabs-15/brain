---
package: matt
name: seams before prose
slug: seams-before-prose
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

# seams before prose

## Definition — verbatim
> "Seams before prose" — external/to-spec.md:36

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| external/to-spec.md | 36 | defined here | Core drafting rule in to-spec that requires agreeing on test seams before drafting any feature specification text. |

## Consumes
Existing test architecture, codebase entry points, and feature requirements.

## Produces
Explicitly agreed test seam definitions recorded in the specification for downstream tdd and code-review.

## When applied
At the opening of the to-spec workflow before drafting specification prose.

## Sub-concepts
seams

## Part of
to-spec

## Implementation status
defects: orphan, doc-drift

## Design notes
"Seams before prose" is a foundational ordering discipline in Matt's to-spec skill. By locking down the precise architectural boundaries where the feature will be tested before drafting any specification narrative, it ensures that downstream tdd has an uncontroversial seam to target and code-review can flag unapproved boundary drift.
