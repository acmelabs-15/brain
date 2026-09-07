---
package: rjm
name: _load_or_exit
slug: load-or-exit
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/skillbook.py, sha256: d3a3b4d3968e777b381293bc4908848793a537383691422565cf5965f6b25f89}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# _load_or_exit

## Definition — verbatim
(used, not defined)

> "def _load_or_exit(path: Path) -> dict[str, Any]:" — scripts/skillbook.py:405

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/skillbook.py | 405 | defined here | Loads a skillbook JSON file or prints a diagnostic error message and raises SystemExit. |

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
defects: doc-drift

## Design notes
_load_or_exit is a Python helper function identifier managing JSON file loading and error exits rather than an SDLC lifecycle concept, classified as name-only per D-023.
