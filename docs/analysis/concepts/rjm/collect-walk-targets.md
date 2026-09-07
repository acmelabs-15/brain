---
package: rjm
name: collect_walk_targets
slug: collect-walk-targets
kind: technique
package_phase: rjm:cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/orphan-ref-validator/scripts/walking.py, sha256: c5ec30edde983edb8e7427dbe17f5d866f34515ebdbb2b82a8867f31db8f074e}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# collect_walk_targets

## Definition — verbatim
> "def collect_walk_targets(target: Path, repo_root: Path) -> tuple[list[Path], list[WalkProblem]]:" — .claude/skills/orphan-ref-validator/scripts/walking.py:96

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/orphan-ref-validator/scripts/walking.py | 96 | defined here | Primary definition of `collect_walk_targets` within walking.py. |

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
An operational technique or artifact (collect_walk_targets) utilized within the rjm ecosystem to ensure consistency and systematic execution.
