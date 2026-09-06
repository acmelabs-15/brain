---
package: rjm
path: .claude/skills/golden-principles/references/design-programming-by-intention.md
type: reference
bytes: 2379
unit: inv-rjm-123
in_scope_via: .agents/architecture/README.md
aliases: []
memo_inputs:
  - {path: .claude/skills/golden-principles/references/design-programming-by-intention.md, sha256: 9bc7693d93b8a0f368ac9e99b06fcc6b33331afadc269e1dc3ffc410735e9509}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/skills/golden-principles/references/design-programming-by-intention.md

## Purpose — required, verbatim
> "Express intent over implementation. Write code that reads like a description of what it does, not how it does it." — .claude/skills/golden-principles/references/design-programming-by-intention.md:9

## Design intent — required
Explains the "Programming by Intention" design technique where code is structured to reveal developer intent rather than low-level implementation mechanics. It defines the "Sergeant Pattern" separating public workflow coordination from private execution methods, catalogs specific naming conventions according to intent categories, and lists anti-patterns (long methods, cryptic names, redundant comments, deep nesting) that obscure intent.

## Phase — required
cross-phase

## Inputs — required
- Source code routines, method bodies, and workflow logic under design or review — .claude/skills/golden-principles/references/design-programming-by-intention.md:9

## Outputs — required
none

## Invokes — required
none

## Invoked by — required
- skill golden-principles — .claude/skills/golden-principles/SKILL.md:132

## Concepts named — required, verbatim
- `Programming by Intention` — .claude/skills/golden-principles/references/design-programming-by-intention.md:7 — defined here
- `The Sergeant Pattern` — .claude/skills/golden-principles/references/design-programming-by-intention.md:11 — defined here
- `Sergeant` — .claude/skills/golden-principles/references/design-programming-by-intention.md:17 — defined here
- `Privates` — .claude/skills/golden-principles/references/design-programming-by-intention.md:18 — defined here
- `Method cohesion` — .claude/skills/golden-principles/references/design-programming-by-intention.md:57 — defined here
- `Separation of concerns` — .claude/skills/golden-principles/references/design-programming-by-intention.md:58 — used here
- `Naming Conventions` — .claude/skills/golden-principles/references/design-programming-by-intention.md:64 — defined here
- `Anti-Patterns` — .claude/skills/golden-principles/references/design-programming-by-intention.md:73 — defined here
- `Long methods` — .claude/skills/golden-principles/references/design-programming-by-intention.md:77 — defined here
- `Cryptic names` — .claude/skills/golden-principles/references/design-programming-by-intention.md:78 — defined here
- `Deep nesting` — .claude/skills/golden-principles/references/design-programming-by-intention.md:80 — defined here

## Structure
- # Programming by Intention — .claude/skills/golden-principles/references/design-programming-by-intention.md:7
- ## The Sergeant Pattern — .claude/skills/golden-principles/references/design-programming-by-intention.md:11
- ## Good Example — .claude/skills/golden-principles/references/design-programming-by-intention.md:20
- ## Bad Example: Mixed Concerns — .claude/skills/golden-principles/references/design-programming-by-intention.md:34
- ## Benefits — .claude/skills/golden-principles/references/design-programming-by-intention.md:53
- ## Naming Conventions — .claude/skills/golden-principles/references/design-programming-by-intention.md:64
- ## Anti-Patterns — .claude/skills/golden-principles/references/design-programming-by-intention.md:73

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- missing-path · .claude/skills/golden-principles/references/design-programming-by-intention.md:2 · Frontmatter source field references nonexistent path wiki/concepts/Design Principles/Programming by Intention.md.

## Observations
- Provides C# code examples demonstrating how a "sergeant" method orchestrates high-level workflow while delegating details to private methods (.claude/skills/golden-principles/references/design-programming-by-intention.md:22-32).
- Categorizes intent-based method naming conventions (check condition, get data, perform action, transform) (.claude/skills/golden-principles/references/design-programming-by-intention.md:66-72).

## Context cost
2379 bytes. Approximately 600 tokens.
