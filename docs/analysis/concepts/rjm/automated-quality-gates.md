---
package: rjm
name: Automated Quality Gates
slug: automated-quality-gates
kind: gate
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: CONTRIBUTING.md, sha256: 09a1205b99939ad49462139c47ccd0ef1a4a191fc70839a1f532016a1ee66ffa}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Automated Quality Gates

## Definition — verbatim
> "### Automated Quality Gates (Shift Left)" — CONTRIBUTING.md:726

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| CONTRIBUTING.md | 726 | defined here | Section heading introducing the multi-stage shift-left automated quality gate architecture. |

## Consumes
Staged commits, git refs, pull request descriptions, template source files, and test suites.

## Produces
Pass/fail verdicts and blocking enforcement across pre-commit hooks, pre-push hooks, and GitHub Actions CI pipelines.

## When applied
Triggered on every commit (ruff, markdownlint), every push (pytest, drift detection, Semgrep), and every PR (CI pytest, pip-audit, bandit).

## Sub-concepts
content-drift, frontmatter-drift, security-scanning

## Part of
none

## Implementation status
defects: doc-drift, internal-contradiction, missing-path

## Design notes
Automated quality gates represent rjm's shift-left testing philosophy, eliminating manual test verification burdens by mechanizing quality checks across local git hooks and remote CI workflows. By embedding linters, drift detectors, test runners, and security scanners into non-bypassable automated stages, rjm ensures that defect prevention occurs as early in the contributor feedback cycle as possible.
