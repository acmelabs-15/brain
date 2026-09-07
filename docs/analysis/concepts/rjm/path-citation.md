---
package: rjm
name: _PATH_CITATION
slug: path-citation
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

# _PATH_CITATION

## Definition — verbatim
(used, not defined)

> "_PATH_CITATION: re.Pattern[str] = re.compile(" — scripts/validation/check_orchestrator_citations.py:44

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_orchestrator_citations.py | 44 | defined here | Compiled regex matching backtick-wrapped repo-relative file paths ending in source extensions. |

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
`_PATH_CITATION` is a compiled regular expression object in `check_orchestrator_citations.py` rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
