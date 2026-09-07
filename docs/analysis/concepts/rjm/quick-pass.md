---
package: rjm
name: QUICK_PASS
slug: quick-pass
kind: gate
package_phase: rjm:Review
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-074-security-review-quick-pass-mode.md, sha256: c2b4a02348c862ed3899605ae5d2efbda035194ef3e8e2c32062b67584b82ba4}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# QUICK_PASS

## Definition — verbatim
> "| QUICK_PASS | No quick-pass pattern matched in the full diff under review | Clears the gate for small diffs only; logged as quick-pass, not as a full audit |" — .agents/architecture/ADR-074-security-review-quick-pass-mode.md:114

## Also called — verbatim
`Quick-pass mode` — .agents/architecture/ADR-074-security-review-quick-pass-mode.md:104

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-074-security-review-quick-pass-mode.md | 114 | defined here | Defined as an extended review verdict clearing small diffs without full threat-model protocol. |

## Consumes
Diff classified as small tier and complete set of changed files and test coverage artifacts.

## Produces
Gate clearance verdict satisfying the PIV verdict gate for small diffs.

## When applied
Returned when scanning small diffs reveals zero matches across critical security pattern sets (CWE-22, CWE-77, CWE-78, CWE-798, ASI01-ASI10).

## Sub-concepts
none

## Part of
diff-scope-classifier, piv-verdict-gate

## Implementation status
clean

## Design notes
QUICK_PASS optimizes automated pipeline throughput by providing a lightweight clearance mechanism for small, clean diffs while bypassing the expensive threat-model protocol. Because it clears the gate only for small diffs, large changes cannot evade deep analysis.
