---
package: rjm
name: OODA Loop
slug: ooda-loop
kind: technique
package_phase: rjm:cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/agents/high-level-advisor.md, sha256: 11ba70e40c7367c36fd869fad306307f57c749e00bb18c00d4081f8268cf42cf}
  - {path: .claude/commands/plan.md, sha256: 93701a56a97cb5353e2af08e422ca5868d4a9fb96c9ec2c886c82b0ce38ae979}
  - {path: .claude/skills/analyze/SKILL.md, sha256: a832f5ff2b626334f44a3dffc83b53525983976f8d47af52b90986f88a46e7a2}
  - {path: .claude/skills/analyze/references/engineering-complexity-tiers.md, sha256: 05278447141bdd73073aeed6363d837300adc6fe9dd1c8c1f85c011de321f243}
  - {path: .claude/skills/analyze/references/strategy-ooda-loop.md, sha256: b27a9dfc0c884c93391b7acecade4bd48ec460803cd31b4e1b2ddaff101e21b7}
  - {path: .claude/skills/planner/references/strategy-ooda-loop.md, sha256: b626a9d4fb9134de8b14ebf310a74d36130c4fe55cba4d698faceff1d66e2861}
  - {path: .claude/skills/pre-mortem/references/strategy-ooda-loop.md, sha256: 921b885698d4914564b0aae64f9554417e6aa8acbb318cd647f4005a9a0e3c83}
  - {path: templates/agents/high-level-advisor.shared.md, sha256: 1480a8eb6fbceee187f8b31f38d59cbbf96b4362d5c75bf23191fb9ba0ba0edb}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# OODA Loop

## Definition — verbatim
> "Decision-making framework for operating in uncertain, rapidly changing environments." — .claude/skills/analyze/references/strategy-ooda-loop.md:9

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/high-level-advisor.md | 57 | used here | Structured decision cycle cited as a core orientation framework for high-level advising. |
| .claude/commands/plan.md | 38 | used here | Planning methodology mapping Observe, Orient, Decide, and Act steps to rapid planning loop iteration. |
| .claude/skills/analyze/references/engineering-complexity-tiers.md | 76 | defined here | Positioned as a Level 4 decision-making framework for handling engineering complexity. |
| .claude/skills/analyze/references/strategy-ooda-loop.md | 7 | defined here | Comprehensive reference guide detailing OODA Loop phases mapped to code analysis. |
| .claude/skills/analyze/SKILL.md | 66 | used here | Skill reference linking OODA Loop decision-making to the analyze command phases. |
| .claude/skills/planner/references/strategy-ooda-loop.md | 7 | defined here | Reference guide for applying the OODA Loop to plan development and refinement. |
| .claude/skills/pre-mortem/references/strategy-ooda-loop.md | 7 | defined here | Reference guide connecting OODA orientation to risk identification during pre-mortems. |
| templates/agents/high-level-advisor.shared.md | 60 | used here | Shared reference citing OODA Loop for rapid orientation in strategic advising. |

## Consumes
Environmental signals, codebase state, operational telemetry, plan specifications.

## Produces
Rapid iterative cycles of observation, orientation, decision, and action.

## When applied
Applied across planning, investigation, and strategic advisory phases when operating in uncertain or evolving conditions.

## Sub-concepts
none

## Part of
high-level-advisor

## Implementation status
defects: missing-path, doc-drift

## Design notes
The OODA Loop (Observe, Orient, Decide, Act) governs rapid tactical iteration. In rjm, it models how agents ingest specs, inspect existing codebases, formulate execution steps, and commit atomic changes, emphasizing that faster tight feedback loops outperform lengthy speculative deliberation.
