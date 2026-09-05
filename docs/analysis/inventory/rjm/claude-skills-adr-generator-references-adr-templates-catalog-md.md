---
package: rjm
path: .claude/skills/adr-generator/references/adr-templates-catalog.md
type: reference
bytes: 7771
unit: inv-rjm-76
in_scope_via: .claude/skills/adr-generator/SKILL.md
aliases: []
memo_inputs:
  - {path: .claude/skills/adr-generator/references/adr-templates-catalog.md, sha256: f239c5d7707d6906f22a240fa99de6825bec6b64aff057c31a75a4e152ebabaa}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/skills/adr-generator/references/adr-templates-catalog.md

## Purpose — required, verbatim
> "Reference catalog of well-known ADR template formats. Choose a template based on the decision's complexity and team needs. This project's canonical template (`.agents/architecture/ADR-TEMPLATE.md`) is the default." — .claude/skills/adr-generator/references/adr-templates-catalog.md:3

## Design intent — required
Provides an exhaustive comparative catalog of 11 distinct Architecture Decision Record template formats spanning diverse architectural styles and organizational needs. Formats include Project Canonical (default, high complexity, prior art, agent fields), MADR 4.0.0 (decision drivers, per-option pros/cons), Nygard (minimal original 2011 standard), Y-Statement (single-sentence minimal capture), Alexandrian Pattern (Prologue/Discussion/Solution/Consequences), Tyree & Akerman (enterprise, assumptions, constraints), Planguage (Tom Gilb quality/metrics), EdgeX (distributed/IoT), arc42, Business Case (SWOT, ROI), and Paulo Merson. For each major format, the catalog details full markdown templates, complexity ratings, ideal use cases, and key historical nuances (e.g. Nygard only defining 4 statuses without `rejected`; MADR version evolution). Without it, an ADR generator would be locked to a single rigid format or lack reference specifications when adapting to consumer repositories.

## Phase — required
cross-phase

## Inputs — required
none

## Outputs — required
none

## Invokes — required
- reference adr-template.md — .claude/skills/adr-generator/references/adr-templates-catalog.md:29

## Invoked by — required
- skill adr-generator — .claude/skills/adr-generator/SKILL.md:98
- skill adr-generator — .claude/skills/adr-generator/SKILL.md:107
- skill adr-generator — .claude/skills/adr-generator/SKILL.md:248
- reference adr-template.md — .claude/skills/adr-generator/references/adr-template.md:5

## Concepts named — required, verbatim
- `Project Canonical` — .claude/skills/adr-generator/references/adr-templates-catalog.md:9 — defined here
- `MADR` — .claude/skills/adr-generator/references/adr-templates-catalog.md:10 — defined here
- `Nygard` — .claude/skills/adr-generator/references/adr-templates-catalog.md:11 — defined here
- `Y-Statement` — .claude/skills/adr-generator/references/adr-templates-catalog.md:12 — defined here
- `Alexandrian` — .claude/skills/adr-generator/references/adr-templates-catalog.md:13 — defined here
- `Tyree & Akerman` — .claude/skills/adr-generator/references/adr-templates-catalog.md:14 — defined here
- `Planguage` — .claude/skills/adr-generator/references/adr-templates-catalog.md:15 — defined here
- `EdgeX` — .claude/skills/adr-generator/references/adr-templates-catalog.md:16 — defined here
- `arc42` — .claude/skills/adr-generator/references/adr-templates-catalog.md:17 — defined here
- `Business Case` — .claude/skills/adr-generator/references/adr-templates-catalog.md:18 — defined here
- `Paulo Merson` — .claude/skills/adr-generator/references/adr-templates-catalog.md:19 — defined here
- `Decision Drivers` — .claude/skills/adr-generator/references/adr-templates-catalog.md:54 — defined here
- `Considered Options` — .claude/skills/adr-generator/references/adr-templates-catalog.md:59 — defined here
- `Decision Outcome` — .claude/skills/adr-generator/references/adr-templates-catalog.md:65 — defined here
- `Pros and Cons of the Options` — .claude/skills/adr-generator/references/adr-templates-catalog.md:78 — defined here
- `More Information` — .claude/skills/adr-generator/references/adr-templates-catalog.md:91 — defined here
- `Prologue` — .claude/skills/adr-generator/references/adr-templates-catalog.md:157 — defined here
- `Discussion` — .claude/skills/adr-generator/references/adr-templates-catalog.md:165 — defined here
- `Solution` — .claude/skills/adr-generator/references/adr-templates-catalog.md:170 — defined here

## Structure
- `# ADR Templates Catalog` — .claude/skills/adr-generator/references/adr-templates-catalog.md:1
- `## Template Comparison` — .claude/skills/adr-generator/references/adr-templates-catalog.md:5
- `## Project Canonical Template (Default)` — .claude/skills/adr-generator/references/adr-templates-catalog.md:23
- `## MADR (Markdown Architectural Decision Records)` — .claude/skills/adr-generator/references/adr-templates-catalog.md:33
- `## Nygard Template` — .claude/skills/adr-generator/references/adr-templates-catalog.md:104
- `## Y-Statement Template` — .claude/skills/adr-generator/references/adr-templates-catalog.md:134
- `## Alexandrian Pattern Template` — .claude/skills/adr-generator/references/adr-templates-catalog.md:150
- `## Tyree & Akerman Template` — .claude/skills/adr-generator/references/adr-templates-catalog.md:182
- `## Planguage Template` — .claude/skills/adr-generator/references/adr-templates-catalog.md:192
- `## References` — .claude/skills/adr-generator/references/adr-templates-catalog.md:202

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
- Pins MADR to version 4.0.0 (released 2024-09-17) to prevent silent drift, documenting its renaming history from "Markdown Any Decision Records" (3.0.0-beta) back to "Markdown Architectural Decision Records" (4.0.0).
- Highlights that Nygard's original 2011 template defines only four statuses (`proposed`, `accepted`, `deprecated`, `superseded`) and that `rejected` is an external community addition.

## Context cost
7771 bytes (~1940 tokens).
