---
package: rjm
name: Pre-Mortem
slug: pre-mortem
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/commands/build.md, sha256: 29d6811b2eb2712273cae310f4addb615187cc2a8746c35bc1bfc99c262234c5}
  - {path: .claude/skills/business-strategy/references/influence.md, sha256: 75ebcd66c931d69ac38ca458339fe8e57d34e2e63c17ea18459698a8fe648c41}
  - {path: .claude/skills/business-strategy/references/made-to-stick.md, sha256: 5de46c0e87278655616732e8a810a2cbbc642565c3fcd3a9a3c7a43e89177cdd}
  - {path: .claude/skills/buy-vs-build-framework/SKILL.md, sha256: 51ab60206739563c53683a976bc1c1c94fe21229452a6820fc0b126729d2e0a7}
  - {path: .claude/skills/buy-vs-build-framework/references/PHASE1_ANALYSIS.md, sha256: b2e62451bc202e69bce365986c0189d44776bc7ee1d6ee58ebe5b60c85061298}
  - {path: .claude/skills/buy-vs-build-framework/references/SKILL_SPEC.xml, sha256: 2cae1d909bd9d8286a7e5a55fa3f48b5a895c973003303d382483a198ffca2a8}
  - {path: .claude/skills/chaos-experiment/SKILL.md, sha256: 3bebfe39adb559c75a55a96b2ecebb91143bfb2522de30fc96b12606ca2aba03}
  - {path: .claude/skills/cva-analysis/references/SKILL_SPEC.md, sha256: bbd5bfc3a226248265e589c01e3fd36d3855ad83010b7eeeee3e2f2576bb8b4a}
  - {path: .claude/skills/decision-critic/SKILL.md, sha256: 43c7e0effd00ca60aa277b29a6a0c525de1f3339fdde293f7e19bda9bce39d30}
  - {path: .claude/skills/decision-critic/references/decision-pre-committed-metrics.md, sha256: 63254480cf2921d4c45857646e7af6cfe4379fb03cef1afe4cd2c8378013b495}
  - {path: .claude/skills/pre-mortem/SKILL.md, sha256: 34343eb627115cf687aac037469c62356339145bdfbee3063e94dedfe952ef97}
  - {path: .claude/skills/review/references/decision-rigor.md, sha256: acaa1778a6530d256a2996600af0674cd8f187af1f7777bf47df70e977233dcb}
  - {path: .claude/skills/skillforge/assets/templates/skill-spec-template.xml, sha256: 58a4c3f18d2b7e35138bf1058d787f594d46638756ba61e344553b7ee476e3cc}
  - {path: .claude/skills/skillforge/references/multi-lens-framework.md, sha256: b716c53f819caa1acd7b80de5bafc085922e78dbe55183d3ddc5a2753afb5e65}
  - {path: .claude/skills/spec-generator/references/spec-prior-art-schema.md, sha256: 8202f29a8ee823367505128164055e0d25fc83557ae3a3055396c0ecab7f7978}
  - {path: docs/workflow-commands.md, sha256: 9973a4075e74a995c9fd811732e52457f3e6b26a94da896e3ba9f976c5dcaef0}
  - {path: scripts/eval/eval-agents.py, sha256: 48eee5226245d9a269beecb305d41e7bdad5e7fd995e93a3da23d8c3c33bce4e}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Pre-Mortem

## Definition — verbatim
> "Guide prospective hindsight analysis to identify project risks before failure occurs. Teams imagine the project has failed spectacularly, then work backward to identify causes." — .claude/skills/pre-mortem/SKILL.md:4

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/commands/build.md | 34 | defined here | Invoked before code changes to capture the top 2-3 critical risks and mitigations in the plan or issue handoff. |
| .claude/skills/business-strategy/references/influence.md | 56 | used here | Cited as a strategic mechanism to surface organizational commitment risks and consensus gaps. |
| .claude/skills/business-strategy/references/made-to-stick.md | 103 | used here | Referenced as an analytical exercise to identify narrative and execution blindspots before project rollout. |
| .claude/skills/buy-vs-build-framework/references/PHASE1_ANALYSIS.md | 16 | used here | Employed during Phase 1 procurement analysis to anticipate vendor failure and architectural lock-in risks. |
| .claude/skills/buy-vs-build-framework/references/SKILL_SPEC.xml | 203 | used here | Incorporated as a required risk analysis lens in the buy-vs-build specification schema. |
| .claude/skills/buy-vs-build-framework/SKILL.md | 54 | used here | Listed as an analytical risk exercise for evaluating third-party software integration decisions. |
| .claude/skills/chaos-experiment/SKILL.md | 4 | used here | Used to anticipate failure modes when designing resilient chaos engineering experiments. |
| .claude/skills/cva-analysis/references/SKILL_SPEC.md | 20 | used here | Referenced as a risk identification step within customer value architecture evaluations. |
| .claude/skills/decision-critic/references/decision-pre-committed-metrics.md | 92 | used here | Applied to identify prospective failure triggers before locking in decision evaluation metrics. |
| .claude/skills/decision-critic/SKILL.md | 4 | used here | Contrastingly referenced as a project-level failure analysis technique versus decision-level logic stress testing. |
| .claude/skills/pre-mortem/SKILL.md | 2 | defined here | Defined as a dedicated prospective hindsight skill guiding teams to uncover project risks before execution. |
| .claude/skills/review/references/decision-rigor.md | 52 | used here | Cited in decision rigor review guidelines to verify that prospective failure scenarios were explored. |
| .claude/skills/skillforge/assets/templates/skill-spec-template.xml | 29 | used here | Embedded in the SkillForge specification template as a standard risk evaluation section. |
| .claude/skills/skillforge/references/multi-lens-framework.md | 95 | defined here | Defined as an essential risk-modeling lens within the multi-lens engineering evaluation framework. |
| .claude/skills/spec-generator/references/spec-prior-art-schema.md | 297 | used here | Listed in specification schemas as a prior-art evaluation technique for identifying architectural pitfalls. |
| docs/workflow-commands.md | 82 | defined here | Documented as a step in `/plan` where analyst agents execute pre-mortem analysis to construct risk registers. |
| scripts/eval/eval-agents.py | 181 | used here | Referenced in agent evaluation benchmark suites to measure prospective risk identification accuracy. |

## Consumes
Project briefs, task descriptions, architecture proposals, or plan drafts.

## Produces
A prioritized risk register identifying critical failure scenarios along with actionable upfront mitigations.

## When applied
During project kickoff, plan formation in `/plan`, or immediately before coding in `/build`.

## Sub-concepts
none

## Part of
risk-management

## Implementation status
defects: missing-path, exit-code-mismatch (.claude/skills/pre-mortem/SKILL.md:319, 320, 258); clean in .claude/commands/build.md and docs/workflow-commands.md

## Design notes
Pre-Mortem applies prospective hindsight to surface catastrophic failure modes before implementation starts. By asking teams to assume a project has already failed, it circumvents confirmation bias and social pressure against voicing concerns, generating a concrete risk register whose mitigations can be built directly into the plan.
