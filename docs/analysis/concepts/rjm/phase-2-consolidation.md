---
package: rjm
name: Phase 2: Consolidation
slug: phase-2-consolidation
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

# Phase 2: Consolidation

## Definition — verbatim
> "## Phase 2: Consolidation" — .claude/skills/adr-review/references/debate-protocol.md:116

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/adr-review/references/debate-protocol.md | 116 | defined here | Defines the second phase of the multi-agent debate protocol where independent reviews are aggregated, anti-patterns flagged, and conflicts routed for resolution. |

## Consumes
Completed structured reviews from the six Phase 1 review agents (architect, critic, independent-thinker, security, analyst, high-level-advisor).

## Produces
List of consensus points, catalog of conflicting findings, flagged review anti-patterns requiring re-review, and consolidated change recommendations.

## When applied
Executed after all six Phase 1 independent reviews have completed in the ADR review workflow.

## Sub-concepts
seven-review-anti-patterns

## Part of
adr-review, debate-protocol

## Implementation status
clean

## Design notes
The synthesis and reconciliation phase of multi-agent ADR review. In rjm's architecture, independent reviews from specialized personas are not simply concatenated; Phase 2 aggregates agreements, isolates conflicts for high-level-advisor arbitration, and filters out shallow or unconstructive critique by auditing outputs against seven review anti-patterns before drafting consolidated recommendations.
