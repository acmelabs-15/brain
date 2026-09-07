---
package: rjm
name: PROMPT_TEMPLATE_PATH
slug: prompt-template-path
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/ci/invoke_copilot_cli.py, sha256: 279e376171031fb1d2eb9d4ccbe0178dc93aa91c7c81e25e98cb5c78bb32e84a}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# PROMPT_TEMPLATE_PATH

## Definition — verbatim
(used, not defined)

> "PROMPT_TEMPLATE_PATH = Path(\"/tmp/ai-review-prompt.md\")" — scripts/ci/invoke_copilot_cli.py:23

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/ci/invoke_copilot_cli.py | 23 | defined here | Constant defining the temporary file path from which the AI review prompt template is read. |

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
PROMPT_TEMPLATE_PATH is a script-level file path constant for reading the prepared review prompt template rather than an SDLC lifecycle concept, classified as kind: name-only per D-023.
