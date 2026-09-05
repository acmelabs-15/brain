---
package: rjm
path: .agents/architecture/ADR-TEMPLATE.md
type: agent
bytes: 5091
unit: inv-rjm-49
in_scope_via: .agents/architecture/README.md
aliases: []
memo_inputs:
  - {path: .agents/architecture/ADR-TEMPLATE.md, sha256: 9d9ce626ffb06bbe993eacd08dac582853969da5fb9a491680a5c4bf45f87fe1}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .agents/architecture/ADR-TEMPLATE.md

## Purpose — required, verbatim
> "The rule: prose says what frontmatter cannot, and never restates it alone." — .agents/architecture/ADR-TEMPLATE.md:23
(no explicit purpose statement; canonical repository template for Architecture Decision Records)

## Design intent — required
Defines the canonical template and required structure for Architecture Decision Records (ADRs) in the repository, establishing frontmatter fields as authoritative for tooling (per ADR-073) and mandating comprehensive sections for context, decisions, prior art investigation (using Chesterton's fence research tooling), alternatives analysis, consequences, and downstream impact on dependent components. It also includes dedicated fields for agent-defining ADRs (overlap analysis, entry criteria, explicit limitations, success metrics). Without it, architectural decisions would lack uniform structure, tooling automation would fail to parse lifecycle status reliably, and architectural changes would be proposed without investigating historical rationale or assessing blast radius.

## Phase — required
cross-phase

## Inputs — required
- Architectural problems, proposed system changes, and technical trade-offs.
- `python3 .claude/skills/chestertons-fence/scripts/investigate.py` — .agents/architecture/ADR-TEMPLATE.md:54

## Outputs — required
- Standardized Architecture Decision Records adhering to the schema and naming convention:
  `ADR-NNN` — .agents/architecture/ADR-TEMPLATE.md:2

## Invokes — required
- doc ADR-073 — .agents/architecture/ADR-TEMPLATE.md:16
- doc ADR-072 — .agents/architecture/ADR-TEMPLATE.md:28
- doc ADR-042 — .agents/architecture/ADR-TEMPLATE.md:34
- script investigate.py — .agents/architecture/ADR-TEMPLATE.md:54
- doc SESSION-PROTOCOL.md — .agents/architecture/ADR-TEMPLATE.md:107

## Invoked by — required
- doc ADR-TEMPLATE.md — docs/agent-governance.md:11
- skill ADR-TEMPLATE.md — .claude/skills/adr-generator/SKILL.md:108
- reference ADR-TEMPLATE.md — .claude/skills/adr-generator/references/adr-template.md:3
- reference ADR-TEMPLATE.md — .claude/skills/adr-generator/references/adr-templates-catalog.md:25

## Concepts named — required, verbatim
- `ADR-NNN` — .agents/architecture/ADR-TEMPLATE.md:2 — defined here
- `review-by` — .agents/architecture/ADR-TEMPLATE.md:10 — defined here
- `Prior Art Investigation` — .agents/architecture/ADR-TEMPLATE.md:51 — defined here
- `chestertons-fence` — .agents/architecture/ADR-TEMPLATE.md:54 — used here
- `Historical Rationale` — .agents/architecture/ADR-TEMPLATE.md:62 — defined here
- `Alternatives Considered` — .agents/architecture/ADR-TEMPLATE.md:78 — defined here
- `Trade-offs` — .agents/architecture/ADR-TEMPLATE.md:85 — defined here
- `Impact on Dependent Components` — .agents/architecture/ADR-TEMPLATE.md:105 — defined here
- `Implementation Notes` — .agents/architecture/ADR-TEMPLATE.md:115 — defined here
- `Agent-Specific Fields` — .agents/architecture/ADR-TEMPLATE.md:129 — defined here
- `Agent Name` — .agents/architecture/ADR-TEMPLATE.md:131 — defined here
- `Overlap Analysis` — .agents/architecture/ADR-TEMPLATE.md:135 — defined here
- `Entry Criteria` — .agents/architecture/ADR-TEMPLATE.md:141 — defined here
- `Explicit Limitations` — .agents/architecture/ADR-TEMPLATE.md:147 — defined here
- `Success Metrics` — .agents/architecture/ADR-TEMPLATE.md:152 — defined here

## Structure
- # ADR-NNN: [Title] — .agents/architecture/ADR-TEMPLATE.md:13
- ## Context — .agents/architecture/ADR-TEMPLATE.md:43
- ## Decision — .agents/architecture/ADR-TEMPLATE.md:47
- ## Prior Art Investigation (Required when changing existing systems) — .agents/architecture/ADR-TEMPLATE.md:51
- ### What Currently Exists — .agents/architecture/ADR-TEMPLATE.md:56
- ### Historical Rationale — .agents/architecture/ADR-TEMPLATE.md:62
- ### Why Change Now — .agents/architecture/ADR-TEMPLATE.md:68
- ## Rationale — .agents/architecture/ADR-TEMPLATE.md:74
- ### Alternatives Considered — .agents/architecture/ADR-TEMPLATE.md:78
- ### Trade-offs — .agents/architecture/ADR-TEMPLATE.md:85
- ## Consequences — .agents/architecture/ADR-TEMPLATE.md:89
- ### Positive — .agents/architecture/ADR-TEMPLATE.md:91
- ### Negative — .agents/architecture/ADR-TEMPLATE.md:96
- ### Neutral — .agents/architecture/ADR-TEMPLATE.md:101
- ## Impact on Dependent Components — .agents/architecture/ADR-TEMPLATE.md:105
- ## Implementation Notes — .agents/architecture/ADR-TEMPLATE.md:115
- ## Related Decisions — .agents/architecture/ADR-TEMPLATE.md:119
- ## References — .agents/architecture/ADR-TEMPLATE.md:123
- ## Agent-Specific Fields (Required for Agent ADRs) — .agents/architecture/ADR-TEMPLATE.md:129
- ### Agent Name — .agents/architecture/ADR-TEMPLATE.md:131
- ### Overlap Analysis — .agents/architecture/ADR-TEMPLATE.md:135
- ### Entry Criteria — .agents/architecture/ADR-TEMPLATE.md:141
- ### Explicit Limitations — .agents/architecture/ADR-TEMPLATE.md:147
- ### Success Metrics — .agents/architecture/ADR-TEMPLATE.md:152

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- missing-path — .agents/architecture/ADR-TEMPLATE.md:107 — Cites `SESSION-PROTOCOL.md` as an example canonical source file in the table description, but that file has been retired and removed from the repository.

## Observations
Version 1.1 template created 2025-12-13. An embedded HTML comment explicitly documents the evolution away from redundant `## Status` and `## Date` prose sections (addressing PR #5209 review objections where prose restated frontmatter), establishing the architectural principle that prose must only carry nuance that frontmatter enums cannot express.

## Context cost
5091 bytes, approximately 1200 tokens.
