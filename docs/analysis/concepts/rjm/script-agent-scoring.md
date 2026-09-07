---
package: rjm
name: Script Agent Scoring
slug: script-agent-scoring
kind: checklist
package_phase: rjm:Phase 4: Synthesis Panel
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/skillforge/references/phase4-synthesis-deep-dive.md, sha256: c1dd0e02bdb365dfc6c492fd2e5a9726aeaa054a6f0f442d18a0504f72521cb3}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Script Agent Scoring

## Definition — verbatim
> "**Script Agent Scoring:**" — .claude/skills/skillforge/references/phase4-synthesis-deep-dive.md:28

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/skillforge/references/phase4-synthesis-deep-dive.md | 28 | defined here | Three-tier scoring rubric for evaluating script readiness and agentic automation quality. |

## Consumes
Script Agent review findings across compliance, self-verification, error handling, and autonomy.

## Produces
Numerical score and tier categorization: 8-10 (production-ready), 6-7 (functional with gaps), <6 (revision required).

## When applied
Applied by the Script Agent when scoring skill scripts in Phase 4.

## Sub-concepts
none

## Part of
script-agent

## Implementation status
clean

## Design notes
The three-tier numerical scoring rubric used by the Script Agent to quantify whether packaged scripts are production-ready (8–10), functional but lacking polish (6–7), or unacceptable (<6).
