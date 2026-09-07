---
package: rjm
name: retrospective
slug: retrospective
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/AGENT-SYSTEM.md, sha256: c11a55e17a0f0d0eca7936fc3ba2f3a071fcedf37fcf1a462a65a77831259641}
  - {path: .agents/architecture/ADR-033-routing-level-enforcement-gates.md, sha256: 0b62580ef09da6d1986775cd9119f65f6e379d09e69716a0591c743fb81946c1}
  - {path: .agents/architecture/ADR-039-agent-model-cost-optimization.md, sha256: 8c22565f67ff3b903c9bd5e455b5c11eb7d858702eff435639b0ce127ebccf1f}
  - {path: .claude/agents/retrospective.md, sha256: a6db89e860d0f09ec1369b84e736acbeec1de7e94eb5d3e460f43101360d8566}
  - {path: .claude/skills/ai-agents-docs-of-record/SKILL.md, sha256: a262246040d329b1c4620441bdc61bb563e9fd33fe4eb61f36b8e4287913b728}
  - {path: .claude/skills/orphan-ref-validator/scripts/counts.py, sha256: 086ca656c2ab398e7f5ca5d88143b1ad092a965e3bc2757d6816c055f0da8213}
  - {path: .claude/skills/planner/SKILL.md, sha256: 37e67b69f3823d49f1c582e8630b9e55a7e88dc7159edca5c8a0c3c7463fa97e}
  - {path: .claude/skills/planner/scripts/executor.py, sha256: 799b7ea2a7c4a82acd3d64fe89ae0f9ee335efce29bb057086a26dc8232883e6}
  - {path: .claude/skills/retrospective/SKILL.md, sha256: 6c7113d712a281e9298cbf31f15f42ca8f316172a5eb5c1d5a86e0846f777264}
  - {path: .claude/skills/retrospective/references/learning-template.md, sha256: 22be20c049d593d49ff4a9c5fe1df636ed19f5721492ee137679df08478d802b}
  - {path: README.md, sha256: ca72955c7f43ad2e17a21064c0dfe9a7b2b594b958a130f1af308ad413640d7f}
  - {path: docs/agent-catalog.md, sha256: a391804348b3a3554b1f37ba0878075da91fc7b25816414afaa5dbaad915a067}
  - {path: docs/autonomous-issue-development.md, sha256: 71f847a86f2ad77877dbcee5cd3c3e4def0ec0ef01d5a31fc81b178148ae001c}
  - {path: scripts/validation/git_hook_policy.py, sha256: 43137253ce418f1bb7e76d0eeddf685cbc9041c84c49e2b38395d0605bdf5ada}
  - {path: src/claude/AGENTS.md, sha256: a7373badc34caabb986446749a8f1bd93401cfe6a7ee09e091e483e3e738271d}
  - {path: templates/AGENTS.md, sha256: 450fc9f683892f8a46b48f766f51b0261b1a057142b17c169aecabf385db3b67}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# retrospective

## Definition — verbatim
> "**Role**: Extracts learnings from execution" — .agents/AGENT-SYSTEM.md:649

## Also called — verbatim
- `Retrospective` — .claude/skills/ai-agents-docs-of-record/SKILL.md:31

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/AGENT-SYSTEM.md | 645 | defined here | Defined as an agent role and learning extraction capability using Five Whys and fishbone analysis. |
| .agents/architecture/ADR-033-routing-level-enforcement-gates.md | 158 | defined here | Defined as an enforcement gate checking for retrospective evidence on git push. |
| .agents/architecture/ADR-039-agent-model-cost-optimization.md | 125 | used here | Re-evaluated for model cost optimization and assigned to Sonnet 4.5. |
| .claude/agents/retrospective.md | 2 | defined here | Defined as specialized agent prompt for root-cause analysis and skillbook updates. |
| .claude/skills/ai-agents-docs-of-record/SKILL.md | 31 | defined here, used here | Cataloged as an authoritative doc-of-record stored under `.agents/retrospective/`. |
| .claude/skills/orphan-ref-validator/scripts/counts.py | 20 | used here | Included in script counting valid agent and skill references. |
| .claude/skills/planner/scripts/executor.py | 12 | defined here | Referenced as an execution phase in automated plan tracking. |
| .claude/skills/planner/SKILL.md | 224 | defined here | Structured as Step 7 in the canonical plan execution sequence. |
| .claude/skills/retrospective/references/learning-template.md | 15 | defined here | Defines the template structure for persisting retrospective artifacts. |
| .claude/skills/retrospective/SKILL.md | 2 | defined here | Defined as a structured 6-phase skill turning execution experience into institutional knowledge. |
| docs/agent-catalog.md | 40 | used here | Cataloged as a support role agent performing root cause analysis and atomicity scoring. |
| docs/autonomous-issue-development.md | 149 | used here | Structured as Phase 5 in the autonomous issue development lifecycle before PR creation. |
| README.md | 407 | defined here, used here | Listed in the core agent catalog for post-session learning extraction. |
| scripts/validation/git_hook_policy.py | 8409 | defined here | Implemented as a validation check handler in git hook policy enforcement. |
| src/claude/AGENTS.md | 177 | used here | Listed in support agents table mapped to `retrospective.md`. |
| templates/AGENTS.md | 179 | used here | Cataloged in shared agents reference table for outcome analysis and skill extraction. |

## Consumes
Completed tasks, session logs, git history, incident reports, and failure evidence.

## Produces
Retrospective markdown reports in `.agents/retrospective/YYYY-MM-DD-[scope].md` and skill update recommendations (ADD/UPDATE/TAG/REMOVE).

## When applied
> "- After task completion" — .agents/AGENT-SYSTEM.md:668

## Sub-concepts
- five-whys
- fishbone-analysis
- skill-extraction

## Part of
- support
- orchestrator

## Implementation status
defects: missing-path, internal-contradiction, unfailable-gate (from .agents/AGENT-SYSTEM.md relative path errors, ADR-033 retired enforcement gates, and ADR-039 missed criteria)

## Design notes
`retrospective` is rjm's primary mechanism for closed-loop continuous improvement, functioning across the lifecycle as an agent, a workflow skill, an enforcement gate, and a mandatory lifecycle phase (Phase 5 in autonomous development and Step 7 in plan execution). It prevents repeated failures by conducting structured root-cause investigations (Five Whys, fishbone analysis) on every failure or milestone completion, distilling concrete learnings into permanent documentation and skillbook updates.
