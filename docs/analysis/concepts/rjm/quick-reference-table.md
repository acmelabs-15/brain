---
package: rjm
name: Quick Reference Table
slug: quick-reference-table
kind: template
package_phase: cross-phase
implementation_in_scope: false
deprecated: false
memo_inputs:
  - {path: .agents/archive/planning/PRD-skills-index-registry.md, sha256: 8c7296bd5c209f7cfbe45d6c293c42e9f69f47807850313b34affcec7b5fb1b9}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Quick Reference Table

## Definition — verbatim
> "The table provides at-a-glance skill discovery. Agents can scan the statement column to find relevant skills, then use the file column to read the full skill definition." — .agents/archive/planning/PRD-skills-index-registry.md:75

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/archive/planning/PRD-skills-index-registry.md | 54 | defined here | Specified as functional requirement FR-2 defining the 5-column layout for skill discovery. |

## Consumes
Skill metadata including ID, Domain, Summary Statement, File Name, and Status.

## Produces
A structured 5-column markdown table enabling rapid scanning and lookup by executing agents.

## When applied
Applied in the skills index registry to present skills grouped by domain.

## Sub-concepts
none

## Part of
skills-index-registry

## Implementation status
defects: missing-path, internal-contradiction

## Design notes
A standardized tabular layout in rjm containing five columns (Skill ID, Domain, Statement, File, Status). It allows agents to scan concise 10-20 word statements to find relevant capabilities and retrieve target files with a single follow-up read.
