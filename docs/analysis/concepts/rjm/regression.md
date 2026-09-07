---
package: rjm
name: regression
slug: regression
kind: gate
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/code-qualities-assessment/SKILL.md, sha256: 92c1271c4a9726507f862f17ef0d5bfc04e8db8d553df367cb239a66771c247f}
  - {path: scripts/validation/check_build_gates.py, sha256: df1360e6ff865be7eecb97ece1f78d0979415b85c87ea4e19cf9b693ee511102}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# regression

## Definition — verbatim
> "Did this change make anything worse?" — .claude/skills/code-qualities-assessment/SKILL.md:137

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/code-qualities-assessment/SKILL.md | 137 | defined here | Table defining regression gate mode answering whether a change made any quality worse. |
| scripts/validation/check_build_gates.py | 97 | used here | Validates that build.md requires regression gate mode with origin/main base. |

## Consumes
Changed file diffs and base revision commit blobs resolved via git merge-base.

## Produces
Regression pass/fail verdict and exit code 10 if any quality regresses beyond tolerance.

## When applied
Activated via `--gate-mode regression` or `--changed-only --base <ref>`.

## Sub-concepts
inherited-debt, evidence-loss

## Part of
gate-enforcement

## Implementation status
defects: doc-drift, missing-path

## Design notes
`regression` is the primary quality gate mode in rjm designed to prevent codebase degradation on feature branches. Instead of failing developers for inherited debt on legacy files, regression mode evaluates the change itself: scoring each touched file at head and against its merge-base blob. The gate fails only when a quality regresses beyond tolerance or measurable evidence is lost, reconciling quality enforcement with pragmatic development velocity.
