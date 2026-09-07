---
package: rjm
name: FALLBACK_PROMPT
slug: fallback-prompt
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/ci/load_ai_review_prompt.py, sha256: 5b7992a516e98e447bf020615ea72faa136a9dcaf75d08b425074c7fd937445f}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# FALLBACK_PROMPT

## Definition — verbatim
(used, not defined)

> "FALLBACK_PROMPT = (" — scripts/ci/load_ai_review_prompt.py:14

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/ci/load_ai_review_prompt.py | 14 | defined here | Constant containing a minimal default prompt string used when neither custom nor default prompt files exist. |

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
FALLBACK_PROMPT is a script-level string constant providing a minimal review prompt when no template file is found rather than an SDLC lifecycle concept, classified as kind: name-only per D-023.
