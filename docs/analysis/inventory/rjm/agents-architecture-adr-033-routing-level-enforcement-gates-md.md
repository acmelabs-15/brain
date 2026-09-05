---
package: rjm
path: .agents/architecture/ADR-033-routing-level-enforcement-gates.md
type: agent
bytes: 19238
unit: inv-rjm-12
in_scope_via: .agents/architecture/README.md
aliases: []
memo_inputs:
  - {path: .agents/architecture/ADR-033-routing-level-enforcement-gates.md, sha256: 0b62580ef09da6d1986775cd9119f65f6e379d09e69716a0591c743fb81946c1}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .agents/architecture/ADR-033-routing-level-enforcement-gates.md

## Purpose — required, verbatim
> "**Implement routing-level enforcement gates using Claude Code hooks.**" — .agents/architecture/ADR-033-routing-level-enforcement-gates.md:67

## Design intent — required
Architectural decision record establishing deterministic routing-level enforcement gates implemented via Claude Code hooks at the tool invocation layer (PreToolUse) rather than within individual skills. Solves autonomous agent protocol bypass (skipping session logs, omitting QA validation, bypassing reviews, and pushing unreviewed changes) by blocking high-stakes commands (`git commit`, `gh pr create`, `gh pr merge`, `git push`) with deterministic exit codes or structured JSON deny payloads. Later amendments document the operational evolution and retirement of dedicated PreToolUse hooks in favor of Lefthook Git pre-commit/pre-push hooks and CI checks.

## Phase — required
cross-phase

## Inputs — required
PR #226 retrospective detailing autonomous agent protocol bypass (`.agents/architecture/ADR-033-routing-level-enforcement-gates.md:34-36`), vexjoy architectural principles ("Everything Deterministic", "Do Router") (`.agents/architecture/ADR-033-routing-level-enforcement-gates.md:53-54, 512-513`), Claude Code hooks specification and exit code semantics (`.agents/architecture/ADR-033-routing-level-enforcement-gates.md:120-127, 514`), Session 100 multi-agent debate (`.agents/architecture/ADR-033-routing-level-enforcement-gates.md:515`), ADR-005 PowerShell constraint (`.agents/architecture/ADR-033-routing-level-enforcement-gates.md:193`), EPIC #265 (`.agents/architecture/ADR-033-routing-level-enforcement-gates.md:349, 458-462`), Issue #618 (`.agents/architecture/ADR-033-routing-level-enforcement-gates.md:403`), and hook retirement issues #3194, #3246, #3248 under ROI reduction program #3197 (`.agents/architecture/ADR-033-routing-level-enforcement-gates.md:16, 476, 504`).

## Outputs — required
Routing-level enforcement gate architecture blocking critical actions at the PreToolUse layer (`.agents/architecture/ADR-033-routing-level-enforcement-gates.md:67-70, 150-159`), JSON decision mode schema (`decision: "deny"`) and exit code mapping (`.agents/architecture/ADR-033-routing-level-enforcement-gates.md:128-149`), Claude hook configuration schema (`.agents/architecture/ADR-033-routing-level-enforcement-gates.md:162-189`), PowerShell hook implementation (`.agents/architecture/ADR-033-routing-level-enforcement-gates.md:195-259`), and subsequent amendments recording the retirement of dedicated PreToolUse hooks in favor of Lefthook pre-commit (`session-policy`, `adr-review-policy`) and pre-push (`retrospective-policy`) jobs (`.agents/architecture/ADR-033-routing-level-enforcement-gates.md:16-25, 475-508`).

## Invokes — required
- config ADR-032 — .agents/architecture/ADR-033-routing-level-enforcement-gates.md:40
- config ADR-035 — .agents/architecture/ADR-033-routing-level-enforcement-gates.md:118
- config ADR-005 — .agents/architecture/ADR-033-routing-level-enforcement-gates.md:193
- skill skillcreator — .agents/architecture/ADR-033-routing-level-enforcement-gates.md:369
- doc SKILL-CREATION-CRITERIA.md — .agents/architecture/ADR-033-routing-level-enforcement-gates.md:382
- doc .claude/skills/skillcreator/SKILL.md — .agents/architecture/ADR-033-routing-level-enforcement-gates.md:517

