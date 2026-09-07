---
package: rjm
name: Consensus
slug: consensus
kind: gate
package_phase: rjm:review
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/archive/planning/PR-60/005-consolidated-agent-review-summary.md, sha256: e11aa763a1febe5a2c62d0a51c49614ecebe5c619126b422219b604722fd1107}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Consensus

## Definition — verbatim
(used, not defined)

> "**CONSENSUS: DO NOT MERGE PR #60 until Phase 1 is complete and critical issues addressed**" — .agents/archive/planning/PR-60/005-consolidated-agent-review-summary.md:12

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/archive/planning/PR-60/005-consolidated-agent-review-summary.md | 12 | used here | Highlights the unanimous agreement across all four reviewing agents (Critic, Advisor, Security, QA) to block merge. |

## Consumes
Individual agent verdicts from specialized reviewers (e.g., Critic, High-Level-Advisor, Security, QA).

## Produces
A unified, binding merge decision (e.g., MERGE BLOCKING or APPROVED).

## When applied
When aggregating multi-agent reviews into a single authoritative decision prior to merging code into production.

## Sub-concepts
none

## Part of
multi-agent-review

## Implementation status
defects: cross-file-contradiction, internal-contradiction (.agents/archive/planning/PR-60/005-consolidated-agent-review-summary.md:56, 94)

## Design notes
`Consensus` governs multi-agent review consolidation, requiring agreement across distinct cognitive and domain perspectives to ensure that critical vulnerabilities or testing deficits identified by any single specialist prevent premature merging.
