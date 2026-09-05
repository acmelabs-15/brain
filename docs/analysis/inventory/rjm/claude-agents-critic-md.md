---
package: rjm
path: .claude/agents/critic.md
type: agent
bytes: 20780
unit: inv-rjm-65
in_scope_via: .agents/architecture/README.md
aliases: []
memo_inputs:
  - {path: .claude/agents/critic.md, sha256: 85eae67441c3b6177c92a7fb6bd6f6c99687130bebb27e39b1202727f879808a}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/agents/critic.md

## Purpose — required, verbatim
> "Constructive reviewer who stress-tests plans before implementation, validates completeness, identifies gaps, catches ambiguity. Challenges assumptions, checks alignment, and blocks approval when risks aren't mitigated. Use when you say "review this plan", "stress-test this plan", "is this plan ready", "poke holes in this", or hand it a plan file or planning artifact and need a clear ready-or-revise verdict. Do NOT use to stress-test a single decision's reasoning (use decision-critic)." — .claude/agents/critic.md:3

## Design intent — required
An adversarial, fresh-context review coordinator that stress-tests plans, specifications, and design documents before implementation begins to counter same-context confirmation bias, groupthink, and sycophancy. Operating deliberately without access to the author's hidden reasoning, it applies multi-persona evaluation (Naive Reader, Hostile Expert, Cynic), Brandolini's Law burden shifting, an Adversarial Coverage Checklist, and six structured review axes (Completeness, Alignment, Feasibility, Risk coverage, Testability, Traceability) to issue definitive readiness verdicts (APPROVED, APPROVED_WITH_CONCERNS, NEEDS_REVISION, BLOCKED).

## Phase — required
rjm:plan

## Inputs — required
- Plan file path, planning artifact, or message text via `argument-hint` ("Provide the plan file path or planning artifact to review") — .claude/agents/critic.md:7.
- Code diffs, specs, standards, and canonical source references — .claude/agents/critic.md:20.
- Architectural precedent from ADR files located under `.agents/architecture/` — .claude/agents/critic.md:36.
- Autonomy governance rules from `AGENTS.md` — .claude/agents/critic.md:12.
- Brandolini's Law model reference from `.claude/skills/decision-critic/references/critical-thinking-brandolinis-law.md` — .claude/agents/critic.md:84.
- Memory context retrieved via Memory Router or Serena read MCP — .claude/agents/critic.md:221, 234.

## Outputs — required
- Critique markdown document saved to `.agents/critique/[NNN]-[plan-name]-critique-[YYYY-MM-DD].md` containing Verdict with Confidence (HIGH/MEDIUM/LOW), Summary, Scores by Axis table (1-5 scale), Reasoning, Critical Findings (max 5 items), Approval Conditions, and 1-sentence Recommendation — .claude/agents/critic.md:160-192.
- Pre-PR readiness validation verdicts evaluating test evidence, atomic commits, and session logs — .claude/agents/critic.md:123-133.
- Critique learning memories persisted to `.serena/memories/` or fallback notes in `.agents/notes/` — .claude/agents/critic.md:235.

## Invokes — required
- agent decision-critic — .claude/agents/critic.md:3
- reference .claude/skills/decision-critic/references/critical-thinking-brandolinis-law.md — .claude/agents/critic.md:84
- agent implementer — .claude/agents/critic.md:250
- agent planner — .claude/agents/critic.md:251
- agent orchestrator — .claude/agents/critic.md:252

## Invoked by — required
- agent critic — docs/agent-catalog.md:22
- agent critic — .claude/agents/code-reviewer.md:127
- agent critic — .claude/agents/independent-thinker.md:244
- agent critic — .agents/AGENT-SYSTEM.md:343

