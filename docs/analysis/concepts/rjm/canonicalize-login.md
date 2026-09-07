---
package: rjm
name: canonicalize_login
slug: canonicalize-login
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/github_core/bot_config.py, sha256: 4abe6cd8dcb35770ac9ecbe56df1692756c1371cdbbc21b4387ce768490f5415}
  - {path: scripts/update_reviewer_signal_stats.py, sha256: 4b6c1c52f7c49f9d5ba2b3884926800b17ce518c26602fa0f9089ee99c17b01e}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# canonicalize_login

## Definition — verbatim
(used, not defined)

> "def canonicalize_login(login: str, account_id: int | None = None) -> str:" — scripts/github_core/bot_config.py:309

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/github_core/bot_config.py | 309 | defined here | Returns canonical login name for a bot or user login or account ID. |
| scripts/update_reviewer_signal_stats.py | 40 | used here | Imported to normalize PR author and review comment author logins before aggregating reviewer statistics. |

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
A helper function resolving GitHub bot login aliases and account IDs to a canonical username, classified as name-only per D-023.
