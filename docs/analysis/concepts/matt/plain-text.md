---
package: matt
name: plain text
slug: plain-text
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .changeset/grilling-remove-em-dashes.md, sha256: 149094700d65fd5a4660e710603a70d65e24a3e12b755ffb54b51eaf0534303f}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# plain text

## Definition — verbatim
(used, not defined)

> "plain text" — .changeset/grilling-remove-em-dashes.md:5

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .changeset/grilling-remove-em-dashes.md | 5 | used here | Design target for skill instructions to ensure readability without formatting artifacts. |

## Consumes
Formatted skill instructions and documentation.

## Produces
Unencumbered, natural text easily understood by models without special parsing rules.

## When applied
When authoring agent instructions and markdown documentation.

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
A writing standard emphasizing unadorned, clear linguistic prose in agent instructions. Keeping skill content in clean plain text prevents fragile regex matches, avoids unexpected tokenization behaviors, and ensures cross-harness compatibility.
