---
package: rjm
name: _KNOWN_VERDICT_TOKENS
slug: known-verdict-tokens
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/ai_review_common/verdict.py, sha256: 6b3475739059a19aef3022a05e7b77ff7f5add074b06310fbdb5d48fa61d60e1}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# _KNOWN_VERDICT_TOKENS

## Definition — verbatim
(used, not defined)

> "_KNOWN_VERDICT_TOKENS: frozenset[str] = (" — scripts/ai_review_common/verdict.py:82

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/ai_review_common/verdict.py | 82 | defined here | Set of recognized verdict tokens used during verdict merging to prevent invalid tokens from becoming PASS. |

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
A frozenset constant identifier (_KNOWN_VERDICT_TOKENS) enumerating recognized CI verdict strings during aggregation rather than an SDLC lifecycle concept, classified as kind: name-only per D-023.
