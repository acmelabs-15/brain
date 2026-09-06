---
package: rjm
path: .claude/skills/programming-advisor/SKILL.md
type: skill
bytes: 15591
unit: inv-rjm-138
in_scope_via: .claude/skills/spec-generator/references/spec-prior-art-schema.md
aliases: []
memo_inputs:
  - {path: .claude/skills/programming-advisor/SKILL.md, sha256: c921fd24a13d7a23d2a2e48282b613debb43ce77469240480d7d3380be612552}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# .claude/skills/programming-advisor/SKILL.md

## Purpose — required, verbatim
> "Evaluate existing solutions (libraries, SaaS, open source) AND internal prior-art before custom development to avoid reinventing the wheel." — .claude/skills/programming-advisor/SKILL.md:4

## Design intent — required
Tactical decision-support skill designed to prevent engineers and AI agents from "reinventing the wheel" through custom development ("vibe coding") when vetted solutions exist. Establishes a strict "reuse first" hierarchy: checking internal prior-art (codebase symbols, existing dependencies in package files, and memory search) for Leverage or Extend opportunities before executing web searches for external packages or SaaS tools. Embeds an essential security-sensitive carve-out overriding reuse-first for authentication, cryptography, and payments to mandate established external providers (e.g. Auth0, Stripe). Hands off strategic capital investments (>$50K, multi-year TCO, core-vs-context) to `buy-vs-build-framework`, while providing rapid tactical decision tables and turnkey integration plans (package manager detection, install commands, starter code) when off-the-shelf solutions are accepted.

## Phase — required
rjm:spec

## Inputs — required
- User query or trigger phrases: `"should I build X or use a library"`, `"find existing solutions for X"`, `"is there a package for X"`, `"build vs buy for X"`, `"check if X exists before building"`, `"do we already have X"` (.claude/skills/programming-advisor/SKILL.md:15-21)
- Extracted intent attributes: What (core functionality), Why (use case / problem), Constraints (language, platform, budget, licensing) (.claude/skills/programming-advisor/SKILL.md:33-35)
- Internal codebase artifacts: symbol searches and existing package manifests (`package.json`, `requirements.txt`, `Cargo.toml`, `go.mod`) (.claude/skills/programming-advisor/SKILL.md:45-48)
- External web search queries across package ecosystems, open source tools, and commercial SaaS (.claude/skills/programming-advisor/SKILL.md:57-68)

## Outputs — required
- Structured Build vs Buy comparison table with Option, Type, Cost, Setup Time, Maintenance, Token Burn, and Verdict (.claude/skills/programming-advisor/SKILL.md:88-96, 287-292)
- Tactical Cost Note table detailing setup, monthly charges, and hidden operational costs (.claude/skills/programming-advisor/SKILL.md:232-242, 293-300)
- Actionable recommendation narrative (.claude/skills/programming-advisor/SKILL.md:302-305)
- Turnkey Integration Plan: detected project context, package installation commands, configuration adjustments, and starter code patterns (.claude/skills/programming-advisor/SKILL.md:146-209, 311-356)

## Invokes — required
- reference token-estimates.md — .claude/skills/programming-advisor/SKILL.md:72
- reference pricing-data.md — .claude/skills/programming-advisor/SKILL.md:230
- reference common-solutions.md — .claude/skills/programming-advisor/SKILL.md:384
- reference integration-patterns.md — .claude/skills/programming-advisor/SKILL.md:386
- reference bitter-lesson-llms.md — .claude/skills/programming-advisor/SKILL.md:390
- skill buy-vs-build-framework — .claude/skills/programming-advisor/SKILL.md:100

## Invoked by — required
- skill spec-generator — .claude/skills/spec-generator/references/spec-prior-art-schema.md:189
- doc skill-reference.md — docs/skill-reference.md:232

## Concepts named — required, verbatim
- `programming-advisor` — .claude/skills/programming-advisor/SKILL.md:2 — defined here
- `Reinventing the Wheel` — .claude/skills/programming-advisor/SKILL.md:10 — defined here
- `buy-vs-build-framework` — .claude/skills/programming-advisor/SKILL.md:19 — used here
- `leverage/extend` — .claude/skills/programming-advisor/SKILL.md:21 — defined here
- `Vibe coding` — .claude/skills/programming-advisor/SKILL.md:25 — defined here
- `Internal prior-art` — .claude/skills/programming-advisor/SKILL.md:41 — defined here
- `Leverage` — .claude/skills/programming-advisor/SKILL.md:49 — defined here
- `Extend` — .claude/skills/programming-advisor/SKILL.md:49 — defined here
- `Security-sensitive carve-out` — .claude/skills/programming-advisor/SKILL.md:51 — defined here
- `External solutions` — .claude/skills/programming-advisor/SKILL.md:53 — defined here
- `Token Burn` — .claude/skills/programming-advisor/SKILL.md:79 — defined here
- `Comparison Table` — .claude/skills/programming-advisor/SKILL.md:84 — defined here
- `Strategic build/buy/partner/defer` — .claude/skills/programming-advisor/SKILL.md:98 — defined here
- `Core-vs-Context` — .claude/skills/programming-advisor/SKILL.md:100 — used here
- `Recommendation Framework` — .claude/skills/programming-advisor/SKILL.md:111 — defined here
- `Integration Planning` — .claude/skills/programming-advisor/SKILL.md:146 — defined here
- `Cost Analysis` — .claude/skills/programming-advisor/SKILL.md:210 — defined here
- `Multi-year TCO` — .claude/skills/programming-advisor/SKILL.md:224 — used here
- `Tactical cost note` — .claude/skills/programming-advisor/SKILL.md:228 — defined here
- `Hidden Costs` — .claude/skills/programming-advisor/SKILL.md:244 — defined here
- `Red Flags` — .claude/skills/programming-advisor/SKILL.md:254 — defined here
- `Anti-Patterns` — .claude/skills/programming-advisor/SKILL.md:358 — defined here

