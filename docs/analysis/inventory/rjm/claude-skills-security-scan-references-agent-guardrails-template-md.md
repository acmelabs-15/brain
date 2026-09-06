---
package: rjm
path: .claude/skills/security-scan/references/agent-guardrails-template.md
type: reference
bytes: 3242
unit: inv-rjm-156
in_scope_via: .claude/skills/security-scan/SKILL.md
aliases: []
memo_inputs:
  - {path: .claude/skills/security-scan/references/agent-guardrails-template.md, sha256: 9cb3f3b258fa15cfa4a6bfec04f0de8d93e7b340285b21b84b153b056f97ac07}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/skills/security-scan/references/agent-guardrails-template.md

## Purpose — required, verbatim
> "Constraints enable speed by eliminating self-checking overhead." — .claude/skills/security-scan/references/agent-guardrails-template.md:11 (no explicit purpose statement)

## Design intent — required
Defines the Four Laws of Agent Safety (declared scope, verify before destructive operations, preserve audit trail, escalate when uncertain) as an Asimov-style hierarchical constraint model for autonomous agents. It establishes that explicit boundaries enable speed by eliminating repetitive per-request self-checking overhead and hedging, while providing PR review criteria for evaluating changes that widen agent capabilities. Without this reference, agents would either waste tokens and latency on defensive deliberation or operate without systematic safeguards, and PR reviewers would lack a clear rubric for identifying missing confirmation tiers, truncated audit trails, or unconstrained scopes.

## Phase — required
cross-phase

## Inputs — required
- Agent prompts, skill definitions (`SKILL.md` or scripts), or lifecycle hooks undergoing PR review or safety auditing.
- Action requests and tool calls evaluated against the Four Laws.

## Outputs — required
none

## Invokes — required
- reference autonomous-execution-guardrails.md — .claude/skills/security-scan/references/agent-guardrails-template.md:14

## Invoked by — required
- reference agent-safety.md — .claude/skills/review/references/agent-safety.md:53

## Concepts named — required, verbatim
- `Agent Guardrails Template` — .claude/skills/security-scan/references/agent-guardrails-template.md:7 — defined here
- `The Four Laws Of Agent Safety` — .claude/skills/security-scan/references/agent-guardrails-template.md:18 — defined here
- `Constraints Enable Speed` — .claude/skills/security-scan/references/agent-guardrails-template.md:34 — defined here
- `autonomous-execution-guardrails.md` — .claude/skills/security-scan/references/agent-guardrails-template.md:14 — used here
- `Autonomous execution guardrails` — .claude/skills/security-scan/references/agent-guardrails-template.md:72 — used here
- `Agent unauthorized memory inference` — .claude/skills/security-scan/references/agent-guardrails-template.md:74 — used here
- `Law 1` — .claude/skills/security-scan/references/agent-guardrails-template.md:63 — used here
- `Law 2` — .claude/skills/security-scan/references/agent-guardrails-template.md:64 — used here
- `Law 3` — .claude/skills/security-scan/references/agent-guardrails-template.md:65 — used here
- `Law 4` — .claude/skills/security-scan/references/agent-guardrails-template.md:66 — used here
- `confirmation tier` — .claude/skills/security-scan/references/agent-guardrails-template.md:24 — defined here
- `audit trail` — .claude/skills/security-scan/references/agent-guardrails-template.md:26 — defined here

## Structure
- # Agent Guardrails Template
- ## Principle
- ## The Four Laws Of Agent Safety
- ## Why "Constraints Enable Speed"
- ## How To Apply
- ## Caveats
- ## Why This Lens Applies In PR Review
- ## Connections
- ## Source

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Provides an Asimov-inspired hierarchical constraint model for autonomous coding agents ("The Four Laws of Agent Safety") where lower-numbered laws strictly dominate in conflicts. Connects agent safety to review-time checklists (`autonomous-execution-guardrails.md`) and memory integrity (`agent-memory-inference-leakage.md`).

## Context cost
3242 bytes (approximately 810 tokens). Loads `autonomous-execution-guardrails.md` (1955 bytes), total 5197 bytes (approximately 1300 tokens).
