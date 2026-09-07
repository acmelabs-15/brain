---
package: rjm
name: BLOCK
slug: block
kind: gate
package_phase: rjm:Review
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/critique/ADR-045-debate-log.md, sha256: 1a7c67dec37cdc5b039615e4f59a49517fc570566436ec2c344dd54473da1a82}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# BLOCK

## Definition — verbatim
(used, not defined)

> "1 agent voted BLOCK. Direction is sound but critical gaps exist." — .agents/critique/ADR-045-debate-log.md:10

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/critique/ADR-045-debate-log.md | 10 | defined here | Recorded as a dissenting agent verdict halting ADR acceptance until critical gaps are addressed. |

## Consumes
Critique findings, P0 severity architectural defects, unacceptable security or strategic risks.

## Produces
Blocking verdict halting decision progression and requiring resolution or explicit override.

## When applied
Cast by an reviewing specialist agent when an architecture proposal contains fatal flaws or premature commitments.

## Sub-concepts
none

## Part of
adr-review

## Implementation status
defects: cross-file-contradiction

## Design notes
`BLOCK` is the most severe individual verdict a reviewing agent can issue in rjm's multi-agent architectural review protocol. It halts decision progression until the blocking concern is formally addressed, renegotiated, or resolved through consensus or dissent overrides.
