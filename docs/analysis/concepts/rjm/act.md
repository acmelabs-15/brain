---
package: rjm
name: ACT
slug: act
kind: phase
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-076-pr-autofix-branch-ownership-lease.md, sha256: c62e9604b92f9cbc815de948bd312bc12f9a9d7d669d676098dd2efea06cfd4a}
  - {path: .claude/skills/analyze/references/strategy-ooda-loop.md, sha256: b27a9dfc0c884c93391b7acecade4bd48ec460803cd31b4e1b2ddaff101e21b7}
  - {path: .claude/skills/planner/references/strategy-ooda-loop.md, sha256: b626a9d4fb9134de8b14ebf310a74d36130c4fe55cba4d698faceff1d66e2861}
  - {path: .claude/skills/pre-mortem/references/strategy-ooda-loop.md, sha256: 921b885698d4914564b0aae64f9554417e6aa8acbb318cd647f4005a9a0e3c83}
  - {path: .claude/skills/review/SKILL.md, sha256: cf8e377d27c1ac99b60acb63a0c4bdda2eae139abc38dda591cc9314be5f5dac}
  - {path: docs/WORKFLOW-VALIDATION.md, sha256: 7ee8b92ba397cbd4f1f404cdb0cdbf0a90291cfb3a92467ca47b83305287107d}
  - {path: scripts/validate_workflows.py, sha256: 79f3e393f6cbe540ef6a3d5b2c4399226ed9dde0aa7ef2f5b5cc338ba9ebbb22}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# ACT

## Definition — verbatim
> "| Act | Execute the decision | Implement quickly, then observe again |" — .claude/skills/analyze/references/strategy-ooda-loop.md:20

## Also called — verbatim
`act` — docs/WORKFLOW-VALIDATION.md:61

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-076-pr-autofix-branch-ownership-lease.md | 91 | used here | Verdict action token returned by lease acquisition allowing the automation loop to proceed. |
| .claude/skills/analyze/references/strategy-ooda-loop.md | 20 | defined here | Defined as the fourth stage of the OODA loop executing decisions and implementing quickly. |
| .claude/skills/planner/references/strategy-ooda-loop.md | 20 | defined here | Defined as the execution stage of the OODA loop for milestone execution and plan resolution. |
| .claude/skills/pre-mortem/references/strategy-ooda-loop.md | 20 | defined here | Defined as the mitigation action stage within the iterative risk review cycle. |
| .claude/skills/review/SKILL.md | 37 | used here | Action verdict token under review round cap gating whether to continue or escalate. |
| docs/WORKFLOW-VALIDATION.md | 61 | defined here | Referenced as the GitHub Actions local runner tool (`act`) for local workflow dry runs. |
| scripts/validate_workflows.py | 16 | used here | CLI option flag (`--act`) to execute workflow dry runs via the local runner. |

## Consumes
Decided courses of action, execution plans, verified lease ownership, or workflow configurations.

## Produces
Implementation changes, code edits, test execution evidence, or local workflow test results.

## When applied
Executed when implementing decisions across OODA cycles, or when a gate grants permission to proceed.

## Sub-concepts
none

## Part of
ooda-loop

## Implementation status
defects: doc-drift, internal-contradiction, missing-path

## Design notes
Represents the action and execution concept across multiple contexts in the package: primarily the fourth stage of the OODA decision framework (Observe, Orient, Decide, Act) governing iterative implementation in analysis, planning, and pre-mortems; the affirmative verdict token in lease acquisition and review round-cap gates; and the local GitHub Actions test runner tool (`act`).
