---
package: rjm
name: append_multiline_output
slug: append-multiline-output
kind: name-only
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/ai_review_outputs.py, sha256: 6d483eb4ec8210bf6680223566ea291dacb103d838f8bc60a0a673b58b14f09f}
  - {path: scripts/ci/build_retrospective_prompt.py, sha256: 5fd8c35a806317288379ba87cb12a2e2e18e4bdc0ed1d6c07a3d9daba80170ef}
  - {path: scripts/ci/diagnose_copilot_cli.py, sha256: d05040c1d6bdaab669157a383c9f470e3cbc1261e0cb4974c89666ee59ec0b39}
  - {path: scripts/ci/invoke_copilot_cli.py, sha256: 279e376171031fb1d2eb9d4ccbe0178dc93aa91c7c81e25e98cb5c78bb32e84a}
  - {path: scripts/ci/load_ai_review_prompt.py, sha256: 5b7992a516e98e447bf020615ea72faa136a9dcaf75d08b425074c7fd937445f}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# append_multiline_output

## Definition — verbatim
(used, not defined)

> "Append a heredoc-delimited output, refusing a value that contains the delimiter." — scripts/ci/build_retrospective_prompt.py:38

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/ai_review_outputs.py | 56 | defined here | Appends multiline string content to GitHub Actions output using dynamically computed heredoc delimiters. |
| scripts/ci/build_retrospective_prompt.py | 37 | defined here | Writes multiline retrospective prompt payloads safely to GitHub Actions output files. |
| scripts/ci/diagnose_copilot_cli.py | 69 | defined here | Emits multiline diagnostic output strings formatted with heredoc delimiters to GitHub step files. |
| scripts/ci/invoke_copilot_cli.py | 124 | defined here | Writes multiline CLI execution results to GitHub Actions output using collision-free boundaries. |
| scripts/ci/load_ai_review_prompt.py | 25 | defined here | Writes loaded review prompt text to the GitHub Actions output stream using heredoc syntax. |

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
`append_multiline_output` is a helper function identifier formatting and appending multiline strings to CI step outputs rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
