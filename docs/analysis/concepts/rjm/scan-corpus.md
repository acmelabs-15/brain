---
package: rjm
name: scan_corpus
slug: scan-corpus
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# scan_corpus

## Definition — verbatim
(used, not defined)

> "def scan_corpus(" — scripts/guard_diff.py:73

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/guard_diff.py | 73 | defined here | Executes a guard callable across all Python files under a target directory root and returns findings. |

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
A Python scanner function that executes a guard against Python files in a directory tree, classified as name-only per D-023.
