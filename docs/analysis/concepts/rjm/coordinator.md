---
package: rjm
name: coordinator
slug: coordinator
kind: role
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/AGENT-SYSTEM.md, sha256: c11a55e17a0f0d0eca7936fc3ba2f3a071fcedf37fcf1a462a65a77831259641}
  - {path: .agents/architecture/ADR-098-agent-role-metadata-replaces-tier-hierarchy.md, sha256: d094c9283eee8c0798076191cc7f2bb8cb21db28a457234065a56952a25408c5}
  - {path: .claude/agents/critic.md, sha256: 85eae67441c3b6177c92a7fb6bd6f6c99687130bebb27e39b1202727f879808a}
  - {path: docs/agent-catalog.md, sha256: a391804348b3a3554b1f37ba0878075da91fc7b25816414afaa5dbaad915a067}
  - {path: templates/agents/critic.shared.md, sha256: 94cb41e3be663986453b13a24ae2df6f2036eeae38c7a07ef94499b76c457419}
  - {path: templates/agents/issue-feature-review.shared.md, sha256: 93f60194f6d05a1c61b3d2ccb6849d96437ad7b7d4ce356b847b38e657900fc6}
  - {path: templates/agents/milestone-planner.shared.md, sha256: d4d22f60c3fc2494c452046c3fb9f31a019874f4a2057ea5e5217dee5108f028}
  - {path: templates/agents/orchestrator.shared.md, sha256: 1914175dbeaeb393d3d7fecd3b5c5aa694e2fe579397373f4bebd624360c7739}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# coordinator

## Definition — verbatim
> "| `coordinator` | Routes work, sequences plans, aggregates parallel results | orchestrator, milestone-planner, critic, pr-comment-responder |" — .agents/AGENT-SYSTEM.md:836

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/AGENT-SYSTEM.md | 836 | defined here | Defined in Agent Roles table as agents routing work, sequencing plans, and aggregating parallel results. |
| .agents/architecture/ADR-098-agent-role-metadata-replaces-tier-hierarchy.md | 104 | defined here | Specified in ADR-098 as the closed role metadata value replacing the former manager tier. |
| .claude/agents/critic.md | 6 | used here | Frontmatter metadata declaring coordinator as the role classification for critic. |
| docs/agent-catalog.md | 22 | used here | Role designation for critic in the generated agent catalog table. |
| templates/agents/critic.shared.md | 2 | used here | Declared in frontmatter metadata for shared critic agent template. |
| templates/agents/issue-feature-review.shared.md | 2 | defined here | Declared in frontmatter metadata for shared issue-feature-review agent template. |
| templates/agents/milestone-planner.shared.md | 2 | defined here | Declared in frontmatter metadata for shared milestone-planner agent template. |
| templates/agents/orchestrator.shared.md | 2 | defined here | Declared in frontmatter metadata for shared orchestrator agent template. |

## Consumes
Task requests, candidate execution plans, review feedback, or parallel subagent outputs.

## Produces
Work routing decisions, sequenced execution plans, review verdicts, and aggregated results.

## When applied
> "Routes work, sequences plans, aggregates parallel results" — .agents/AGENT-SYSTEM.md:836

## Sub-concepts
none

## Part of
- agent-roles
- multi-agent-orchestration-system

## Implementation status
defects: missing-path, internal-contradiction (from .agents/AGENT-SYSTEM.md broken relative paths and missing spec files)

## Design notes
In rjm's architecture, `coordinator` describes agents responsible for planning, routing, sequencing, and validating execution flows. Encompassing `orchestrator`, `milestone-planner`, `critic`, and `pr-comment-responder`, coordinator agents govern task handoffs and multi-agent synthesis without owning code changes directly.
