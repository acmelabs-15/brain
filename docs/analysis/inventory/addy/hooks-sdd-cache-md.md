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
verified: 2026-09-04 quote-check+coverage
---

# hooks/SDD-CACHE.md

## Purpose — required, verbatim
> "Cross-session citation cache for [`source-driven-development`](../skills/source-driven-development/SKILL.md). Skips redundant `WebFetch` calls without weakening the skill's \"verify against current docs\" guarantee." — hooks/SDD-CACHE.md:3

## Design intent — required
Explains the architecture, rationale, configuration, and verification procedures for the HTTP revalidation cache used by `source-driven-development`. It documents how `PreToolUse` and `PostToolUse` hooks intercept `WebFetch` calls, validate cached documents via HTTP conditional headers (`If-None-Match`, `If-Modified-Since`), and return cached responses on HTTP 304 without compromising doc freshness. Without this document, developers and agents would lack setup instructions, testing commands, and debugging techniques for the hook mechanism.

## Phase — required
none

## Inputs — required
none

## Outputs — required
none

## Invokes — required
- skill source-driven-development — hooks/SDD-CACHE.md:3
- script sdd-cache-pre.sh — hooks/SDD-CACHE.md:24
- script sdd-cache-post.sh — hooks/SDD-CACHE.md:36

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `sdd-cache` — hooks/SDD-CACHE.md:1 — defined here
- `source-driven-development` — hooks/SDD-CACHE.md:3 — used here
- `WebFetch` — hooks/SDD-CACHE.md:3 — used here
- `PreToolUse` — hooks/SDD-CACHE.md:18 — used here
- `PostToolUse` — hooks/SDD-CACHE.md:30 — used here
- `ETag` — hooks/SDD-CACHE.md:55 — used here
- `Last-Modified` — hooks/SDD-CACHE.md:55 — used here
- `304 Not Modified` — hooks/SDD-CACHE.md:70 — used here

## Structure
Section headings in order (verbatim):
- `# sdd-cache hook` — hooks/SDD-CACHE.md:1
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
- orphan · hooks/SDD-CACHE.md:1 · Hook documentation file is not linked or referenced from README.md or hooks/hooks.json.

## Observations
- Explicitly differentiates HTTP validator revalidation (freshness check) from local persistent memory, adhering to the principle that stale documentation should never be trusted.
- Documents that `WebFetch` response bodies are prompt-shaped, meaning the cache stores an LLM-filtered extract rather than raw HTML.

## Context cost
8398 bytes (~2100 tokens). Markdown guide.
