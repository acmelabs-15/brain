---
package: rjm
name: _BUILD_MD_RELPATH
slug: build-md-relpath
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# _BUILD_MD_RELPATH

## Definition — verbatim
(used, not defined)

> "_BUILD_MD_RELPATH = Path(\".claude/commands/build.md\")" — scripts/validation/check_build_gates.py:61

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_build_gates.py | 61 | defined here | Constant path pointing to the slash command definition for /build. |

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
defects: missing-path

## Design notes
`_BUILD_MD_RELPATH` is an internal Python Path constant identifier defining the repository-relative path to `.claude/commands/build.md` rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
