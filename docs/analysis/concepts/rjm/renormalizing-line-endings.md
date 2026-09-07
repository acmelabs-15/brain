---
package: rjm
name: renormalizing line endings
slug: renormalizing-line-endings
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
---

# renormalizing line endings

## Definition — verbatim
> "Applies .gitattributes rules to all existing files by renormalizing line endings." — scripts/normalize_line_endings.py:4

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/normalize_line_endings.py | 4 | defined here | used here | Enforces `.gitattributes` rules across tracked repository files using `git add --renormalize`. |

## Consumes
Git working tree and `.gitattributes` configuration file.

## Produces
Normalized text files conforming to repository line ending rules.

## When applied
Executed following changes to `.gitattributes` to update all existing tracked files.

## Sub-concepts
none

## Part of
none

## Implementation status
defects: orphan

## Design notes
A repository maintenance technique enforcing uniform line endings across all files in git history and working trees to prevent false diffs across operating systems.
