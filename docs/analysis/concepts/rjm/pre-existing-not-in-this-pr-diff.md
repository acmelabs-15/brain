---
package: rjm
name: [pre-existing - not in this PR diff]
slug: pre-existing-not-in-this-pr-diff
kind: pattern
package_phase: rjm:review
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/review/SKILL.md, sha256: cf8e377d27c1ac99b60acb63a0c4bdda2eae139abc38dda591cc9314be5f5dac}
  - {path: .claude/skills/review/scripts/validate_findings_scope.py, sha256: 198ef64c60854624c8251678c5afc478e3b508537182e6b217d75f839adf8913}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# [pre-existing - not in this PR diff]

## Definition — verbatim
> "``[pre-existing - not in this PR diff]`` and whose blocking verdict is" — .claude/skills/review/scripts/validate_findings_scope.py:11

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/review/scripts/validate_findings_scope.py | 11 | defined here | Annotation marker appended to review finding location lines that reference files outside the PR diff. |
| .claude/skills/review/SKILL.md | 96 | defined here | Review skill workflow step 4a requiring scope validation to mark out-of-scope findings with this marker. |

## Consumes
Review findings referencing files not present in the PR three-dot diff.

## Produces
An inline textual annotation preserving the finding while clarifying that the defect is pre-existing.

## When applied
Applied during scope validation when a review axis reports defects in codebase files untouched by the pull request.

## Sub-concepts
none

## Part of
review

## Implementation status
defects: missing-path

## Design notes
`[pre-existing - not in this PR diff]` is an annotation marker in rjm's review pipeline that labels defects discovered in unchanged files, ensuring pre-existing issues are preserved for visibility without unfairly blocking current pull requests.
