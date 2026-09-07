---
package: rjm
name: auto mode
slug: auto-mode
kind: pattern
package_phase: rjm:spec
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-070-memory-first-gate-spec-pipeline.md, sha256: 7074f73323b27f263379d5cb0c0b753ff42a7485c9d9b2027d81f9f010d6bd8e}
  - {path: .agents/specs/requirements/REQ-016-spec-step0-first-principles-gate.md, sha256: bada92fac80c619ad829da39e28a6a11b87601aa8487d5f8cfd46edbb0d7637b}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# auto mode

## Definition — verbatim
> "Auto-mode raises the H11 threshold to reduce false halts on automated" — .agents/architecture/ADR-070-memory-first-gate-spec-pipeline.md:112

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-070-memory-first-gate-spec-pipeline.md | 111 | defined here | Defined as automated pipeline execution with a raised blast-radius threshold of 3 entities. |
| .agents/specs/requirements/REQ-016-spec-step0-first-principles-gate.md | 156 | used here | Governed by REQ-016-12 requiring auto-mode to honor Step 0 without unauthorized bypass. |

## Consumes
Non-interactive automated pipeline context (CI/CD, orchestrator tasks).

## Produces
Adjusted gate thresholds and structured non-interactive halt codes.

## When applied
During unattended or automated script execution of lifecycle commands.

## Sub-concepts
none

## Part of
step-0-5, rjm:spec

## Implementation status
defects: doc-drift, missing-path

## Design notes
An execution mode for automated headless workflows that adjusts gate sensitivity (such as raising blast-radius thresholds from 2 to 3) to minimize false halts while strictly forbidding gate bypasses.
