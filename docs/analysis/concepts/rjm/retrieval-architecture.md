---
package: rjm
name: Retrieval Architecture
slug: retrieval-architecture
kind: pattern
package_phase: rjm:spec
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/programming-advisor/references/bitter-lesson-llms.md, sha256: d5704127da8f69f150db8fb57ed02da11e400c198eedff21733a4162ada1a7a1}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Retrieval Architecture

## Definition — verbatim
> "### 2. Retrieval Architecture" — .claude/skills/programming-advisor/references/bitter-lesson-llms.md:25

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/programming-advisor/references/bitter-lesson-llms.md | 25 | defined here | Explains that hardcoded retrieval pipelines break across model upgrades and should be replaced by model-driven context selection. |

## Consumes
Organized, searchable reference repositories, source code bases, and context documentation.

## Produces
Search interfaces and tools that empower foundation models to inspect and select relevant context dynamically.

## When applied
Applied during agent system design and tool development when enabling access to domain knowledge or codebase repositories.

## Sub-concepts
rag

## Part of
the-bitter-lesson-of-building-with-llms

## Implementation status
defects: missing-path

## Design notes
Retrieval Architecture shifts the burden of context curation away from rigid deterministic pipelines toward model-driven exploration. As context windows expand and reasoning sharpens, presenting structured, searchable sources and directing the agent to locate what it needs proves more resilient than hardcoding complex chunking and filtering algorithms.
