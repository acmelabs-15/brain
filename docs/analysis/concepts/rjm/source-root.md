---
package: rjm
name: source-root
slug: source-root
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .codeql/scripts/invoke_codeql_scan.py, sha256: 30320c0a737943365bc714ce2971cc19c58606e46fcd3bc1ac904abe4e693274}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# source-root

## Definition — verbatim
(used, not defined)

> "f\"--source-root={source_root}\"," — .codeql/scripts/invoke_codeql_scan.py:237

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .codeql/scripts/invoke_codeql_scan.py | 237 | used here | CodeQL database creation parameter specifying repository source root directory. |

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
defects: internal-contradiction, missing-path

## Design notes
source-root is a CodeQL CLI command-line parameter flag specifying the root directory of source code for database creation rather than an SDLC lifecycle concept, classified as kind: name-only per D-023.
