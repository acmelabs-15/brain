---
package: rjm
path: .claude/skills/software-engineering-library/references/working-with-legacy-code.md
type: reference
bytes: 14009
unit: inv-rjm-171
in_scope_via: .claude/skills/software-engineering-library/SKILL.md
aliases: []
memo_inputs:
  - {path: .claude/skills/software-engineering-library/references/working-with-legacy-code.md, sha256: c60a6eb46d697b79a4517c521499b3db023b8198e336e3fc74fd340d85aa8467}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# .claude/skills/software-engineering-library/references/working-with-legacy-code.md

## Purpose — required, verbatim
> "This rule encodes Michael Feathers' techniques from _Working Effectively with Legacy Code_. Feathers defines legacy code as any code without tests, regardless of age or quality. In ai-agents, the same risk applies to code that has tests but already failed once: a previous worker tried to change it and broke something. Treat both classes the same way." — .claude/skills/software-engineering-library/references/working-with-legacy-code.md:4

## Design intent — required
Encodes Michael Feathers' legacy code modification techniques for the multi-agent system, defining legacy code pragmatically as any code lacking tests or any codebase area that previously failed an automated change attempt. It provides a disciplined protocol requiring developers and autonomous agents to establish safety nets through characterization tests and dependency-breaking seams before altering behavior. By separating behavioral preservation from feature edits and promoting patterns such as sprout and wrap, it prevents regressions and uncontrolled scope expansion during maintenance tasks.

## Phase — required
cross-phase

## Inputs — required
none

## Outputs — required
none

## Invokes — required
- reference enterprise-patterns.md — .claude/skills/software-engineering-library/references/working-with-legacy-code.md:156

## Invoked by — required
- skill software-engineering-library — .claude/skills/software-engineering-library/SKILL.md:29

## Concepts named — required, verbatim
- `Working Effectively with Legacy Code` — .claude/skills/software-engineering-library/references/working-with-legacy-code.md:4 — used here
- `legacy code` — .claude/skills/software-engineering-library/references/working-with-legacy-code.md:4 — defined here
- `AGENTS.md floor` — .claude/skills/software-engineering-library/references/working-with-legacy-code.md:12 — used here
- `To Improve fix cycle` — .claude/skills/software-engineering-library/references/working-with-legacy-code.md:14 — used here
- `auto-escalation ladder` — .claude/skills/software-engineering-library/references/working-with-legacy-code.md:14 — used here
- `code-quality rule` — .claude/skills/software-engineering-library/references/working-with-legacy-code.md:18 — used here
- `Characterization test` — .claude/skills/software-engineering-library/references/working-with-legacy-code.md:24 — defined here
- `Seam` — .claude/skills/software-engineering-library/references/working-with-legacy-code.md:25 — defined here
- `Enabling point` — .claude/skills/software-engineering-library/references/working-with-legacy-code.md:26 — defined here
- `Sprout method` — .claude/skills/software-engineering-library/references/working-with-legacy-code.md:27 — defined here
- `sprout class` — .claude/skills/software-engineering-library/references/working-with-legacy-code.md:27 — defined here
- `Wrap method` — .claude/skills/software-engineering-library/references/working-with-legacy-code.md:28 — defined here
- `wrap class` — .claude/skills/software-engineering-library/references/working-with-legacy-code.md:28 — defined here
- `Dependency-breaking technique` — .claude/skills/software-engineering-library/references/working-with-legacy-code.md:29 — defined here
- `Tests Before Edits` — .claude/skills/software-engineering-library/references/working-with-legacy-code.md:33 — defined here
- `Object seam` — .claude/skills/software-engineering-library/references/working-with-legacy-code.md:72 — defined here
- `Link or import seam` — .claude/skills/software-engineering-library/references/working-with-legacy-code.md:73 — defined here
- `Preprocessor or build seam` — .claude/skills/software-engineering-library/references/working-with-legacy-code.md:74 — defined here
- `Sprout Method And Sprout Class` — .claude/skills/software-engineering-library/references/working-with-legacy-code.md:84 — defined here
- `Wrap Method And Wrap Class` — .claude/skills/software-engineering-library/references/working-with-legacy-code.md:103 — defined here
- `Extract interface` — .claude/skills/software-engineering-library/references/working-with-legacy-code.md:126 — defined here
- `Parameterize constructor` — .claude/skills/software-engineering-library/references/working-with-legacy-code.md:127 — defined here
- `Introduce instance delegator` — .claude/skills/software-engineering-library/references/working-with-legacy-code.md:128 — defined here
- `Subclass and override` — .claude/skills/software-engineering-library/references/working-with-legacy-code.md:129 — defined here
- `Pull up dependency` — .claude/skills/software-engineering-library/references/working-with-legacy-code.md:130 — defined here
- `Never Delete Failing Tests To Make A Refactor Pass` — .claude/skills/software-engineering-library/references/working-with-legacy-code.md:140 — defined here
- `sprout site` — .claude/skills/software-engineering-library/references/working-with-legacy-code.md:155 — defined here
- `enterprise-patterns.md` — .claude/skills/software-engineering-library/references/working-with-legacy-code.md:156 — used here
- `repositories and service layers` — .claude/skills/software-engineering-library/references/working-with-legacy-code.md:156 — used here
- `Auto-escalation ladder` — .claude/skills/software-engineering-library/references/working-with-legacy-code.md:158 — used here

## Structure
- `# Working With Legacy Code` — .claude/skills/software-engineering-library/references/working-with-legacy-code.md:2
- `## When To Apply This Rule` — .claude/skills/software-engineering-library/references/working-with-legacy-code.md:8
- `## Core Vocabulary` — .claude/skills/software-engineering-library/references/working-with-legacy-code.md:20
- `## Step Order: Tests Before Edits` — .claude/skills/software-engineering-library/references/working-with-legacy-code.md:33
- `## Characterization Tests` — .claude/skills/software-engineering-library/references/working-with-legacy-code.md:46
- `## Seams` — .claude/skills/software-engineering-library/references/working-with-legacy-code.md:66
- `## Sprout Method And Sprout Class` — .claude/skills/software-engineering-library/references/working-with-legacy-code.md:84
- `## Wrap Method And Wrap Class` — .claude/skills/software-engineering-library/references/working-with-legacy-code.md:103
- `## Dependency-Breaking Techniques` — .claude/skills/software-engineering-library/references/working-with-legacy-code.md:122
- `## Never Delete Failing Tests To Make A Refactor Pass` — .claude/skills/software-engineering-library/references/working-with-legacy-code.md:140
- `## Boundaries With Existing Codebase` — .claude/skills/software-engineering-library/references/working-with-legacy-code.md:151
- `## Quick Self-Review` — .claude/skills/software-engineering-library/references/working-with-legacy-code.md:162

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
- Directly incorporates the repository's auto-escalation ladder and coverage floors into Michael Feathers' legacy code framework, mandating that escalated workers on "To Improve" tasks add characterization tests around broken surfaces before attempting fixes.
- Emphasizes that characterization tests must capture actual observed behavior rather than assumed specifications or aspirational docstring claims.
- Integrates with `enterprise-patterns.md` by identifying agent orchestrator and memory tiers as repositories and service layers where seams should be introduced.

## Context cost
14009 bytes (~3502 tokens). With invoked reference enterprise-patterns.md (11327 bytes), total context is 25336 bytes (~6334 tokens).
