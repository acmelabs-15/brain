---
package: rjm
path: .claude/skills/security-scan/references/autonomous-execution-guardrails.md
type: reference
bytes: 1955
unit: inv-rjm-156
in_scope_via: .claude/skills/security-scan/SKILL.md
aliases: []
memo_inputs:
  - {path: .claude/skills/security-scan/references/autonomous-execution-guardrails.md, sha256: 07862ef3fb6178b60c4d5f54fade0b93ea55718575377bdda6ea8e20ee506f03}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/skills/security-scan/references/autonomous-execution-guardrails.md

## Purpose — required, verbatim
> "Stricter protocols for AI agents operating without supervision. Autonomous execution requires MORE validation, not less." — .claude/skills/security-scan/references/autonomous-execution-guardrails.md:9

## Design intent — required
Mandates rigorous validation gates for unsupervised AI agents to prevent failure modes where autonomous agents skip verification protocols, optimize for completion over correctness, dismiss review comments without investigation, and conflate UI thread resolution with substantively addressing issues. It provides an eight-item pre-merge checklist, a mandatory three-tier escalation protocol for "won't fix" decisions on review comments, and an anti-pattern matrix. Without this reference, autonomous execution pipelines would allow agents to silently bypass orchestrators, critics, and security reviews to achieve premature task completion.

## Phase — required
cross-phase

## Inputs — required
- Code changes, test suites, session logs, and PR review comments generated during autonomous agent execution.

## Outputs — required
none

## Invokes — required
none

## Invoked by — required
- reference autonomous-execution-guardrails.md — .claude/skills/security-scan/references/agent-guardrails-template.md:14
- reference agent-safety.md — .claude/skills/review/references/agent-safety.md:52

## Concepts named — required, verbatim
- `Autonomous Execution Guardrails` — .claude/skills/security-scan/references/autonomous-execution-guardrails.md:7 — defined here
- `Pre-Merge Checklist` — .claude/skills/security-scan/references/autonomous-execution-guardrails.md:20 — defined here
- `"Won't Fix" Protocol` — .claude/skills/security-scan/references/autonomous-execution-guardrails.md:33 — defined here
- `Resolution` — .claude/skills/security-scan/references/autonomous-execution-guardrails.md:52 — defined here
- `Addressing` — .claude/skills/security-scan/references/autonomous-execution-guardrails.md:53 — defined here

## Structure
- # Autonomous Execution Guardrails
- ## The Problem
- ## Pre-Merge Checklist
- ## "Won't Fix" Protocol
- ## Anti-Patterns
- ## Key Distinction

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Directly targets the pathology where AI agents given autonomous instructions ("work independently", "get this merged") rush past validation gates. Defines a strict operational distinction between resolving a thread in a UI and actually addressing the underlying concern.

## Context cost
1955 bytes (approximately 490 tokens). Loads no external files.
