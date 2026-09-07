---
package: rjm
name: Skill Validation
slug: skill-validation
kind: phase
package_phase: rjm:session-start
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-011-session-state-mcp.md, sha256: 1f587e02f76255cdbfcfe6270ec3765a1e843830f3408b5ae5847068f08e02f1}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Skill Validation

## Definition — verbatim
(used, not defined)

> "| 1.5 | Skill Validation | BLOCKING | Skills listed in session log |" — .agents/architecture/ADR-011-session-state-mcp.md:36

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-011-session-state-mcp.md | 36 | used here | Listed as Phase 1.5 in the session protocol phase table with requirement level BLOCKING. |

## Consumes
Identified task requirements and applicable domain skills.

## Produces
Validated list of required skills recorded in the session log.

## When applied
Enforced at session start immediately following Serena Initialization (Phase 1) and prior to context retrieval.

## Sub-concepts
none

## Part of
session-protocol

## Implementation status
not-implemented

## Design notes
Phase 1.5 of the rjm session lifecycle protocol, serving as a BLOCKING quality gate where agents must identify and document the specific skills relevant to the task in the session log. Programmatic enforcement ensures agents do not skip skill instructions or attempt manual ad-hoc workflows.
