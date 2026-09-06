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
verified: 2026-09-05 quote-check+coverage
---

# .claude/skills/programming-advisor/SKILL.md

## Purpose — required, verbatim
> "Before writing a single line of code, determine if the wheel already exists. Vibe coding burns tokens, time, and creates maintenance burden. Existing solutions often provide better quality, security patches, and community support." — .claude/skills/programming-advisor/SKILL.md:25

## Design intent — required
Serves as the repository's tactical "reinventing the wheel" gate and build-vs-buy advisor. It enforces a reuse-first discipline by mandating that agents search internal repository prior-art (leverage/extend) before looking externally, while enforcing a security-sensitive carve-out (auth, crypto, payments) where external vetted solutions strictly override internal homegrown code. When an existing external package or SaaS is chosen, it guides the developer through project context detection, package manager command generation, and scaffolding integration, delegating strategic multi-year TCO evaluations (>$50K, partner/defer) to `buy-vs-build-framework`.

## Phase — required
rjm:spec

## Inputs — required
- User request/intent: functional requirements (what), problem/use case (why), constraints (language, platform, budget, licensing).
- Codebase grep for keywords/symbols, Serena symbol search, Forgetful memory query.
- Dependency files: `package.json`, `requirements.txt`, `Cargo.toml`, `go.mod`.
- Web search queries for external libraries, open source tools, and SaaS options.
- Reference files: `references/token-estimates.md`, `references/common-solutions.md`, `references/integration-patterns.md`, `references/pricing-data.md`, `references/bitter-lesson-llms.md`.

## Outputs — required
- Prior-art search findings (internal and external solutions categorized into libraries, OSS tools, SaaS, frameworks).
- Decision comparison table (Option, Type, Cost, Setup Time, Maintenance, Token Burn, Verdict).
- Tactical cost note (SaaS monthly fee vs DIY token-burn).
- Recommendation (Internal Reuse / Existing Solution / Vibe Coding / Delegate to `buy-vs-build-framework`).
- Complete integration plan upon acceptance: project context detection, installation command, config steps, starter code scaffolding, and warnings about potential conflicts/breaking changes.

## Invokes — required
- reference references/token-estimates.md — .claude/skills/programming-advisor/SKILL.md:72
- skill buy-vs-build-framework — .claude/skills/programming-advisor/SKILL.md:100
- reference references/pricing-data.md — .claude/skills/programming-advisor/SKILL.md:230
- reference references/common-solutions.md — .claude/skills/programming-advisor/SKILL.md:384
- reference references/integration-patterns.md — .claude/skills/programming-advisor/SKILL.md:386
- reference references/bitter-lesson-llms.md — .claude/skills/programming-advisor/SKILL.md:390

## Invoked by — required
- reference .claude/skills/spec-generator/references/spec-prior-art-schema.md — .claude/skills/spec-generator/references/spec-prior-art-schema.md:189
- skill .claude/skills/buy-vs-build-framework/SKILL.md — .claude/skills/buy-vs-build-framework/SKILL.md:4
- skill .claude/skills/software-engineering-library/SKILL.md — .claude/skills/software-engineering-library/SKILL.md:4
- reference .claude/skills/decision-critic/references/rewrite-regression-check.md — .claude/skills/decision-critic/references/rewrite-regression-check.md:76
- skill .claude/skills/analysis-provenance/SKILL.md — .claude/skills/analysis-provenance/SKILL.md:143
- doc docs/skill-reference.md — docs/skill-reference.md:232

## Concepts named — required, verbatim
- `Programming Advisor - "Reinventing the Wheel" Detector` — .claude/skills/programming-advisor/SKILL.md:10 — defined here
- `Triggers` — .claude/skills/programming-advisor/SKILL.md:12 — defined here
- `Core Philosophy` — .claude/skills/programming-advisor/SKILL.md:23 — defined here
- `Capture Intent` — .claude/skills/programming-advisor/SKILL.md:29 — defined here
- `Internal prior-art` — .claude/skills/programming-advisor/SKILL.md:41 — defined here
- `Leverage` — .claude/skills/programming-advisor/SKILL.md:49 — defined here
- `Extend` — .claude/skills/programming-advisor/SKILL.md:49 — defined here
- `Security-sensitive carve-out` — .claude/skills/programming-advisor/SKILL.md:51 — defined here
- `External solutions` — .claude/skills/programming-advisor/SKILL.md:53 — defined here
- `Estimate Vibe Coding Cost` — .claude/skills/programming-advisor/SKILL.md:70 — defined here
- `Generate Comparison Table` — .claude/skills/programming-advisor/SKILL.md:84 — defined here
- `Strategic build/buy/partner/defer` — .claude/skills/programming-advisor/SKILL.md:98 — defined here
- `Recommendation Framework` — .claude/skills/programming-advisor/SKILL.md:111 — defined here
- `Integration Planning` — .claude/skills/programming-advisor/SKILL.md:146 — defined here
- `Detect Project Context` — .claude/skills/programming-advisor/SKILL.md:150 — defined here
- `Generate Installation Commands` — .claude/skills/programming-advisor/SKILL.md:160 — defined here
- `Provide Integration Steps` — .claude/skills/programming-advisor/SKILL.md:181 — defined here
- `Generate Starter Code` — .claude/skills/programming-advisor/SKILL.md:191 — defined here
- `Warn About Potential Issues` — .claude/skills/programming-advisor/SKILL.md:201 — defined here
- `Cost Analysis` — .claude/skills/programming-advisor/SKILL.md:210 — defined here
- `Tactical cost note` — .claude/skills/programming-advisor/SKILL.md:228 — defined here
- `Hidden Costs to Surface` — .claude/skills/programming-advisor/SKILL.md:244 — defined here
- `Red Flags to Call Out` — .claude/skills/programming-advisor/SKILL.md:254 — defined here
- `Response Template` — .claude/skills/programming-advisor/SKILL.md:271 — defined here
- `Integration Plan Template` — .claude/skills/programming-advisor/SKILL.md:311 — defined here
- `Anti-Patterns to Flag` — .claude/skills/programming-advisor/SKILL.md:358 — defined here
- `Common Token Burns` — .claude/skills/programming-advisor/SKILL.md:373 — defined here

