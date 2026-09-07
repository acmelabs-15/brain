---
package: rjm
name: Markdown vendor-portability ratchet
slug: markdown-vendor-portability-ratchet
kind: gate
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
---

# Markdown vendor-portability ratchet

## Definition — verbatim
> "Markdown vendor-portability ratchet for skill instruction files (issue #2050)." — scripts/validation/check_skill_md_portability.py:3

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_skill_md_portability.py | 3 | defined here | Module docstring defining the vendor-portability ratchet for Markdown instruction files. |

## Consumes
`skill_md_portability_baseline.json` baseline counts, markdown files across plugin roots, commands, templates, and instructions.

## Produces
Pass/fail validation verdicts, drift reports, and updated baseline definitions via `--update-baseline`.

## When applied
Executed in validation pipelines and CI checks to prevent regressions in Markdown instruction portability across vendored installations.

## Sub-concepts
skill-md-portability-baseline-json, extra-scan-roots, upstream-patterns

## Part of
vendor-portability

## Implementation status
defects: doc-drift

## Design notes
The Markdown vendor-portability ratchet prevents skill instruction files (`SKILL.md`, references, commands, templates, and generated instructions) from hardcoding upstream-only repository paths (`.agents/`, `.claude/lib/`, `.claude/review-axes/`) that break when skills are installed into consumer repositories as vendored plugins. Grandfathering existing occurrences in a baseline JSON file allows ongoing development without regressions.
