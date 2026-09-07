---
package: rjm
name: Scope Analysis
slug: scope-analysis
kind: technique
package_phase: rjm:review
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/adr-review/references/agent-prompts.md, sha256: 58a13dd3adc40229b5a77f394c0ffcfc5e20588f166f961bfc00dc877cd6598e}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Scope Analysis

## Definition — verbatim
(used, not defined)

> "## Scope Analysis" — .claude/skills/adr-review/references/agent-prompts.md:55

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/adr-review/references/agent-prompts.md | 55 | defines | Review prompt section instructing agents to evaluate whether an ADR conflates multiple decisions requiring separation. |

## Consumes
Draft ADR problem statement, decision scope, and stakeholder context.

## Produces
Assessment of decision boundaries and potential scope split recommendations.

## When applied
During Phase 1 independent review within the adr-review multi-agent debate.

## Sub-concepts
scope-split-recommendation

## Part of
adr-review

## Implementation status
clean

## Design notes
A review technique applied during Phase 1 of the multi-agent ADR review process to detect whether a single ADR bundles multiple independent decisions. Splitting conflated decisions prevents governance ambiguity, enables targeted stakeholder review, and ensures each decision can be independently accepted, rejected, or superseded.
