---
package: rjm
name: Phase 3: Intent Analysis
slug: phase-3-intent-analysis
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

# Phase 3: Intent Analysis

## Definition — verbatim
> "For each manually-resolved conflict, analyze git blame and commit messages:" — templates/agents/merge-resolver.shared.md:86

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| templates/agents/merge-resolver.shared.md | 84 | defines | Analysis phase evaluating git blame and commit messages to establish change priority during manual conflict resolution. |

## Consumes
Git blame logs, commit history, and commit messages for conflicting files.

## Produces
Ranked priority evaluation of competing edits (security patch > bugfix > breaking change > change with tests > recent change > style).

## When applied
Executed for all conflicted files classified for manual resolution.

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
Heuristic evaluation phase that examines commit messages, blame logs, and change types to systematically prioritize competing edits (such as prioritizing security patches and bugfixes over new feature code).
