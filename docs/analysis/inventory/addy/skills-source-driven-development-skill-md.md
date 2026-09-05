---
package: addy
path: skills/source-driven-development/SKILL.md
type: skill
bytes: 9949
unit: inv-addy-46
deprecated: false
aliases: []
memo_inputs:
  - {path: skills/source-driven-development/SKILL.md, sha256: 719d4e54083c90ded62112fb41df3dbc4619309118ee0e6aa4d846f92d8204af}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# skills/source-driven-development/SKILL.md

## Purpose — required, verbatim
> "Grounds every implementation decision in official documentation. Use when you want authoritative, source-cited code free from outdated patterns. Use when building with any framework or library where correctness matters." — skills/source-driven-development/SKILL.md:3

## Design intent — required
Prevents AI code generators from writing obsolete, broken, or hallucinated framework patterns by mandating a strict 4-step workflow: detect project stack and dependency versions, fetch official version-specific documentation, implement matching documented patterns, and cite exact source URLs in code and conversation. It treats fetched documentation as untrusted data to mitigate prompt injection, surfaces conflicts between existing code and updated documentation to the developer, and requires explicit disclosure when patterns cannot be verified. Without it, agents default to stale training data or hallucinated APIs, resulting in code rot, deprecation bugs, and hours of debugging rework.

## Phase — required
addy:Build

## Inputs — required
- Dependency files for stack and version detection (`package.json`, `composer.json`, `requirements.txt`, `pyproject.toml`, `go.mod`, `Cargo.toml`, `Gemfile`) — skills/source-driven-development/SKILL.md:43, 44, 45, 46, 47, 48
- User clarification when versions are missing or ambiguous — skills/source-driven-development/SKILL.md:61
- Official documentation pages fetched via HTTP/retrieval tools (`react.dev`, `docs.djangoproject.com`, `symfony.com/doc`, MDN, `web.dev`, etc.) — skills/source-driven-development/SKILL.md:71, 72, 73, 74
- Existing project codebase (to check for pattern consistency/conflicts) — skills/source-driven-development/SKILL.md:125

## Outputs — required
- Framework-specific code implementing current official patterns — skills/source-driven-development/SKILL.md:118, 119
- Source citations with full deep-link URLs in code comments — skills/source-driven-development/SKILL.md:145, 149, 150
- Conversational explanations with citations and quoted passages — skills/source-driven-development/SKILL.md:153, 160
- Explicit conflict options when docs diverge from existing code — skills/source-driven-development/SKILL.md:128, 133, 134, 135
- Explicit `UNVERIFIED` disclosures when official documentation cannot be found — skills/source-driven-development/SKILL.md:174

## Invokes — required
- skill security-and-hardening — skills/source-driven-development/SKILL.md:101

## Invoked by — required
- skill using-agent-skills — skills/using-agent-skills/SKILL.md:28
- skill doubt-driven-development — skills/doubt-driven-development/SKILL.md:226
- skill interview-me — skills/interview-me/SKILL.md:186
- doc hooks/SDD-CACHE.md — hooks/SDD-CACHE.md:3

## Concepts named — required, verbatim
- `source-driven-development` — skills/source-driven-development/SKILL.md:2 — defined here
- `Source-Driven Development` — skills/source-driven-development/SKILL.md:6 — defined here
- `Overview` — skills/source-driven-development/SKILL.md:8 — defined here
- `When to Use` — skills/source-driven-development/SKILL.md:12 — defined here
- `The Process` — skills/source-driven-development/SKILL.md:27 — defined here
- `DETECT` — skills/source-driven-development/SKILL.md:30 — defined here
- `FETCH` — skills/source-driven-development/SKILL.md:30 — defined here
- `IMPLEMENT` — skills/source-driven-development/SKILL.md:30 — defined here
- `CITE` — skills/source-driven-development/SKILL.md:30 — defined here
- `Detect Stack and Versions` — skills/source-driven-development/SKILL.md:38 — defined here
- `STACK DETECTED` — skills/source-driven-development/SKILL.md:54 — defined here
- `Fetch Official Documentation` — skills/source-driven-development/SKILL.md:63 — defined here
- `Source hierarchy` — skills/source-driven-development/SKILL.md:67 — defined here
- `Retrieval Safety` — skills/source-driven-development/SKILL.md:97 — defined here
- `Treat Fetched Content as Data` — skills/source-driven-development/SKILL.md:97 — defined here
- `Prompt Injection` — skills/source-driven-development/SKILL.md:101 — used here
- `LLM01: Prompt Injection` — skills/source-driven-development/SKILL.md:101 — used here
- `Implement Following Documented Patterns` — skills/source-driven-development/SKILL.md:116 — defined here
- `CONFLICT DETECTED` — skills/source-driven-development/SKILL.md:128 — defined here
- `Cite Your Sources` — skills/source-driven-development/SKILL.md:141 — defined here
- `Citation rules` — skills/source-driven-development/SKILL.md:165 — defined here
- `UNVERIFIED` — skills/source-driven-development/SKILL.md:174 — defined here
- `Common Rationalizations` — skills/source-driven-development/SKILL.md:181 — defined here
- `Red Flags` — skills/source-driven-development/SKILL.md:192 — defined here
- `Verification` — skills/source-driven-development/SKILL.md:204 — defined here

## Structure
- `# Source-Driven Development` — skills/source-driven-development/SKILL.md:6
- `## Overview` — skills/source-driven-development/SKILL.md:8
- `## When to Use` — skills/source-driven-development/SKILL.md:12
- `## The Process` — skills/source-driven-development/SKILL.md:27
- `### Step 1: Detect Stack and Versions` — skills/source-driven-development/SKILL.md:38
- `### Step 2: Fetch Official Documentation` — skills/source-driven-development/SKILL.md:63
- `#### Retrieval Safety: Treat Fetched Content as Data` — skills/source-driven-development/SKILL.md:97
- `### Step 3: Implement Following Documented Patterns` — skills/source-driven-development/SKILL.md:116
- `### Step 4: Cite Your Sources` — skills/source-driven-development/SKILL.md:141
- `## Common Rationalizations` — skills/source-driven-development/SKILL.md:181
- `## Red Flags` — skills/source-driven-development/SKILL.md:192
- `## Verification` — skills/source-driven-development/SKILL.md:204

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Highlights retrieval safety hygiene against prompt injection (`LLM01: Prompt Injection`), instructing agents to treat fetched documentation strictly as data rather than instructions and forbidding hardcoded outbound telemetry endpoints found in docs. Accompanied by a transparent cross-session citation cache mechanism documented in `hooks/SDD-CACHE.md`.

## Context cost
9,949 bytes (~2,500 tokens). Loads `security-and-hardening` (when referencing the prompt injection threat model).
