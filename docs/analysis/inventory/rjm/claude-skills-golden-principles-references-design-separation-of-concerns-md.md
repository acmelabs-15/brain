---
package: rjm
path: .claude/skills/golden-principles/references/design-separation-of-concerns.md
type: reference
bytes: 2297
unit: inv-rjm-123
in_scope_via: .agents/architecture/README.md
aliases: []
memo_inputs:
  - {path: .claude/skills/golden-principles/references/design-separation-of-concerns.md, sha256: b5e6b4709e639d9d52ea6451db53246f2687ddaebac225d4b00413852e3bdfa5}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/skills/golden-principles/references/design-separation-of-concerns.md

## Purpose — required, verbatim
> "Decompose a system into distinct sections, each addressing a separate concern." — .claude/skills/golden-principles/references/design-separation-of-concerns.md:9

## Design intent — required
Details the Separation of Concerns principle attributed to Edsger W. Dijkstra, establishing hierarchical levels of decomposition across four tiers: method level, class level, layer level, and service level. It identifies common violations (mixed concerns, god classes, cross-cutting leakage, layer piercing) and outlines architectural strategies (aspects, middleware, decorators) for managing cross-cutting concerns like logging, security, and caching.

## Phase — required
cross-phase

## Inputs — required
- Architectural designs, class models, method hierarchies, and service architectures under evaluation — .claude/skills/golden-principles/references/design-separation-of-concerns.md:9

## Outputs — required
none

## Invokes — required
none

## Invoked by — required
- skill golden-principles — .claude/skills/golden-principles/SKILL.md:133

## Concepts named — required, verbatim
- `Separation of Concerns` — .claude/skills/golden-principles/references/design-separation-of-concerns.md:7 — defined here
- `concern` — .claude/skills/golden-principles/references/design-separation-of-concerns.md:11 — defined here
- `Levels of Separation` — .claude/skills/golden-principles/references/design-separation-of-concerns.md:22 — defined here
- `Method Level` — .claude/skills/golden-principles/references/design-separation-of-concerns.md:24 — defined here
- `Programming by Intention` — .claude/skills/golden-principles/references/design-separation-of-concerns.md:26 — used here
- `Class Level` — .claude/skills/golden-principles/references/design-separation-of-concerns.md:39 — defined here
- `SRP` — .claude/skills/golden-principles/references/design-separation-of-concerns.md:41 — used here
- `Layer Level` — .claude/skills/golden-principles/references/design-separation-of-concerns.md:50 — defined here
- `Service Level` — .claude/skills/golden-principles/references/design-separation-of-concerns.md:54 — defined here
- `Mixed concerns` — .claude/skills/golden-principles/references/design-separation-of-concerns.md:62 — defined here
- `God classes` — .claude/skills/golden-principles/references/design-separation-of-concerns.md:63 — defined here
- `Cross-cutting leakage` — .claude/skills/golden-principles/references/design-separation-of-concerns.md:64 — defined here
- `Layer piercing` — .claude/skills/golden-principles/references/design-separation-of-concerns.md:65 — defined here
- `Cross-Cutting Concerns` — .claude/skills/golden-principles/references/design-separation-of-concerns.md:67 — defined here

## Structure
- # Separation of Concerns — .claude/skills/golden-principles/references/design-separation-of-concerns.md:7
- ## Why It Matters — .claude/skills/golden-principles/references/design-separation-of-concerns.md:13
- ## Levels of Separation — .claude/skills/golden-principles/references/design-separation-of-concerns.md:22
- ### Method Level — .claude/skills/golden-principles/references/design-separation-of-concerns.md:24
- ### Class Level — .claude/skills/golden-principles/references/design-separation-of-concerns.md:39
- ### Layer Level — .claude/skills/golden-principles/references/design-separation-of-concerns.md:50
- ### Service Level — .claude/skills/golden-principles/references/design-separation-of-concerns.md:54
- ## Common Violations — .claude/skills/golden-principles/references/design-separation-of-concerns.md:58
- ## Cross-Cutting Concerns — .claude/skills/golden-principles/references/design-separation-of-concerns.md:67

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- missing-path · .claude/skills/golden-principles/references/design-separation-of-concerns.md:2 · Frontmatter source field references nonexistent path wiki/concepts/Design Principles/Separation of Concerns.md.

## Observations
- Highlights 4 explicit levels of separation (Method, Class, Layer, Service) and links each to concrete design patterns and architectural solutions (.claude/skills/golden-principles/references/design-separation-of-concerns.md:22-56).
- Addresses cross-cutting concerns (logging, security, caching) via decorators, aspects, and middleware to prevent architectural pollution (.claude/skills/golden-principles/references/design-separation-of-concerns.md:67-71).

## Context cost
2297 bytes. Approximately 580 tokens.
