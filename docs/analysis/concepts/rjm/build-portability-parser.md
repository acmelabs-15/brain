---
package: rjm
name: build_portability_parser
slug: build-portability-parser
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# build_portability_parser

## Definition — verbatim
(used, not defined)

> "def build_portability_parser(" — scripts/validation/portability_common.py:65

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_skill_md_exec_portability.py | 33 | used here | Imported to construct command-line argument parsing for exec portability validation. |
| scripts/validation/check_skill_md_portability.py | 107 | used here | Imported to construct command-line argument parsing for Markdown portability validation. |
| scripts/validation/portability_common.py | 65 | defined here | Function creating a shared ArgumentParser configured with standard portability ratchet options. |

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
clean in scripts/validation/portability_common.py; defects: other in scripts/validation/check_skill_md_exec_portability.py, doc-drift in scripts/validation/check_skill_md_portability.py

## Design notes
A command-line argument parser builder for Python portability validation scripts rather than an agent lifecycle concept.
