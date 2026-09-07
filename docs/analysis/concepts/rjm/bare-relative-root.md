---
package: rjm
name: BARE_RELATIVE_ROOT
slug: bare-relative-root
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# BARE_RELATIVE_ROOT

## Definition — verbatim
(used, not defined)

> "BARE_RELATIVE_ROOT = re.compile(" — scripts/validation/check_skill_resolver_anchoring.py:53

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_skill_resolver_anchoring.py | 53 | defined here | Regular expression matching bare repo-relative path candidates that lack worktree anchoring. |

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
A module-level regex constant identifier in `check_skill_resolver_anchoring.py`, classified as name-only per D-023.
