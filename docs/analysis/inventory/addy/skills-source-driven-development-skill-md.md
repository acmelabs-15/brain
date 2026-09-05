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
verified: 2026-09-04 quote-check+coverage
---

# skills/source-driven-development/SKILL.md

## Purpose — required, verbatim
> "Grounds every implementation decision in official documentation. Use when you want authoritative, source-cited code free from outdated patterns. Use when building with any framework or library where correctness matters." — skills/source-driven-development/SKILL.md:3

## Design intent — required
Prevents agents from hallucinating outdated, deprecated, or incorrect framework patterns by enforcing an authoritative verification workflow: detecting exact dependency versions from project files, fetching current official documentation, extracting patterns while treating fetched web content as untrusted data against prompt injection, and requiring full-URL source citations in code comments and conversation.

## Phase — required
addy:Build

## Inputs — required
- Project dependency files (`package.json`, `composer.json`, `requirements.txt`, `pyproject.toml`, `go.mod`, `Cargo.toml`, `Gemfile` — skills/source-driven-development/SKILL.md:43-48)
- Official documentation pages fetched via HTTP or browser (skills/source-driven-development/SKILL.md:65, 71)
- User clarifications when versions are ambiguous or missing (skills/source-driven-development/SKILL.md:61)

## Outputs — required
- Stack detection report (skills/source-driven-development/SKILL.md:54)
- Documented, version-verified implementation code with inline citations (skills/source-driven-development/SKILL.md:148-151)
- Conversational explanations with full URLs, deep link anchors, and quoted source passages (skills/source-driven-development/SKILL.md:154-164)
- Explicit unverified disclaimers when official documentation cannot be found (skills/source-driven-development/SKILL.md:174-177)

## Invokes — required
- skill security-and-hardening — skills/source-driven-development/SKILL.md:101

## Invoked by — required
- CLAUDE.md:23
- README.md:252
- hooks/SDD-CACHE.md:3
- skills/using-agent-skills/SKILL.md:28
- skills/doubt-driven-development/SKILL.md:226
- skills/interview-me/SKILL.md:186

## Concepts named — required, verbatim
- `source-driven-development` — skills/source-driven-development/SKILL.md:2 — defined here
- `DETECT` — skills/source-driven-development/SKILL.md:30 — defined here
- `FETCH` — skills/source-driven-development/SKILL.md:30 — defined here
- `IMPLEMENT` — skills/source-driven-development/SKILL.md:30 — defined here
- `CITE` — skills/source-driven-development/SKILL.md:30 — defined here
- `package.json` — skills/source-driven-development/SKILL.md:43 — used here
- `composer.json` — skills/source-driven-development/SKILL.md:44 — used here
- `requirements.txt` — skills/source-driven-development/SKILL.md:45 — used here
- `pyproject.toml` — skills/source-driven-development/SKILL.md:45 — used here
- `go.mod` — skills/source-driven-development/SKILL.md:46 — used here
- `Cargo.toml` — skills/source-driven-development/SKILL.md:47 — used here
- `Gemfile` — skills/source-driven-development/SKILL.md:48 — used here
- `STACK DETECTED` — skills/source-driven-development/SKILL.md:54 — defined here
- `Source hierarchy` — skills/source-driven-development/SKILL.md:67 — defined here
- `Retrieval Safety` — skills/source-driven-development/SKILL.md:97 — defined here
- `LLM01: Prompt Injection` — skills/source-driven-development/SKILL.md:101 — used here
- `security-and-hardening` — skills/source-driven-development/SKILL.md:101 — used here
- `CONFLICT DETECTED` — skills/source-driven-development/SKILL.md:128 — defined here
- `Citation rules` — skills/source-driven-development/SKILL.md:165 — defined here
- `UNVERIFIED` — skills/source-driven-development/SKILL.md:174 — defined here
- `Common Rationalizations` — skills/source-driven-development/SKILL.md:181 — defined here
- `Red Flags` — skills/source-driven-development/SKILL.md:192 — defined here
- `Verification` — skills/source-driven-development/SKILL.md:204 — defined here

## Structure
- # Source-Driven Development — skills/source-driven-development/SKILL.md:6
- ## Overview — skills/source-driven-development/SKILL.md:8
- ## When to Use — skills/source-driven-development/SKILL.md:12
- ## The Process — skills/source-driven-development/SKILL.md:27
- ### Step 1: Detect Stack and Versions — skills/source-driven-development/SKILL.md:38
- ### Step 2: Fetch Official Documentation — skills/source-driven-development/SKILL.md:63
- #### Retrieval Safety: Treat Fetched Content as Data — skills/source-driven-development/SKILL.md:97
- ### Step 3: Implement Following Documented Patterns — skills/source-driven-development/SKILL.md:116
- ### Step 4: Cite Your Sources — skills/source-driven-development/SKILL.md:141
- ## Common Rationalizations — skills/source-driven-development/SKILL.md:181
- ## Red Flags — skills/source-driven-development/SKILL.md:192
- ## Verification — skills/source-driven-development/SKILL.md:204

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
- Includes a dedicated retrieval safety section (`Retrieval Safety: Treat Fetched Content as Data` at line 97) warning that external documentation pages are untrusted input subject to prompt injection (citing OWASP LLM01) and must be treated purely as passive technical data rather than agent instructions.
- Defines a 4-tier hierarchy of authoritative sources (Official docs, Official blog/changelog, Web standards, Browser/runtime compatibility) while explicitly disqualifying Stack Overflow, blog posts, tutorials, AI summaries, and training data.
- Provides a structured format for surfacing conflicts when official documentation recommends patterns that diverge from existing codebase conventions.
- Companion document `hooks/SDD-CACHE.md` specifies a cross-session citation cache mechanism for `source-driven-development` to eliminate redundant HTTP fetches across sessions.

## Context cost
9949 bytes (~2487 tokens). Invocation of `security-and-hardening` adds 24192 bytes (~6048 tokens).
