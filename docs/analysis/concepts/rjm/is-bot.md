---
package: rjm
name: _is_bot
slug: is-bot
kind: name-only
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/analyze_pr_failure.py, sha256: ec0ba314fcf793fbd994ee6e5a3ca52a376de12777ee978e1e6c78f19abfc21b}
  - {path: scripts/github_core/__init__.py, sha256: 8eff83b2be69b5158b6f035088b9e9a74d814704ddfc2364caf814b86c248031}
  - {path: scripts/github_core/bot_config.py, sha256: 4abe6cd8dcb35770ac9ecbe56df1692756c1371cdbbc21b4387ce768490f5415}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# _is_bot

## Definition — verbatim
(used, not defined)

> "Return True if the login looks like a bot account." — scripts/analyze_pr_failure.py:136

## Also called — verbatim
`is_bot` — scripts/github_core/bot_config.py:328

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/analyze_pr_failure.py | 135 | defined here | Predicate checking if a GitHub username ends with recognized bot suffixes. |
| scripts/github_core/__init__.py | 43 | used here | Re-exports bot detection predicate from the core GitHub automation library. |
| scripts/github_core/bot_config.py | 328 | defined here | Core library implementation determining whether a user login corresponds to an automated bot. |

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
defects: exit-code-mismatch, orphan

## Design notes
`_is_bot` is a predicate function identifier classifying user logins as automated bots rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
