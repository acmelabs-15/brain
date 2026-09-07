---
package: rjm
name: Confirmation Bias
slug: confirmation-bias
kind: reference
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/decision-critic/references/critical-thinking-survivorship-bias.md, sha256: 4fecb4c15025c5d210c0eb5c3d456700fb637c758c8e7fc2cca1ad5ad114192a}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Confirmation Bias

## Definition — verbatim
> "- Confirmation Bias: seeking evidence that supports existing beliefs" — .claude/skills/decision-critic/references/critical-thinking-survivorship-bias.md:67

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/decision-critic/references/critical-thinking-survivorship-bias.md | 67 | used here | Listed under Related Mental Models as the tendency to seek evidence supporting existing beliefs. |

## Consumes
Proposer's rationale, selective evidence portfolios, and favorable case studies.

## Produces
Critical awareness and verification questions designed to seek disconfirming data.

## When applied
Consulted when auditing decision rationales that present exclusively positive evidence.

## Sub-concepts
none

## Part of
survivorship-bias

## Implementation status
clean

## Design notes
Confirmation Bias is a cognitive bias reference concept in decision-critic identifying the psychological tendency to gather only evidence that supports a favored conclusion. The decision-critic framework is explicitly architected with factored verification and contrarian challenge phases to dismantle confirmation bias in agentic planning.
