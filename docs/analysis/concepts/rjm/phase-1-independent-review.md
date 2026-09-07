---
package: rjm
name: Phase 1: Independent Review
slug: phase-1-independent-review
kind: phase
package_phase: rjm:review
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/adr-review/references/debate-protocol.md, sha256: 7ffb255e17ca77cfed1b1a4cf42531f93706c53636a57fb690fc4f7d96b1c86e}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Phase 1: Independent Review

## Definition — verbatim
(used, not defined)

> "## Phase 1: Independent Review" — .claude/skills/adr-review/references/debate-protocol.md:61

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/adr-review/references/debate-protocol.md | 61 | defines | First debate phase invoking specialized review agents in parallel to evaluate the ADR against the Zimmermann questions. |

## Consumes
Target ADR text and Phase 0 related work research findings.

## Produces
Parallel review reports from architect, critic, independent-thinker, security, and analyst agents with categorized concerns (P0/P1/P2).

## When applied
Dispatched in round 1 (and subsequent re-review rounds) of the adr-review process.

## Sub-concepts
zimmermann-review-questions

## Part of
adr-review

## Implementation status
clean

## Design notes
The independent evaluation phase of the multi-agent debate protocol. In Phase 1, multiple specialized agent personas review the candidate ADR concurrently without cross-contamination, evaluating structural compliance, security vulnerabilities, empirical validity, and Zimmermann criteria to produce unbiased critique reports.
