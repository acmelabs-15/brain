---
package: rjm
name: _strip_hash_comments
slug: strip-hash-comments
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# _strip_hash_comments

## Definition — verbatim
(used, not defined)

> "def _strip_hash_comments(text: str) -> str:" — scripts/validation/check_skill_portability.py:172

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_skill_portability.py | 172 | defined here | Helper function delegating to `strip_hash_comments` from `shell_text` to remove shell comments. |
| scripts/validation/push_lock_resolver.py | 24 | used here | Imported from `shell_text` to strip comments from shell code blocks before statement parsing. |
| scripts/validation/shell_text.py | 18 | defined here | Core library function stripping shell hash comments while preserving quotes, escapes, and line numbers. |

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
defects: doc-drift, orphan

## Design notes
A Python helper function identifier across validation scripts, classified as name-only per D-023.
