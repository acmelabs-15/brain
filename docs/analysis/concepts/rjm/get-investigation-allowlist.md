---
package: rjm
name: get_investigation_allowlist
slug: get-investigation-allowlist
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/modules/investigation_allowlist.py, sha256: bece828fc1a3860637801df5a97f8bf2f55baf516c426bea4298ee629f946785}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# get_investigation_allowlist

## Definition — verbatim
(used, not defined)

> "def get_investigation_allowlist() -> list[str]:" — scripts/modules/investigation_allowlist.py:14

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/modules/investigation_allowlist.py | 14 | defined here | Function returning the canonical regex patterns for investigation-only path allowlist. |

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
get_investigation_allowlist is an internal Python helper function returning allowlist regex patterns rather than an independent lifecycle concept.
