---
package: rjm
name: core.bare
slug: core-bare
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# core.bare

## Definition — verbatim
(used, not defined)

> "git config core.bare false" — scripts/validation/check_repo_health_report.py:18

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_repo_health_report.py | 18 | used here | Quoted repair command from GOTCHAS.md demonstrating local Git configuration fix for core.bare. |
| scripts/validation/check_repo_health.py | 4 | used here | Documented incident where Git operations write core.bare = true into shared repository configuration. |

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
`core.bare` is a Git configuration parameter specifying whether a repository has a working tree or operates as a bare repository, classified as `kind: name-only` per D-023.
