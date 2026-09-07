---
package: rjm
name: ADR Debate Log
slug: adr-debate-log
kind: artifact
package_phase: rjm:Review
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/critique/ADR-023-debate-log.md, sha256: f199ea3783f0e058dc4704243dd7f91d0f4a44c0437d4bff41bf2731a65f9013}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# ADR Debate Log

## Definition — verbatim
(used, not defined)

> "# ADR Debate Log: ADR-023 Quality Gate Prompt Testing" — .agents/critique/ADR-023-debate-log.md:1

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/critique/ADR-023-debate-log.md | 1 | defined here | Title and document format for multi-agent architecture review debate records stored in .agents/critique/. |

## Consumes
Draft Architecture Decision Record (ADR), specialist agent critique reviews (Analyst, Architect, Critic, Independent Thinker, Security, High-Level Advisor).

## Produces
Debate summary, agent review rounds, consensus points, prioritized change requirements (P0/P1/P2), and consolidated decision verdict.

## When applied
Created and updated during multi-agent architectural review rounds evaluating significant or contested architecture decisions.

## Sub-concepts
consensus-points, dissent-record, resolution-path

## Part of
adr-review

## Implementation status
defects: internal-contradiction

## Design notes
The ADR Debate Log is a formal governance artifact capturing the multi-agent critique and consensus-building process for proposed architecture decisions. By recording dissent, conflict resolutions, and categorized modification requirements across multiple review rounds, it guarantees transparent, auditable decision-making before an ADR reaches accepted status.
