---
package: rjm
name: find_offenses
slug: find-offenses
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/validation/check_doc_interpreter_portability.py, sha256: 62a3182550bff6eb7dfc04ce073fb53feb78bd52cde315062b3a2fe1543f8ac1}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# find_offenses

## Definition — verbatim
(used, not defined)

> "def find_offenses(line: str, repo_root: Path, tracked_py: set[str]) -> list[tuple[str, list[str]]]:" — scripts/validation/check_doc_interpreter_portability.py:372

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_doc_interpreter_portability.py | 372 | defined here | Function identifying unportable python invocations and their third-party modules on a line. |

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
A Python inspection function in `check_doc_interpreter_portability.py` scanning lines for unportable script commands, classified as name-only per D-023.
