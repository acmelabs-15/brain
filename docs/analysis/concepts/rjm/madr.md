---
package: rjm
name: MADR
slug: madr
kind: template
package_phase: rjm:Architect
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-022-architecture-governance-split-criteria.md, sha256: da77b4cbae09bfeb2e26a5ca1a2f486548a991e8e1dfd80f4226e3c1c32fa60a}
  - {path: .agents/architecture/ADR-027-github-mcp-agent-isolation.md, sha256: 3a0cae5d7a44bc1fa4645e919b1e487e35e0c6ab4826e09df105a5c508907ac3}
  - {path: .agents/architecture/ADR-073-adr-lifecycle-frontmatter.md, sha256: 753b2079b2f8ad0d65f9142ba030eab785afdf790b91d3a5283898c887b66458}
  - {path: .claude/skills/adr-generator/SKILL.md, sha256: 24f61b48fb967e2617d4a41e1d0e5c34f1895f3b9b69764f5b778692c18b34bb}
  - {path: .claude/skills/adr-generator/references/adr-templates-catalog.md, sha256: f239c5d7707d6906f22a240fa99de6825bec6b64aff057c31a75a4e152ebabaa}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# MADR

## Definition — verbatim
> "| **MADR** | Medium-High | Formal evaluation of alternatives | Decision drivers, per-option pros/cons |" — .claude/skills/adr-generator/references/adr-templates-catalog.md:10

## Also called — verbatim
> "MADR (Markdown Architectural Decision Records)" — .claude/skills/adr-generator/references/adr-templates-catalog.md:33

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-022-architecture-governance-split-criteria.md | 28 | used here | Cited as leading broadening advocate redefining MADR as Markdown Any Decision Records. |
| .agents/architecture/ADR-027-github-mcp-agent-isolation.md | 427 | used here | Cited in record footer as the template format version (MADR 4.0) used for the ADR. |
| .agents/architecture/ADR-073-adr-lifecycle-frontmatter.md | 28 | used here | Referenced as standard status convention that uses human-readable prose in status sections. |
| .claude/skills/adr-generator/references/adr-templates-catalog.md | 10 | defined here | Listed in comparison catalog as a medium-high complexity template for formal alternative evaluation. |
| .claude/skills/adr-generator/SKILL.md | 108 | used here | Suggested to users as a widely adopted alternative when no project ADR template exists. |

## Consumes
Problem context, decision drivers, considered options, and comparative pros and cons.

## Produces
Structured Markdown decision records documenting decision drivers, choices, and consequences.

## When applied
Offered as an alternative template format in `adr-generator` when capturing decisions with multiple evaluated options.

## Sub-concepts
none

## Part of
none

## Implementation status
defects: missing-path

## Design notes
A standardized open-source template format for Markdown decision records structured around explicit decision drivers, considered options, and trade-off analyses. While rjm maintains a customized canonical ADR template with agent-specific fields, MADR serves as the foundational design format and a recognized template choice in `adr-generator`.
