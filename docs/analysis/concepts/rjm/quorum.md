---
package: rjm
name: Quorum
slug: quorum
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/governance/steering-committee-charter.md, sha256: 855a890ef575ea88a2e46161c4b17481be4f6d194e3e35353820d393b2c9741a}
  - {path: scripts/consensus/__init__.py, sha256: 9a6da91444611b98e86735832d13ec1f06cbad95954428945e540ca5bea930df}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Quorum

## Definition — verbatim
> "- quorum: Require minimum participation before deciding" — scripts/consensus/__init__.py:9

## Also called — verbatim
`Quorum` — .agents/governance/steering-committee-charter.md:19

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/governance/steering-committee-charter.md | 19 | defined here | Establishes committee quorum requirement of at least 3 roles represented including the Chair. |
| scripts/consensus/__init__.py | 9 | defined here | Defines the quorum consensus algorithm requiring minimum participation before a multi-agent decision is reached. |

## Consumes
Participating committee members or active specialist agent voters.

## Produces
Validity determination establishing whether a voting quorum exists to render binding decisions.

## When applied
Checked before conducting committee votes or executing multi-agent consensus algorithms.

## Sub-concepts
none

## Part of
agent-system-steering-committee-charter, scripts-consensus

## Implementation status
defects: missing-path, doc-drift, orphan, script-bug

## Design notes
A minimum participation threshold required before decisions are binding. In governance, it requires at least three steering committee roles; in multi-agent consensus algorithms, it ensures enough specialist agents participate to avoid decisions made on insufficient perspectives.
