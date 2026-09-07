---
package: rjm
name: invoke_codeql_scan.py
slug: invoke-codeql-scan-py
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: docs/codeql-integration.md, sha256: 4db4d2e49e3e741bdb61f24d96a927e180249217611b99e31815ce8838560ac8}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# invoke_codeql_scan.py

## Definition — verbatim
(used, not defined)

> "- **Tier 2 (Local, on-demand)**: Developers and agents run the `codeql-scan` skill or `.codeql/scripts/invoke_codeql_scan.py` directly." — docs/codeql-integration.md:14

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/codeql-integration.md | 14 | used here | Cited as the local script entry point for running CodeQL security scans on demand. |

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
defects: missing-path

## Design notes
`invoke_codeql_scan.py` is a repository script file name providing the local CLI wrapper for CodeQL database generation and query execution rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
