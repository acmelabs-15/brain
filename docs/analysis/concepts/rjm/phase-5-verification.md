---
package: rjm
name: Phase 5: Verification
slug: phase-5-verification
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

# Phase 5: Verification

## Definition — verbatim
> "1. Stage resolved files" — templates/agents/merge-resolver.shared.md:111

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| templates/agents/merge-resolver.shared.md | 109 | defines | Verification phase staging resolved files and ensuring no conflict or merge markers remain. |

## Consumes
Resolved candidate files from Phase 4.

## Produces
Staged git index containing cleanly resolved files verified free of conflict or merge markers.

## When applied
Run immediately following conflict resolution before authoring the final resolution report.

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
Post-resolution verification phase that stages resolved files and rigorously scans for residual conflict or merge markers (`<<<<<<<`, `=======`, `>>>>>>>`) to prevent corrupted code commits.
