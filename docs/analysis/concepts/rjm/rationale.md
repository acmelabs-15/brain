---
package: rjm
name: Rationale
slug: rationale
kind: artifact
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/adr-generator/references/adr-best-practices.md, sha256: 62f0e939ebf8455bdf6f0ff1d882d21e551b1d1bcfc532a863ef80f68a0675f2}
  - {path: .claude/skills/adr-generator/references/adr-template.md, sha256: b2e5e4d7d00674c28331639b8cc7d205f3ff649dcf12b20225a7f0a9997dd020}
  - {path: scripts/eval/examples/example-scenarios.json, sha256: af2f596dbc4bd88d619b6969bca3830063a2d8b6f37a372504d86d7d896d12e7}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Rationale

## Definition — verbatim
> "Explain the reasons for the decision. Include context, pros and cons, feature comparisons, cost/benefit discussions." — .claude/skills/adr-generator/references/adr-best-practices.md:7

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/adr-generator/references/adr-best-practices.md | 7 | defines | Listed as the first characteristic of a good ADR explaining reasons, context, pros/cons, comparisons, and cost/benefit discussions. |
| .claude/skills/adr-generator/references/adr-template.md | 84 | defines | Core markdown heading in the ADR template requiring authors to explain why the decision was made. |
| scripts/eval/examples/example-scenarios.json | 11 | defines | JSON field documenting the rationale explaining why a test evaluation scenario expects a STOP verdict. |

## Consumes
Decision context forces, candidate alternatives, trade-off evaluations, and empirical evidence.

## Produces
Documented technical justification establishing why a specific architectural alternative was selected over competing options.

## When applied
Authored in every ADR under the Rationale section and specified in evaluation scenarios to justify expected verdicts.

## Sub-concepts
none

## Part of
adr-template, adr

## Implementation status
clean

## Design notes
Rationale represents the core explanatory heart of an Architectural Decision Record. While context establishes the problem forces and the decision declares the chosen fork, the Rationale articulates why that choice was made, balancing pros and cons, analyzing trade-offs, and justifying why the chosen solution is superior to alternatives. In rjm, an ADR without a thorough Rationale is invalid, as future teams cannot understand the original motivations or re-evaluate them when context changes.
