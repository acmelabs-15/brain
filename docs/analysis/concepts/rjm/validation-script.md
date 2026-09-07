---
package: rjm
name: Validation Script
slug: validation-script
kind: technique
package_phase: rjm:ship
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/commands/validate-pr-description.md, sha256: a77b04b081da3955117fae000dcf4f7db5ce391b2d050bd272e2b50e777ee9f1}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Validation Script

## Definition — verbatim
> "If `.claude/skills/github/scripts/pr/validate_pr_description.py` exists, run it:" — .claude/commands/validate-pr-description.md:43

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/commands/validate-pr-description.md | 41 | defined here | Optional automated validation hook executing `validate_pr_description.py` if present, with manual fallback if absent. |

## Consumes
Candidate PR title, candidate PR body file, optional python validation script `.claude/skills/github/scripts/pr/validate_pr_description.py`.

## Produces
Automated execution report and validation exit code checking PR title and body compliance.

## When applied
Executed optionally in `/validate-pr-description` before falling back to manual validation.

## Sub-concepts
none

## Part of
validate-pr-description

## Implementation status
defects: doc-drift, other

## Design notes
An optional automation hook in the PR description validation workflow that runs a deterministic Python script to check conventional commit syntax, issue keywords, and template section presence. If the script is missing or unavailable in the environment, the command gracefully degrades to manual validation against the same standards.
