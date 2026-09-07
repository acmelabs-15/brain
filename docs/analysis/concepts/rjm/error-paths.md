---
package: rjm
name: Error paths
slug: error-paths
kind: technique
package_phase: rjm:test
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/commands/test.md, sha256: 74281fbfcba952ff4e88e177f7059484e828b78e5084a3de8463343dd82ef69d}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Error paths

## Definition — verbatim
> "Every catch/error branch tested. No silent swallowing. Resources cleaned up on failure." — .claude/commands/test.md:51

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/commands/test.md | 51 | defined here | Gate 1 functional testing criterion requiring explicit tests for every catch/error branch, zero silent swallowing, and resource cleanup on failure. |

## Consumes
Exception handling code blocks, catch clauses, error propagation contracts, resource management constructs (try/finally, disposables).

## Produces
Negative and exceptional test cases verifying graceful failure propagation, informative diagnostics, and guaranteed resource reclamation.

## When applied
Applied during Gate 1 (Functional Testing) of `/test` across all pull requests containing code changes.

## Sub-concepts
none

## Part of
test

## Implementation status
defects: doc-drift

## Design notes
Error path testing enforces rigorous validation of abnormal control flows and failure handling logic. By mandating that every catch block is exercised, silent error swallowing is eliminated, and resources are deterministically released during failures, it ensures system resilience and observability when runtime faults occur.
