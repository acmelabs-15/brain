---
package: matt
name: automated checks
slug: automated-checks
kind: gate
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: docs/engineering/resolving-merge-conflicts.md, sha256: 08e538aa0d35e65e26063ad44351cb429d84afb5eae5b3add02f6a08cba868f6}
  - {path: external/resolving-merge-conflicts.md, sha256: e4874999d86017e11321cce352bec3d044adcae7eb387f70a9dd5b7d7ae66501}
  - {path: skills/engineering/resolving-merge-conflicts/SKILL.md, sha256: 9d8114f8ef0b31f535a265fc05c364bd8cf2e2895a830040e06c22acb11f54b0}
  - {path: skills/in-progress/retro/SKILL.md, sha256: 264f3330f1e2382af89610ed048ba0ed6d08883eb69f596a8f1df3f1e1a4c6a1}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# automated checks

## Definition — verbatim
> "are there automated checks that could catch errors the agent made? Linting, typing, tests, filesystem linters? _Use when_ the agent made a mistake that could have been caught by an automated check." — skills/in-progress/retro/SKILL.md:18

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/engineering/resolving-merge-conflicts.md | 23 | used here | Highlights running repo automated checks before committing resolved merge conflicts. |
| external/resolving-merge-conflicts.md | 33 | used here | Mentions discovering and executing automated checks prior to completing merge conflict resolution. |
| skills/engineering/resolving-merge-conflicts/SKILL.md | 12 | used here | Prescribes discovering and running project checks (typecheck, tests, format) in step 4. |
| skills/in-progress/retro/SKILL.md | 18 | defined here | Defines candidate improvement category for linting, typing, tests, and filesystem linters during retrospectives. |

## Consumes
Executable verification commands configured in the repository (compiler, typechecker, test runners, linters, formatters).

## Produces
Pass or fail verification verdicts that validate code changes or highlight mistakes made by an agent or human.

## When applied
Run automatically during merge conflict resolution before finalizing commits, and evaluated as an environmental improvement category during session retrospectives.

## Sub-concepts
none

## Part of
resolving-merge-conflicts

## Implementation status
clean

## Design notes
Automated checks represent mechanical, deterministic validation gates—including typechecking, unit tests, code linters, and filesystem linters—relied upon across Matt's workflows. In conflict resolution, running automated checks guards against code that compiles cleanly but breaks cross-branch behavioral contracts. In retrospectives (`retro`), automated checks are prioritized over prose steering instructions because tooling feedback provides non-negotiable feedback loops without consuming agent context window budget.
