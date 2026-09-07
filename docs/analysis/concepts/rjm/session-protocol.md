---
package: rjm
name: session protocol
slug: session-protocol
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/analysis/002-project-constraints-consolidation.md, sha256: 74c855ae2dfa5a61bdffa01adf24b6715635da3b50add6f14531082e00a87394}
  - {path: .agents/analysis/adr-045-feasibility-analysis.md, sha256: fabe8278f52716f18b7a1e30350ec8ff0c55d155dcc91000ec5ab6940cdebfab}
  - {path: .agents/architecture/ADR-007-memory-first-architecture.md, sha256: 35acfcd104b6cfce3961f49b902453921ff02c6d02b5ca03ee95a43443fa37aa}
  - {path: .agents/architecture/ADR-008-protocol-automation-lifecycle-hooks.md, sha256: f9858d8a57344768ff57519852ffc367dc1b7ca3a21aed20435a5c75e6c27945}
  - {path: .agents/architecture/ADR-033-routing-level-enforcement-gates.md, sha256: 0b62580ef09da6d1986775cd9119f65f6e379d09e69716a0591c743fb81946c1}
  - {path: .agents/architecture/ADR-037-memory-router-architecture.md, sha256: 3fa19f71fe2972e04042582a4a1363d81c041f9e6f172dff587c04a2d53218e5}
  - {path: .agents/architecture/ADR-038-reflexion-memory-schema.md, sha256: c38ecd8c2fcbe6206a5ec4b4a80e06621ca3015db64a93894c4264f2bdfef509}
  - {path: .agents/architecture/ADR-045-framework-extraction-via-plugin-marketplace.md, sha256: 9010d2ac17b09423f0d984afeafdbbbc5144f1a5b43452dcd80d9936ac6dab5d}
  - {path: .agents/architecture/ADR-047-plugin-mode-hook-behavior.md, sha256: 3434f27ef9056e9a72836805fcc30dbb43f5447d14e4fe406330014c02503491}
  - {path: .agents/architecture/ADR-072-jtbd-plugin-architecture.md, sha256: dd3585a127093a7612362aaf1737c13379ef32d464af6f14b6151f87364c8052}
  - {path: .agents/projects/v0.4.0/PLAN.md, sha256: baac365e5ebb496bc12b222f22255687cd233cfaa43be637433f2d3f8a898570}
  - {path: .claude/skills/reflect/references/integration-and-design.md, sha256: 37a4ebbbef480bfe271c45cbd567a65f527f81114f9f955e9ec7f8de6b401624}
  - {path: .github/copilot-instructions.md, sha256: f0e44ddeda2012c7ead9451c1d8dc93a0ff2e05f4b7edaf49eed4c75bee4bad6}
  - {path: CONTRIBUTING.md, sha256: 09a1205b99939ad49462139c47ccd0ef1a4a191fc70839a1f532016a1ee66ffa}
  - {path: docs/architecture.md, sha256: 313b6db46f914559de625165f888be95ac076abd9a7bade6bb562d3339792453}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# session protocol

## Definition — verbatim
> "**Session protocol** requires structured logs with evidence for every session" — docs/architecture.md:191

## Also called — verbatim
SESSION-PROTOCOL — .agents/analysis/002-project-constraints-consolidation.md:800

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/analysis/002-project-constraints-consolidation.md | 25 | used here | Identified as the core operating protocol lacking blocking constraint validation checkpoints. |
| .agents/analysis/adr-045-feasibility-analysis.md | 15 | used here | Listed as one of four proposed standalone plugins containing hooks, session skills, and templates. |
| .agents/architecture/ADR-007-memory-first-architecture.md | 83 | used here | Specifies Step 0 of session protocol requiring agents to call list_memories before performing analysis. |
| .agents/architecture/ADR-008-protocol-automation-lifecycle-hooks.md | 24 | used here | Analyzes agent compliance limitations and proposes lifecycle hook automation to enforce protocol steps. |
| .agents/architecture/ADR-033-routing-level-enforcement-gates.md | 81 | defined here | Models session protocol as G1 PreToolUse enforcement gate blocking tool access until initialized. |
| .agents/architecture/ADR-037-memory-router-architecture.md | 505 | used here | Integrates Memory Router into session protocol startup steps for consistent retrieval. |
| .agents/architecture/ADR-038-reflexion-memory-schema.md | 232 | used here | Incorporates episode extraction and reflexion memory capture into the session end checklist. |
| .agents/architecture/ADR-045-framework-extraction-via-plugin-marketplace.md | 81 | defined here | Defines session-protocol extraction scope encompassing 12+ hooks, 3 skills, and the protocol template. |
| .agents/architecture/ADR-047-plugin-mode-hook-behavior.md | 38 | used here | Asserts that session protocol hooks must execute in consumer repository plugin mode rather than being skipped. |
| .agents/architecture/ADR-072-jtbd-plugin-architecture.md | 87 | defined here | Classifies session-protocol under the 'Learn and improve' job-to-be-done containing init, handoff, and retro. |
| .agents/projects/v0.4.0/PLAN.md | 133 | defined here | Designates session-protocol as one of four extracted marketplace plugins for modular installation. |
| .claude/skills/reflect/references/integration-and-design.md | 9 | used here | Specifies running reflection routines at session end within the session protocol checklist. |
| .github/copilot-instructions.md | 83 | defined here | Provides quick reference checklist of session protocol requirements for Copilot instructions. |
| CONTRIBUTING.md | 694 | used here | Outlines contributor session protocol preserving continuity via per-issue handoffs and memory. |
| docs/architecture.md | 191 | used here | Defines session protocol as an architectural quality checkpoint requiring structured evidence logs. |

## Consumes
Previous issue handoffs, active task descriptions, project constraints, and persistent memories.

## Produces
Session logs, evidence artifacts, updated handoffs, and retrospective records.

## When applied
Executed during every agent working session from start (Phase 1 initialization) to end (Phase 4 wrap-up).

## Sub-concepts
phase-1-5, constraint-validation, blocking-gate

## Part of
dev-lifecycle

## Implementation status
defects: missing-path, doc-drift

## Design notes
The session protocol is the operational lifecycle spine of the rjm agent system. It defines mandatory phase sequences that every session must navigate: environment initialization, constraint validation, work implementation, and retrospective handoff. By formalizing session start and end routines and backing them with automated hooks and blocking gates, the session protocol ensures agent continuity and prevents unmonitored drift across independent sessions.
