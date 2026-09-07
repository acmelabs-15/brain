---
package: rjm
name: 5-Phase Workflow
slug: 5-phase-workflow
kind: pattern
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

# 5-Phase Workflow

## Definition — verbatim
> "## 5-Phase Workflow" — .claude/skills/slashcommandcreator/SKILL.md:27

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/slashcommandcreator/SKILL.md | 27 | defined here | Section heading defining the five sequential phases of slash command authoring. |

## Consumes
User automation requests, command specifications.

## Produces
Fully designed, validated, implemented, and quality-checked slash command files.

## When applied
Executed whenever the slashcommandcreator meta-skill is triggered to create a new command.

## Sub-concepts
discovery-analysis, multi-agent-validation, quality-gates-automatic

## Part of
slashcommandcreator

## Implementation status
defects: missing-path, doc-drift, internal-contradiction

## Design notes
A disciplined lifecycle workflow pattern structuring slash command creation across five sequential phases (Discovery & Analysis, Design, Multi-Agent Validation, Implementation, Quality Gates) to ensure thorough vetting, clean architecture, and automated verification.
