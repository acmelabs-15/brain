---
package: rjm
name: spec-compliance
slug: spec-compliance
kind: gate
package_phase: rjm:review
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/review/SKILL.md, sha256: cf8e377d27c1ac99b60acb63a0c4bdda2eae139abc38dda591cc9314be5f5dac}
  - {path: .claude/skills/review/references/spec-compliance.md, sha256: 9e50737d1c7146134285d882501c119b417becab5db7e182af64e5c47edc1a7c}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# spec-compliance

## Definition — verbatim
> "name: spec-compliance" — .claude/skills/review/references/spec-compliance.md:2

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/review/references/spec-compliance.md | 2 | defined here | Frontmatter declaration of the Stage-1 spec-compliance review task specification. |
| .claude/skills/review/SKILL.md | 29 | used here | Specified as the mandatory Stage-1 gating axis that executes before Stage-2 canonical axes run. |

## Consumes
Pull request diff and linked specification documents (`REQ-*`, `DESIGN-*`, `TASK-*`).

## Produces
Stage-1 compliance verdict (`PASS`, `WARN`, `CRITICAL_FAIL`, or `UNKNOWN`).

## When applied
Always executed first during `/review` before any Stage-2 quality axes run.

## Sub-concepts
stage-1, spec-linkage, acceptance-criteria-coverage, scope-fidelity, contradiction-with-the-spec, evidence-the-criterion-is-met

## Part of
review

## Implementation status
defects: internal-contradiction, missing-path

## Design notes
`spec-compliance` is rjm's primary Stage-1 gating axis, verifying whether pull request changes actually implement the acceptance criteria of their governing specifications before downstream quality reviews evaluate code craft.
