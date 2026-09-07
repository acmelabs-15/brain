---
package: rjm
name: Round Management
slug: round-management
kind: technique
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

# Round Management

## Definition — verbatim
> "## Round Management" — .claude/skills/adr-review/references/debate-protocol.md:204

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/adr-review/references/debate-protocol.md | 204 | defined here | State tracking template and protocol recording debate round count (1 to 10), convergence status, and per-agent positions. |

## Consumes
Current round number, convergence status, and updated position tables from reviewing agents across iterations.

## Produces
Debate State tracking artifact recording round number, overall status (In Progress, Consensus, Concluded Without Consensus), and agent position notes.

## When applied
Maintained across each iteration of the multi-round ADR debate until consensus or the 10-round ceiling is reached.

## Sub-concepts
none

## Part of
debate-protocol, adr-review

## Implementation status
clean

## Design notes
The state persistence and iteration control protocol for multi-round ADR reviews in rjm. It records each agent's stance (Accept, Disagree-and-Commit, Block) and notes across review cycles, providing an auditable convergence log and enforcing a bounded review loop that terminates by round 10.
