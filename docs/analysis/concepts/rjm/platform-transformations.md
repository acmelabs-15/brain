---
package: rjm
name: Platform Transformations
slug: platform-transformations
kind: technique
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

# Platform Transformations

## Definition — verbatim
> "The generation script applies platform-specific transformations:" — templates/README.md:87

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| templates/README.md | 85 | defined here | Section specifying transformation rules for models, names, handoffs, and tools across targets. |

## Consumes
Canonical shared agent templates in `templates/agents/*.shared.md` and platform configurations in `templates/platforms/*.yaml`.

## Produces
Specialized agent definition files for VS Code and GitHub Copilot CLI.

## When applied
Executed during build generation via `build/generate_agents.py`.

## Sub-concepts
handoff-syntax, agent-invocation-syntax

## Part of
templates

## Implementation status
defects: doc-drift, cross-file-contradiction

## Design notes
A build-time transformation process that adapts single-source shared agent templates into harness-specific formats for VS Code and GitHub Copilot CLI environments.
