---
package: addy
path: agents/code-reviewer.md
type: agent
bytes: 3995
unit: inv-addy-3
deprecated: false
aliases: []
memo_inputs:
  - {path: agents/code-reviewer.md, sha256: 2d02acb9db1c37521d676587d2e0afb713c8983de957a78efdfa82d27e5fc3da}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# agents/code-reviewer.md

## Purpose — required, verbatim
> "Senior code reviewer that evaluates changes across five dimensions — correctness, readability, architecture, security, and performance. Use for thorough code review before merge." — agents/code-reviewer.md:3

## Design intent — required
A persona agent acting as a Staff Engineer to conduct thorough, structured code reviews across five explicit dimensions: correctness, readability, architecture, security, and performance. Categorizes findings into a four-tier severity model (Critical, Required, Optional, Nit), requires explicit praise for well-implemented patterns, and outputs a decisive review verdict (APPROVE or REQUEST CHANGES). Designed for standalone review invocations or as part of the parallel review fan-out in /ship.

## Phase — required
addy:Review

## Inputs — required
Code diff, file changes, pull request, spec or task requirements, and associated test suites.

## Outputs — required
Structured review document following the Review Output Template with a clear verdict:
> "**Verdict:** APPROVE | REQUEST CHANGES" — agents/code-reviewer.md:64

## Invokes — required
- skill code-review-and-quality — agents/code-reviewer.md:49
- doc docs/agents.md — agents/code-reviewer.md:102

## Invoked by — required
- agent code-reviewer — AGENTS.md:80
- agent code-reviewer — commands/ship.toml:14
- agent code-reviewer — docs/agents.md:7

## Concepts named — required, verbatim
- `Senior Code Reviewer` — agents/code-reviewer.md:6 — defined here
- `Correctness` — agents/code-reviewer.md:14 — defined here
- `Readability` — agents/code-reviewer.md:20 — defined here
- `Architecture` — agents/code-reviewer.md:26 — defined here
- `Security` — agents/code-reviewer.md:33 — defined here
- `Performance` — agents/code-reviewer.md:40 — defined here
- `Critical` — agents/code-reviewer.md:51 — defined here
- `Required` — agents/code-reviewer.md:53 — defined here
- `Optional` — agents/code-reviewer.md:55 — defined here
- `Nit` — agents/code-reviewer.md:57 — defined here
- `Review Summary` — agents/code-reviewer.md:62 — defined here
- `Verdict` — agents/code-reviewer.md:64 — defined here
- `Verification Story` — agents/code-reviewer.md:83 — defined here

## Structure
- Frontmatter metadata (name, description) — agents/code-reviewer.md:1-4
- Title and Role Statement — agents/code-reviewer.md:6-8
- Review Framework (Correctness, Readability, Architecture, Security, Performance) — agents/code-reviewer.md:10-46
- Output Format (Severity classification) — agents/code-reviewer.md:47-58
- Review Output Template — agents/code-reviewer.md:59-87
- Rules — agents/code-reviewer.md:89-96
- Composition — agents/code-reviewer.md:98-103

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
- Key review heuristic: "Review the tests first — they reveal intent and coverage" — agents/code-reviewer.md:91.
- Mandatory positive feedback: "Positive observation — always include at least one" — agents/code-reviewer.md:81.
- Flat orchestration boundary: "Do not invoke from another persona." — agents/code-reviewer.md:102.

## Context cost
3995 bytes, ~920 tokens. Standalone agent prompt; loads docs/agents.md when inspecting compositional rules.
