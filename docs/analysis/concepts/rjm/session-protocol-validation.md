---
package: rjm
name: Session Protocol Validation
slug: session-protocol-validation
kind: gate
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: docs/autonomous-issue-development.md, sha256: 71f847a86f2ad77877dbcee5cd3c3e4def0ec0ef01d5a31fc81b178148ae001c}
  - {path: scripts/README.md, sha256: 551daff8daf63618ebc955fce182f2eddd5e1bc7d87ee330de6f523d06fed2c1}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Session Protocol Validation

## Definition — verbatim
> "### Session Protocol Validation" — scripts/README.md:38
> "Validates session protocol compliance for session logs." — scripts/README.md:42

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/autonomous-issue-development.md | 431 | used here | Outlined as a troubleshooting pattern for handling pre-commit hook validation failures on session logs. |
| scripts/README.md | 38 | defined here | Documented as a validation script category enforcing session protocol compliance. |

## Consumes
Session JSON log files located in `.agents/sessions/`.

## Produces
Pass/fail exit codes enforcing schema conformity and evidence completeness on session logs.

## When applied
Applied via pre-commit hooks, orchestrator handoffs, and CI workflows before allowing commits to land.

## Sub-concepts
validate_session_json.py

## Part of
technical-guardrails

## Implementation status
defects: doc-drift, missing-path, internal-contradiction

## Design notes
Session Protocol Validation enforces structural and evidential compliance on session logs prior to commit, ensuring that agent execution traces and QA artifacts are captured without allowing hook bypasses (`--no-verify`).
