---
package: rjm
path: .agents/architecture/ADR-088-progressive-disclosure-book-rules.md
type: agent
bytes: 8907
unit: inv-rjm-38
in_scope_via: .agents/architecture/README.md
aliases: []
memo_inputs:
  - {path: .agents/architecture/ADR-088-progressive-disclosure-book-rules.md, sha256: 73cf3737d6236f96f1fc337b3e3780bcf92650094ccd9d44cffab11ea60eac27}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .agents/architecture/ADR-088-progressive-disclosure-book-rules.md

## Purpose — required, verbatim
> "Move the eight situational book-derived rules from always-on instruction files to one progressively-disclosed skill named `software-engineering-library`." — .agents/architecture/ADR-088-progressive-disclosure-book-rules.md:55-56

## Design intent — required
Addresses severe instruction context bloat in code-editing workflows where eight situational book-derived engineering rules (`clean-architecture`, `domain-driven-design`, `enterprise-patterns`, `refactoring`, `release-it`, `philosophy-of-software-design`, `data-intensive-applications`, `working-with-legacy-code`) loaded unconditionally for every routine `.py`, `.cs`, and `.ps1` edit, consuming ~124 KB (~54k tokens total instruction text) against an 8 KB knowledge target. By packaging these eight situational books into a single umbrella router skill (`software-engineering-library`) that discloses references just-in-time when triggered by front-door routing (`autoplan`) or post-investigation evidence (`analyze`), the architecture reduces always-on instruction bytes by 57% (down to ~95 KB) and ratchets the enforcement ceiling down to 99 KB, while retaining everyday synthesis rules (`code-quality`, `pragmatic-programmer`, `unified-software-engineering`) inline for reliable baseline adherence. Without this design, every routine code task would continue paying massive token penalties for book depth it never exercises, violating context budget limits.

## Phase — required
cross-phase

## Inputs — required
- "Phase 1 of issue #3419 added the always-on instruction budget gate. The gate showed that a single `.py` edit loaded about 218 KB of instruction text, about 54k tokens." — .agents/architecture/ADR-088-progressive-disclosure-book-rules.md:24-26
- "clean-architecture" — .agents/architecture/ADR-088-progressive-disclosure-book-rules.md:31
- "domain-driven-design" — .agents/architecture/ADR-088-progressive-disclosure-book-rules.md:32
- "enterprise-patterns" — .agents/architecture/ADR-088-progressive-disclosure-book-rules.md:33
- "refactoring" — .agents/architecture/ADR-088-progressive-disclosure-book-rules.md:34
- "release-it" — .agents/architecture/ADR-088-progressive-disclosure-book-rules.md:35
- "philosophy-of-software-design" — .agents/architecture/ADR-088-progressive-disclosure-book-rules.md:36
- "data-intensive-applications" — .agents/architecture/ADR-088-progressive-disclosure-book-rules.md:37
- "working-with-legacy-code" — .agents/architecture/ADR-088-progressive-disclosure-book-rules.md:38
- "This contradicted ADR-069, which says the curated context corpus is the product and curation matters more than bulk." — .agents/architecture/ADR-088-progressive-disclosure-book-rules.md:42-43
- "code-quality" — .agents/architecture/ADR-088-progressive-disclosure-book-rules.md:60
- "pragmatic-programmer" — .agents/architecture/ADR-088-progressive-disclosure-book-rules.md:61
- "unified-software-engineering" — .agents/architecture/ADR-088-progressive-disclosure-book-rules.md:62

## Outputs — required
- "Move the eight situational book-derived rules from always-on instruction files to one progressively-disclosed skill named `software-engineering-library`." — .agents/architecture/ADR-088-progressive-disclosure-book-rules.md:55-56
- "Remove the eight situational book rules" — .agents/architecture/ADR-088-progressive-disclosure-book-rules.md:168
- "Remove the eight generated book instruction mirrors" — .agents/architecture/ADR-088-progressive-disclosure-book-rules.md:169
- "Add `software-engineering-library` with eight references" — .agents/architecture/ADR-088-progressive-disclosure-book-rules.md:171
- "Lower code extension ceilings to 99 KB" — .agents/architecture/ADR-088-progressive-disclosure-book-rules.md:173
- "Bump the paired project-toolkit manifests to 0.6.141" — .agents/architecture/ADR-088-progressive-disclosure-book-rules.md:174

