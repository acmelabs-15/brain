---
package: rjm
name: Integration with ai-agents project
slug: integration-with-ai-agents-project
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/research-and-incorporate/references/workflow.md, sha256: 4be33ea79eb624e5dba9c924a4984ec3a30a6ea9e6f2f9861454b032f9ce3d69}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Integration with ai-agents project

## Definition — verbatim
> "- **Integration with ai-agents project**: Every insight must show applicability" — .claude/skills/research-and-incorporate/references/workflow.md:13

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/research-and-incorporate/references/workflow.md | 13 | defines | Execution principle requiring every researched insight to demonstrate direct applicability. |

## Consumes
External research findings and technical insights.

## Produces
Explicit integration points into project agents, protocols, memory, or governance.

## When applied
Applied during research synthesis and applicability assessment.

## Sub-concepts
none

## Part of
research-and-incorporate-workflow

## Implementation status
defects: doc-drift

## Design notes
A relevance constraint requiring all external research to explicitly demonstrate utility and integration pathways for the project's agent workflows, protocols, or memory architectures.
