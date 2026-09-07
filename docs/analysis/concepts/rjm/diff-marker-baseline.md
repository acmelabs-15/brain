---
package: rjm
name: diff_marker_baseline
slug: diff-marker-baseline
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# diff_marker_baseline

## Definition — verbatim
(used, not defined)

> "def diff_marker_baseline(" — scripts/validation/check_skill_md_exec_portability.py:376

## Also called — verbatim
`def diff_marker_baseline(` — scripts/validation/check_skill_md_portability.py:1118

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_skill_md_exec_portability.py | 376 | defined here | Compares current marker suppression counts with baseline expectations and reports drift. |
| scripts/validation/check_skill_md_portability.py | 1118 | defined here | Identifies exact-count marker suppression drift across Markdown instruction files. |

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
defects: other, doc-drift

## Design notes
A Python comparison function identifier detecting drift between current and baseline marker suppression counts rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
