---
package: rjm
name: scan_skill_execs
slug: scan-skill-execs
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# scan_skill_execs

## Definition — verbatim
(used, not defined)

> "def scan_skill_execs(repo_root: Path) -> dict[str, int]:" — scripts/validation/check_skill_md_exec_portability.py:293

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_skill_md_exec_portability.py | 293 | defined here | Public API scanning skill markdown files and returning invocation counts per relative path. |

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
defects: other

## Design notes
A Python validation function identifier scanning skill markdown files for executable invocations rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
