---
package: rjm
name: get_bot_authors_config
slug: get-bot-authors-config
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

# get_bot_authors_config

## Definition — verbatim
(used, not defined)

> "def get_bot_authors_config(" — scripts/github_core/bot_config.py:170

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/github_core/bot_config.py | 170 | defined here | Loads bot authors configuration from .github/bot-authors.yml with caching and security validation. |

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
A Python configuration loading function that reads repository bot authors and caches results, classified as name-only per D-023.
