---
package: rjm
name: security-extended
slug: security-extended
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: docs/codeql-architecture.md, sha256: ff63b856aa506fee02c6d7651e4f059622e7a415a714b9e05b49d4fd081c8b93}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# security-extended

## Definition — verbatim
(used, not defined)

> "4. Use security-extended query coverage with medium-or-higher filtering." — docs/codeql-architecture.md:100

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/codeql-architecture.md | 100 | used here | Decision item specifying the standard CodeQL query suite used for security scanning. |

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
defects: script-bug, doc-drift, missing-path

## Design notes
`security-extended` is an external GitHub CodeQL query suite identifier specifying broad security query coverage rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
