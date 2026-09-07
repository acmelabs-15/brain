---
package: rjm
name: INFERRED
slug: inferred
kind: reference
package_phase: none
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/dx-review/SKILL.md, sha256: 3318726b8ddca8d9ea852f25f38bfe20f3d918858d954e5c462358e95db1d435}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# INFERRED

## Definition — verbatim
> "Concluded from static file or fetched documentation inspection only" — .claude/skills/dx-review/SKILL.md:49

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/dx-review/SKILL.md | 9 | defines | Defined as the evidence label for audit conclusions derived solely from static file or documentation inspection. |

## Consumes
Static source code files, repository READMEs, package manifests, and fetched documentation pages.

## Produces
An evidence classification signaling that a score was assessed without runtime execution or live behavioral observation.

## When applied
Applied to scorecard rows where command execution was unavailable, unapproved, or inapplicable (such as upgrade path or environment file inspection).

## Sub-concepts
none

## Part of
evidence-labels, dx-review

## Implementation status
defects: orphan

## Design notes
The baseline evidence label in rjm's dx-review audit framework. It explicitly marks findings and scores deduced from static analysis or documentation review without execution, preventing static reviews from masquerading as tested runtime observations.