## Structure
- `## Triggers` — .claude/skills/programming-advisor/SKILL.md:12
- `## Core Philosophy` — .claude/skills/programming-advisor/SKILL.md:23
- `## Process` — .claude/skills/programming-advisor/SKILL.md:27
- `### Step 1: Capture Intent` — .claude/skills/programming-advisor/SKILL.md:29
- `### Step 2: Search for Existing Solutions` — .claude/skills/programming-advisor/SKILL.md:37
- `#### 2a. Internal prior-art` — .claude/skills/programming-advisor/SKILL.md:41
- `#### 2b. External solutions` — .claude/skills/programming-advisor/SKILL.md:53
- `### Step 3: Estimate Vibe Coding Cost` — .claude/skills/programming-advisor/SKILL.md:70
- `### Step 4: Generate Comparison Table` — .claude/skills/programming-advisor/SKILL.md:84
- `### Step 5: Strategic build/buy/partner/defer (delegate)` — .claude/skills/programming-advisor/SKILL.md:98
- `### Step 6: Recommendation Framework (Quick Reference)` — .claude/skills/programming-advisor/SKILL.md:111
- `### Step 7: If Vibe Coding Proceeds` — .claude/skills/programming-advisor/SKILL.md:137
- `### Step 8: Integration Planning (When User Accepts Recommendation)` — .claude/skills/programming-advisor/SKILL.md:146
- `#### 8.1 Detect Project Context` — .claude/skills/programming-advisor/SKILL.md:150
- `#### 8.2 Generate Installation Commands` — .claude/skills/programming-advisor/SKILL.md:160
- `#### 8.3 Provide Integration Steps` — .claude/skills/programming-advisor/SKILL.md:181
- `#### 8.4 Generate Starter Code` — .claude/skills/programming-advisor/SKILL.md:191
- `#### 8.5 Warn About Potential Issues` — .claude/skills/programming-advisor/SKILL.md:201
- `### Step 9: Cost Analysis (For Significant Decisions)` — .claude/skills/programming-advisor/SKILL.md:210
- `#### 9.1 When to Include Cost Analysis` — .claude/skills/programming-advisor/SKILL.md:214
- `#### 9.2 Multi-year TCO: delegate` — .claude/skills/programming-advisor/SKILL.md:224
- `#### 9.3 Tactical cost note` — .claude/skills/programming-advisor/SKILL.md:228
- `#### 9.4 Hidden Costs to Surface` — .claude/skills/programming-advisor/SKILL.md:244
- `#### 9.5 Red Flags to Call Out` — .claude/skills/programming-advisor/SKILL.md:254
- `## Verification` — .claude/skills/programming-advisor/SKILL.md:263
- `## Response Template` — .claude/skills/programming-advisor/SKILL.md:271
- `### Integration Plan Template (When User Accepts)` — .claude/skills/programming-advisor/SKILL.md:311
- `## Anti-Patterns to Flag` — .claude/skills/programming-advisor/SKILL.md:358
- `## Quick Reference: Common Token Burns` — .claude/skills/programming-advisor/SKILL.md:373

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
- Directly serves the specification gate: `.claude/skills/spec-generator/references/spec-prior-art-schema.md:189-191` mandates executing `programming-advisor` as Step 4b "Dependency scrutiny" whenever a spec proposes adding an external dependency.
- Establishes clear division of labor with `buy-vs-build-framework`: handles quick tactical selections (<$50K, library vs glue code) and delegates strategic enterprise decisions (weighted multi-criteria matrix, multi-year NPV/TCO via `calculate_tco.py`).
- Distinctively balances token economy by factoring AI code generation iteration costs (2-5x multipliers) against SaaS subscription and off-the-shelf maintenance costs.

## Context cost
40174 bytes (~10043 tokens). Comprises `SKILL.md` (15591 bytes), `references/bitter-lesson-llms.md` (2999 bytes), `references/common-solutions.md` (5290 bytes), `references/integration-patterns.md` (6330 bytes), `references/pricing-data.md` (5910 bytes), and `references/token-estimates.md` (4054 bytes).
