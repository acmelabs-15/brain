---
package: rjm
name: RENEW_FAILOPEN_LIVENESS_MARGIN
slug: renew-failopen-liveness-margin
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

# RENEW_FAILOPEN_LIVENESS_MARGIN

## Definition — verbatim
(used, not defined)

> "exceed the `RENEW_FAILOPEN_LIVENESS_MARGIN` I/O budget the self-renew fail-open window was sized against" — .agents/architecture/ADR-076-pr-autofix-branch-ownership-lease.md:266

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-076-pr-autofix-branch-ownership-lease.md | 266 | used here | Internal I/O timing budget constant in pr_autofix_lease.py sizing the window for self-renew fail-open execution. |

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
An internal timing budget constant in pr_autofix_lease.py that sizes the I/O window for fail-open self-renewal operations, representing an identifier in excluded PR tooling rather than a development lifecycle concept.
