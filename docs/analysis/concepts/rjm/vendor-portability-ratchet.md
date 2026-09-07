---
package: rjm
name: Vendor-portability ratchet
slug: vendor-portability-ratchet
kind: gate
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
---

# Vendor-portability ratchet

## Definition — verbatim
> "Vendor-portability ratchet for skill scripts (issue #2050)." — scripts/validation/check_skill_portability.py:3

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_skill_portability.py | 3 | defined here | Implemented as an automated validation ratchet preventing skill scripts from introducing unportable upstream paths. |

## Consumes
`skill_portability_baseline.json` baseline counts and skill scripts (`*.py`, `*.sh`, `*.ps1`) under `.claude/skills/`.

## Produces
Pass/fail verification verdicts and updated baseline definitions via `--update-baseline`.

## When applied
Executed in validation pipelines and CI checks to prevent regressions in skill script portability across vendored installations.

## Sub-concepts
skill-portability-baseline-json, script-suffixes

## Part of
vendor-portability

## Implementation status
defects: doc-drift, orphan

## Design notes
The vendor-portability ratchet prevents skill scripts from hardcoding upstream repository paths (`.agents/`, `.claude/lib/`, `.claude/skills/`) that break when skills are installed into consumer repositories as vendored plugins. By recording grandfathered debt in a baseline file, the ratchet allows incremental migration without blocking development, failing if new references are added or unratcheted improvements are detected.
