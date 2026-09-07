---
package: rjm
name: Contradiction Log
slug: contradiction-log
kind: artifact
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

# Contradiction Log

## Definition — verbatim
> "log it before proceeding: Serena memory named `decision-<short-slug>` with five fields: question, conventional answer with citation, first-principles position, evidence, decision. The log is what stops the next agent from silently reverting your result." — .claude/skills/ai-agents-research-methodology/SKILL.md:110-113

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/ai-agents-research-methodology/SKILL.md | 102 | defined here \| used here | Section header and Stage 1 protocol establishing structured logging when first-principles positions contradict conventional patterns. |

## Consumes
Identified contradictions between a first-principles finding and an established ADR, memory, or canonical repository convention.

## Produces
A structured decision memory entry (`decision-<short-slug>`) containing question, conventional answer, first-principles position, evidence, and decision.

## When applied
During Stage 1 of the idea lifecycle before beginning implementation whenever a new technical direction conflicts with conventional wisdom.

## Sub-concepts
none

## Part of
idea-lifecycle

## Implementation status
defects: missing-path

## Design notes
The Contradiction Log prevents knowledge churn and cyclic regression across multi-agent sessions. By mandating a structured five-field record whenever a conclusion contradicts established repository conventions, rjm ensures that intentional deviations from existing patterns are explicitly defended with evidence, stopping future agents from reflexively reverting changes back to conventional defaults.
