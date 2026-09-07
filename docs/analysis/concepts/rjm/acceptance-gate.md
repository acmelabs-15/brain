---
package: rjm
name: Acceptance Gate
slug: acceptance-gate
kind: gate
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-057-prompt-behavioral-evaluation.md, sha256: 924e6f5e3f68c755ac189d1ade6220f4f904c62a74c32547df99dc5e58a64aa7}
  - {path: .claude/skills/adr-review/references/issue-resolution.md, sha256: 0a50a77e7a5b822596d45280d9b7a1ee36a6d19b7f86e9ad7e948c98ee51e4e7}
  - {path: .claude/skills/ai-agents-empirical-probe-toolkit/SKILL.md, sha256: acb5f3ee40425bd518402bdbbfb3b658c032fc607fc43f6d99199974871f1a6b}
  - {path: CONTRIBUTING.md, sha256: 09a1205b99939ad49462139c47ccd0ef1a4a191fc70839a1f532016a1ee66ffa}
  - {path: scripts/eval/eval-prompt-change.py, sha256: c47c10e18f0bd2da8a1854c46f1c8b9e805a25184fec0d9c9946b82457513136}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Acceptance Gate

## Definition — verbatim
> "### Acceptance Gate" — .agents/architecture/ADR-057-prompt-behavioral-evaluation.md:87

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-057-prompt-behavioral-evaluation.md | 87 | defined here | Architectural specification of criteria blocking prompt changes that introduce behavioral regressions. |
| .claude/skills/adr-review/references/issue-resolution.md | 9 | defined here | Priority table column defining blocking resolution criteria for ADR issues. |
| .claude/skills/ai-agents-empirical-probe-toolkit/SKILL.md | 81 | used here | Instruction referencing ADR-057 acceptance gate implementation in evaluation scripts. |
| CONTRIBUTING.md | 399 | defined here | Contribution guideline section detailing pass/fail criteria for prompt change acceptance. |
| scripts/eval/eval-prompt-change.py | 5 | defined here | Module docstring describing implementation of ADR-057 acceptance gate logic. |
| scripts/eval/eval-prompt-change.py | 438 | defined here | Function implementing the acceptance gate algorithm and regression checks. |

## Consumes
Scenario comparison results, regression lists, flakiness metrics, and security-critical flags.

## Produces
Pass/fail verdict determining whether a prompt modification is acceptable for merge.

## When applied
Evaluated automatically in CI workflows (such as slash-command quality checks) or locally during prompt development prior to merge.

## Sub-concepts
regressions, has-improvement, acceptance-gate-relaxation

## Part of
prompt-behavioral-evaluation, routing-level-enforcement-gates

## Implementation status
defects: missing-path

## Design notes
An automated verification gate in rjm designed to block prompt modifications that introduce behavioral regressions. It enforces that `after_score >= before_score`, that no individual scenario flips from pass to fail (empty `regressions` list), and that flakiness rates remain below the allowed threshold, while permitting non-regressing edits even when no improvement flip occurs.
