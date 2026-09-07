---
package: rjm
name: Discovery & Analysis
slug: discovery-analysis
kind: phase
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/slashcommandcreator/SKILL.md, sha256: c61c0f4ce9240a1499674ad8ae83c5234502f6f1e6a1bf41bdcbfb9996c86f81}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Discovery & Analysis

## Definition — verbatim
> "### Phase 1: Discovery & Analysis" — .claude/skills/slashcommandcreator/SKILL.md:29

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/slashcommandcreator/SKILL.md | 29 | defined here | Heading for Phase 1 of slash command authoring workflow. |

## Consumes
User intent, prompt repetition evidence, existing command catalog.

## Produces
Analysis document (`.agents/analysis/slashcommand-[name]-analysis.md`) with recommendation.

## When applied
Executed at the beginning of slash command authoring to clarify intent, check for duplicates, and decide between a command and a skill.

## Sub-concepts
decision-matrix-slash-command-vs-skill

## Part of
5-phase-workflow, slashcommandcreator

## Implementation status
defects: missing-path, doc-drift, internal-contradiction

## Design notes
The initial discovery phase in the slash command creation workflow where an Analyst agent clarifies user requirements, searches existing commands to avoid duplication, and determines appropriate artifact scope.
