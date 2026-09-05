---
unit: inv-rjm-4
phase: 1
package: rjm
session: 006
subagent_returned: complete
---

# Unit inv-rjm-4

## Files assigned
- [x] sources/rjm/.agents/analysis/vercel-passive-context-vs-skills-research.md (9718 bytes, 237 lines)
- [x] sources/rjm/.agents/architecture/ADR-001-markdown-linting.md (4386 bytes, 161 lines)
- [x] sources/rjm/.agents/architecture/ADR-002-agent-model-selection-optimization.md (10216 bytes, 236 lines)
- [x] sources/rjm/.agents/architecture/ADR-003-agent-tool-selection-criteria.md (18191 bytes, 362 lines)
- [x] sources/rjm/.agents/architecture/ADR-004-pre-commit-hook-architecture.md (7448 bytes, 187 lines)

## Outputs produced
- docs/analysis/inventory/rjm/agents-analysis-vercel-passive-context-vs-skills-research-md.md (8203 bytes)
- docs/analysis/inventory/rjm/agents-architecture-adr-001-markdown-linting-md.md (5798 bytes)
- docs/analysis/inventory/rjm/agents-architecture-adr-002-agent-model-selection-optimization-md.md (7237 bytes)
- docs/analysis/inventory/rjm/agents-architecture-adr-003-agent-tool-selection-criteria-md.md (9041 bytes)
- docs/analysis/inventory/rjm/agents-architecture-adr-004-pre-commit-hook-architecture-md.md (5504 bytes)
- docs/analysis/inventory/rjm/_units/inv-rjm-4.md

## Scripts executed
none

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- `.agents/analysis/vercel-passive-context-vs-skills-research.md` evaluates empirical benchmark findings on passive context in AGENTS.md versus on-demand skill retrieval, and proposes compressing `CRITICAL-CONTEXT.md` into pipe-delimited format. It is cited as background reading in `.claude/skills/context-optimizer/SKILL.md` (unit inv-rjm-11).
- `.agents/architecture/ADR-001-markdown-linting.md` establishes repository markdown standards (`markdownlint-cli2`), tailoring rules for agent prompt definitions (disabling MD013 and MD060; requiring MD040 and MD033 backtick escaping for generics). Referenced in ADR-002 and ADR-004.
- `.agents/architecture/ADR-002-agent-model-selection-optimization.md` defines a 5-dimension model assignment rubric across 18 agents, downgraded 9 agents from Opus to Sonnet for cost reduction. Its provisional supersession by ADR-039 failed and was reverted; subsequently, ADR-002 was deprecated on 2026-08-25 as its heuristic scoring was replaced by ADR-080's evidence-based default inheritance model enforced by `check_model_pins.py` and `model_pin_baseline.json`.
- `.agents/architecture/ADR-003-agent-tool-selection-criteria.md` establishes role-specific tool allocation (curating 4-20 tools per agent instead of ~58 tools), defining universal memory tools (`cloudmcp-manager/*`, `serena/*`), granular GitHub toolsets, restricting shell execution (`execute`) to implementation roles, and distinguishing full source code edits from artifact-only edits restricted to `.agents/`. Referenced in ADR-027.
- `.agents/architecture/ADR-004-pre-commit-hook-architecture.md` established `.githooks/pre-commit` as the validation orchestration point for fast local checks, auto-fixes, and PSScriptAnalyzer, creating three blocking tiers (BLOCKING, WARNING, AUTO-FIX). It was superseded on 2026-07-20 by ADR-086 (Lefthook local orchestration).

## Blocked or uncertain
none

## Time and size
Approximate source tokens: ~12,500 tokens (49,959 bytes across 5 files).
Approximate output tokens: ~9,000 tokens (35,783 bytes across 5 cards and 1 unit report).
