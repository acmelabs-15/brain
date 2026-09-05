---
package: addy
path: agents/security-auditor.md
type: agent
bytes: 4992
unit: inv-addy-3
deprecated: false
aliases: []
memo_inputs:
  - {path: agents/security-auditor.md, sha256: 66a3f68f1c691b600ddb44e88afb138e239d0572df37be84e1f9a427c887dd0a}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# agents/security-auditor.md

## Purpose — required, verbatim
> "Security engineer focused on vulnerability detection, threat modeling, and secure coding practices. Use for security-focused code review, threat analysis, or hardening recommendations." — agents/security-auditor.md:3

## Design intent — required
A persona agent acting as an experienced Security Engineer focused on detecting actionable, exploitable vulnerabilities and providing threat modeling and hardening guidance. Evaluates changes across six security domains including modern AI/LLM risks, enforces a five-tier severity model (Critical, High, Medium, Low, Info), mandates proof of concepts for Critical/High findings, applies STRIDE analysis at trust boundaries, and outputs a structured Security Audit Report.

## Phase — required
addy:Review

## Inputs — required
Code diffs, architectural boundaries, dependency manifests, configuration files, and security questions.

## Outputs — required
Structured audit report following the Output Format with counts, prioritized findings with code recommendations, positive observations, and hardening recommendations:
> "## Security Audit Report" — agents/security-auditor.md:70

## Invokes — required
- doc docs/agents.md — agents/security-auditor.md:112

## Invoked by — required
- agent security-auditor — AGENTS.md:80
- agent security-auditor — commands/ship.toml:15
- agent security-auditor — docs/agents.md:8

## Concepts named — required, verbatim
- `Security Auditor` — agents/security-auditor.md:6 — defined here
- `Input Handling` — agents/security-auditor.md:12 — defined here
- `Authentication & Authorization` — agents/security-auditor.md:19 — defined here
- `Data Protection` — agents/security-auditor.md:27 — defined here
- `Infrastructure` — agents/security-auditor.md:34 — defined here
- `Third-Party Integrations` — agents/security-auditor.md:41 — defined here
- `AI / LLM Features` — agents/security-auditor.md:48 — defined here
- `OWASP Top 10 for LLM Applications` — agents/security-auditor.md:55 — used here
- `STRIDE` — agents/security-auditor.md:106 — used here
- `OWASP Top 10` — agents/security-auditor.md:103 — used here
- `Security Audit Report` — agents/security-auditor.md:70 — defined here

## Structure
- Frontmatter metadata (name, description) — agents/security-auditor.md:1-4
- Title and Role Statement — agents/security-auditor.md:6-8
- Review Scope (Input Handling, Authentication & Authorization, Data Protection, Infrastructure, Third-Party Integrations, AI / LLM Features) — agents/security-auditor.md:10-56
- Severity Classification (Critical, High, Medium, Low, Info) — agents/security-auditor.md:57-65
- Output Format (Security Audit Report template) — agents/security-auditor.md:67-95
- Rules — agents/security-auditor.md:97-106
- Composition — agents/security-auditor.md:108-113

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
- Threat modeling requirement: "Start from trust boundaries — where untrusted data enters — and reason about each with STRIDE before enumerating findings" — agents/security-auditor.md:106.
- Explicit non-regression rule: "Never suggest disabling security controls as a \"fix\"" — agents/security-auditor.md:105.
- Orchestration boundary: "Do not invoke from another persona." — agents/security-auditor.md:112.

## Context cost
4992 bytes, ~1100 tokens. Standalone agent prompt; references docs/agents.md for architectural patterns.
