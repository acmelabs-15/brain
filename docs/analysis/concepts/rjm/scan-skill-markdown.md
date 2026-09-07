---
package: rjm
name: scan_skill_markdown
slug: scan-skill-markdown
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/validation/check_skill_md_portability.py, sha256: 7513c8591114243120396e4bbb8c6f089e5d3b09267fd9480bb254375660b40e}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# scan_skill_markdown

## Definition — verbatim
(used, not defined)

> "def scan_skill_markdown(" — scripts/validation/check_skill_md_portability.py:471

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_skill_md_portability.py | 471 | defined here | Traverses a skills directory to count offending upstream path references in Markdown files. |

## Consumes
none

## Produces
none

## When applied
none

## Sub-concepts
none

## Part of
none

## Implementation status
defects: doc-drift

## Design notes
`scan_skill_markdown` is a Python validation function identifier for traversing markdown files under skills directories rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
