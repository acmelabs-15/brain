---
package: rjm
name: _DEFAULT_BOTS
slug: default-bots
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/github_core/bot_config.py, sha256: 4abe6cd8dcb35770ac9ecbe56df1692756c1371cdbbc21b4387ce768490f5415}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# _DEFAULT_BOTS

## Definition — verbatim
(used, not defined)

> "_DEFAULT_BOTS: dict[str, list[str]] = {" — scripts/github_core/bot_config.py:29

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/github_core/bot_config.py | 29 | defined here | Module-level dictionary constant mapping bot categories to default bot login usernames. |

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
A module-level configuration constant defining fallback bot account usernames across reviewer, automation, and repository categories, classified as name-only per D-023.
