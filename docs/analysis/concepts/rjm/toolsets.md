---
package: rjm
name: Toolsets
slug: toolsets
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

# Toolsets

## Definition — verbatim
> "Toolsets are named collections of tools that reduce duplication across agent templates." — templates/README.md:37

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| templates/README.md | 35 | defined here | Section introducing the named toolset mechanism used to reduce tool list duplication across templates. |

## Consumes
Named tool lists in `toolsets.yaml` and `$toolset:name` references in shared agent templates.

## Produces
Expanded platform-specific tool arrays in generated agent definition files.

## When applied
Applied by `build/generate_agents.py` during agent generation when transforming template definitions.

## Sub-concepts
toolsets-yaml, github-mcp-server-toolsets

## Part of
templates

## Implementation status
defects: doc-drift, cross-file-contradiction

## Design notes
A template abstraction pattern that groups related tools into reusable named sets, reducing boilerplate in agent definitions and simplifying cross-platform tool mapping.
