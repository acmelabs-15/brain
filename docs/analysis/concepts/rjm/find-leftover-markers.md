---
package: rjm
name: find_leftover_markers
slug: find-leftover-markers
kind: technique
package_phase: rjm:cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/merge-resolver/scripts/verify_no_conflict_markers.py, sha256: 3c7090beebcc7e44f3f84db92a676c64296c58383fa3f01fd63def8bee34f335}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# find_leftover_markers

## Definition — verbatim
> "def find_leftover_markers(cwd: Path) -> list[str]:" — .claude/skills/merge-resolver/scripts/verify_no_conflict_markers.py:129

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/merge-resolver/scripts/verify_no_conflict_markers.py | 129 | defined here | Primary definition of `find_leftover_markers` within verify_no_conflict_markers.py. |

## Consumes
Developer inputs, configuration parameters, and codebase artifacts.

## Produces
Standardized system behaviors, verified outputs, and structured lifecycle artifacts.

## When applied
Invoked across development, analysis, and synthesis phases.

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
An operational technique or artifact (find_leftover_markers) utilized within the rjm ecosystem to ensure consistency and systematic execution.