## Invoked by — required
- doc .agents/architecture/README.md — .agents/architecture/README.md:113
- agent .agents/architecture/ADR-035-exit-code-standardization.md — .agents/architecture/ADR-035-exit-code-standardization.md:492

## Concepts named — required, verbatim
- `routing-level enforcement gates` — .agents/architecture/ADR-033-routing-level-enforcement-gates.md:67 — defined here
- `Claude Code hooks` — .agents/architecture/ADR-033-routing-level-enforcement-gates.md:67 — used here
- `tool invocation layer` — .agents/architecture/ADR-033-routing-level-enforcement-gates.md:69 — defined here
- `PreToolUse` — .agents/architecture/ADR-033-routing-level-enforcement-gates.md:16 — used here
- `Session Protocol` — .agents/architecture/ADR-033-routing-level-enforcement-gates.md:81 — defined here
- `QA Validation` — .agents/architecture/ADR-033-routing-level-enforcement-gates.md:82 — defined here
- `Critic Review` — .agents/architecture/ADR-033-routing-level-enforcement-gates.md:83 — defined here
- `ADR Existence` — .agents/architecture/ADR-033-routing-level-enforcement-gates.md:84 — defined here
- `Retrospective` — .agents/architecture/ADR-033-routing-level-enforcement-gates.md:158 — defined here
- `JSON Decision Mode` — .agents/architecture/ADR-033-routing-level-enforcement-gates.md:128 — defined here
- `Everything Deterministic` — .agents/architecture/ADR-033-routing-level-enforcement-gates.md:53 — used here
- `Do Router` — .agents/architecture/ADR-033-routing-level-enforcement-gates.md:54 — used here
- `lefthook` — .agents/architecture/ADR-033-routing-level-enforcement-gates.md:488 — used here
- `session-policy` — .agents/architecture/ADR-033-routing-level-enforcement-gates.md:488 — used here
- `retrospective-policy` — .agents/architecture/ADR-033-routing-level-enforcement-gates.md:493 — used here
- `adr-review-policy` — .agents/architecture/ADR-033-routing-level-enforcement-gates.md:494 — used here
- `SkillCreator` — .agents/architecture/ADR-033-routing-level-enforcement-gates.md:372 — used here

