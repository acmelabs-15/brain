---
package: rjm
path: .claude/skills/quality-grades/references/code-qualities.md
type: reference
bytes: 2638
unit: inv-rjm-145
in_scope_via: .claude/skills/quality-grades/SKILL.md
aliases: []
memo_inputs:
  - {path: .claude/skills/quality-grades/references/code-qualities.md, sha256: 1cb2ffdd03dafea65f186e78090ca3fbf0b85317d2b68d08d42bfebb7e45eb4b}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/skills/quality-grades/references/code-qualities.md

## Purpose — required, verbatim
> "Five foundational qualities that make code maintainable, debuggable, and adaptable." — .claude/skills/quality-grades/references/code-qualities.md:9

## Design intent — required
Provides a concise, actionable reference catalog defining five core software maintainability qualities (cohesion, coupling, non-redundancy, encapsulation, testability) along with diagnostic questions, sub-typologies, and testing complaints. Without this reference, agents performing domain quality audits or code reviews would lack a shared taxonomy and heuristic checklist to objectively evaluate structural design weaknesses across architectural layers.

## Phase — required
cross-phase

## Inputs — required
none

## Outputs — required
none

## Invokes — required
none

## Invoked by — required
- skill quality-grades — .claude/skills/quality-grades/SKILL.md:143

## Concepts named — required, verbatim
- `Code Qualities` — .claude/skills/quality-grades/references/code-qualities.md:7 — defined here
- `Cohesion` — .claude/skills/quality-grades/references/code-qualities.md:15 — defined here
- `Coupling` — .claude/skills/quality-grades/references/code-qualities.md:16 — defined here
- `Non-Redundancy` — .claude/skills/quality-grades/references/code-qualities.md:17 — defined here
- `DRY` — .claude/skills/quality-grades/references/code-qualities.md:17 — used here
- `Encapsulation` — .claude/skills/quality-grades/references/code-qualities.md:18 — defined here
- `Testability` — .claude/skills/quality-grades/references/code-qualities.md:19 — defined here
- `Class cohesion` — .claude/skills/quality-grades/references/code-qualities.md:23 — defined here
- `Commonality Variability Analysis` — .claude/skills/quality-grades/references/code-qualities.md:23 — used here
- `Method cohesion` — .claude/skills/quality-grades/references/code-qualities.md:24 — defined here
- `Programming by Intention` — .claude/skills/quality-grades/references/code-qualities.md:24 — used here
- `sergeant` — .claude/skills/quality-grades/references/code-qualities.md:26 — used here
- `separation of concerns` — .claude/skills/quality-grades/references/code-qualities.md:26 — used here
- `Identity` — .claude/skills/quality-grades/references/code-qualities.md:32 — defined here
- `Representation` — .claude/skills/quality-grades/references/code-qualities.md:33 — defined here
- `Inheritance` — .claude/skills/quality-grades/references/code-qualities.md:34 — defined here
- `Subclass` — .claude/skills/quality-grades/references/code-qualities.md:35 — defined here
- `intentional coupling` — .claude/skills/quality-grades/references/code-qualities.md:37 — defined here
- `accidental coupling` — .claude/skills/quality-grades/references/code-qualities.md:37 — defined here
- `Encapsulate by policy, reveal by need` — .claude/skills/quality-grades/references/code-qualities.md:49 — defined here
- `Testability as Diagnostic` — .claude/skills/quality-grades/references/code-qualities.md:51 — defined here

## Structure
- # Code Qualities — .claude/skills/quality-grades/references/code-qualities.md:7
- ## The Five Qualities — .claude/skills/quality-grades/references/code-qualities.md:11
- ## Cohesion — .claude/skills/quality-grades/references/code-qualities.md:21
- ## Coupling Types — .claude/skills/quality-grades/references/code-qualities.md:28
- ## Encapsulation Types — .claude/skills/quality-grades/references/code-qualities.md:39
- ## Testability as Diagnostic — .claude/skills/quality-grades/references/code-qualities.md:51
- ## Qualities Enable Change — .claude/skills/quality-grades/references/code-qualities.md:61

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- `missing-path` · .claude/skills/quality-grades/references/code-qualities.md:2 · Frontmatter cites source 'wiki/concepts/Design Principles/Code Qualities.md' which does not exist in the repository.

## Observations
- Distinguishes class cohesion (via Commonality Variability Analysis) from method cohesion (via Programming by Intention with sergeant methods).
- Categorizes coupling into four subtypes: Identity, Representation, Inheritance, and Subclass, aiming for intentional over accidental coupling.
- Enumerates five encapsulation types (Data, Implementation, Type, Design, Construction) under the motto "Encapsulate by policy, reveal by need."

## Context cost
File size: 2,638 bytes (~660 tokens). Pure reference with no sub-dependencies. Total context cost: 2,638 bytes (~660 tokens).
