---
package: rjm
name: CodeQL CLI
slug: codeql-cli
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .codeql/scripts/invoke_codeql_scan.py, sha256: 30320c0a737943365bc714ce2971cc19c58606e46fcd3bc1ac904abe4e693274}
  - {path: .codeql/scripts/test_codeql_config.py, sha256: 686013d8db319e839f7650cf0fa7eb5503b03c78ed917288c1ecb6db5b4b3aef}
  - {path: .codeql/scripts/test_codeql_rollout.py, sha256: df4acdd40f7657e9b5555ae23cde792405972a61810a7befabd2e5c628576f8d}
  - {path: docs/codeql-architecture.md, sha256: ff63b856aa506fee02c6d7651e4f059622e7a415a714b9e05b49d4fd081c8b93}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# CodeQL CLI

## Definition — verbatim
(used, not defined)

> "3 - External dependency error (CodeQL CLI not found, analysis failed)" — .codeql/scripts/invoke_codeql_scan.py:15

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .codeql/scripts/invoke_codeql_scan.py | 15 | used here | Documented external dependency error exit code when CodeQL CLI binary is not found. |
| .codeql/scripts/test_codeql_config.py | 14 | used here | Documented external dependency error exit code when CodeQL CLI executable is missing. |
| .codeql/scripts/test_codeql_rollout.py | 88 | used here | Verification check label asserting existence of the CodeQL CLI binary. |
| docs/codeql-architecture.md | 49 | used here | Node in component architecture flowchart representing CodeQL CLI installed by install_codeql.py. |

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
defects: always-failing-gate, doc-drift, exit-code-mismatch, internal-contradiction, missing-path, script-bug

## Design notes
CodeQL CLI is an external semantic static analysis command-line interface executable and runtime dependency rather than an SDLC lifecycle concept, classified as kind: name-only per D-023.
