---
package: rjm
name: DELIMITER
slug: delimiter
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/ci/build_retrospective_prompt.py, sha256: 5fd8c35a806317288379ba87cb12a2e2e18e4bdc0ed1d6c07a3d9daba80170ef}
  - {path: scripts/ci/collect_ai_metrics.py, sha256: 58812012ab261d1a99d10734c90fd507b727a64e4c1f1d14c5ddddfa7cefce0f}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# DELIMITER

## Definition — verbatim
(used, not defined)

> "DELIMITER = \"RETRO_EOF\"" — scripts/ci/build_retrospective_prompt.py:23

## Also called — verbatim
> "_DELIMITER = \"EOF_METRICS\"" — scripts/ci/collect_ai_metrics.py:26

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/ci/build_retrospective_prompt.py | 23 | defined here | Constant specifying the heredoc delimiter (`RETRO_EOF`) used for multiline GITHUB_OUTPUT blocks. |
| scripts/ci/collect_ai_metrics.py | 26 | defined here | Constant defining the heredoc delimiter (`EOF_METRICS`) for writing multiline metrics to GITHUB_OUTPUT. |

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
`DELIMITER` is a string token constant used for safe heredoc formatting when appending multiline strings to GITHUB_OUTPUT rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
