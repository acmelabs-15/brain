---
package: matt
name: connascence
slug: connascence
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: docs/engineering/codebase-design.md, sha256: 80a8c23d4729447bd8934127b03f1a38d41ff62283deaade95ca6d118307397c}
  - {path: external/codebase-design.md, sha256: 2317e07ee6633c335c21ecea689bff5613f74d0233fcec8587991eec43e043d2}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# connascence

## Definition — verbatim
(used, not defined)

> "adds Parnas's module secrets and Page-Jones's connascence as a naming layer for *what* is leaking across a seam, with a working diff attached;" — docs/engineering/codebase-design.md:76

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/engineering/codebase-design.md | 76 | used here | Cited as a proposed software coupling metric (Page-Jones) for categorizing leakage across module seams. |
| external/codebase-design.md | 58 | used here | Mentioned in external documentation as an open, unmerged PR adding coupling classification to the glossary. |

## Consumes
Module interface definitions and cross-seam dependencies.

## Produces
A classification of coupling types between software elements.

## When applied
When analyzing what forms of dependency or coupling leak across a module's seam during interface design.

## Sub-concepts
none

## Part of
codebase-design

## Implementation status
not-implemented (proposed in issue #180 with working diff but left open and unmerged to keep the glossary lean)

## Design notes
Meilir Page-Jones's metric of software coupling, proposed as an extension to `codebase-design` to characterize what leaks across module seams. It remains unmerged because the package deliberately minimizes glossary size to enforce only terms models and humans use consistently.
