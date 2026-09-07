---
package: rjm
name: The Mom Test
slug: the-mom-test
kind: technique
package_phase: rjm:spec
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/business-strategy/SKILL.md, sha256: 367a3f83f1a5a7da8258c8cfb0d0c98909a69c4c84976f869c6a17d7b19ba1db}
  - {path: .claude/skills/business-strategy/references/mom-test.md, sha256: 09980e08320f81700c21cb6346b6ea1b094637ea4566dc81d071508d84d090d3}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# The Mom Test

## Definition — verbatim
> "# The Mom Test" — .claude/skills/business-strategy/references/mom-test.md:1

## Also called — verbatim
`The Mom Test (Fitzpatrick)` — .claude/skills/business-strategy/SKILL.md:117

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/business-strategy/references/mom-test.md | 1 | defines | Primary guide defining customer interview methodology to gather empirical behavioral evidence rather than flattering opinions. |
| .claude/skills/business-strategy/SKILL.md | 117 | references | Book reference mapping Rob Fitzpatrick's interview guide to early customer discovery. |

## Consumes
Target customer profile, problem hypothesis, and planned customer interview opportunities.

## Produces
Empirical data on past behaviors, workflows, money spent, and actual commitments.

## When applied
Applied during customer discovery conversations before writing code or finalizing specifications.

## Sub-concepts
discovery-mode, validation-mode, commitment-and-advancement, facts-versus-fluff

## Part of
business-strategy

## Implementation status
clean in .claude/skills/business-strategy/references/mom-test.md; defects: missing-path in .claude/skills/business-strategy/SKILL.md

## Design notes
The Mom Test is rjm's foundational customer interview doctrine. Recognizing that prospective users routinely mislead founders with polite encouragement, the methodology prohibits pitching the solution and instead interrogates concrete past behavior and actual expenditures, preventing the synthesis and construction of unvalidated software.
