---
package: rjm
name: STATUS_STALE
slug: status-stale
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/quality_gate/resolve_pytest_signal.py, sha256: e4152823bcb9632e32537455c786e7c5fcd242267ac13eee834ee65d19f96811}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# STATUS_STALE

## Definition — verbatim
(used, not defined)

> "STATUS_STALE = \"STALE\"" — scripts/quality_gate/resolve_pytest_signal.py:54

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/quality_gate/resolve_pytest_signal.py | 54 | defined here | Constant identifying a stale test execution status where workflow runs correspond to an outdated commit SHA. |

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
defects: orphan

## Design notes
STATUS_STALE is a string constant identifier in resolve_pytest_signal.py indicating an out-of-date workflow run relative to the pull request head commit rather than an autonomous lifecycle concept.
