---
package: rjm
name: Debate Log
slug: debate-log
kind: artifact
package_phase: rjm:review
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/adr-review/references/artifacts.md, sha256: 82daf59b64761376f05dd9a47a02294f060cf150675f6c926722ee1d7c300c65}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Debate Log

## Definition — verbatim
(used, not defined)

> "## Debate Log" — .claude/skills/adr-review/references/artifacts.md:5

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/adr-review/references/artifacts.md | 5 | defines | Review artifact saved to `.agents/critique/ADR-NNN-debate-log.md` detailing rounds, consensus outcome, and agent positions. |

## Consumes
Multi-agent review reports, conflict rulings, and convergence check voting records.

## Produces
Audit log saved to `.agents/critique/ADR-NNN-debate-log.md` recording all debate rounds, issues addressed, and final consensus.

## When applied
Written upon conclusion of the adr-review multi-agent debate process.

## Sub-concepts
none

## Part of
adr-review

## Implementation status
defects: missing-path

## Design notes
The permanent audit trail artifact produced by the adr-review skill. Saved under `.agents/critique/`, it captures round-by-round agent positions, key issues raised and resolved, major modifications, and final consensus status, ensuring complete transparency for architectural decisions.
