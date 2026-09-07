---
package: rjm
name: Reviewer Pledge
slug: reviewer-pledge
kind: checklist
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

# Reviewer Pledge

## Definition — verbatim
> "## Reviewer Pledge" — .claude/skills/adr-review/references/zimmermann-review-guidance.md:71

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/adr-review/references/zimmermann-review-guidance.md | 71 | defined here | Defines five core commitments that guide review agents to deliver professional, actionable, and empathetic critiques. |

## Consumes
Review guidelines and agent reviewer prompt instructions.

## Produces
Behavioral alignment and professional review discipline across reviewing personas.

## When applied
Bound to reviewing agent personas participating in multi-agent ADR reviews.

## Sub-concepts
none

## Part of
zimmermann-review-guidance, adr-review

## Implementation status
defects: missing-path

## Design notes
A professional code of conduct for reviewing agents in rjm. By committing reviewers to proven practices, anti-pattern avoidance, actionable feedback, and empathetic critique ("Review like you want to be reviewed"), it establishes a constructive review culture.
