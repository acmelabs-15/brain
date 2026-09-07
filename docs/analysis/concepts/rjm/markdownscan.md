---
package: rjm
name: MarkdownScan
slug: markdownscan
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

# MarkdownScan

## Definition — verbatim
(used, not defined)

> "class MarkdownScan(NamedTuple):" — scripts/validation/check_skill_md_portability.py:426

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_skill_md_portability.py | 426 | defined here | NamedTuple encapsulating offending file counts and total scanned file count from Markdown scanning. |

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
`MarkdownScan` is a Python NamedTuple data container identifier tracking scanned markdown counts rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
