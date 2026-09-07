---
package: rjm
name: print_report
slug: print-report
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/validation/check_agent_skill_discriminator.py, sha256: fb835dbd3148f58de0a6befdf83d9365975869f178def8624ab3e2b1832db6ce}
  - {path: scripts/validation/check_skill_md_exec_portability.py, sha256: 176c423ce1b4d3957c58c67a909039ca428157be432a1170ee8157911ac1a051}
  - {path: scripts/validation/check_zero_collection_tests.py, sha256: 5df67f7bfb0dd67ebf29fe1d0e8ea7f1206a2df57f88249889350eb7231b46cb}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
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
