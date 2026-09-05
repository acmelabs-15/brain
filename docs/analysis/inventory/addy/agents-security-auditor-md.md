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
method_sha: 647767d85acc14e391fbbf69d54d8543f31a0497dc52121aaf5997e1c6065f5f
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-04 quote-check+coverage
---

# agents/security-auditor.md

## Purpose — required, verbatim
> "Security engineer focused on vulnerability detection, threat modeling, and secure coding practices. Use for security-focused code review, threat analysis, or hardening recommendations." — agents/security-auditor.md:3

## Design intent — required
Defines the persona of an experienced Security Engineer conducting security assessments. Emphasizes practical, exploitable vulnerabilities over theoretical risks, evaluates across 6 review scopes (including modern AI/LLM risks), classifies issues across five severity levels, requires proof-of-concept exploitation scenarios, applies STRIDE analysis at trust boundaries, and produces standardized markdown security audit reports.

## Phase — required
addy:Review

## Inputs — required
Code diffs, system architecture, API endpoints, dependencies, trust boundaries, and system prompts.

## Outputs — required
Structured markdown security audit report following template (agents/security-auditor.md:70-95) with categorized vulnerability findings (Location, Description, Impact, Proof of concept, Recommendation), positive observations, and hardening recommendations.

## Invokes — required
- doc docs/agents.md — agents/security-auditor.md:112

## Invoked by — required
- command security-auditor — commands/ship.toml:15

## Concepts named — required, verbatim
- `security-auditor` — agents/security-auditor.md:2 — defined here
- `Input Handling` — agents/security-auditor.md:12 — defined here
- `Authentication & Authorization` — agents/security-auditor.md:19 — defined here
- `Data Protection` — agents/security-auditor.md:27 — defined here
- `Infrastructure` — agents/security-auditor.md:34 — defined here
- `Third-Party Integrations` — agents/security-auditor.md:41 — defined here
- `AI / LLM Features` — agents/security-auditor.md:48 — defined here
- `OWASP Top 10 for LLM Applications` — agents/security-auditor.md:55 — used here
- `STRIDE` — agents/security-auditor.md:106 — used here

## Structure
- # Security Auditor — agents/security-auditor.md:6
- ## Review Scope — agents/security-auditor.md:10
- ### 1. Input Handling — agents/security-auditor.md:12
- ### 2. Authentication & Authorization — agents/security-auditor.md:19
- ### 3. Data Protection — agents/security-auditor.md:27
- ### 4. Infrastructure — agents/security-auditor.md:34
- ### 5. Third-Party Integrations — agents/security-auditor.md:41
- ### 6. AI / LLM Features (if present) — agents/security-auditor.md:48
- ## Severity Classification — agents/security-auditor.md:57
- ## Output Format — agents/security-auditor.md:67
- ## Rules — agents/security-auditor.md:97
- ## Composition — agents/security-auditor.md:108

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Explicitly addresses modern AI threat models such as prompt injection, unsafe model outputs executed in shells/eval/innerHTML, context data leakage, and excessive agency (agents/security-auditor.md:48-54). Mandates STRIDE threat modeling at trust boundaries before enumerating findings (agents/security-auditor.md:106).

## Context cost
4992 bytes, ~1200 tokens.
