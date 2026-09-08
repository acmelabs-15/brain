---
package: rjm
name: Agent Invocation Syntax
slug: agent-invocation-syntax
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-08 quote-check+coverage
memo_inputs:
  - {path: templates/README.md, sha256: 3ca91430b1afdd6be6c995f33a4d237ac25e1a419ce3adeb55f8547475644196}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Agent Invocation Syntax

## Definition — verbatim
> "**Templates use `/agent [agent_name]`** as the canonical syntax for agent delegation. The generation script transforms this to platform-specific syntax:" — templates/README.md:99

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| templates/README.md | 97 | defined here | Section establishing canonical `/agent [agent_name]` syntax and platform-specific generation mappings. |

## Consumes
Subagent invocation directives in shared templates.

## Produces
Platform-compliant delegation calls (`#runSubagent`, `/agent`, `Task(...)`).

## When applied
Enforced during template authoring and expanded during artifact generation.

## Sub-concepts
none

## Part of
platform-transformations

## Implementation status
defects: doc-drift, cross-file-contradiction

## Design notes
The canonical delegation convention requiring templates to use `/agent [name]` rather than platform-specific runtime primitives, enabling automated multi-target compilation.
