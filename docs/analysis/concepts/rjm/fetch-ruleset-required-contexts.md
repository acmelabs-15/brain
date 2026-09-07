---
package: rjm
name: fetch_ruleset_required_contexts
slug: fetch-ruleset-required-contexts
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/github_core/checks_rollup.py, sha256: dede2391ab079ee5be7c7e9964ab3de3308368ecaf137ec632ffb7af4c0759a1}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# fetch_ruleset_required_contexts

## Definition — verbatim
(used, not defined)

> "def fetch_ruleset_required_contexts(" — scripts/github_core/checks_rollup.py:162

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/github_core/checks_rollup.py | 162 | defined here | Queries branch ruleset endpoints via gh api to obtain required status check context names. |

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
A function querying repository branch rulesets via GitHub CLI to obtain expected required check context names, classified as name-only per D-023.
