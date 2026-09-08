---
package: rjm
name: Phase 0: Execution Capability Precondition (BLOCKING)
slug: phase-0-execution-capability-precondition-blocking
kind: gate
package_phase: rjm:executor
implementation_in_scope: true
deprecated: false
verified: 2026-09-08 quote-check+coverage
memo_inputs:
  - {path: templates/agents/merge-resolver.shared.md, sha256: 9783a32baa9d4e4ee8a5b0d597e6a15d1c192d9c7b0d3b364c9698e408db223e}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Phase 0: Execution Capability Precondition (BLOCKING)

## Definition — verbatim
> "Run this self-check FIRST, before any context gathering, analysis, or plan." — templates/agents/merge-resolver.shared.md:38

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| templates/agents/merge-resolver.shared.md | 36 | defines | Blocking pre-execution self-check verifying shell/git execution tools before attempting conflict resolution. |

## Consumes
Session execution environment and available tools inspection.

## Produces
Immediate `[BLOCKED]` return if shell execution is unavailable, or permission to proceed to Phase 1.

## When applied
Evaluated at the very beginning of a merge resolution session before any analysis, context gathering, or planning.

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
A blocking precondition gate preventing agents from generating hallucinatory, non-executable resolution plans when operating in environments without shell or git access (resolving upstream issue #2646).
