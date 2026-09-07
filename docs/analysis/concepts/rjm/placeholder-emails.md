---
package: rjm
name: PLACEHOLDER_EMAILS
slug: placeholder-emails
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/github_core/placeholder_identity.py, sha256: 6e0246dd64011fdce3eeb1e8094471fecd3e2f8d6855899940acc57fd7447f1c}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# PLACEHOLDER_EMAILS

## Definition — verbatim
(used, not defined)

> "PLACEHOLDER_EMAILS: frozenset[str] = frozenset({" — scripts/github_core/placeholder_identity.py:40

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/github_core/placeholder_identity.py | 40 | defined here | Constant frozenset defining exact test fixture email addresses to block from git commit histories. |

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
clean

## Design notes
Configuration constant containing forbidden placeholder email addresses, classified as name-only per D-023.
