---
package: rjm
name: filter_coauthor_trailers
slug: filter-coauthor-trailers
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

# filter_coauthor_trailers

## Definition — verbatim
(used, not defined)

> "def filter_coauthor_trailers(body: str) -> str:" — scripts/github_core/placeholder_identity.py:94

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/github_core/placeholder_identity.py | 94 | defined here | Sanitization function removing placeholder Co-authored-by trailers from commit body text. |

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
String processing function that strips placeholder trailers from commit messages, classified as name-only per D-023.
