---
package: rjm
name: Phase 6: Resolution Report
slug: phase-6-resolution-report
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

# Phase 6: Resolution Report

## Definition — verbatim
> "After shell-backed conflict resolution completes, generate a report with:" — templates/agents/merge-resolver.shared.md:117

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| templates/agents/merge-resolver.shared.md | 115 | defines | Final reporting phase detailing files resolved, strategies applied, confidence scores, and manual review flags. |

## Consumes
Verification results and conflict resolution audit data.

## Produces
Resolution report documenting auto vs manual fixes, strategy per file, confidence score, rationale, and manual review flags.

## When applied
Executed at the conclusion of conflict resolution after staging and verification.

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
Closes the conflict resolution workflow by generating an audit report detailing resolved files, strategies applied, confidence ratings, and flagging uncertain hunks for manual review.
