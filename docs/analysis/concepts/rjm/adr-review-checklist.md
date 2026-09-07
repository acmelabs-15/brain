---
package: rjm
name: ADR Review Checklist
slug: adr-review-checklist
kind: checklist
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/adr-generator/references/ad-quality-frameworks.md, sha256: 45f86306ae19ffd5bfea272c9f4db21a6effca28b85e4a9fa4d096b26f8d7d8e}
  - {path: .claude/skills/adr-review/references/zimmermann-review-guidance.md, sha256: 2b8d3a21a4e0a2a8cd0766bfbe1b605752200470c4f6f94d189d2dbb625e0cfb}
  - {path: templates/agents/architect.shared.md, sha256: cc34d58497548aa34e8f5d926ac342c35bdccf70cc8a61e9d120d02b7c6900ff}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# ADR Review Checklist

## Definition — verbatim
> "Seven questions for reviewing ADRs:" — .claude/skills/adr-generator/references/ad-quality-frameworks.md:89

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/adr-generator/references/ad-quality-frameworks.md | 87 | defines | Section presenting seven structured questions evaluating architectural significance, clarity, forces, realistic options, pros/cons, consequences, and actionability. |
| .claude/skills/adr-review/references/zimmermann-review-guidance.md | 57 | defines | Heading for the 7-question review checklist mandatory for all agents during Phase 1 independent review of the debate protocol. |
| templates/agents/architect.shared.md | 404 | defines | Section heading for the architect agent's mandatory ADR review checklist covering significance, context, forces, alternatives, pros/cons, consequences, and actionability. |

## Consumes
Submitted ADR proposal, background context, candidate options, and technical requirements.

## Produces
Structured architectural review findings evaluating completeness, objectivity, and actionable implementation planning.

## When applied
Applied by reviewing agents and architects during independent evaluation rounds and multi-agent debate when assessing candidate decision records.

## Sub-concepts
none

## Part of
adr-review, ad-quality-frameworks

## Implementation status
defects: missing-path

## Design notes
The ADR Review Checklist standardizes scrutiny across independent reviewing agents and human architects. Originating from Olaf Zimmermann's seven review questions, it compels reviewers to look beyond superficial formatting to evaluate whether the decision is genuinely architectural, whether forces and realistic alternatives are comprehensively addressed, and whether negative consequences are candidly documented.
