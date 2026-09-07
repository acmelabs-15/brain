---
package: rjm
name: per-call events
slug: per-call-events
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-084-vendored-hook-roi-bar.md, sha256: f803b402a803541adf9820344cedaec80e4287c68685834b8cdd175081bdf196}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# per-call events

## Definition — verbatim
> "**The per-call events clear an additional bar (added 2026-08-18).**" — .agents/architecture/ADR-084-vendored-hook-roi-bar.md:138

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-084-vendored-hook-roi-bar.md | 138 | defined here | Defined as the class of high-frequency hook lifecycle events requiring elevated ROI justification. |

## Consumes
Agent runtime hook events triggered during tool invocation.

## Produces
Elevated architectural justification balancing process spawn overhead against critical security and data safety benefits.

## When applied
Applied when registering or auditing hooks attached to PreToolUse, PostToolUse, PermissionRequest, or PostToolUseFailure lifecycle triggers.

## Sub-concepts
none

## Part of
vendored-hook-roi-bar

## Implementation status
defects: doc-drift

## Design notes
Per-call events classify hook triggers whose execution frequency and performance impact scale linearly with agent activity. By grouping PreToolUse, PostToolUse, PermissionRequest, and PostToolUseFailure under an elevated ROI bar, rjm prevents hot-path latency accretion and false-positive tool denials.
