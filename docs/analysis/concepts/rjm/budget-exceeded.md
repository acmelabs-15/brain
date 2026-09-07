---
package: rjm
name: budget_exceeded
slug: budget-exceeded
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

# budget_exceeded

## Definition — verbatim
> "The caller emits the structured verdict `budget_exceeded` plus `needs_deeper_pass: true`." — .agents/architecture/ADR-074-security-review-quick-pass-mode.md:98-99

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-074-security-review-quick-pass-mode.md | 99 | defined here | Defined as a structured non-clearing verdict emitted when review wall-clock execution limits are exhausted. |

## Consumes
Elapsed wall-clock execution timer exceeding allocated review budget.

## Produces
Non-clearing verdict payload with needs_deeper_pass flag and optional partial progress checkpoint.

## When applied
Emitted when quick-pass or full security review analysis exceeds its allocated deadline.

## Sub-concepts
none

## Part of
diff-scope-classifier, piv-verdict-gate

## Implementation status
clean

## Design notes
budget_exceeded is a non-clearing fail-closed verdict that prevents hung or slow security reviews from silently blocking workflows or generating false clearances. It never satisfies the PIV gate on its own, forcing orchestrators to escalate, expand budget, or re-route to deeper review.
