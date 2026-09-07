---
package: rjm
name: Eval harness
slug: eval-harness
kind: technique
package_phase: rjm:test
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/ai-agents-diagnostics-toolkit/references/instrument-guides.md, sha256: be47542008b1aef449e2366ade2f13b336d8de6f05a426d4234572a8e97a6f7a}
  - {path: .claude/skills/ai-agents-research-methodology/SKILL.md, sha256: 7141af7456e2a59337469559ce9bd051294b0413ffac614bab6bae44c49f9b83}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Eval harness

## Definition — verbatim
> "### Eval harness" — .claude/skills/ai-agents-diagnostics-toolkit/references/instrument-guides.md:113

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/ai-agents-diagnostics-toolkit/references/instrument-guides.md | 113 | defined here | Defined as the behavioral A/B measurement harness under ADR-057 for testing prompt and agent alterations. |
| .claude/skills/ai-agents-research-methodology/SKILL.md | 60 | used here | Cited in the research methodology routing table as the required measurement gate for any behavioral claim about a prompt or rule. |

## Consumes
Evaluation scenario datasets, baseline and candidate prompt/agent configurations, and Anthropic API credentials.

## Produces
Empirical comparative evaluation scores quantifying prompt activation, citation rates, and agent behavior across scenarios.

## When applied
Applied whenever behavioral changes to prompts, agent definitions, or system rules are proposed.

## Sub-concepts
eval-a-b

## Part of
ai-agents-diagnostics-toolkit

## Implementation status
defects: unfailable-gate, other, missing-path

## Design notes
An empirical testing framework governed by ADR-057 designed to evaluate changes to prompts and agent behavior quantitatively rather than through subjective impressions. By running candidate prompts against standardized scenario suites, it forces developers to predict behavioral deltas before execution and validates them against empirical test baselines.
