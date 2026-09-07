---
package: rjm
name: Retro mining
slug: retro-mining
kind: technique
package_phase: rjm:research
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/ai-agents-research-methodology/SKILL.md, sha256: 7141af7456e2a59337469559ce9bd051294b0413ffac614bab6bae44c49f9b83}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Retro mining

## Definition — verbatim
> "Retro mining.** `.agents/retrospective/` is the richest vein; `ai-agents-failure-archaeology` indexes the major ones." — .claude/skills/ai-agents-research-methodology/SKILL.md:207-208

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/ai-agents-research-methodology/SKILL.md | 207 | defined here \| used here | Defined as the primary technique for discovering high-value research ideas and governance patterns from retrospective records. |

## Consumes
Historical retrospective files under `.agents/retrospective/` and failure archaeology catalog indexes.

## Produces
High-priority research candidates, proven failure modes, and empirically grounded rule improvement hypotheses.

## When applied
When seeking high-leverage problems to investigate, designing new agent guardrails, or prioritizing governance initiatives.

## Sub-concepts
none

## Part of
ai-agents-research-methodology

## Implementation status
defects: missing-path

## Design notes
Retro mining grounds system evolution in documented organizational trauma and verified historical failures. Rather than inventing hypothetical problems, rjm mines `.agents/retrospective/` to identify recurring failure patterns paid for by real developer hours, using past incidents as the empirical bedrock for designing resilient agent workflows.
