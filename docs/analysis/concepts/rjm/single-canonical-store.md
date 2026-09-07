---
package: rjm
name: Single Canonical Store
slug: single-canonical-store
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/reflect/references/integration-and-design.md, sha256: 37a4ebbbef480bfe271c45cbd567a65f527f81114f9f955e9ec7f8de6b401624}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Single Canonical Store

## Definition — verbatim
> "- **Single Canonical Store**: Serena MCP and Git both write to the same file path, eliminating dual-governance ambiguity" — .claude/skills/reflect/references/integration-and-design.md:53

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/reflect/references/integration-and-design.md | 53 | defined here | Architectural principle ensuring Serena MCP and Git fallback write to identical filesystem locations. |

## Consumes
Observation learnings and memory updates from reflection sessions.

## Produces
Unified file persistence target eliminating synchronization drift between MCP and local git storage.

## When applied
Whenever memory persistence actions are executed.

## Sub-concepts
none

## Part of
reflect

## Implementation status
defects: missing-path

## Design notes
An architectural storage pattern mandating that MCP tooling and filesystem fallbacks write to the exact same file path, avoiding split-brain divergence and ensuring memory integrity regardless of which persistence mechanism is active.