## Invokes — required
- file AGENTS.md — .agents/architecture/ADR-088-progressive-disclosure-book-rules.md:26
- doc ADR-069 — .agents/architecture/ADR-088-progressive-disclosure-book-rules.md:42
- skill software-engineering-library — .agents/architecture/ADR-088-progressive-disclosure-book-rules.md:56
- file .claude/rules/ — .agents/architecture/ADR-088-progressive-disclosure-book-rules.md:168
- file .github/instructions/ — .agents/architecture/ADR-088-progressive-disclosure-book-rules.md:169
- file src/copilot-cli/instructions/ — .agents/architecture/ADR-088-progressive-disclosure-book-rules.md:170
- file .claude/skills/ — .agents/architecture/ADR-088-progressive-disclosure-book-rules.md:171
- file src/copilot-cli/skills/ — .agents/architecture/ADR-088-progressive-disclosure-book-rules.md:172
- script scripts/validation/instruction_budget_constants.py — .agents/architecture/ADR-088-progressive-disclosure-book-rules.md:173
- doc ADR-030 — .agents/architecture/ADR-088-progressive-disclosure-book-rules.md:189
- doc ADR-069 — .agents/architecture/ADR-088-progressive-disclosure-book-rules.md:190
- reference memory/context-engineering-principles — .agents/architecture/ADR-088-progressive-disclosure-book-rules.md:195
- reference claude/claude-code-skills-official-guidance — .agents/architecture/ADR-088-progressive-disclosure-book-rules.md:197
- reference memory/passive-context-vs-skills-vercel-research — .agents/architecture/ADR-088-progressive-disclosure-book-rules.md:199

## Invoked by — required
- doc ADR-088 — .agents/architecture/README.md:182
- reference ADR-088 — .claude/skills/context-optimizer/references/model-context-doctrine.md:271
- reference ADR-088 — .claude/skills/context-optimizer/references/model-context-doctrine.md:323

## Concepts named — required, verbatim
`Progressive Disclosure` — .agents/architecture/ADR-088-progressive-disclosure-book-rules.md:12 — defined here
`Book-Derived Rules` — .agents/architecture/ADR-088-progressive-disclosure-book-rules.md:12 — defined here
`instruction budget gate` — .agents/architecture/ADR-088-progressive-disclosure-book-rules.md:24 — used here
`situational book-derived rules` — .agents/architecture/ADR-088-progressive-disclosure-book-rules.md:29 — defined here
`clean-architecture` — .agents/architecture/ADR-088-progressive-disclosure-book-rules.md:31 — used here
`domain-driven-design` — .agents/architecture/ADR-088-progressive-disclosure-book-rules.md:32 — used here
`enterprise-patterns` — .agents/architecture/ADR-088-progressive-disclosure-book-rules.md:33 — used here
`refactoring` — .agents/architecture/ADR-088-progressive-disclosure-book-rules.md:34 — used here
`release-it` — .agents/architecture/ADR-088-progressive-disclosure-book-rules.md:35 — used here
`philosophy-of-software-design` — .agents/architecture/ADR-088-progressive-disclosure-book-rules.md:36 — used here
`data-intensive-applications` — .agents/architecture/ADR-088-progressive-disclosure-book-rules.md:37 — used here
`working-with-legacy-code` — .agents/architecture/ADR-088-progressive-disclosure-book-rules.md:38 — used here
`curated context corpus` — .agents/architecture/ADR-088-progressive-disclosure-book-rules.md:42 — used here
`task-based selection` — .agents/architecture/ADR-088-progressive-disclosure-book-rules.md:44 — used here
`Empirical project memory` — .agents/architecture/ADR-088-progressive-disclosure-book-rules.md:47 — used here
`Passive context` — .agents/architecture/ADR-088-progressive-disclosure-book-rules.md:48 — used here
`software-engineering-library` — .agents/architecture/ADR-088-progressive-disclosure-book-rules.md:56 — defined here
`code-quality` — .agents/architecture/ADR-088-progressive-disclosure-book-rules.md:60 — used here
`pragmatic-programmer` — .agents/architecture/ADR-088-progressive-disclosure-book-rules.md:61 — used here
`unified-software-engineering` — .agents/architecture/ADR-088-progressive-disclosure-book-rules.md:62 — used here
`task-to-book router` — .agents/architecture/ADR-088-progressive-disclosure-book-rules.md:65 — defined here
`instruction budget ratchet` — .agents/architecture/ADR-088-progressive-disclosure-book-rules.md:70 — defined here
`late retrieval` — .agents/architecture/ADR-088-progressive-disclosure-book-rules.md:105 — defined here
`Autoplan` — .agents/architecture/ADR-088-progressive-disclosure-book-rules.md:128 — used here
`Analysis` — .agents/architecture/ADR-088-progressive-disclosure-book-rules.md:130 — used here
`rollback trigger` — .agents/architecture/ADR-088-progressive-disclosure-book-rules.md:152-153 — defined here
`umbrella router` — .agents/architecture/ADR-088-progressive-disclosure-book-rules.md:178 — defined here
`post-investigation handoff` — .agents/architecture/ADR-088-progressive-disclosure-book-rules.md:184 — defined here
`front-door routing` — .agents/architecture/ADR-088-progressive-disclosure-book-rules.md:185 — defined here

