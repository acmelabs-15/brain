---
package: rjm
name: todos
slug: todos
kind: name-only
package_phase: rjm:build
implementation_in_scope: true
deprecated: false
---

# todos

## Definition — verbatim
(used, not defined)

> "CREATE TABLE IF NOT EXISTS todos (" — scripts/todo_db.py:35

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/todo_db.py | 35 | defined here | SQLite table name storing todo identifiers, titles, and task execution status. |

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
todos is a SQLite database table name identifier storing task status records rather than a lifecycle concept.
