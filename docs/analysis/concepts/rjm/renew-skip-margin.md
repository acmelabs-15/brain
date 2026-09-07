---
package: rjm
name: RENEW_SKIP_MARGIN
slug: renew-skip-margin
kind: name-only
package_phase: none
implementation_in_scope: false
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-076-pr-autofix-branch-ownership-lease.md, sha256: c62e9604b92f9cbc815de948bd312bc12f9a9d7d669d676098dd2efea06cfd4a}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# RENEW_SKIP_MARGIN

## Definition — verbatim
(used, not defined)

> "RENEW_SKIP_MARGIN = 5 min" — .agents/architecture/ADR-076-pr-autofix-branch-ownership-lease.md:256

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-076-pr-autofix-branch-ownership-lease.md | 256 | used here | Configuration threshold constant in pr_autofix_lease.py defining the remaining lease TTL window under which write operations are suppressed. |

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
defects: missing-path, doc-drift, internal-contradiction

## Design notes
A configuration constant in pr_autofix_lease.py that throttles lease renewal comment writes when more than five minutes of lease validity remain, representing an internal timing threshold in excluded PR tooling rather than a development lifecycle concept.
