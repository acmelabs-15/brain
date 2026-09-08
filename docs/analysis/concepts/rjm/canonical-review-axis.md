---
package: rjm
name: canonical review-axis
slug: canonical-review-axis
kind: reference
package_phase: rjm:review
implementation_in_scope: true
deprecated: false
verified: 2026-09-08 quote-check+coverage
memo_inputs:
  - {path: scripts/validation/validate_seed_parity.py, sha256: c25853828b45f5da25b2e26fd0e51b4ec2b4c68b8fcceb4ed6f8c7061ae67f59}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# canonical review-axis

## Definition — verbatim
> "Forensic tool: was a canonical review-axis hand-paraphrased or verbatim-seeded?" — scripts/validation/validate_seed_parity.py:2

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/validate_seed_parity.py | 2 | used here | Named as the target review reference specification being audited for verbatim seeding. |

## Consumes
Continuous integration prompt templates in `.github/prompts/pr-quality-gate-{role}.md`.

## Produces
Reference instructions in `.claude/skills/review/references/{role}.md`.

## When applied
Used during the `/review` phase to guide specialized code review evaluations across the 6 canonical axes.

## Sub-concepts
none

## Part of
review

## Implementation status
clean

## Design notes
A canonical review-axis represents one of six standardized review perspectives (`analyst`, `architect`, `qa`, `security`, `devops`, `roadmap`) in rjm's review phase, defined in `.claude/skills/review/references/{role}.md`. They provide specialized review criteria for evaluating changes prior to shipping.
