---
package: rjm
name: PROMPT_OUTPUT_PATH
slug: prompt-output-path
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

# PROMPT_OUTPUT_PATH

## Definition — verbatim
(used, not defined)

> "PROMPT_OUTPUT_PATH = Path(\"/tmp/ai-review-prompt.md\")" — scripts/ci/load_ai_review_prompt.py:12

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/ci/load_ai_review_prompt.py | 12 | defined here | Constant specifying the output file path where the resolved AI review prompt is written. |

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
PROMPT_OUTPUT_PATH is a script-level file path constant designating where the resolved prompt markdown is published rather than an SDLC lifecycle concept, classified as kind: name-only per D-023.
