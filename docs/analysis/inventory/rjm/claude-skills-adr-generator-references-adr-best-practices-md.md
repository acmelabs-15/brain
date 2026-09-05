---
package: rjm
path: .claude/skills/adr-generator/references/adr-best-practices.md
type: reference
bytes: 6891
unit: inv-rjm-76
in_scope_via: .claude/skills/adr-generator/SKILL.md
aliases: []
memo_inputs:
  - {path: .claude/skills/adr-generator/references/adr-best-practices.md, sha256: 62f0e939ebf8455bdf6f0ff1d882d21e551b1d1bcfc532a863ef80f68a0675f2}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/skills/adr-generator/references/adr-best-practices.md

## Purpose — required, verbatim
> "Writing guidance adapted from [Joel Parker Henderson's ADR collection](https://github.com/joelparkerhenderson/architecture-decision-record) and community best practices." — .claude/skills/adr-generator/references/adr-best-practices.md:3

## Design intent — required
Consolidates industry architectural decision record best practices into practical authoring and lifecycle guidance. Solves the tension between different community approaches to ADR mutability (strict append-only vs unconstrained in-place edits) by establishing the UK GDS Way "bounded in-place edits" rule based on an objective implementation boundary: clarifications and consequences are editable in place with date updates, decisions may be replaced in place prior to implementation with stakeholder agreement, but any decision change post-implementation strictly requires a new superseding ADR while permanently retaining the old one. It also provides guidance on writing effective context and consequence sections, catalogs file naming conventions (number-prefixed uppercase/lowercase, verb-phrase), defines the standard 5-stage lifecycle (Proposed, Accepted, Deprecated, Superseded, Rejected), criteria for when to write vs skip an ADR, and teamwork collaboration advice. Without it, developers and agents would lack clear rules on ADR mutability and lifecycle management, risking destructive in-place revisions or unmanaged drift.

## Phase — required
cross-phase

## Inputs — required
none

## Outputs — required
none

## Invokes — required
none

## Invoked by — required
- skill adr-generator — .claude/skills/adr-generator/SKILL.md:250

## Concepts named — required, verbatim
- `Rationale` — .claude/skills/adr-generator/references/adr-best-practices.md:7 — defined here
- `Specific` — .claude/skills/adr-generator/references/adr-best-practices.md:8 — defined here
- `Timestamped` — .claude/skills/adr-generator/references/adr-best-practices.md:9 — defined here
- `Mutable by a decidable rule` — .claude/skills/adr-generator/references/adr-best-practices.md:10 — defined here
- `ADR Mutability and Superseding` — .claude/skills/adr-generator/references/adr-best-practices.md:25 — defined here
- `Strict append-only` — .claude/skills/adr-generator/references/adr-best-practices.md:31 — defined here
- `No rule` — .claude/skills/adr-generator/references/adr-best-practices.md:32 — defined here
- `Bounded in-place edits` — .claude/skills/adr-generator/references/adr-best-practices.md:33 — defined here
- `GDS Way bounded rule` — .claude/skills/adr-generator/references/adr-best-practices.md:35 — defined here
- `File Naming Approaches` — .claude/skills/adr-generator/references/adr-best-practices.md:52 — defined here
- `ADR Lifecycle` — .claude/skills/adr-generator/references/adr-best-practices.md:65 — defined here
- `Proposed` — .claude/skills/adr-generator/references/adr-best-practices.md:71 — defined here
- `Accepted` — .claude/skills/adr-generator/references/adr-best-practices.md:72 — defined here
- `Deprecated` — .claude/skills/adr-generator/references/adr-best-practices.md:73 — defined here
- `Superseded` — .claude/skills/adr-generator/references/adr-best-practices.md:74 — defined here
- `Rejected` — .claude/skills/adr-generator/references/adr-best-practices.md:75 — defined here
- `When to Write an ADR` — .claude/skills/adr-generator/references/adr-best-practices.md:77 — defined here

## Structure
- `# ADR Best Practices` — .claude/skills/adr-generator/references/adr-best-practices.md:1
- `## Characteristics of a Good ADR` — .claude/skills/adr-generator/references/adr-best-practices.md:5
- `## Writing Good Context Sections` — .claude/skills/adr-generator/references/adr-best-practices.md:12
- `## Writing Good Consequences Sections` — .claude/skills/adr-generator/references/adr-best-practices.md:19
- `## ADR Mutability and Superseding` — .claude/skills/adr-generator/references/adr-best-practices.md:25
- `## File Naming Approaches` — .claude/skills/adr-generator/references/adr-best-practices.md:52
- `## ADR Lifecycle` — .claude/skills/adr-generator/references/adr-best-practices.md:65
- `## When to Write an ADR` — .claude/skills/adr-generator/references/adr-best-practices.md:77
- `## Teamwork` — .claude/skills/adr-generator/references/adr-best-practices.md:92
- `## References` — .claude/skills/adr-generator/references/adr-best-practices.md:99

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
- Adopts the UK GDS Way bounded rule for ADR mutability as an objective standard: clarifications and consequences edit in place; post-implementation decision changes must supersede.
- Emphasizes the unanimous industry rule that superseded ADRs must never be deleted.

## Context cost
6891 bytes (~1725 tokens). Invokes nothing additional.
