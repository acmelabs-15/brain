---
package: rjm
name: Honest limitations
slug: honest-limitations
kind: pattern
package_phase: rjm:cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/business-strategy/SKILL.md, sha256: 367a3f83f1a5a7da8258c8cfb0d0c98909a69c4c84976f869c6a17d7b19ba1db}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Honest limitations

## Definition — verbatim
(used, not defined)

> "## Honest limitations" — .claude/skills/business-strategy/SKILL.md:85

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/business-strategy/SKILL.md | 85 | defined here | Section heading detailing explicit failure modes, biases, and scope boundaries of the strategy router. |

## Consumes
Diagnostic rules, decision models, and skill routing procedures.

## Produces
Explicit boundary warnings, counter-bias notices, and operational failure modes documented for skill users.

## When applied
Defined across business strategy skills to prevent misapplication of diagnostic heuristics in complex or out-of-domain scenarios.

## Sub-concepts
single-bottleneck-bias, founder-context-bias

## Part of
business-strategy

## Implementation status
defects: missing-path

## Design notes
A standard skill authoring pattern in rjm skills that documents inherent model biases, assumptions, and failure modes. In business-strategy, it highlights limitations such as single-bottleneck bias, founder-context bias, and garbage-in-garbage-out dynamics to prevent over-reliance on automated routing.
