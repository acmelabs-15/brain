---
package: rjm
name: Processes
slug: processes
kind: artifact
package_phase: rjm:spec
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/threat-modeling/SKILL.md, sha256: a4ed722e2a09f53130a86c1f42db100ac87f504c85e0198e726a5c40cfdbbb62}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Processes

## Definition — verbatim
> "- **Processes**: Code that transforms data (your application)" — .claude/skills/threat-modeling/SKILL.md:127

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/threat-modeling/SKILL.md | 127 | defined here | Defined as required DFD elements representing code and application components that transform data. |

## Consumes
Application source code, service definitions, compute workloads, and execution contexts.

## Produces
Transformed data and outputs; subject to all six STRIDE threat categories.

## When applied
Applied during Phase 1 (Scope and Decompose) when mapping application compute components in data flow diagrams.

## Sub-concepts
none

## Part of
data-flow-diagram, threat-modeling

## Implementation status
defects: exit-code-mismatch, missing-path

## Design notes
`Processes` represents active computational elements and application code that transform data in a system, serving as the core target for all six STRIDE threat vectors in architectural threat analysis.
