---
package: rjm
name: Decision
slug: decision
kind: artifact
package_phase: rjm:cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/adr-generator/references/adr-template.md, sha256: b2e5e4d7d00674c28331639b8cc7d205f3ff649dcf12b20225a7f0a9997dd020}
  - {path: .claude/skills/observability/SKILL.md, sha256: d07aa90e79ffe8c33b566756e2d80f22aabbcbb71daf128c132d2f1047d1d23f}
  - {path: .claude/skills/observability/schema.json, sha256: 1ace8993f809a4b99066c54b6612555cd89aaae0de1af9585a317fdb3b370632}
  - {path: scripts/consensus/decision_recorder.py, sha256: 685928c8108ab34bd2097a05886f27a74381a4291bd8bfd53b93ff4395ea72e3}
  - {path: scripts/maintenance/gc_worktrees.py, sha256: ddb43c967e699097aeafca6faa44390346c97a72d42a8fff4fe1beaa4f6203d9}
  - {path: scripts/maintenance/worktree_report.py, sha256: 251fe398370211c41c979ce7bbd3043f34661bf3c5e70fe998fdf151cd27cf11}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Decision

## Definition — verbatim
> "## Decision" — .claude/skills/adr-generator/references/adr-template.md:57

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/adr-generator/references/adr-template.md | 57 | defined here | Core ADR section clearly and unambiguously stating the chosen technical direction. |
| .claude/skills/observability/schema.json | 21 | defined here | Event type enum value in telemetry schema for logging agent reasoning alongside action. |
| .claude/skills/observability/SKILL.md | 50 | defined here | Event type specification capturing agent reasoning, action taken, and alternatives considered. |
| scripts/consensus/decision_recorder.py | 21 | defined here | Dataclass representing a recorded multi-agent consensus decision with votes and rationale. |
| scripts/maintenance/gc_worktrees.py | 99 | used here | Imported dataclass tracking individual git worktree garbage collection verdicts. |
| scripts/maintenance/worktree_report.py | 55 | defined here | Dataclass defining the pruning action, reason, and target commit for a worktree. |

## Consumes
Context, forces, evaluated alternatives, agent votes, or repository state.

## Produces
Authoritative architectural choices, structured agent telemetry logs, or recorded consensus decisions.

## When applied
Applied when selecting an architectural option, logging agent choices in JSONL, recording multi-agent consensus, or determining worktree cleanup actions.

## Sub-concepts
none

## Part of
none

## Implementation status
defects: doc-drift, exit-code-mismatch

## Design notes
In rjm, Decision represents the authoritative selection of a path forward. It manifests across three domains: (1) the pivotal section of an ADR articulating the adopted solution, (2) a structured observability event recording the reasoning behind an agent's actions, and (3) persisted Python dataclasses capturing multi-agent debate consensus and automated operational judgements.
