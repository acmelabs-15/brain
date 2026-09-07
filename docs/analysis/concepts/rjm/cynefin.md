---
package: rjm
name: Cynefin
slug: cynefin
kind: reference
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-078-autoplan-orchestrator-router-boundary.md, sha256: 21223deef2b27e1961fbf9f2c04cb9d97eb086e088ae58ab38e73644c61b5139}
  - {path: .claude/agents/analyst.md, sha256: 89ee6f3da12d5954b10a0ce8e313264a6d303d45db4218afd485e9fe64dcc152}
  - {path: .claude/agents/orchestrator.md, sha256: e2a2f90033a2d7b39250a7cdc3f2a9d679b7397b2abcae2164e821b28d27add5}
  - {path: .claude/skills/analyze/references/engineering-complexity-tiers.md, sha256: 05278447141bdd73073aeed6363d837300adc6fe9dd1c8c1f85c011de321f243}
  - {path: .claude/skills/cynefin-classifier/SKILL.md, sha256: 693d6b820eed8768ff439de20b1541f57e73e716e8c9d5a111df606f9263ebf5}
  - {path: .claude/skills/cynefin-classifier/references/cynefin-deep-dive.md, sha256: fb53ed05e04e537279bef74af1ec36f88201706a739368496c267626d9cb0485}
  - {path: .claude/skills/cynefin-classifier/references/domain-transitions.md, sha256: 1823ee0f7fa344196f64b2288320ec3430976256773d7d559f0f12b61b845eec}
  - {path: .claude/skills/cynefin-classifier/references/software-applications.md, sha256: f7e15c1b5144a4af053fd201bf675d5648e67d04787b8e4b24dad09104cdebdc}
  - {path: .claude/skills/cynefin-classifier/scripts/classify.py, sha256: f5ce4befe58c6a8a7f8e8545099f29fca17bf8f89a0a63b40d09a8875028cb6a}
  - {path: .claude/skills/spec-generator/references/spec-prior-art-schema.md, sha256: 8202f29a8ee823367505128164055e0d25fc83557ae3a3055396c0ecab7f7978}
  - {path: scripts/eval/eval-agents.py, sha256: 48eee5226245d9a269beecb305d41e7bdad5e7fd995e93a3da23d8c3c33bce4e}
  - {path: src/claude/analyst.md, sha256: 89ee6f3da12d5954b10a0ce8e313264a6d303d45db4218afd485e9fe64dcc152}
  - {path: src/claude/orchestrator.md, sha256: e2a2f90033a2d7b39250a7cdc3f2a9d679b7397b2abcae2164e821b28d27add5}
  - {path: templates/agents/analyst.shared.md, sha256: 6b9742aa1f6e82b0e80d0c3b8897141c9d34f4be457de5c043c6b61a6175743a}
  - {path: templates/agents/orchestrator.shared.md, sha256: 1914175dbeaeb393d3d7fecd3b5c5aa694e2fe579397373f4bebd624360c7739}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Cynefin

## Definition — verbatim
> "The Cynefin Framework was developed by Dave Snowden in 1999 while working at IBM Global Services." — .claude/skills/cynefin-classifier/references/cynefin-deep-dive.md:5

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-078-autoplan-orchestrator-router-boundary.md | 48 | used here | Cites Cynefin complexity tiers (clear/complicated/complex/chaotic) used by orchestrator for triage. |
| .claude/agents/analyst.md | 236 | used here | Guides analytical triage using Cynefin domains to determine investigation depth. |
| .claude/agents/orchestrator.md | 53 | used here | Orchestrator triage protocol categorizing incoming requests across Cynefin domains. |
| .claude/skills/analyze/references/engineering-complexity-tiers.md | 76 | defined here | Maps Cynefin domains (clear, complicated, complex, chaotic) to engineering complexity tiers. |
| .claude/skills/cynefin-classifier/references/cynefin-deep-dive.md | 5 | defined here | Comprehensive deep-dive reference detailing origin, core insights, and domain behaviors. |
| .claude/skills/cynefin-classifier/references/domain-transitions.md | 1 | used here | Reference documenting dynamics of transitions and collapses between Cynefin domains. |
| .claude/skills/cynefin-classifier/references/software-applications.md | 1 | used here | Reference applying Cynefin classification across concrete software engineering scenarios. |
| .claude/skills/cynefin-classifier/scripts/classify.py | 2 | used here | CLI script automating text classification into Cynefin problem domains. |
| .claude/skills/cynefin-classifier/SKILL.md | 4 | used here | Main skill definition for classifying tasks into Cynefin domains to guide reasoning and planning. |
| .claude/skills/spec-generator/references/spec-prior-art-schema.md | 162 | used here | Problem domain classification schema combining Cynefin with engineering complexity tiers. |
| scripts/eval/eval-agents.py | 14 | used here | Evaluation script incorporating Cynefin classification in agent benchmark scenarios. |
| src/claude/analyst.md | 236 | used here | Mirrored analyst agent definition using Cynefin domains for request analysis. |
| src/claude/orchestrator.md | 53 | used here | Mirrored orchestrator agent definition using Cynefin triage before delegation. |
| templates/agents/analyst.shared.md | 227 | used here | Shared analyst template incorporating Cynefin complexity classification in problem analysis. |
| templates/agents/orchestrator.shared.md | 66 | used here | Shared orchestrator template using Cynefin classification for request routing. |

## Consumes
User request text, problem statements, uncertainty signals, environmental constraints.

## Produces
Domain classification (Clear, Complicated, Complex, Chaotic) calibrating planning depth, agent routing, and validation gates.

## When applied
Applied at task intake, specification drafting, agent orchestration, and evaluation across all development lifecycle phases.

## Sub-concepts
none

## Part of
none

## Implementation status
defects: doc-drift

## Design notes
A sense-making and complexity classification framework dividing problem spaces into Clear (best practice), Complicated (expert analysis), Complex (safe-to-fail probing), and Chaotic (immediate containment) domains. Used throughout rjm as a fundamental cognitive lens to calibrate reasoning depth, prevent over-engineering simple tasks, route to appropriate specialist agents, and halt PRD generation when problems are chaotic.
