---
package: rjm
name: Regression mode
slug: regression-mode
kind: gate
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/code-qualities-assessment/scripts/assess.py, sha256: 9e103c80873a8d3846198c6929818430e317822507f1b47ba0eec238264abaeb}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Regression mode

## Definition — verbatim
(used, not defined)

> "assessed file against the configured thresholds. Regression mode scores each" — .claude/skills/code-qualities-assessment/scripts/assess.py:13

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/code-qualities-assessment/scripts/assess.py | 13 | used here | Gate mode in assess.py scoring changed files against their base git revision to prevent blocking on pre-existing debt. |

## Consumes
Modified source files in the local git working tree, PR base revision (`git merge-base`), and regression tolerance thresholds.

## Produces
Differential quality gate verdict (exit code 0 on pass, exit code 10 on active quality regression or evidence loss).

## When applied
Applied during pull request validation and incremental CI checks (`--changed-only --base origin/main`).

## Sub-concepts
none

## Part of
code-qualities-assessment

## Implementation status
defects: doc-drift, missing-path, always-failing-gate

## Design notes
Regression mode provides a pragmatic differential quality gate that prevents legacy debt from stalling development. By comparing quality scores between the active working branch and the merge base of the base revision, it fails only if a change introduces an active maintainability regression or destroys existing quality evidence.
