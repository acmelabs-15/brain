---
package: addy
path: skills/source-driven-development/SKILL.md
type: skill
bytes: 9949
unit: inv-addy-46
aliases: []
memo_inputs:
  - {path: skills/source-driven-development/SKILL.md, sha256: 719d4e54083c90ded62112fb41df3dbc4619309118ee0e6aa4d846f92d8204af}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# skills/source-driven-development/SKILL.md

## Purpose — required, verbatim
> "Grounds every implementation decision in official documentation. Use when you want authoritative, source-cited code free from outdated patterns. Use when building with any framework or library where correctness matters." — skills/source-driven-development/SKILL.md:3

## Design intent — required
Prevents agents from hallucinating API signatures, utilizing deprecated syntax from outdated training data, or writing framework-specific code from memory. Enforces a strict four-step workflow (Detect → Fetch → Implement → Cite): detecting exact dependency versions from project manifests, fetching targeted official documentation while sanitizing retrieved content as untrusted input against prompt injection, implementing exclusively to documented patterns, and embedding verifiable source URLs directly in comments and conversational rationale. Without this skill, agents produce code that appears plausible but fails against current library versions, silently adopts deprecated patterns, or introduces security vulnerabilities from untrusted web documentation.

## Phase — required
addy:Build ("Build" — README.md:360; CLAUDE.md:23)

## Inputs — required
- Project dependency configuration files: `package.json` — skills/source-driven-development/SKILL.md:43, `composer.json` — skills/source-driven-development/SKILL.md:44, `requirements.txt` / `pyproject.toml` — skills/source-driven-development/SKILL.md:45, `go.mod` — skills/source-driven-development/SKILL.md:46, `Cargo.toml` — skills/source-driven-development/SKILL.md:47, `Gemfile` — skills/source-driven-development/SKILL.md:48
- Clarification from user when versions are missing or ambiguous — skills/source-driven-development/SKILL.md:61
- Official documentation pages, changelogs, web standards, and compatibility references — skills/source-driven-development/SKILL.md:69-75
- Existing codebase patterns when surfacing framework version conflicts — skills/source-driven-development/SKILL.md:128-137

## Outputs — required
- Stack detection report: `STACK DETECTED:` — skills/source-driven-development/SKILL.md:54
- Framework conflict resolution prompts: `CONFLICT DETECTED:` — skills/source-driven-development/SKILL.md:128
- Implemented code with source citations in comments — skills/source-driven-development/SKILL.md:147-151
- Conversational justification citing documentation URLs and quoted passages — skills/source-driven-development/SKILL.md:155-163
- Explicit unverified pattern warnings: `UNVERIFIED:` — skills/source-driven-development/SKILL.md:174

## Invokes — required
- skill security-and-hardening — skills/source-driven-development/SKILL.md:101

## Invoked by — required
- skill using-agent-skills — skills/using-agent-skills/SKILL.md:28
- skill doubt-driven-development — skills/doubt-driven-development/SKILL.md:226
- skill interview-me — skills/interview-me/SKILL.md:186
- doc README.md — README.md:252
- doc CLAUDE.md — CLAUDE.md:23
- doc external/source-driven-development.md — external/source-driven-development.md:10

## Concepts named — required, verbatim
- `Source-Driven Development` — skills/source-driven-development/SKILL.md:6 — defined here
- `Source hierarchy` — skills/source-driven-development/SKILL.md:67 — defined here
- `Official documentation` — skills/source-driven-development/SKILL.md:71 — defined here
- `Official blog / changelog` — skills/source-driven-development/SKILL.md:72 — defined here
- `Web standards references` — skills/source-driven-development/SKILL.md:73 — defined here
- `Browser/runtime compatibility` — skills/source-driven-development/SKILL.md:74 — defined here
- `Retrieval Safety: Treat Fetched Content as Data` — skills/source-driven-development/SKILL.md:97 — defined here
- `Prompt Injection` — skills/source-driven-development/SKILL.md:101 — used here
- `LLM01: Prompt Injection` — skills/source-driven-development/SKILL.md:101 — used here
- `security-and-hardening` — skills/source-driven-development/SKILL.md:101 — used here
- `Citation rules` — skills/source-driven-development/SKILL.md:165 — defined here
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
- orphan — skills/source-driven-development/SKILL.md:1: No command in `commands/`, `.claude/commands/`, or `.gemini/commands/` exposes `source-driven-development` directly to the user (unlike `/spec`, `/build`, `/test`), leaving it invoked only as an embedded workflow reference via `skills/using-agent-skills/SKILL.md:28` and documentation.
- missing-path — hooks/SDD-CACHE.md:51: `hooks/SDD-CACHE.md:51` instructs to "Use `/source-driven-development` (or the skill) as usual", but no `/source-driven-development` command file exists in `commands/`, `.claude/commands/`, or `.gemini/commands/`.
- doc-drift — skills/source-driven-development/SKILL.md:3: Frontmatter description ("Grounds every implementation decision in official documentation. Use when you want authoritative, source-cited code free from outdated patterns. Use when building with any framework or library where correctness matters." — skills/source-driven-development/SKILL.md:3) differs from `README.md:252` summary ("Ground every framework decision in official documentation - verify, cite sources, flag what's unverified").

## Observations
- Introduces explicit Retrieval Safety rules (lines 97-114) guarding against prompt injection in fetched web pages (OWASP LLM01): agents must extract only API signatures, code samples, and version notes while ignoring prompt directives, and are forbidden from hardcoding outbound endpoints from fetched docs without surfacing them to the user.
- Emphasizes anchor-level deep linking over top-level URLs ("anchors survive doc restructuring better than top-level pages" — skills/source-driven-development/SKILL.md:168).
- Companion caching mechanism documented in `hooks/SDD-CACHE.md` provides cross-session citation caching to skip redundant fetches without violating the fresh verification guarantee.

## Context cost
9,949 bytes (~2,487 tokens). If invoking `security-and-hardening` (10,950 bytes), total context is 20,899 bytes (~5,225 tokens).
