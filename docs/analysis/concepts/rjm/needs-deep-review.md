---
package: rjm
name: NEEDS_DEEP_REVIEW
slug: needs-deep-review
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

# NEEDS_DEEP_REVIEW

## Definition — verbatim
> "| NEEDS_DEEP_REVIEW | A quick-pass pattern matched, or the scope is ambiguous | Re-route to the full threat-model review; never clears the gate by itself |" — .agents/architecture/ADR-074-security-review-quick-pass-mode.md:115

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-074-security-review-quick-pass-mode.md | 115 | defined here | Defined as an intermediate verdict routing suspicious or ambiguous diffs to full threat-model review. |

## Consumes
Pattern match detection (CWE-22, CWE-77, CWE-78, CWE-798, ASI01-ASI10) or ambiguous diff scope during quick-pass scan.

## Produces
Re-routing action triggering full threat-model review.

## When applied
Emitted when quick-pass scanning detects a potential vulnerability or cannot confirm diff safety unambiguously.

## Sub-concepts
none

## Part of
diff-scope-classifier, piv-verdict-gate

## Implementation status
clean

## Design notes
NEEDS_DEEP_REVIEW functions as an escalation valve in quick-pass mode. It prevents false negatives by ensuring that any diff showing potential security anomalies is routed directly to the full threat-model protocol rather than cleared prematurely.
