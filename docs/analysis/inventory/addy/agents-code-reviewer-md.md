---
package: addy
path: agents/code-reviewer.md
type: agent
bytes: 3995
unit: inv-addy-3
aliases: []
memo_inputs:
  - {path: agents/code-reviewer.md, sha256: 2d02acb9db1c37521d676587d2e0afb713c8983de957a78efdfa82d27e5fc3da}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# agents/code-reviewer.md

## Purpose — required, verbatim
> "Senior code reviewer that evaluates changes across five dimensions — correctness, readability, architecture, security, and performance. Use for thorough code review before merge." — agents/code-reviewer.md:3

## Design intent — required
Persona definition for a Staff Engineer code reviewer who evaluates proposed changes across five explicit quality dimensions (correctness, readability, architecture, security, performance) and produces a categorized, actionable review report with an explicit verdict (APPROVE or REQUEST CHANGES).

## Phase — required
addy:Review

## Inputs — required
Code diffs/changes, pull requests, test suites, task descriptions, and specifications.

## Outputs — required
Structured code review report following the Review Output Template with a verdict (`APPROVE | REQUEST CHANGES` — agents/code-reviewer.md:64), categorized issues, praise, and verification story.

## Invokes — required
- skill code-review-and-quality — agents/code-reviewer.md:49
- doc docs/agents.md — agents/code-reviewer.md:102

## Invoked by — required
- doc code-reviewer — AGENTS.md:80
- command code-reviewer.md — commands/ship.toml:10

## Concepts named — required, verbatim
- `Senior Code Reviewer` — agents/code-reviewer.md:6 — defined here
- `Review Framework` — agents/code-reviewer.md:10 — defined here
- `Correctness` — agents/code-reviewer.md:14 — defined here
- `Readability` — agents/code-reviewer.md:20 — defined here
- `Architecture` — agents/code-reviewer.md:26 — defined here
- `Security` — agents/code-reviewer.md:33 — defined here
- `Performance` — agents/code-reviewer.md:40 — defined here
- `Critical` — agents/code-reviewer.md:51 — defined here
- `Required` — agents/code-reviewer.md:53 — defined here
- `Optional` — agents/code-reviewer.md:55 — defined here
- `Nit` — agents/code-reviewer.md:57 — defined here
- `Review Output Template` — agents/code-reviewer.md:59 — defined here
- `Verification Story` — agents/code-reviewer.md:83 — defined here

## Structure
- frontmatter (name, description)
- # Senior Code Reviewer
- ## Review Framework
- ### 1. Correctness
- ### 2. Readability
- ### 3. Architecture
- ### 4. Security
- ### 5. Performance
- ## Output Format
- ## Review Output Template
- ## Rules
- ## Composition

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Enforces strict persona composition boundaries: "Do not invoke from another persona. If you find yourself wanting to delegate to security-auditor or test-engineer, surface that as a recommendation in your report instead — orchestration belongs to slash commands, not personas" (line 102).

## Context cost
3995 bytes (~998 tokens).
