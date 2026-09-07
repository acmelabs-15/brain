---
package: rjm
name: Name-to-path resolution
slug: name-to-path-resolution
kind: technique
package_phase: cross-phase
implementation_in_scope: false
deprecated: false
---

# Name-to-path resolution

## Definition — verbatim
> "Name-to-path resolution is not invented here. It is copied from" — scripts/validation/check_skill_memory_references.py:17

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_skill_memory_references.py | 17 | defined here | Technique for resolving memory file name arguments into concrete filesystem paths within the memory root. |

## Consumes
Normalized memory name string and memory directory path.

## Produces
Resolved repository filesystem path and path traversal security validation status.

## When applied
Applied when converting symbolic memory references in instructions into concrete file paths for validation or retrieval.

## Sub-concepts
none

## Part of
none

## Implementation status
out-of-scope

## Design notes
The path normalization and traversal security technique that resolves symbolic memory identifier strings into relative file paths under `.serena/memories/`, implemented in the excluded Serena memory subsystem.
