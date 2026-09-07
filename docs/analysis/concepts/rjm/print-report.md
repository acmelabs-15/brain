---
package: rjm
name: print_report
slug: print-report
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# print_report

## Definition — verbatim
(used, not defined)

> "def print_report(result: CheckResult) -> None:" — scripts/validation/check_agent_skill_discriminator.py:493

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_agent_skill_discriminator.py | 493 | defined here | Formats and outputs agent-skill discriminator validation results to stdout. |
| scripts/validation/check_skill_md_exec_portability.py | 509 | defined here | Formats and outputs executable portability check results in human or JSON format. |
| scripts/validation/check_zero_collection_tests.py | 451 | defined here | Formats and outputs zero-collection test discovery results to console. |

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
defects: missing-path, other, orphan

## Design notes
print_report is a common function identifier used across validation scripts to format and print gate execution summaries, classified as name-only per D-023.
