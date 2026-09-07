---
package: rjm
name: When-to-Use matrix
slug: when-to-use-matrix
kind: reference
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-063-memory-skill-decomposition.md, sha256: f2d854c1e297dcca3e517498ab92b225ec28b5b60baecaaba73b8d166e2606c1}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# When-to-Use matrix

## Definition — verbatim
(used, not defined)

> "decision tree and the When-to-Use matrix, and delegates. This honors" — .agents/architecture/ADR-063-memory-skill-decomposition.md:103

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-063-memory-skill-decomposition.md | 103 | used here | Specified as a required documentation table within router skills guiding sub-skill selection based on task intent. |

## Consumes
Incoming user intent, task complexity, file scope, and target operation characteristics.

## Produces
A deterministic mapping from task descriptions to specific recommended skills or agents.

## When applied
Included in router skills and front-door dispatchers to resolve ambiguous user queries.

## Sub-concepts
none

## Part of
thin-router, autoplan

## Implementation status
defects: missing-path, doc-drift

## Design notes
A When-to-Use matrix is a structured decision guide embedded within router skills and prompt documentation. It presents a tabular mapping of concrete conditions, symptoms, and intents to specific execution paths, enabling agents and humans to unambiguously determine which specialized sub-skill, command, or agent should handle a given task.
