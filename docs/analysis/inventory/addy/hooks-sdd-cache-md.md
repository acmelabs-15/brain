---
package: addy
path: hooks/SDD-CACHE.md
type: doc
bytes: 8398
unit: inv-addy-9
---

# hooks/SDD-CACHE.md

## Purpose — required, verbatim
> "Cross-session citation cache for [`source-driven-development`](../skills/source-driven-development/SKILL.md). Skips redundant `WebFetch` calls without weakening the skill's \"verify against current docs\" guarantee." — hooks/SDD-CACHE.md:3

## Design intent — required
Provides the architectural specification, setup instructions, testing protocol, and operational model for the `sdd-cache` hook subsystem. Articulates the rationale for rejecting traditional TTL-based or memory-based caching (which causes doc-drift and hallucination), and explains how origin HTTP revalidation (`304 Not Modified`) permits performance optimization while upholding the source-driven-development guarantee of verifying against current live documentation.

## Phase — required
addy:Build

## Inputs — required
- References `skills/source-driven-development/SKILL.md` — hooks/SDD-CACHE.md:3
- References `hooks/sdd-cache-pre.sh` — hooks/SDD-CACHE.md:24
- References `hooks/sdd-cache-post.sh` — hooks/SDD-CACHE.md:36
- References `.claude/settings.json` — hooks/SDD-CACHE.md:13
- References `.claude/sdd-cache/<sha>.json` — hooks/SDD-CACHE.md:61

## Outputs — required
none

## Invokes — required
- skill skills/source-driven-development/SKILL.md — hooks/SDD-CACHE.md:3
- script hooks/sdd-cache-pre.sh — hooks/SDD-CACHE.md:24,105,135
- script hooks/sdd-cache-post.sh — hooks/SDD-CACHE.md:36,93

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `sdd-cache` — hooks/SDD-CACHE.md:1 — defined here
- `source-driven-development` — hooks/SDD-CACHE.md:3 — used here
- `WebFetch` — hooks/SDD-CACHE.md:3 — used here
- `PreToolUse` — hooks/SDD-CACHE.md:18 — used here
- `PostToolUse` — hooks/SDD-CACHE.md:30 — used here
- `304 Not Modified` — hooks/SDD-CACHE.md:9 — used here
- `ETag` — hooks/SDD-CACHE.md:9 — used here
- `Last-Modified` — hooks/SDD-CACHE.md:9 — used here
- `revalidation` — hooks/SDD-CACHE.md:9 — used here
- `cache hit` — hooks/SDD-CACHE.md:76 — used here
- `cache miss` — hooks/SDD-CACHE.md:77 — used here
- `DETECT → FETCH → IMPLEMENT → CITE` — hooks/SDD-CACHE.md:79 — used here

## Structure
- `# sdd-cache hook`
- `## Why`
- `## Setup`
- `## Mental model`
- `## How it works`
- `## Local testing`
- `### 1. Smoke test the scripts directly`
- `### 2. End-to-end in a real session`
- `### 3. Freshness verification`
- `### 4. Debugging`
- `## Known limitations`
- `## Requirements`

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- `orphan` · hooks/SDD-CACHE.md:1 · Architectural documentation file is placed inside `hooks/` and is not referenced by `README.md`, `CLAUDE.md`, or `skills/source-driven-development/SKILL.md`.

## Observations
- Outlines five explicit limitations: body is prompt-shaped, every cache write costs an extra origin HEAD request, servers without ETag/Last-Modified are never cached, misbehaving servers could emit incorrect 304s, and caching is strictly local per-project.
- Contains runnable smoke-testing commands that accurately validate both the pre and post hook scripts.

## Context cost
8,398 bytes (~2,100 tokens)
