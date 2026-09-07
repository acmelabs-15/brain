---
package: rjm
name: MissingTodoError
slug: missingtodoerror
kind: name-only
package_phase: rjm:build
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/todo_db.py, sha256: ef061944ff3d1a93e2d48820b932ce15970bc349d05ef9504d1462885a46b615}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# MissingTodoError

## Definition — verbatim
(used, not defined)

> "class MissingTodoError(RuntimeError):" — scripts/todo_db.py:46

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/todo_db.py | 46 | defined here | Exception class raised when attempting to complete a todo item that does not exist in the database. |

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
MissingTodoError is a Python exception class identifier for missing database records rather than a lifecycle concept.