## Structure
# ADR-088: Progressive Disclosure for Book-Derived Rules — .agents/architecture/ADR-088-progressive-disclosure-book-rules.md:12
## Status — .agents/architecture/ADR-088-progressive-disclosure-book-rules.md:14
## Date — .agents/architecture/ADR-088-progressive-disclosure-book-rules.md:18
## Context — .agents/architecture/ADR-088-progressive-disclosure-book-rules.md:22
## Decision — .agents/architecture/ADR-088-progressive-disclosure-book-rules.md:53
## Prior Art Investigation (Required when changing existing systems) — .agents/architecture/ADR-088-progressive-disclosure-book-rules.md:74
### What Currently Exists — .agents/architecture/ADR-088-progressive-disclosure-book-rules.md:76
### Historical Rationale — .agents/architecture/ADR-088-progressive-disclosure-book-rules.md:87
### Why Change Now — .agents/architecture/ADR-088-progressive-disclosure-book-rules.md:98
## Rationale — .agents/architecture/ADR-088-progressive-disclosure-book-rules.md:110
### Alternatives Considered — .agents/architecture/ADR-088-progressive-disclosure-book-rules.md:112
### Trade-offs — .agents/architecture/ADR-088-progressive-disclosure-book-rules.md:120
## Consequences — .agents/architecture/ADR-088-progressive-disclosure-book-rules.md:135
### Positive — .agents/architecture/ADR-088-progressive-disclosure-book-rules.md:137
### Negative — .agents/architecture/ADR-088-progressive-disclosure-book-rules.md:146
### Neutral — .agents/architecture/ADR-088-progressive-disclosure-book-rules.md:157
## Impact on Dependent Components — .agents/architecture/ADR-088-progressive-disclosure-book-rules.md:164
## Implementation Notes — .agents/architecture/ADR-088-progressive-disclosure-book-rules.md:176
## Related Decisions — .agents/architecture/ADR-088-progressive-disclosure-book-rules.md:187
## References — .agents/architecture/ADR-088-progressive-disclosure-book-rules.md:193

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- doc-drift · .agents/architecture/ADR-088-progressive-disclosure-book-rules.md:3,9 · Frontmatter status is `proposed` with `implemented: false`, yet the implementation exists on disk (`software-engineering-library` skill created, code extension ceilings ratcheted to 99 KB in `instruction_budget_constants.py`).
- missing-path · .agents/architecture/ADR-088-progressive-disclosure-book-rules.md:195,197,199 · References `memory/context-engineering-principles`, `claude/claude-code-skills-official-guidance`, and `memory/passive-context-vs-skills-vercel-research` cite Serena memory paths rather than direct repository file paths.

## Observations
- Documents the empirical principle that passive context exhibits higher adherence than skills when a rule is needed on every turn, explaining why core engineering principles (`code-quality`, `pragmatic-programmer`, `unified-software-engineering`) remain always-on while situational reference depth moves to triggered skills.
- Implements progressive disclosure: skill description is the always-on trigger surface, skill body loads upon invocation, and individual book references load only when opened.
- Establishes a dual-trigger model: front-door routing by `autoplan` when an initial request indicates a matching design domain, and post-investigation handoff by `analyze` when inspection uncovers architectural complexity (queues, retries, transactions, schema evolution).
- Successfully dropped always-on instruction bytes by 57% (from ~218 KB to ~95 KB) and ratcheted the code-extension ceiling down to 99 KB.

## Context cost
8907 bytes, approximately 2200 tokens.
