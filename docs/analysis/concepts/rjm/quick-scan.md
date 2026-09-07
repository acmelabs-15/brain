---
package: rjm
name: Quick scan
slug: quick-scan
kind: technique
package_phase: rjm:verify
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .codeql/scripts/invoke_codeql_scan.py, sha256: 30320c0a737943365bc714ce2971cc19c58606e46fcd3bc1ac904abe4e693274}
  - {path: docs/codeql-architecture.md, sha256: ff63b856aa506fee02c6d7651e4f059622e7a415a714b9e05b49d4fd081c8b93}
  - {path: docs/codeql-integration.md, sha256: 4db4d2e49e3e741bdb61f24d96a927e180249217611b99e31815ce8838560ac8}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Quick scan

## Definition — verbatim
> "Quick scan replacement for the retired hook" — docs/codeql-architecture.md:131

## Also called — verbatim
"Quick Scan" — docs/codeql-integration.md:67
"--quick-scan" — .codeql/scripts/invoke_codeql_scan.py:74

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .codeql/scripts/invoke_codeql_scan.py | 75 | used here | Command-line option documentation describing quick scan mode with targeted query selection. |
| docs/codeql-architecture.md | 131 | defined here | Heading documenting the on-demand quick scan replacement for retired automatic edit-time hooks. |
| docs/codeql-integration.md | 67 | defined here | Section heading documenting local rapid feedback execution with --quick-scan --use-cache. |

## Consumes
Local codebase source files, cached CodeQL database, and developer invocation triggers.

## Produces
Rapid targeted static analysis findings output to console within a 60-second execution budget.

## When applied
During active local development when explicit, targeted feedback is needed prior to full CI verification.

## Sub-concepts
none

## Part of
none

## Implementation status
defects: doc-drift, internal-contradiction, missing-path, script-bug

## Design notes
Quick scan is an on-demand static analysis technique designed to provide fast, targeted query feedback within a 60-second budget during active development, replacing earlier automatic edit-time hooks that incurred unacceptable IDE latency.
