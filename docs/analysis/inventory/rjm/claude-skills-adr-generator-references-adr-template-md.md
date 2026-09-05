---
package: rjm
path: .claude/skills/adr-generator/references/adr-template.md
type: reference
bytes: 7253
unit: inv-rjm-76
in_scope_via: .claude/skills/adr-generator/SKILL.md
aliases: []
memo_inputs:
  - {path: .claude/skills/adr-generator/references/adr-template.md, sha256: b2e5e4d7d00674c28331639b8cc7d205f3ff649dcf12b20225a7f0a9997dd020}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/skills/adr-generator/references/adr-template.md

## Purpose — required, verbatim
> "This project's canonical ADR template. Source: `.agents/architecture/ADR-TEMPLATE.md`." — .claude/skills/adr-generator/references/adr-template.md:3

## Design intent — required
Bundles the repository's canonical Architecture Decision Record template and documentation conventions into a self-contained skill reference. It defines the machine-readable YAML frontmatter (id, status, date, decision-makers, supersedes, superseded-by, explainer, implemented, review-by), standard body sections (Context, Decision, Prior Art Investigation, Rationale with Alternatives Considered and Trade-offs, Positive/Negative/Neutral Consequences, Impact on Dependent Components, Implementation Notes, Related Decisions, References), and conditional extensions (agent-specific fields: capability overlap, entry criteria, explicit limitations, success metrics). It also standardizes the optional "Coded Consequences Convention" (POS-NNN, NEG-NNN, ALT-NNN, IMP-NNN, REF-NNN) to enable precise referencing from review threads, and provides explicit instructions on eliminating redundant prose status/date headings (ADR-073). Without it, ADR generation would produce inconsistent structures lacking required architectural governance and dependency impact tracking.

## Phase — required
cross-phase

## Inputs — required
none

## Outputs — required
none

## Invokes — required
- reference adr-templates-catalog.md — .claude/skills/adr-generator/references/adr-template.md:5

## Invoked by — required
- skill adr-generator — .claude/skills/adr-generator/SKILL.md:145
- skill adr-generator — .claude/skills/adr-generator/SKILL.md:247
- reference adr-templates-catalog.md — .claude/skills/adr-generator/references/adr-templates-catalog.md:29

## Concepts named — required, verbatim
- `ADR Template` — .claude/skills/adr-generator/references/adr-template.md:1 — defined here
- `Context` — .claude/skills/adr-generator/references/adr-template.md:52 — defined here
- `Decision` — .claude/skills/adr-generator/references/adr-template.md:57 — defined here
- `Prior Art Investigation` — .claude/skills/adr-generator/references/adr-template.md:61 — defined here
- `What Currently Exists` — .claude/skills/adr-generator/references/adr-template.md:66 — defined here
- `Historical Rationale` — .claude/skills/adr-generator/references/adr-template.md:72 — defined here
- `Why Change Now` — .claude/skills/adr-generator/references/adr-template.md:78 — defined here
- `Rationale` — .claude/skills/adr-generator/references/adr-template.md:84 — defined here
- `Alternatives Considered` — .claude/skills/adr-generator/references/adr-template.md:88 — defined here
- `Trade-offs` — .claude/skills/adr-generator/references/adr-template.md:95 — defined here
- `Consequences` — .claude/skills/adr-generator/references/adr-template.md:99 — defined here
- `Positive` — .claude/skills/adr-generator/references/adr-template.md:101 — defined here
- `Negative` — .claude/skills/adr-generator/references/adr-template.md:106 — defined here
- `Neutral` — .claude/skills/adr-generator/references/adr-template.md:111 — defined here
- `Impact on Dependent Components` — .claude/skills/adr-generator/references/adr-template.md:115 — defined here
- `Implementation Notes` — .claude/skills/adr-generator/references/adr-template.md:124 — defined here
- `Related Decisions` — .claude/skills/adr-generator/references/adr-template.md:128 — defined here
- `review-by` — .claude/skills/adr-generator/references/adr-template.md:137 — defined here
- `Coded Consequences Convention` — .claude/skills/adr-generator/references/adr-template.md:154 — defined here
- `Agent-Specific Fields` — .claude/skills/adr-generator/references/adr-template.md:173 — defined here
- `Agent Name` — .claude/skills/adr-generator/references/adr-template.md:180 — defined here
- `Overlap Analysis` — .claude/skills/adr-generator/references/adr-template.md:183 — defined here
- `Entry Criteria` — .claude/skills/adr-generator/references/adr-template.md:188 — defined here
- `Explicit Limitations` — .claude/skills/adr-generator/references/adr-template.md:193 — defined here
- `Success Metrics` — .claude/skills/adr-generator/references/adr-template.md:197 — defined here

## Structure
- `# ADR Template` — .claude/skills/adr-generator/references/adr-template.md:1
- `## Context` — .claude/skills/adr-generator/references/adr-template.md:52
- `## Decision` — .claude/skills/adr-generator/references/adr-template.md:57
- `## Prior Art Investigation (Required when changing existing systems)` — .claude/skills/adr-generator/references/adr-template.md:61
- `### What Currently Exists` — .claude/skills/adr-generator/references/adr-template.md:66
- `### Historical Rationale` — .claude/skills/adr-generator/references/adr-template.md:72
- `### Why Change Now` — .claude/skills/adr-generator/references/adr-template.md:78
- `## Rationale` — .claude/skills/adr-generator/references/adr-template.md:84
- `### Alternatives Considered` — .claude/skills/adr-generator/references/adr-template.md:88
- `### Trade-offs` — .claude/skills/adr-generator/references/adr-template.md:95
- `## Consequences` — .claude/skills/adr-generator/references/adr-template.md:99
- `### Positive` — .claude/skills/adr-generator/references/adr-template.md:101
- `### Negative` — .claude/skills/adr-generator/references/adr-template.md:106
- `### Neutral` — .claude/skills/adr-generator/references/adr-template.md:111
- `## Impact on Dependent Components` — .claude/skills/adr-generator/references/adr-template.md:115
- `## Implementation Notes` — .claude/skills/adr-generator/references/adr-template.md:124
- `## Related Decisions` — .claude/skills/adr-generator/references/adr-template.md:128
- `## References` — .claude/skills/adr-generator/references/adr-template.md:132
- `## \`review-by\` Frontmatter Field (Optional)` — .claude/skills/adr-generator/references/adr-template.md:137
- `## Coded Consequences Convention (Optional)` — .claude/skills/adr-generator/references/adr-template.md:154
- `## Agent-Specific Fields (Conditional)` — .claude/skills/adr-generator/references/adr-template.md:173
- `## Agent-Specific Fields` — .claude/skills/adr-generator/references/adr-template.md:178
- `### Agent Name` — .claude/skills/adr-generator/references/adr-template.md:180
- `### Overlap Analysis` — .claude/skills/adr-generator/references/adr-template.md:183
- `### Entry Criteria` — .claude/skills/adr-generator/references/adr-template.md:188
- `### Explicit Limitations` — .claude/skills/adr-generator/references/adr-template.md:193
- `### Success Metrics` — .claude/skills/adr-generator/references/adr-template.md:197

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
- Eliminates duplicate status/date prose sections that merely restate frontmatter, preserving `## Status` only when it adds human-readable nuance or conditionality (ADR-073).
- Includes structured agent extension sections (overlap percentage, entry criteria, explicit limitations, success metrics) for decisions introducing or modifying agents.

## Context cost
7253 bytes (~1815 tokens).
