---
package: rjm
name: Zimmermann review questions
slug: zimmermann-review-questions
kind: checklist
package_phase: rjm:review
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/adr-review/references/debate-protocol.md, sha256: 7ffb255e17ca77cfed1b1a4cf42531f93706c53636a57fb690fc4f7d96b1c86e}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Zimmermann review questions

## Definition — verbatim
(used, not defined)

> "5. Answer all 7 Zimmermann review questions (mandatory):" — .claude/skills/adr-review/references/debate-protocol.md:102

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/adr-review/references/debate-protocol.md | 102 | used here | Mandatory 7-question evaluation checklist applied by all reviewing agents during Phase 1 independent review. |

## Consumes
Draft ADR content and candidate architectural options.

## Produces
Systematic answers to seven structural criteria evaluating relevance, options, criteria, conflicts, solution fit, objectivity, and actionability.

## When applied
Mandatory review criteria applied by all agents in Phase 1 of adr-review.

## Sub-concepts
none

## Part of
adr-review

## Implementation status
clean

## Design notes
A standardized 7-question evaluation framework formulated by Olaf Zimmermann applied during multi-agent ADR reviews. It obligates reviewers to verify problem relevance, completeness of considered options, criteria orthogonality, trade-off prioritization, solution efficacy, objective consequences, and implementation actionability.
