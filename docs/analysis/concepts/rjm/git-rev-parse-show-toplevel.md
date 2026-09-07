---
package: rjm
name: git rev-parse --show-toplevel
slug: git-rev-parse-show-toplevel
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# git rev-parse --show-toplevel

## Definition — verbatim
(used, not defined)

> "The fix is to anchor the repo-relative rung on ``git rev-parse --show-toplevel`` so it resolves from anywhere inside the worktree." — scripts/validation/check_skill_resolver_anchoring.py:15-16

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_skill_resolver_anchoring.py | 15 | used here | Shell command used to anchor candidate paths to git repository root. |

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
A git command invocation cited in `check_skill_resolver_anchoring.py`, classified as name-only per D-023.
