---
package: rjm
path: .claude/skills/ai-agents-change-control/references/incident-history.md
type: reference
bytes: 5344
unit: inv-rjm-81
in_scope_via: .agents/architecture/README.md
aliases: []
memo_inputs:
  - {path: .claude/skills/ai-agents-change-control/references/incident-history.md, sha256: f0eec48d7b0b37bd1748187e54e63be89cbd45466ca6e4857eb0b179822bfee3}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/skills/ai-agents-change-control/references/incident-history.md

## Purpose — required, verbatim
> "The SKILL.md Phase 4 non-negotiables table gives a rationale for each rule. This file tells the six that compress a multi-round failure in full; the other rationale cells are briefer. Read the incident before arguing with its rule; deep history lives in `ai-agents-failure-archaeology`." — .claude/skills/ai-agents-change-control/references/incident-history.md:3

## Design intent — required
Details the six key historical failure incidents and architectural reversals behind the repository's non-negotiable change-control rules. It explains why hooks fail closed (reversal after the #2205 customer wedge incident), why plugin manifests omit a `version` field (ADR-092 after PR #1942 cache staleness and branch conflicts), why global escape hatches are forbidden (session 1187 `SKIP_PREPUSH` abuse), why mirror claims require character-for-character citation (FM-9 and PR #1887), why silent defaults are prohibited (FM-10 and PR #1965), and how to handle the active tension regarding GitHub Actions SHA-pinning.

## Phase — required
cross-phase

## Inputs — required
- Historical incident retrospectives (`.agents/retrospective/`).
- Architectural decision records (`ADR-066`, `ADR-071`, `ADR-079`, `ADR-092`).
- Governance rules (`FAILURE-MODES.md`, `PROJECT-CONSTRAINTS.md`, `golden-principles.md`).

## Outputs — required
none

## Invokes — required
- skill SKILL.md — .claude/skills/ai-agents-change-control/references/incident-history.md:3
- skill ai-agents-failure-archaeology — .claude/skills/ai-agents-change-control/references/incident-history.md:3
- doc .agents/architecture/ADR-066-hook-fail-open-reconciliation.md — .claude/skills/ai-agents-change-control/references/incident-history.md:9
- doc .agents/retrospective/2026-06-02-pr-2205-customer-wedge-incident.md — .claude/skills/ai-agents-change-control/references/incident-history.md:9
- doc ADR-071 — .claude/skills/ai-agents-change-control/references/incident-history.md:9
- script build/scripts/validate_plugin_version_bump.py — .claude/skills/ai-agents-change-control/references/incident-history.md:13
- doc .agents/retrospective/2026-02-08-session-1187-skip-prepush-abuse.md — .claude/skills/ai-agents-change-control/references/incident-history.md:17
- doc .agents/governance/FAILURE-MODES.md — .claude/skills/ai-agents-change-control/references/incident-history.md:21
- doc .agents/retrospective/2026-05-05-pr-1887-iteration-paradox.md — .claude/skills/ai-agents-change-control/references/incident-history.md:21
- doc .claude/rules/canonical-source-mirror.md — .claude/skills/ai-agents-change-control/references/incident-history.md:21
- doc .agents/governance/PROJECT-CONSTRAINTS.md — .claude/skills/ai-agents-change-control/references/incident-history.md:29
- doc .agents/governance/golden-principles.md — .claude/skills/ai-agents-change-control/references/incident-history.md:29

## Invoked by — required
- skill ai-agents-change-control — .claude/skills/ai-agents-change-control/SKILL.md:100

## Concepts named — required, verbatim
- `Fail-closed hooks` — .claude/skills/ai-agents-change-control/references/incident-history.md:7 — defined here
- `Plugin staleness` — .claude/skills/ai-agents-change-control/references/incident-history.md:11 — defined here
- `Escape-hatch abuse` — .claude/skills/ai-agents-change-control/references/incident-history.md:15 — defined here
- `SKIP_PREPUSH` — .claude/skills/ai-agents-change-control/references/incident-history.md:17 — used here
- `Verbatim quoting` — .claude/skills/ai-agents-change-control/references/incident-history.md:19 — defined here
- `FM-9` — .claude/skills/ai-agents-change-control/references/incident-history.md:21 — used here
- `No silent defaults` — .claude/skills/ai-agents-change-control/references/incident-history.md:23 — defined here
- `FM-10` — .claude/skills/ai-agents-change-control/references/incident-history.md:23 — used here
- `SHA pinning` — .claude/skills/ai-agents-change-control/references/incident-history.md:27 — defined here
- `GP-006` — .claude/skills/ai-agents-change-control/references/incident-history.md:29 — used here

## Structure
- `# Incident History: The Stories the Non-Negotiables Compress` — .claude/skills/ai-agents-change-control/references/incident-history.md:1
- `## Fail-closed hooks: the #2205 reversal` — .claude/skills/ai-agents-change-control/references/incident-history.md:7
- `## Plugin staleness: PR #1942, and the ADR-092 reversal` — .claude/skills/ai-agents-change-control/references/incident-history.md:11
- `## Escape-hatch abuse: session 1187` — .claude/skills/ai-agents-change-control/references/incident-history.md:15
- `## Verbatim quoting: FM-9 and PR #1887` — .claude/skills/ai-agents-change-control/references/incident-history.md:19
- `## No silent defaults: FM-10 and PR #1965` — .claude/skills/ai-agents-change-control/references/incident-history.md:23
- `## The one documented tension: SHA pinning` — .claude/skills/ai-agents-change-control/references/incident-history.md:27

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
- Documents the tension between `.agents/governance/PROJECT-CONSTRAINTS.md:180` (Exceptions: None, SHA-pin all third-party actions) and GP-006 (`.agents/governance/golden-principles.md:63-69`, allows first-party `actions/*` on version tags), establishing the rule to follow the stricter requirement unless explicitly approved by a human.
- Quotes verbatim from `.agents/governance/FAILURE-MODES.md`: "there is no neutral default for a missing signal." (line 25).
- Captures human verdict from session 1187 retro: "You can't be trusted in the least bit." (line 17).

## Context cost
5,344 bytes; ~1,300 tokens.
