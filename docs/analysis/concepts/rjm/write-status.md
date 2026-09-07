---
package: rjm
name: write_status
slug: write-status
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .codeql/scripts/install_codeql_integration.py, sha256: adbf946c456edd42fee06b3b1b9f5aa133615fc62a8ef671279817400e886012}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# write_status

## Definition — verbatim
(used, not defined)

> "def write_status(message: str, status_type: str = \"info\") -> None:" — .codeql/scripts/install_codeql_integration.py:55

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .codeql/scripts/install_codeql_integration.py | 55 | defined here | Prints status messages with formatted prefix tags to stderr during installation. |

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
defects: doc-drift (.codeql/scripts/install_codeql_integration.py:259)

## Design notes
A helper function identifier (`write_status`) in `install_codeql_integration.py` printing status messages to stderr, classified as `name-only` per D-023.
