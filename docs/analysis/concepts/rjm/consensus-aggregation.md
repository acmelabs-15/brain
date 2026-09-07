---
package: rjm
name: Consensus Aggregation
slug: consensus-aggregation
kind: technique
package_phase: rjm:cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/skillforge/references/synthesis-protocol.md, sha256: f7cf0dada576138f82391627c2b52c7fdeec4f41e60420673020ba664ff1e7d7}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Consensus Aggregation

## Definition — verbatim
> "### Step 3: Consensus Aggregation" — .claude/skills/skillforge/references/synthesis-protocol.md:204

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/skillforge/references/synthesis-protocol.md | 204 | defined here | Third procedural step combining verdicts and issue tables into an aggregated panel report. |

## Consumes
Individual reviews and scores from all panel agents.

## Produces
Consensus synthesis report with combined verdict, average scores, critical issue counts, and consolidated issues table.

## When applied
Executed after all panel agents complete their individual evaluations.

## Sub-concepts
none

## Part of
multi-agent-synthesis-protocol

## Implementation status
defects: doc-drift

## Design notes
An aggregation procedure combining individual evaluator findings into a single consensus report, determining whether unanimous approval was achieved or structured iteration is required.
