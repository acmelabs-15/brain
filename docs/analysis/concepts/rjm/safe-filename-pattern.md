---
package: rjm
name: SAFE_FILENAME_PATTERN
slug: safe-filename-pattern
kind: name-only
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
---

# SAFE_FILENAME_PATTERN

## Definition — verbatim
(used, not defined)

> "SAFE_FILENAME_PATTERN = re.compile(r\"^[a-zA-Z0-9_.-]+$\")" — scripts/utils/path_validation.py:15

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/utils/path_validation.py | 15 | defined here | Compiled regular expression pattern matching safe filename characters (alphanumerics, underscore, hyphen, dot). |

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
defects: doc-drift

## Design notes
A regular expression constant identifier used in path validation utilities rather than an agent lifecycle concept.
