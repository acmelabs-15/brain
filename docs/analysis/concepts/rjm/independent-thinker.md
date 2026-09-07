---
package: rjm
name: independent-thinker
slug: independent-thinker
kind: role
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/AGENT-SYSTEM.md, sha256: c11a55e17a0f0d0eca7936fc3ba2f3a071fcedf37fcf1a462a65a77831259641}
  - {path: .agents/architecture/ADR-039-agent-model-cost-optimization.md, sha256: 8c22565f67ff3b903c9bd5e455b5c11eb7d858702eff435639b0ce127ebccf1f}
  - {path: .agents/architecture/ADR-099-remove-commit-limit-bypass-gate.md, sha256: b88c9ceff7c5d7e9daf9efaf4a8348565d993020bd7c38ecdcdb4e16e97ba18f}
  - {path: .claude/skills/adr-review/SKILL.md, sha256: ecdf41ac4ac4750345c2beaf41790c0f4bfbf7b59b8ce3e953666f20a81a1662}
  - {path: .claude/skills/ai-agents-research-methodology/SKILL.md, sha256: 7141af7456e2a59337469559ce9bd051294b0413ffac614bab6bae44c49f9b83}
  - {path: .claude/skills/cva-analysis/SKILL.md, sha256: 43e45215d0c6aa5ae0d384806b42a6bbe2610a1cb5c2b73b2a840b6c44ea85a9}
  - {path: .claude/skills/cva-analysis/references/SKILL_SPEC.md, sha256: bbd5bfc3a226248265e589c01e3fd36d3855ad83010b7eeeee3e2f2576bb8b4a}
  - {path: .claude/skills/decision-critic/SKILL.md, sha256: 43c7e0effd00ca60aa277b29a6a0c525de1f3339fdde293f7e19bda9bce39d30}
  - {path: README.md, sha256: ca72955c7f43ad2e17a21064c0dfe9a7b2b594b958a130f1af308ad413640d7f}
  - {path: docs/agent-catalog.md, sha256: a391804348b3a3554b1f37ba0878075da91fc7b25816414afaa5dbaad915a067}
  - {path: src/claude/AGENTS.md, sha256: a7373badc34caabb986446749a8f1bd93401cfe6a7ee09e091e483e3e738271d}
  - {path: templates/AGENTS.md, sha256: 450fc9f683892f8a46b48f766f51b0261b1a057142b17c169aecabf385db3b67}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# independent-thinker

## Definition — verbatim
> "Challenges assumptions with evidence-based analysis" — .agents/AGENT-SYSTEM.md:432

## Also called — verbatim
> "Challenge assumptions, devil's advocate" — README.md:412

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/AGENT-SYSTEM.md | 428 | defined here | Agent catalog entry detailing contrarian analysis, assumption testing, and alternative viewpoints. |
| .agents/architecture/ADR-039-agent-model-cost-optimization.md | 100 | used here | Model assignment table mapping independent-thinker to high-capability reasoning models. |
| .agents/architecture/ADR-099-remove-commit-limit-bypass-gate.md | 303 | used here | Policy documentation referencing independent critique and challenge gates. |
| .claude/skills/adr-review/SKILL.md | 85 | used here | ADR review skill routing decision assumption challenges to independent-thinker. |
| .claude/skills/ai-agents-research-methodology/SKILL.md | 57 | used here | Research methodology skill incorporating contrarian challenge into research reviews. |
| .claude/skills/cva-analysis/references/SKILL_SPEC.md | 59 | used here | CVA specification reference noting independent-thinker review role. |
| .claude/skills/cva-analysis/SKILL.md | 357 | used here | CVA analysis skill routing domain variability challenges to independent-thinker. |
| .claude/skills/decision-critic/SKILL.md | 72 | used here | Decision critic skill invoking independent-thinker for assumption stress-testing. |
| docs/agent-catalog.md | 29 | used here | Catalog summary detailing assumption challenge and devil's advocate capabilities. |
| README.md | 277 | defined here | Architectural review workflow demonstrating independent-thinker challenging assumptions. |
| src/claude/AGENTS.md | 170 | used here | Claude Code agent catalog mapping independent-thinker role. |
| templates/AGENTS.md | 184 | used here | Shared agent catalog template defining independent-thinker persona. |

## Consumes
Decisions, architecture proposals, assumptions, consensus claims to fact-check.

## Produces
Evidence-based challenges, alternative perspectives with trade-offs, uncertainty declarations.

## When applied
Applied when validating critical architecture decisions, challenging groupthink or artificial consensus, and needing devil's advocate analysis.

## Sub-concepts
none

## Part of
multi-agent-orchestration-system

## Implementation status
clean

## Design notes
A contrarian specialist designed to prevent groupthink and confirmation bias in multi-agent workflows. By systematically stress-testing default consensus, challenging unverified assumptions with empirical evidence, and formulating viable architectural alternatives with trade-off analysis, independent-thinker ensures robust, resilient decision-making.
