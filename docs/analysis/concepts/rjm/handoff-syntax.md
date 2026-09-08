---
package: rjm
name: Handoff syntax
slug: handoff-syntax
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

# Handoff syntax

## Definition — verbatim
> "| Handoff syntax | `#runSubagent` | `/agent` |" — templates/README.md:93

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| templates/README.md | 93 | defined here | Table row mapping handoff syntax across VS Code (#runSubagent) and Copilot CLI (/agent). |

## Consumes
Canonical `/agent [name]` delegation statements in shared agent templates.

## Produces
Platform-adapted subagent handoff directives in generated agent markdown files.

## When applied
Applied by `build/generate_agents.py` when generating platform-specific agent files.

## Sub-concepts
none

## Part of
platform-transformations

## Implementation status
defects: doc-drift, cross-file-contradiction

## Design notes
The platform-specific delegation notation transformed from canonical template syntax to platform native commands during agent build generation.
