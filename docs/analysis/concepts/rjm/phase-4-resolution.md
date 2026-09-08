---
package: rjm
name: Phase 4: Resolution
slug: phase-4-resolution
kind: phase
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

# Phase 4: Resolution

## Definition — verbatim
> "| Changes affect different sections | Combine both |" — templates/agents/merge-resolver.shared.md:101

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| templates/agents/merge-resolver.shared.md | 97 | defines | Execution phase applying resolution heuristics to resolve conflict hunks. |

## Consumes
Intent analysis evaluations, classified conflict hunks, and repository files.

## Produces
Resolved file contents with conflict hunks reconciled and conflict markers eliminated.

## When applied
Executed during merge conflict resolution once file classifications and intents are determined.

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
The operational phase where specific resolution heuristics (combining non-overlapping sections, taking supersets, preferring bugfixes or tested logic, renaming evidence files) are applied to produce merged files.
