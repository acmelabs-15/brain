---
package: rjm
name: Consensus Points
slug: consensus-points
kind: template
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

# Consensus Points

## Definition — verbatim
(used, not defined)

> "## Consensus Points" — .agents/critique/ADR-023-debate-log.md:95

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/critique/ADR-023-debate-log.md | 95 | defined here | Section heading in the ADR-023 debate log recording unanimous findings across reviewing agents. |

## Consumes
Individual agent critique reviews, conflict resolution analyses.

## Produces
Formally recorded list of unanimous agreements reached across reviewing agents.

## When applied
Recorded in ADR debate logs under .agents/critique/ following multi-agent review rounds.

## Sub-concepts
none

## Part of
adr-debate-log

## Implementation status
defects: internal-contradiction

## Design notes
Consensus Points is a structured section in rjm's multi-agent ADR debate log that crystallizes points of unanimous agreement across all reviewing agents, establishing baseline facts before addressing contentious or divergent requirements.
