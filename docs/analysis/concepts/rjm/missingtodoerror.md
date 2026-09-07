---
package: rjm
name: MissingTodoError
slug: missingtodoerror
kind: name-only
package_phase: rjm:build
implementation_in_scope: true
deprecated: false
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
