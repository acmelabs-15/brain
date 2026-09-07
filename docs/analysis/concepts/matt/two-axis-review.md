---
package: matt
name: two-axis review
slug: two-axis-review
kind: pattern
package_phase: matt:review
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: skills/engineering/ask-matt/SKILL.md, sha256: b25d86fb36b1d294eeead5d7db529f86135f9671f2afcd607579a63bb2213769}
  - {path: skills/engineering/code-review/SKILL.md, sha256: 47f4e52c21694def9c7c11cbfbf891ca35eac7a93e395797515be3c8a409ae50}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# two-axis review

## Definition — verbatim
> "Two-axis review of the diff between `HEAD` and a fixed point the user supplies:" — skills/engineering/code-review/SKILL.md:6

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/engineering/ask-matt/SKILL.md | 26 | defined here | Describes /code-review as a two-axis review (Standards + Spec) closing out /implement. |
| skills/engineering/code-review/SKILL.md | 6 | defined here | Defines the review structure evaluating diffs across Standards and Spec axes. |

## Consumes
A git diff between HEAD and a reference point, repository coding standards, and originating issue or spec.

## Produces
An aggregated two-axis review report separating standards violations and spec compliance findings.

## When applied
At the close of implementation prior to committing, or when independently reviewing a PR or branch against a base.

## Sub-concepts
standards-sub-agent, spec-sub-agent

## Part of
code-review

## Implementation status
defects: doc-drift, cross-file-contradiction, other (from skills/engineering/code-review/SKILL.md: sub-agent prompts do not restrict recursive delegation; git diff against HEAD ignores uncommitted working changes; skill name collides with Claude Code built-in /code-review)

## Design notes
An architectural review pattern that evaluates code changes across two distinct, isolated dimensions: Standards (repo conventions, styles, and smells) and Spec (functional requirements and scope creep). By evaluating each axis in an isolated sub-agent context, the review prevents stylistic concerns from obscuring missing functional requirements and vice versa.
