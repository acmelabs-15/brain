---
package: rjm
name: checks_common
slug: checks-common
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/validation/check_adr_lifecycle.py, sha256: 20aa2406f41d31ba7c7d8bb17271a66eb7e885f5f0588593869fba84920ca738}
  - {path: scripts/validation/check_citation_freshness.py, sha256: 2cabc79d74cce6a5aef3cdbb5db6b92d10164f69e0c58717646e8ca8fe68406a}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# checks_common

## Definition — verbatim
(used, not defined)

> "from checks_common import ( # noqa: E402" — scripts/validation/check_adr_lifecycle.py:130

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_adr_lifecycle.py | 130 | used here | Imported to provide subprocess execution and git base ref resolution utilities. |
| scripts/validation/check_citation_freshness.py | 43 | used here | Cited in comment regarding python import path requirements for shared validation utilities. |

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
A shared Python validation module identifier providing common git subprocess and base ref resolution helpers, classified as `name-only` per D-023 because it is a software module identifier rather than a development lifecycle concept.
