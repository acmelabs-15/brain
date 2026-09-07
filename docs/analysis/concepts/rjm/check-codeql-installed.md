---
package: rjm
name: check_codeql_installed
slug: check-codeql-installed
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .codeql/scripts/install_codeql.py, sha256: 9a0a3b59f671c9f1ae78245806b03e827f679f49145347dc81d37ef1772f16f0}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# check_codeql_installed

## Definition — verbatim
(used, not defined)

> "def check_codeql_installed(install_path: str) -> bool:" — .codeql/scripts/install_codeql.py:77

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .codeql/scripts/install_codeql.py | 77 | defined here | Function verifying whether CodeQL CLI executable exists and runs codeql version. |

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
defects: script-bug

## Design notes
check_codeql_installed is a Python utility function identifier in install_codeql.py verifying existing binary installations rather than an SDLC lifecycle concept, classified as kind: name-only per D-023.
