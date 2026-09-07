---
package: rjm
name: Consensus Criteria
slug: consensus-criteria
kind: gate
package_phase: rjm:review
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/adr-review/references/debate-protocol.md, sha256: 7ffb255e17ca77cfed1b1a4cf42531f93706c53636a57fb690fc4f7d96b1c86e}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Consensus Criteria

## Definition — verbatim
> "**Consensus Criteria:**" — .claude/skills/adr-review/references/debate-protocol.md:198

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/adr-review/references/debate-protocol.md | 198 | defined here | Formal convergence conditions dictating whether consensus is reached, another round is required, or the debate concludes without consensus. |

## Consumes
Final positions (Accept, Disagree-and-Commit, Block) from all six review agents during Phase 4 Convergence Check.

## Produces
Debate termination decision: Consensus reached, Next round required (if round < 10), or Conclude with unresolved issues (at round 10).

## When applied
Evaluated during Phase 4 Convergence Check at the end of each debate round.

## Sub-concepts
none

## Part of
phase-4-convergence-check, adr-review

## Implementation status
clean

## Design notes
The formal gate governing convergence in multi-agent ADR reviews. By requiring that all six agents register either Accept or Disagree-and-Commit to establish consensus, it ensures that genuine technical blocks are resolved while preventing endless deadlocks through Disagree-and-Commit pragmatism and a strict 10-round ceiling.
