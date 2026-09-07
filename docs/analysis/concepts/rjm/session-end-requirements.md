---
package: rjm
name: Session End Requirements
slug: session-end-requirements
kind: checklist
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: docs/autonomous-pr-monitor.md, sha256: caca26ec0269cbd68d7d14d74e1c83c69e8fcda1aeffc8e550d09c4859bbfcba}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Session End Requirements

## Definition — verbatim
> "## Session End Requirements (REQUIRED)" — docs/autonomous-pr-monitor.md:246
> "Before ending any session, you must complete these steps:" — docs/autonomous-pr-monitor.md:248

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/autonomous-pr-monitor.md | 246 | defined here | Prescribes the mandatory three-step closing sequence (retrospective evaluation, handoff update, git commit) before terminating a session. |

## Consumes
Completed deliverables, unresolved issues, lessons learned, and modified repository files.

## Produces
Retrospective documentation, updated per-issue handoff under `.agents/sessions/handoffs/`, and clean git commits.

## When applied
Applied at the conclusion of every autonomous agent session before session termination.

## Sub-concepts
none

## Part of
autonomous-pr-monitoring-prompt

## Implementation status
defects: missing-path, internal-contradiction

## Design notes
Session End Requirements enforce an invariant closing protocol (evaluating retrospectives, updating per-issue handoffs, and committing all modified assets) to guarantee that session progress and institutional learnings persist across agent restarts.
