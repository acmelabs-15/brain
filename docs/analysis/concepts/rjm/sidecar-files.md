---
package: rjm
name: Sidecar files
slug: sidecar-files
kind: artifact
package_phase: rjm:cross-phase
implementation_in_scope: false
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-007-memory-first-architecture.md, sha256: 35acfcd104b6cfce3961f49b902453921ff02c6d02b5ca03ee95a43443fa37aa}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Sidecar files

## Definition — verbatim
> "Sidecar files: Persistent `memories.md` per agent in `{agent-name}-sidecar/` folders" — .agents/architecture/ADR-007-memory-first-architecture.md:58

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-007-memory-first-architecture.md | 58 | used here | Identified as a BMAD workflow pattern for storing per-agent persistent memory files. |

## Consumes
Role-specific agent observations, prompt preferences, and task execution history.

## Produces
Persistent `memories.md` files localized to specific agent directories.

## When applied
When an agent initializes a session or concludes task execution, reading and updating its private operational context.

## Sub-concepts
none

## Part of
bmad-method

## Implementation status
not-implemented

## Design notes
Per-agent persistent memory files maintained in dedicated sidecar folders (`{agent-name}-sidecar/memories.md`). Adopted from the BMAD framework to provide individual agent personas with isolated, role-specific learning stores that persist across distinct task invocations.
