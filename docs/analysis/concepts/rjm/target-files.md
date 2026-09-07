---
package: rjm
name: _TARGET_FILES
slug: target-files
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/validation/check_orchestrator_citations.py, sha256: 843ef1704577409eb3438b7265d58b7ef7acfeb14e17e73be2d2f17cd4c740ef}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# _TARGET_FILES

## Definition — verbatim
(used, not defined)

> "_TARGET_FILES: tuple[str, ...] = (\".claude/commands/pr-quality/all.md\",)" — scripts/validation/check_orchestrator_citations.py:37

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_orchestrator_citations.py | 37 | defined here | Module constant specifying repo-relative paths of orchestrator prose files inspected for valid citations. |

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
`_TARGET_FILES` is a private Python module constant tuple in `check_orchestrator_citations.py` configuring target files rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