## Structure
- ADR-033: Routing-Level Enforcement Gates — .agents/architecture/ADR-033-routing-level-enforcement-gates.md:12
- Status — .agents/architecture/ADR-033-routing-level-enforcement-gates.md:14
- Current-State Amendment (2026-08-16) — .agents/architecture/ADR-033-routing-level-enforcement-gates.md:18
- Date — .agents/architecture/ADR-033-routing-level-enforcement-gates.md:26
- Context — .agents/architecture/ADR-033-routing-level-enforcement-gates.md:30
- Problem Statement — .agents/architecture/ADR-033-routing-level-enforcement-gates.md:32
- Why ADR-032 Was Wrong — .agents/architecture/ADR-033-routing-level-enforcement-gates.md:40
- Philosophical Grounding — .agents/architecture/ADR-033-routing-level-enforcement-gates.md:49
- Current Enforcement Gap — .agents/architecture/ADR-033-routing-level-enforcement-gates.md:56
- Decision — .agents/architecture/ADR-033-routing-level-enforcement-gates.md:65
- Gate Architecture — .agents/architecture/ADR-033-routing-level-enforcement-gates.md:71
- Gate Decision Flow — .agents/architecture/ADR-033-routing-level-enforcement-gates.md:98
- Enforcement Mechanism — .agents/architecture/ADR-033-routing-level-enforcement-gates.md:114
- Gate Types — .agents/architecture/ADR-033-routing-level-enforcement-gates.md:150
- Hook Configuration — .agents/architecture/ADR-033-routing-level-enforcement-gates.md:160
- Gate Implementation (PowerShell) — .agents/architecture/ADR-033-routing-level-enforcement-gates.md:191
- Rationale — .agents/architecture/ADR-033-routing-level-enforcement-gates.md:261
- Why Hooks Over Documentation — .agents/architecture/ADR-033-routing-level-enforcement-gates.md:263
- Why Routing-Level Over Skill-Level — .agents/architecture/ADR-033-routing-level-enforcement-gates.md:271
- Alternatives Considered — .agents/architecture/ADR-033-routing-level-enforcement-gates.md:282
- Trade-offs — .agents/architecture/ADR-033-routing-level-enforcement-gates.md:291
- Reversibility Assessment — .agents/architecture/ADR-033-routing-level-enforcement-gates.md:305
- Can hooks be disabled without side effects? — .agents/architecture/ADR-033-routing-level-enforcement-gates.md:307
- What happens if a gate unexpectedly blocks legitimate work? — .agents/architecture/ADR-033-routing-level-enforcement-gates.md:311
- Downgrade path (blocking → advisory) — .agents/architecture/ADR-033-routing-level-enforcement-gates.md:319
- Vendor lock-in assessment — .agents/architecture/ADR-033-routing-level-enforcement-gates.md:334
- Consequences — .agents/architecture/ADR-033-routing-level-enforcement-gates.md:342
- Positive — .agents/architecture/ADR-033-routing-level-enforcement-gates.md:344
- Negative — .agents/architecture/ADR-033-routing-level-enforcement-gates.md:351
- Neutral — .agents/architecture/ADR-033-routing-level-enforcement-gates.md:358
- Implementation Notes — .agents/architecture/ADR-033-routing-level-enforcement-gates.md:363
- Skill Creation Guidance — .agents/architecture/ADR-033-routing-level-enforcement-gates.md:365
- Phase 1: Foundation (This PR) — .agents/architecture/ADR-033-routing-level-enforcement-gates.md:384
- Phase 2: QA Gate — .agents/architecture/ADR-033-routing-level-enforcement-gates.md:391
- Phase 3: Critic Gate — .agents/architecture/ADR-033-routing-level-enforcement-gates.md:397
- Phase 3.5: Retrospective Gate (Issue #618) — .agents/architecture/ADR-033-routing-level-enforcement-gates.md:403
- Phase 4: "Do Router" Integration — .agents/architecture/ADR-033-routing-level-enforcement-gates.md:418
- Metrics — .agents/architecture/ADR-033-routing-level-enforcement-gates.md:424
- Relationship to Other Work — .agents/architecture/ADR-033-routing-level-enforcement-gates.md:433
- EPIC #265 (Pre-PR Validation) — .agents/architecture/ADR-033-routing-level-enforcement-gates.md:457
- Original Skill Phase Gates Proposal — .agents/architecture/ADR-033-routing-level-enforcement-gates.md:463
- Session State MCP (Issue #219) — .agents/architecture/ADR-033-routing-level-enforcement-gates.md:470
- Amendment (2026-07-19): Gates 2, 3, and 4 Dedicated Hook Retired — .agents/architecture/ADR-033-routing-level-enforcement-gates.md:475
- Why the hook was retired — .agents/architecture/ADR-033-routing-level-enforcement-gates.md:479
- What still enforces — .agents/architecture/ADR-033-routing-level-enforcement-gates.md:486
- Where the advisory intent went — .agents/architecture/ADR-033-routing-level-enforcement-gates.md:499
- adr-review consensus — .agents/architecture/ADR-033-routing-level-enforcement-gates.md:506
- References — .agents/architecture/ADR-033-routing-level-enforcement-gates.md:510

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- doc-drift · .agents/architecture/ADR-033-routing-level-enforcement-gates.md:4,28 · Frontmatter date (2026-08-16, date of current-state amendment) differs from ## Date section (2025-12-30, date of original creation).
- missing-path · .agents/architecture/ADR-033-routing-level-enforcement-gates.md:171,182 · Historical PowerShell hook files .claude/hooks/Invoke-RoutingGates.ps1 and Initialize-Session.ps1 do not exist on disk following repository migration to Python.

## Observations
Details the architectural transition of enforcement mechanisms in an autonomous coding agent environment. Demonstrates why tool-invocation PreToolUse hooks with exit code 0 JSON deny payloads proved ineffective in practice (clashing with command guard matchers and ignored by current harness semantics), leading to deterministic local Git hook enforcement via Lefthook and CI pipelines under the hook ROI reduction program (#3197).

## Context cost
19238 bytes, 526 lines, ~4800 tokens. Loads no external files.
