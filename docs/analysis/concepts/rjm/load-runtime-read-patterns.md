---
package: rjm
name: load_runtime_read_patterns
slug: load-runtime-read-patterns
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# load_runtime_read_patterns

## Definition — verbatim
(used, not defined)

> "def load_runtime_read_patterns(patterns_file: Path | None = None) -> tuple[str, ...]:" — scripts/test_selection/select_tests.py:52

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/test_selection/select_tests.py | 52 | defined here | Function parsing runtime read pattern globs from disk while ignoring blanks and comments. |

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
`load_runtime_read_patterns` is a Python function identifier in `scripts/test_selection/select_tests.py` parsing dependency pattern globs rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