## Concepts named — required, verbatim
- `critic` — .claude/agents/critic.md:2 — defined here
- `coordinator` — .claude/agents/critic.md:6 — used here
- `Autonomy Guardrail` — .claude/agents/critic.md:12 — defined here
- `Reviewer Asymmetry` — .claude/agents/critic.md:16 — defined here
- `adversarial reviewer` — .claude/agents/critic.md:18 — defined here
- `Reasoning Protocol` — .claude/agents/critic.md:26 — defined here
- `ADR-precedent search` — .claude/agents/critic.md:36 — defined here
- `Adversarial Coverage Checklist` — .claude/agents/critic.md:40 — defined here
- `Persona Evaluation` — .claude/agents/critic.md:58 — defined here
- `Naive Reader` — .claude/agents/critic.md:66 — defined here
- `Hostile Expert` — .claude/agents/critic.md:67 — defined here
- `Cynic` — .claude/agents/critic.md:68 — defined here
- `Brandolini's Law` — .claude/agents/critic.md:74 — defined here
- `Review Burden Allocation` — .claude/agents/critic.md:74 — defined here
- `Review Axes` — .claude/agents/critic.md:110 — defined here
- `Completeness` — .claude/agents/critic.md:116 — defined here
- `Alignment` — .claude/agents/critic.md:117 — defined here
- `Feasibility` — .claude/agents/critic.md:118 — defined here
- `Risk coverage` — .claude/agents/critic.md:119 — defined here
- `Testability` — .claude/agents/critic.md:120 — defined here
- `Traceability` — .claude/agents/critic.md:121 — defined here
- `Pre-PR Readiness Validation` — .claude/agents/critic.md:123 — defined here
- `Verdict Rules` — .claude/agents/critic.md:134 — defined here
- `Critique Length Bounds` — .claude/agents/critic.md:147 — defined here
- `Critique Document Structure` — .claude/agents/critic.md:158 — defined here
- `Verdict Carve-Out` — .claude/agents/critic.md:205 — defined here
- `Degraded Mode Protocol` — .claude/agents/critic.md:223 — defined here

## Structure
- # Critic Agent — .claude/agents/critic.md:10
- ## Reviewer Asymmetry (Read First) — .claude/agents/critic.md:16
- ## Reasoning Protocol — .claude/agents/critic.md:26
- ## Adversarial Coverage Checklist — .claude/agents/critic.md:40
- ## Persona Evaluation (Prose Artifacts Only) — .claude/agents/critic.md:58
- ## Brandolini's Law: Review Burden Allocation — .claude/agents/critic.md:74
- ## Core Behavior — .claude/agents/critic.md:86
- ## Review Axes — .claude/agents/critic.md:110
- ## Pre-PR Readiness Validation — .claude/agents/critic.md:123
- ## Verdict Rules — .claude/agents/critic.md:134
- ## Critique Length Bounds — .claude/agents/critic.md:147
- ## Critique Document Structure — .claude/agents/critic.md:158
- ## Verdict — .claude/agents/critic.md:165
- ## Summary — .claude/agents/critic.md:168
- ## Scores by Axis — .claude/agents/critic.md:171
- ## Reasoning — .claude/agents/critic.md:181
- ## Critical Findings — .claude/agents/critic.md:184
- ## Approval Conditions — .claude/agents/critic.md:187
- ## Recommendation — .claude/agents/critic.md:190
- ## Escalation — .claude/agents/critic.md:194
- ## Anti-Patterns to Catch — .claude/agents/critic.md:207
- ## Tools — .claude/agents/critic.md:219
- ## Degraded Mode Protocol — .claude/agents/critic.md:223
- ## Handoff — .claude/agents/critic.md:242

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- `missing-path` · `.claude/skills/decision-critic/references/critical-thinking-brandolinis-law.md` — .claude/agents/critic.md:84 — The cited reference file does not exist under .claude/skills/decision-critic/; it is located under src/copilot-cli/skills/decision-critic/references/critical-thinking-brandolinis-law.md.
- `missing-path` · `regex token boundaries` — .claude/agents/critic.md:46 — Instructs reviewer to cite the wiki entry on regex token boundaries, but no wiki/ directory exists in the repository.

## Observations
- Variant relation: shares 89% of distinct lines with `templates/agents/critic.shared.md` (ledger V16; divergence card created).
- Model selection: uses Anthropic Opus (`model: opus`) reflecting the need for deep adversarial analysis, cognitive perspective taking across three reader personas, and sycophancy resistance.
- Mandatory issue floor: explicitly mandates finding at least three issues, declaring "looks good" to be an agent failure mode.
- Circuit-breaker role: treats unanimous prior agent approval as a red flag signaling lack of scrutiny, triggering independent verification of fundamental assumptions.
- Brandolini's Law operationalization: codifies the bullshit asymmetry principle into concrete review protocol, pushing the burden of proof back to authors when refutation effort exceeds authorship effort.

## Context cost
20780 bytes (approx. 5195 tokens).
