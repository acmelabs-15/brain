---
package: rjm
name: _MANDATORY_SECTION
slug: mandatory-section
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# _MANDATORY_SECTION

## Definition — verbatim
(used, not defined)

> "_MANDATORY_SECTION: re.Pattern[str] = re.compile(" — scripts/validation/check_build_gates.py:56

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_build_gates.py | 56 | defined here | Compiled regular expression matching the mandatory exit gates heading in build.md. |

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
`_MANDATORY_SECTION` is an internal Python regex pattern identifier in `check_build_gates.py` matching the required section heading in `build.md` rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
