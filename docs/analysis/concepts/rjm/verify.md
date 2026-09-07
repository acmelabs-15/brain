---
package: rjm
name: verify
slug: verify
kind: technique
package_phase: rjm:cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/merge-resolver/scripts/verify_no_conflict_markers.py, sha256: 3c7090beebcc7e44f3f84db92a676c64296c58383fa3f01fd63def8bee34f335}
  - {path: README.md, sha256: ca72955c7f43ad2e17a21064c0dfe9a7b2b594b958a130f1af308ad413640d7f}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# verify

## Definition — verbatim
> "def verify(cwd: Path) -> tuple[int, dict[str, object]]:" — .claude/skills/merge-resolver/scripts/verify_no_conflict_markers.py:166

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/merge-resolver/scripts/verify_no_conflict_markers.py | 166 | defined here | Primary definition of `verify` within verify_no_conflict_markers.py. |
| README.md | 306 | defined here | Primary definition of `verify` within README.md. |

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
defects: doc-drift, missing-path

## Design notes
An operational technique or artifact (verify) utilized within the rjm ecosystem to ensure consistency and systematic execution.
