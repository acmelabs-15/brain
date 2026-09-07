---
package: rjm
name: is_auto_resolvable
slug: is-auto-resolvable
kind: technique
package_phase: rjm:cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/merge-resolver/scripts/resolve_pr_conflicts.py, sha256: 863a932e455ed708b80aa96aea74f1a3fb16ee2903dfc65669b78709d1a09bac}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# is_auto_resolvable

## Definition — verbatim
> "def is_auto_resolvable(file_path: str) -> bool:" — .claude/skills/merge-resolver/scripts/resolve_pr_conflicts.py:329

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/merge-resolver/scripts/resolve_pr_conflicts.py | 329 | defined here | Primary definition of `is_auto_resolvable` within resolve_pr_conflicts.py. |

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
An operational technique or artifact (is_auto_resolvable) utilized within the rjm ecosystem to ensure consistency and systematic execution.
