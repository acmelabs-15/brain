---
package: rjm
name: kill criteria
slug: kill-criteria
kind: checklist
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-070-memory-first-gate-spec-pipeline.md, sha256: 7074f73323b27f263379d5cb0c0b753ff42a7485c9d9b2027d81f9f010d6bd8e}
  - {path: .agents/specs/requirements/REQ-016-spec-step0-first-principles-gate.md, sha256: bada92fac80c619ad829da39e28a6a11b87601aa8487d5f8cfd46edbb0d7637b}
  - {path: .claude/agents/roadmap.md, sha256: 7ed4de246b37a0747c8dc4f6ac71820ed8753daf2d7045ed0726790977fb5de2}
  - {path: scripts/metrics/__init__.py, sha256: 98522e44f72c4b3782a20901b4bc47d2ddde776cfe453e887d1251c04f85ec17}
  - {path: scripts/metrics/kill_criteria.py, sha256: df07f1498c8f0ffe5579934dc3331a3e5de5d023fd502207bfb31cb7ea8dc686}
  - {path: templates/agents/roadmap.shared.md, sha256: fd92ee8e3cf1daac90afd929e18eef500c446fc015b43703096a4dffb49592b1}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# kill criteria

## Definition — verbatim
> "Canonical emitter for REQ-008-09 kill-criteria (K1-K4) telemetry." — scripts/metrics/kill_criteria.py:2

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-070-memory-first-gate-spec-pipeline.md | 185 | used here | Extended from Step 0 to Step 0.5 to review gate efficacy at 30 invocations against false-positive and bypass rates. |
| .agents/specs/requirements/REQ-016-spec-step0-first-principles-gate.md | 164 | defined here | Formally specified under REQ-016-13 with explicit thresholds (false positives, bypasses, abandonment). |
| .claude/agents/roadmap.md | 114 | defined here | Defined as a required section in roadmap epics identifying observations that trigger mid-flight cancellation. |
| scripts/metrics/__init__.py | 1 | used here | Package docstring referencing metrics emission helpers for ai-agents kill-criteria telemetry. |
| scripts/metrics/kill_criteria.py | 2 | defined here | Implemented as the canonical emitter script tracking K1-K4 kill-criteria telemetry events. |
| templates/agents/roadmap.shared.md | 120 | defined here | Template section in shared roadmap definitions requiring cancellation triggers for epics. |

## Consumes
Telemetry events, false-positive metrics, bypass counts, and epic observation signals.

## Produces
Objective triggers to prune, loosen, or cancel features, epics, or process gates.

## When applied
During epic tracking, gate review milestones (e.g. after 30 invocations), and telemetry monitoring.

## Sub-concepts
req-016-13

## Part of
governance, quality-gates

## Implementation status
defects: missing-path, doc-drift

## Design notes
A governance mechanism establishing explicit, quantitative conditions under which a project, feature, or quality gate must be canceled or rolled back, preventing sunk-cost escalation.
