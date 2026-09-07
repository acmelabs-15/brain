---
package: rjm
name: Conditional Sections
slug: conditional-sections
kind: checklist
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/archive/planning/PRD-quality-gate-prompt-refinement.md, sha256: 2ce12204e8fcce359f0ece469370f710f3e9518ba9576a232239d592753fd963}
  - {path: .claude/skills/adr-generator/references/quality-checklist.md, sha256: 8a66e192b59dcb7663bf3a054a57c2655d4d2aaf8c60429ae8ca15c2fa961cf4}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Conditional Sections

## Definition — verbatim
(used, not defined)

> "## Conditional Sections" — .claude/skills/adr-generator/references/quality-checklist.md:23

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/archive/planning/PRD-quality-gate-prompt-refinement.md | 55 | used here | Cites conditional sections as an applied single-turn prompt pattern enabling PR Type Detection tables. |
| .claude/skills/adr-generator/references/quality-checklist.md | 23 | defined here | Defines conditional quality checklist items (Prior Art, Impact on Dependent Components, Agent-Specific Fields) required only under specific conditions. |

## Consumes
Document templates, ADR proposals, and context triggers (e.g. system changes, agent ADRs).

## Produces
Context-specific document sections included only when relevant criteria are triggered.

## When applied
Evaluated during ADR quality validation and prompt template construction when determining required sections.

## Sub-concepts
none

## Part of
adr-quality-checklist, prompt-engineering-patterns

## Implementation status
defects: missing-path, internal-contradiction, doc-drift (.agents/archive/planning/PRD-quality-gate-prompt-refinement.md:104); clean in .claude/skills/adr-generator/references/quality-checklist.md

## Design notes
`Conditional Sections` introduces dynamic adaptability into document checklists and prompt designs, requiring specific analytical or governance sections only when the subject matter warrants them.