## Structure
# Programming Advisor - "Reinventing the Wheel" Detector — .claude/skills/programming-advisor/SKILL.md:10
## Triggers — .claude/skills/programming-advisor/SKILL.md:12
## Core Philosophy — .claude/skills/programming-advisor/SKILL.md:23
## Process — .claude/skills/programming-advisor/SKILL.md:27
### Step 1: Capture Intent — .claude/skills/programming-advisor/SKILL.md:29
### Step 2: Search for Existing Solutions — .claude/skills/programming-advisor/SKILL.md:37
#### 2a. Internal prior-art — .claude/skills/programming-advisor/SKILL.md:41
#### 2b. External solutions — .claude/skills/programming-advisor/SKILL.md:53
### Step 3: Estimate Vibe Coding Cost — .claude/skills/programming-advisor/SKILL.md:70
### Step 4: Generate Comparison Table — .claude/skills/programming-advisor/SKILL.md:84
### Step 5: Strategic build/buy/partner/defer (delegate) — .claude/skills/programming-advisor/SKILL.md:98
### Step 6: Recommendation Framework (Quick Reference) — .claude/skills/programming-advisor/SKILL.md:111
### Step 7: If Vibe Coding Proceeds — .claude/skills/programming-advisor/SKILL.md:137
### Step 8: Integration Planning (When User Accepts Recommendation) — .claude/skills/programming-advisor/SKILL.md:146
#### 8.1 Detect Project Context — .claude/skills/programming-advisor/SKILL.md:150
#### 8.2 Generate Installation Commands — .claude/skills/programming-advisor/SKILL.md:160
#### 8.3 Provide Integration Steps — .claude/skills/programming-advisor/SKILL.md:181
#### 8.4 Generate Starter Code — .claude/skills/programming-advisor/SKILL.md:191
#### 8.5 Warn About Potential Issues — .claude/skills/programming-advisor/SKILL.md:201
### Step 9: Cost Analysis (For Significant Decisions) — .claude/skills/programming-advisor/SKILL.md:210
#### 9.1 When to Include Cost Analysis — .claude/skills/programming-advisor/SKILL.md:214
#### 9.2 Multi-year TCO: delegate — .claude/skills/programming-advisor/SKILL.md:224
#### 9.3 Tactical cost note — .claude/skills/programming-advisor/SKILL.md:228
#### 9.4 Hidden Costs to Surface — .claude/skills/programming-advisor/SKILL.md:244
#### 9.5 Red Flags to Call Out — .claude/skills/programming-advisor/SKILL.md:254
## Verification — .claude/skills/programming-advisor/SKILL.md:263
## Response Template — .claude/skills/programming-advisor/SKILL.md:271
### Integration Plan Template (When User Accepts) — .claude/skills/programming-advisor/SKILL.md:311
## Anti-Patterns to Flag — .claude/skills/programming-advisor/SKILL.md:358
## Quick Reference: Common Token Burns — .claude/skills/programming-advisor/SKILL.md:373

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Explicit division of responsibility between tactical analysis (`programming-advisor`) and strategic multi-year TCO analysis (`buy-vs-build-framework`). Defines a strict boundary: when budget impact exceeds ~$50K or involves a 2+ year horizon, core-versus-commodity decisions, or partner/defer options, it delegates to `buy-vs-build-framework`. It also implements an explicit override to internal reuse: security-sensitive domains (auth, payments, crypto) must never default to homegrown internal code.

## Context cost
File bytes: 15,591 bytes.
References:
`token-estimates.md`: 4,054 bytes
`pricing-data.md`: 5,910 bytes
`common-solutions.md`: 5,290 bytes
`integration-patterns.md`: 6,330 bytes
`bitter-lesson-llms.md`: 2,999 bytes
Total bytes when all references loaded: 40,174 bytes, approximately 10,000 tokens.
