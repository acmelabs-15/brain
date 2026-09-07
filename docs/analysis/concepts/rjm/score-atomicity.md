---
package: rjm
name: score_atomicity
slug: score-atomicity
kind: name-only
package_phase: rjm:retrospective
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/retrospective/scripts/run_retrospective.py, sha256: 7bef09acd131cbf5a9bbe725c86d14b2024da5828e639f81d0d02cbdcf4e1d9e}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# score_atomicity

## Definition — verbatim
(used, not defined)

> "learnings (Phase 4 via ``score_atomicity``), and writes a retrospective artifact" — .claude/skills/retrospective/scripts/run_retrospective.py:6

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/retrospective/scripts/run_retrospective.py | 6 | used here | Sibling script module referenced for scoring candidate learning statements during Phase 4. |

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
`score_atomicity` is the script and module identifier for the learning atomicity evaluation program rather than a lifecycle concept, classified as `kind: name-only` per D-023.
