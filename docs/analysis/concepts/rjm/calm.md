---
package: rjm
name: CALM
slug: calm
kind: pattern
package_phase: rjm:review
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/adr-review/references/zimmermann-review-guidance.md, sha256: 2b8d3a21a4e0a2a8cd0766bfbe1b605752200470c4f6f94d189d2dbb625e0cfb}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# CALM

## Definition — verbatim
> "ADRs keep you CALM:" — .claude/skills/adr-review/references/zimmermann-review-guidance.md:83

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/adr-review/references/zimmermann-review-guidance.md | 81 | defined here | Mnemonic acronym summarizing the four primary organizational benefits of ADRs (Collaborative, Accountability, Learning, Management). |

## Consumes
Architectural decision-making practices and documentation needs.

## Produces
Conceptual reinforcement of the value of maintaining architectural decision records.

## When applied
Referenced in ADR guidance to explain the organizational purpose and benefits of decision records.

## Sub-concepts
none

## Part of
zimmermann-review-guidance, adr-review

## Implementation status
defects: missing-path

## Design notes
A mnemonic acronym highlighting why engineering organizations maintain ADRs: Collaborative content creation, Accountability support, Learning opportunities for engineers, and Management appreciation of transparent decision-making.
