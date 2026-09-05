---
package: addy
path: agents/code-reviewer.md
type: agent
bytes: 3995
unit: inv-addy-3
deprecated: false
aliases: []
verified: 2026-09-04 quote-check+coverage
memo_inputs:
  - {path: agents/code-reviewer.md, sha256: 2d02acb9db1c37521d676587d2e0afb713c8983de957a78efdfa82d27e5fc3da}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
---

# agents/code-reviewer.md

## Purpose — required, verbatim
> "Senior code reviewer that evaluates changes across five dimensions — correctness, readability, architecture, security, and performance. Use for thorough code review before merge." — agents/code-reviewer.md:3

## Design intent — required
Defines the persona of an experienced Staff Engineer performing multi-dimensional code reviews. Evaluates proposed changes across five defined axes, categorizes issues into four severity tiers, mandates reviewing tests first, requires specific praise, and outputs a standardized review summary with explicit merge verdicts.

## Phase — required
addy:Review

## Inputs — required
Code diff, commit range, or pull request under review, spec or task requirements (agents/code-reviewer.md:92), and test files (agents/code-reviewer.md:91).

## Outputs — required
Structured code review report following the Review Output Template (agents/code-reviewer.md:61-87) with verdict (`APPROVE` | `REQUEST CHANGES`), categorized findings, positive observations, and verification story.

## Invokes — required
- doc docs/agents.md — agents/code-reviewer.md:102

## Invoked by — required
- command ship — commands/ship.toml:10

## Concepts named — required, verbatim
- `code-reviewer` — agents/code-reviewer.md:2 — defined here
- `Correctness` — agents/code-reviewer.md:14 — defined here
- `Readability` — agents/code-reviewer.md:20 — defined here
- `Architecture` — agents/code-reviewer.md:26 — defined here
- `Security` — agents/code-reviewer.md:33 — defined here
- `Performance` — agents/code-reviewer.md:40 — defined here
- `Critical` — agents/code-reviewer.md:51 — defined here
- `Required` — agents/code-reviewer.md:53 — defined here
- `Optional` — agents/code-reviewer.md:55 — defined here
- `Nit` — agents/code-reviewer.md:57 — defined here
- `Verification Story` — agents/code-reviewer.md:83 — defined here

## Structure
- # Senior Code Reviewer — agents/code-reviewer.md:6
- ## Review Framework — agents/code-reviewer.md:10
- ### 1. Correctness — agents/code-reviewer.md:14
- ### 2. Readability — agents/code-reviewer.md:20
- ### 3. Architecture — agents/code-reviewer.md:26
- ### 4. Security — agents/code-reviewer.md:33
- ### 5. Performance — agents/code-reviewer.md:40
- ## Output Format — agents/code-reviewer.md:47
- ## Review Output Template — agents/code-reviewer.md:59
- ## Rules — agents/code-reviewer.md:89
- ## Composition — agents/code-reviewer.md:98

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Uses the same severity labels as the `code-review-and-quality` skill (agents/code-reviewer.md:49). Mandates reviewing tests before implementation code (rule 1, agents/code-reviewer.md:91) and forbids approval if any Critical issue exists (rule 4, agents/code-reviewer.md:94).

## Context cost
3995 bytes, ~950 tokens.
