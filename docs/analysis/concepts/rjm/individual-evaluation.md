---
package: rjm
name: Individual Evaluation
slug: individual-evaluation
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

# Individual Evaluation

## Definition — verbatim
> "### Step 2: Individual Evaluation" — .claude/skills/skillforge/references/synthesis-protocol.md:168

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/skillforge/references/synthesis-protocol.md | 168 | defined here | Second procedural step where each agent independently produces a structured review. |

## Consumes
Input skill content and domain-specific evaluation rubrics.

## Produces
Structured agent reviews containing verdicts (`APPROVED` or `CHANGES_REQUIRED`), criterion scores (1-10), strengths, issues tables, and confidence levels.

## When applied
Executed independently by each panel evaluator during Phase 4.

## Sub-concepts
none

## Part of
multi-agent-synthesis-protocol

## Implementation status
defects: doc-drift

## Design notes
An independent evaluation step where each panel agent assesses the candidate skill against weighted criteria and produces structured reviews without interference from peer agents.
