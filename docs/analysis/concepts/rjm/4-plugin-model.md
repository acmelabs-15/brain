---
package: rjm
name: 4-plugin model
slug: 4-plugin-model
kind: pattern
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/analysis/adr-045-feasibility-analysis.md, sha256: fabe8278f52716f18b7a1e30350ec8ff0c55d155dcc91000ec5ab6940cdebfab}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# 4-plugin model

## Definition — verbatim
(used, not defined)

> "Evaluate 2-plugin model vs 4-plugin model | 4 plugins may be over-engineering; consider core + extensions" — .agents/analysis/adr-045-feasibility-analysis.md:195

## Also called — verbatim
4 plugins — .agents/projects/v0.4.0/PLAN.md:133

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/analysis/adr-045-feasibility-analysis.md | 195 | used here | Evaluated against the 2-plugin model regarding maintenance cost and over-engineering risk. |

## Consumes
Decomposed framework sub-domains (agents, skills, protocol, gates).

## Produces
A 4-part modular plugin architecture: core-agents, framework-skills, session-protocol, and quality-gates.

## When applied
Specified in ADR-045 and v0.4.0 PLAN to provide fine-grained installation options.

## Sub-concepts
core-agents, framework-skills

## Part of
framework-extraction

## Implementation status
defects: missing-path

## Design notes
The 4-plugin model is the modular architectural topology selected in ADR-045 for distributing rjm's framework. By isolating the system into core-agents, framework-skills, session-protocol, and quality-gates, it allows consumers to install only the capabilities they need, though requiring active management of four plugin manifests and cross-plugin dependencies.
