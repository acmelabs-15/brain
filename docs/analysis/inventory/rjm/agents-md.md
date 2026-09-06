---
package: rjm
path: AGENTS.md
type: doc
bytes: 2947
unit: inv-rjm-186
in_scope_via: docs/workflow-commands.md
aliases: []
memo_inputs:
  - {path: AGENTS.md, sha256: a872352c2c57ff59c7db1238910b6685b800ab8a3e8fa9e37a76418d467df471}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# AGENTS.md

## Purpose — required, verbatim
> "1. `mcp__serena__activate_project`|2. `mcp__serena__initial_instructions`|fallback: `.serena/memories/<name>.md`|Post-compaction: re-run both" — AGENTS.md:5 (no explicit purpose statement)

## Design intent — required
Repository-level developer and autonomous agent operations manual. It defines mandatory Serena memory initialization, retrieval resources, lifecycle session execution gates (Start, Mid, Pre-PR, End), strict autonomy guardrails and action boundaries (blocking verification, always/never rules, and ask-first escalations), skill-first workflow routing (including lifecycle commands `/spec /plan /build /test /review /ship`), ADR review triggers, coding/testing standards (exit codes, test coverage tiers, commit formats), and software stack requirements. Without it, autonomous agents operating in the repository lack immediate, top-level constraints for initialization, governance boundaries, commit/exit conventions, and tool routing.

## Phase — required
cross-phase

## Inputs — required
- Serena MCP memory and project activation status — AGENTS.md:5
- Latest issue handoff and git repository state — AGENTS.md:16
- Constraints (`.agents/governance/PROJECT-CONSTRAINTS.md`) and ADRs (`.agents/architecture/README.md`) — AGENTS.md:10
- Rule files (`.claude/rules/*.md`) and style guide (`.gemini/styleguide.md`) — AGENTS.md:12,18

## Outputs — required
- Session handoff records or issue handoff if open — AGENTS.md:19
- Serena knowledge persistence updates — AGENTS.md:19
- Scoped git commits following conventional commit syntax `<type>(<scope>): <desc>` + `Co-Authored-By:` — AGENTS.md:49
- Pre-PR validation reports from `scripts/validation/pre_pr.py` — AGENTS.md:18

## Invokes — required
- reference .agents/governance/PROJECT-CONSTRAINTS.md — AGENTS.md:10
- reference .agents/architecture/README.md — AGENTS.md:10
- script scripts/validation/pre_pr.py — AGENTS.md:18
- doc .gemini/styleguide.md — AGENTS.md:18
- skill pr-comment-responder — AGENTS.md:35
- command /push-pr — AGENTS.md:35
- skill security-detection — AGENTS.md:36
- skill analyze — AGENTS.md:36
- skill reflect — AGENTS.md:36
- command /spec — AGENTS.md:36
- command /plan — AGENTS.md:36
- command /build — AGENTS.md:36
- command /test — AGENTS.md:36
- skill review — AGENTS.md:36
- command /ship — AGENTS.md:36
- agent merge-resolver — AGENTS.md:37
- doc .agents/governance/CI-FEEDBACK-SUBLOOP.md — AGENTS.md:38
- agent orchestrator — AGENTS.md:39
- reference agent-harness-reference — AGENTS.md:41
- skill ai-agents-portability-campaign — AGENTS.md:41
- skill adr-review — AGENTS.md:45
- doc .agents/governance/TESTING-RIGOR.md — AGENTS.md:53

## Invoked by — required
- doc CLAUDE.md — CLAUDE.md:3
- doc docs/workflow-commands.md — docs/workflow-commands.md:228
- doc README.md — README.md:421
- doc docs/customization.md — docs/customization.md:14

## Concepts named — required, verbatim
- `Serena Init` — AGENTS.md:3 — defined here
- `Retrieval` — AGENTS.md:7 — defined here
- `Gates` — AGENTS.md:14 — defined here
- `Start` — AGENTS.md:16 — defined here
- `Mid` — AGENTS.md:17 — defined here
- `Pre-PR` — AGENTS.md:18 — defined here
- `End` — AGENTS.md:19 — defined here
- `Boundaries` — AGENTS.md:21 — defined here
- `BLOCKING verify` — AGENTS.md:23 — defined here
- `ADR-042` — AGENTS.md:24 — used here
- `ADR-092` — AGENTS.md:24 — used here
- `Ask First` — AGENTS.md:25 — defined here
- `Autonomy Guardrail` — AGENTS.md:26 — defined here
- `ADR-006` — AGENTS.md:27 — used here
- `Skill-First` — AGENTS.md:33 — defined here
- `CI-feedback sub-loop` — AGENTS.md:38 — defined here
- `ADR-078` — AGENTS.md:39 — used here
- `buy-vs-build Quick` — AGENTS.md:40 — defined here
- `ADR Review` — AGENTS.md:43 — defined here
- `Standards` — AGENTS.md:47 — defined here
- `Exit codes` — AGENTS.md:50 — defined here
- `Coverage` — AGENTS.md:51 — defined here
- `Stack` — AGENTS.md:55 — defined here

## Structure
- `## Serena Init (BLOCKING)` — AGENTS.md:3
- `## Retrieval` — AGENTS.md:7
- `## Gates` — AGENTS.md:14
- `## Boundaries` — AGENTS.md:21
- `## Context` — AGENTS.md:29
- `## Skill-First` — AGENTS.md:33
- `### ADR Review` — AGENTS.md:43
- `## Standards` — AGENTS.md:47
- `## Stack` — AGENTS.md:55

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
- Written in an ultra-compact telegraphic style using vertical pipes (`|`) to maximize instruction density per token.
- Standardizes repository exit code semantics on line 50: `0=ok|1=logic|2=config|3=external|4=auth`.
- Defines commit boundaries: atomic commits <= 5 files, conventional format `<type>(<scope>): <desc>` plus `Co-Authored-By:` attribution.
- Enforces risk-tiered testing coverage thresholds: 100% security, 80% business, 60% docs (line 51).

## Context cost
2947 bytes (~750 tokens).
