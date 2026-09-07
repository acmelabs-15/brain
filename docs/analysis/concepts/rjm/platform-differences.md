---
package: rjm
name: Platform Differences
slug: platform-differences
kind: reference
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: docs/architecture.md, sha256: 313b6db46f914559de625165f888be95ac076abd9a7bade6bb562d3339792453}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Platform Differences

## Definition — verbatim
> "Claude Code has the richest integration because it supports skills, hooks, and commands in addition to agents." — docs/architecture.md:123

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/architecture.md | 112 | defined here | Architectural reference table and analysis detailing capability differences across Claude Code, Copilot CLI, and VS Code. |

## Consumes
Runtime platform specifications, tool availability, and invocation capabilities.

## Produces
Cross-platform feature matrix guiding template generation and degraded-mode behaviors.

## When applied
Referenced when designing agent templates and platform-specific feature adaptations.

## Sub-concepts
none

## Part of
none

## Implementation status
defects: doc-drift

## Design notes
The architectural taxonomy in rjm documenting feature variations across runtime hosts (file formats, invocation mechanisms, and support for skills, hooks, and commands), ensuring developers understand runtime capabilities and degradation boundaries.
