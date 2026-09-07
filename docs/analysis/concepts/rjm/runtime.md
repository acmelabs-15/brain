---
package: rjm
name: Runtime
slug: runtime
kind: phase
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

# Runtime

## Definition — verbatim
> "3. **Runtime** loads agents into Claude Code, Copilot CLI, or VS Code" — docs/architecture.md:11

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/architecture.md | 11 | defined here | Defined as the third architectural layer responsible for loading generated agents into host CLI/editor environments. |

## Consumes
Platform-specific agent definitions generated during the build layer.

## Produces
Active agent execution environments within Claude Code, Copilot CLI, or VS Code.

## When applied
Applied during session initialization when an agent harness loads agent definitions and tools.

## Sub-concepts
none

## Part of
none

## Implementation status
defects: doc-drift

## Design notes
The execution layer of rjm's three-tier architecture responsible for loading compiled agent definitions into host environments (Claude Code, GitHub Copilot CLI, or VS Code). It handles platform-specific invocation syntax, tools, and hook integration.
