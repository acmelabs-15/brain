---
package: rjm
name: Security-Review Quick-Pass Mode
slug: security-review-quick-pass-mode
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

# Security-Review Quick-Pass Mode

## Definition — verbatim
> "ADR-074: Bounded Security-Review Quick-Pass Mode" — .agents/architecture/ADR-074-security-review-quick-pass-mode.md:12

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-074-security-review-quick-pass-mode.md | 12 | defined here | Architectural decision introducing a time-bounded, lower-cost security review fast-path for small diffs |

## Consumes
Code changes, targeted local gate results, and risk classification metadata.

## Produces
A fast, bounded security review verdict for low-risk changes without unbounded threat-modeling overhead.

## When applied
Triggered during PR review and autofix loops on low-risk or small diffs where full threat-modeling is disproportionate.

## Sub-concepts
none

## Part of
security-review

## Implementation status
clean

## Design notes
Security-Review Quick-Pass Mode is an architectural review technique defined in ADR-074 to provide a bounded, rapid security assessment for small, low-risk changes. By capping review time and skipping heavyweight threat-modeling for diffs with no exploitable patterns, it prevents PR automation workflows from stalling while preserving mandatory deep review for high-risk changes.
