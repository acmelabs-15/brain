---
unit: inv-rjm-1
phase: 1
package: rjm
session: 003
subagent_returned: complete
---

# Unit inv-rjm-1

## Files assigned
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/.agents/AGENT-SYSTEM.md`

## Outputs produced
- `docs/analysis/inventory/rjm/agents-agent-system-md.md` (19749 bytes)

## Scripts executed
none

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- Unit inv-rjm-1 is the initial foundational unit for package `rjm`, covering `.agents/AGENT-SYSTEM.md` (53,992 bytes, 1909 lines), the central multi-agent system architecture and operations manual.
- Key architectural findings:
  - Documents 20 specialized agents organized across coordination, implementation, quality, design, strategy, and support.
  - Defines 7 core workflow execution patterns: Quick Fix (`orchestrator → implementer → qa`), Standard Development (`orchestrator → analyst → milestone-planner → implementer → qa` with lite and extended variants), Strategic Decision (`orchestrator → independent-thinker → high-level-advisor → task-decomposer`), Ideation (`analyst → high-level-advisor → independent-thinker → critic → roadmap → explainer → task-decomposer → architect → devops → security → qa`), Impact Analysis (multi-domain review across 5 specialist domains), Learning Extraction (`orchestrator → retrospective → skillbook`), and Spec Layer Workflow (3-tier specification).
  - Specifies 3-tier requirements traceability (`REQ-NNN` requirements in EARS syntax → `DESIGN-NNN` design documents → `TASK-NNN` atomic tasks) with bidirectional traceability chains.
  - Formulates ADR-098 agent coordination rules: agent frontmatter `role:` values (`strategic`, `coordinator`, `executor`, `support`) are descriptive metadata rather than runtime invocation authorities. Conflict aggregation strategies (`merge`, `vote`, `escalate`) route hard conflicts to `high-level-advisor`.
  - Details parallel execution governance: worktree isolation using `git worktree add -b <branch>`, GitHub API rate limit budgeting, and structured aggregation.
  - Implements the "Kiro pattern" of glob-scoped steering injection (`.agents/steering/*.md`) into agent prompts, saving ~30% context tokens compared to global guidance injection.
- Defects discovered via METHOD.md §4 checklist:
  - `missing-path` at line 153 (`src/claude/spec-generator.md` does not exist in repo).
  - `missing-path` at line 372 (`.agents/planning/PLAN-auth.md` does not exist).
  - `missing-path` at line 866 and line 1082 (`../../src/claude/orchestrator.md` path traversal above repo root).
  - `missing-path` at line 1015 (`.agents/roadmap/backlog.md` does not exist).
  - `missing-path` at line 1584 (`.agents/steering/csharp-patterns.md` does not exist).
  - `internal-contradiction` at line 39 vs 788 (claims 20 agents in 5 categories, but contains 6 functional subsections and duplicate `## 2.5 Agent Coordination` heading).
  - `internal-contradiction` at line 1741 (Agent Model Assignment table lists 18 agents, omitting `merge-resolver` and `spec-generator`, while listing `memory` which line 700 designates as a skill and tool contract).
  - `internal-contradiction` at line 837 (Agent Roles table lists `debug` under executor examples, but `debug` is absent from the catalog).
- None of this unit's files appear in `docs/analysis/manifest/rjm-duplicates.md` (no ledger duplicates; no divergence cards needed).

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~13,500 tokens (53,992 bytes across 1 file, 1909 lines); approximate tokens of output written: ~5,500 tokens (19,749 bytes for card, 3,140 bytes for unit report).
