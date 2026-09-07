---
package: rjm
name: doc-interpreter-portability
slug: doc-interpreter-portability
kind: gate
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
---

# doc-interpreter-portability

## Definition — verbatim
> "doc-interpreter-portability: the defect this guard finds, quoted so it can be named" — scripts/validation/check_doc_interpreter_portability.py:6

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_doc_interpreter_portability.py | 6 | defined here | Defect identifier, comment opt-out marker, and interpreter-portability validation ratchet. |

## Consumes
Tracked documentation markdown files and script invocation snippets.

## Produces
Portability validation verdicts and ratchet baseline diffs ensuring scripts with third-party dependencies are invoked via `uv run python`.

## When applied
Executed during CI and pre-PR verification gates across all documented script command snippets.

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
A documentation portability gate and ratchet requiring that documented Python script invocations that rely on third-party dependencies specify `uv run python` rather than bare `python3`.
