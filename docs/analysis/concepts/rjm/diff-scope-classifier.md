---
package: rjm
name: diff-scope classifier
slug: diff-scope-classifier
kind: technique
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

# diff-scope classifier

## Definition — verbatim
> "Add a bounded quick-pass mode to security review, governed by a diff-scope classifier, a caller-enforced deadline, and an extended verdict taxonomy." — .agents/architecture/ADR-074-security-review-quick-pass-mode.md:66-67

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-074-security-review-quick-pass-mode.md | 66 | defined here | Architectural decision establishing the diff-scope classifier to govern security review modes and budgets. |

## Consumes
Diff metrics including changed file count and lines changed.

## Produces
Diff evaluation tier (small, medium, large, extra-large), default review mode (quick or full), and default timeout budget.

## When applied
Evaluated before initiating security review passes to select appropriate analysis depth and timeout budgets.

## Sub-concepts
classify-diff-scope

## Part of
security-review

## Implementation status
clean

## Design notes
The diff-scope classifier prevents unbounded analysis latency on trivial changes by categorizing diffs into size tiers. Small diffs (<= 5 files, <= 200 lines) default to a 30-second quick-pass scan, whereas larger diffs scale up to full threat-model passes with explicit budgets.
