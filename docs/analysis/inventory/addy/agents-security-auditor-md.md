---
package: addy
path: agents/security-auditor.md
type: agent
bytes: 4992
unit: inv-addy-3
aliases: []
memo_inputs:
  - {path: agents/security-auditor.md, sha256: 66a3f68f1c691b600ddb44e88afb138e239d0572df37be84e1f9a427c887dd0a}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# agents/security-auditor.md

## Purpose — required, verbatim
> "Security engineer focused on vulnerability detection, threat modeling, and secure coding practices. Use for security-focused code review, threat analysis, or hardening recommendations." — agents/security-auditor.md:3

## Design intent — required
Persona definition for an experienced Security Engineer specializing in vulnerability detection, threat modeling (STRIDE), and secure coding practices across six review scopes including modern AI/LLM risks, producing proof-of-concept exploit scenarios and remediation advice.

## Phase — required
addy:Review

## Inputs — required
Source code changes, pull requests, architectural designs, API endpoints, dependency manifests, and system configurations.

## Outputs — required
Structured Security Audit Report containing vulnerability counts by severity (Critical, High, Medium, Low), findings with proof-of-concept exploits, specific fix recommendations, positive observations, and proactive recommendations.

## Invokes — required
- doc docs/agents.md — agents/security-auditor.md:112

## Invoked by — required
- doc security-auditor — AGENTS.md:80
- command security-auditor — commands/ship.toml:25

## Concepts named — required, verbatim
- `Security Auditor` — agents/security-auditor.md:6 — defined here
- `Review Scope` — agents/security-auditor.md:10 — defined here
- `Input Handling` — agents/security-auditor.md:12 — defined here
- `Authentication & Authorization` — agents/security-auditor.md:19 — defined here
- `IDOR` — agents/security-auditor.md:23 — used here
- `Data Protection` — agents/security-auditor.md:27 — defined here
- `Infrastructure` — agents/security-auditor.md:34 — defined here
- `Third-Party Integrations` — agents/security-auditor.md:41 — defined here
- `SSRF` — agents/security-auditor.md:46 — used here
- `AI / LLM Features` — agents/security-auditor.md:48 — defined here
- `OWASP Top 10 for LLM Applications` — agents/security-auditor.md:55 — used here
- `Severity Classification` — agents/security-auditor.md:57 — defined here
- `Critical` — agents/security-auditor.md:61 — defined here
- `High` — agents/security-auditor.md:62 — defined here
- `Medium` — agents/security-auditor.md:63 — defined here
- `Low` — agents/security-auditor.md:64 — defined here
- `Info` — agents/security-auditor.md:65 — defined here
- `Security Audit Report` — agents/security-auditor.md:70 — defined here
- `STRIDE` — agents/security-auditor.md:106 — used here

## Structure
- frontmatter (name, description)
- # Security Auditor
- ## Review Scope
- ### 1. Input Handling
- ### 2. Authentication & Authorization
- ### 3. Data Protection
- ### 4. Infrastructure
- ### 5. Third-Party Integrations
- ### 6. AI / LLM Features (if present)
- ## Severity Classification
- ## Output Format
- ## Rules
- ## Composition

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Includes dedicated checks for AI/LLM capabilities (lines 48-55) covering prompt injection, excessive agency, cross-tenant data leakage in context windows, and unbounded recursion, mapped to the OWASP Top 10 for LLM Applications.

## Context cost
4992 bytes (~1248 tokens).
