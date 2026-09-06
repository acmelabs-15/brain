---
package: addy
path: hooks/SDD-CACHE.md
type: doc
bytes: 8398
unit: inv-addy-33
aliases: []
memo_inputs:
  - {path: hooks/SDD-CACHE.md, sha256: 8c1d337a11ed7fd4f3f0e965856cb86a97cdf8b3de0b29b63345ad0133b3db12}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# hooks/SDD-CACHE.md

## Purpose — required, verbatim
> "Cross-session citation cache for [`source-driven-development`](../skills/source-driven-development/SKILL.md). Skips redundant `WebFetch` calls without weakening the skill's "verify against current docs" guarantee." — hooks/SDD-CACHE.md:3

## Design intent — required
Documents the architecture, configuration, mental model, testing procedures, debugging facilities, and limitations of the HTTP revalidation cache for Claude Code's `WebFetch` tool used during `source-driven-development`. Explains why traditional local memory caching violates the skill's guarantees and how HTTP `If-None-Match`/`If-Modified-Since` revalidation preserves freshness while saving bandwidth and execution time.

## Phase — required
addy:Build

## Inputs — required
- Hook configuration settings in `.claude/settings.json` or `.claude/settings.local.json` — hooks/SDD-CACHE.md:13
- Origin HTTP validators (`ETag`, `Last-Modified`) — hooks/SDD-CACHE.md:55

## Outputs — required
- Documentation instructing hook setup and disk cache layout at `.claude/sdd-cache/<sha>.json` — hooks/SDD-CACHE.md:61

## Invokes — required
- skill source-driven-development — hooks/SDD-CACHE.md:3
- script hooks/sdd-cache-pre.sh — hooks/SDD-CACHE.md:24
- script hooks/sdd-cache-post.sh — hooks/SDD-CACHE.md:36

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `sdd-cache hook` — hooks/SDD-CACHE.md:1 — defined here
- `source-driven-development` — hooks/SDD-CACHE.md:3 — used here
- `WebFetch` — hooks/SDD-CACHE.md:3 — used here
- `If-None-Match` — hooks/SDD-CACHE.md:9 — used here
- `If-Modified-Since` — hooks/SDD-CACHE.md:9 — used here
- `304 Not Modified` — hooks/SDD-CACHE.md:9 — used here
- `PreToolUse` — hooks/SDD-CACHE.md:18 — used here
- `PostToolUse` — hooks/SDD-CACHE.md:30 — used here
- `ETag` — hooks/SDD-CACHE.md:55 — used here
- `Last-Modified` — hooks/SDD-CACHE.md:55 — used here
- `TTL` — hooks/SDD-CACHE.md:55 — used here
- `DETECT → FETCH → IMPLEMENT → CITE` — hooks/SDD-CACHE.md:79 — used here
- `Smoke test` — hooks/SDD-CACHE.md:83 — defined here
- `End-to-end` — hooks/SDD-CACHE.md:114 — defined here
- `Freshness verification` — hooks/SDD-CACHE.md:123 — defined here
- `Debugging` — hooks/SDD-CACHE.md:139 — defined here
- `Known limitations` — hooks/SDD-CACHE.md:154 — defined here

## Structure
- # sdd-cache hook — hooks/SDD-CACHE.md:1
- ## Why — hooks/SDD-CACHE.md:5
- ## Setup — hooks/SDD-CACHE.md:11
- ## Mental model — hooks/SDD-CACHE.md:53
- ## How it works — hooks/SDD-CACHE.md:59
- ## Local testing — hooks/SDD-CACHE.md:81
- ### 1. Smoke test the scripts directly — hooks/SDD-CACHE.md:83
- ### 2. End-to-end in a real session — hooks/SDD-CACHE.md:114
- ### 3. Freshness verification — hooks/SDD-CACHE.md:123
- ### 4. Debugging — hooks/SDD-CACHE.md:139
- ## Known limitations — hooks/SDD-CACHE.md:154
- ## Requirements — hooks/SDD-CACHE.md:162

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Documents five distinct operational limitations: prompt-shaped bodies, extra HEAD overhead per cache write, lack of support for origins omitting validators, exposure to upstream server 304 bugs, and restriction to local per-project storage.

## Context cost
8398 bytes, approximately 1900 tokens.
