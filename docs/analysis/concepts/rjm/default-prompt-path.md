---
package: rjm
name: DEFAULT_PROMPT_PATH
slug: default-prompt-path
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

# DEFAULT_PROMPT_PATH

## Definition — verbatim
(used, not defined)

> "DEFAULT_PROMPT_PATH = Path(\".github/prompts/default-ai-review.md\")" — scripts/ci/load_ai_review_prompt.py:13

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/ci/load_ai_review_prompt.py | 13 | defined here | Constant identifying the default repository prompt template file path. |

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
DEFAULT_PROMPT_PATH is a script-level path constant referencing the repository's default AI review prompt template file rather than an SDLC lifecycle concept, classified as kind: name-only per D-023.
