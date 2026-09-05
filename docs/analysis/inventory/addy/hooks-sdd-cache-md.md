---
package: addy
path: hooks/SDD-CACHE.md
type: doc
bytes: 8398
unit: inv-addy-33
deprecated: false
aliases: []
memo_inputs:
  - {path: hooks/SDD-CACHE.md, sha256: 8c1d337a11ed7fd4f3f0e965856cb86a97cdf8b3de0b29b63345ad0133b3db12}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# hooks/SDD-CACHE.md

## Purpose — required, verbatim
> "Cross-session citation cache for [`source-driven-development`](../skills/source-driven-development/SKILL.md)." — hooks/SDD-CACHE.md:3

## Design intent — required
Documentation guide for the `sdd-cache` hook subsystem. Explains how conditional HTTP revalidation (HTTP 304 via ETag and Last-Modified) enables cross-session reuse of documentation responses fetched by Claude Code's WebFetch tool during `source-driven-development` workflows without violating the skill's core guarantee of verifying against current upstream documentation.

## Phase — required
addy:Build

## Inputs — required
- Hook configuration in `.claude/settings.json` — hooks/SDD-CACHE.md:13
- Cached responses under `.claude/sdd-cache/<sha>.json` — hooks/SDD-CACHE.md:61

## Outputs — required
- Hook configuration instructions, testing recipes, and mental model documentation — hooks/SDD-CACHE.md:11, 53, 81

## Invokes — required
- skill source-driven-development — hooks/SDD-CACHE.md:3
- script hooks/sdd-cache-pre.sh — hooks/SDD-CACHE.md:24
- script hooks/sdd-cache-post.sh — hooks/SDD-CACHE.md:36

## Invoked by — required
none

## Concepts named — required, verbatim
- `sdd-cache hook` — hooks/SDD-CACHE.md:1 — defined here
- `source-driven-development` — hooks/SDD-CACHE.md:3 — used here
- `WebFetch` — hooks/SDD-CACHE.md:3 — used here
- `304 Not Modified` — hooks/SDD-CACHE.md:9 — used here
- `PreToolUse` — hooks/SDD-CACHE.md:18 — used here
- `PostToolUse` — hooks/SDD-CACHE.md:30 — used here
- `ETag` — hooks/SDD-CACHE.md:55 — used here
- `Last-Modified` — hooks/SDD-CACHE.md:55 — used here

## Structure
- `## Why` — hooks/SDD-CACHE.md:5
- `## Setup` — hooks/SDD-CACHE.md:11
- `## Mental model` — hooks/SDD-CACHE.md:53
- `## How it works` — hooks/SDD-CACHE.md:59
- `## Local testing` — hooks/SDD-CACHE.md:81
- `### 1. Smoke test the scripts directly` — hooks/SDD-CACHE.md:83
- `### 2. End-to-end in a real session` — hooks/SDD-CACHE.md:114
- `### 3. Freshness verification` — hooks/SDD-CACHE.md:123
- `### 4. Debugging` — hooks/SDD-CACHE.md:139
- `## Known limitations` — hooks/SDD-CACHE.md:154
- `## Requirements` — hooks/SDD-CACHE.md:162

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Documents that cached responses are prompt-shaped because WebFetch filters responses through a model using the user prompt; the hook preserves the prompt in cached metadata so subsequent agents can evaluate relevance. Notes that each cache write incurs an extra HEAD roundtrip because Claude Code does not pass response headers to hooks.

## Context cost
8398 bytes, approximately 2000 tokens.
