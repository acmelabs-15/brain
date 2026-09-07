---
package: rjm
name: Validate Spec Coverage
slug: validate-spec-coverage
kind: gate
package_phase: rjm:ship
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/commands/push-pr.md, sha256: 9383f9915870dc023605e1632ffa9176982dd1f47a60894138b4ba6c16f67418}
  - {path: scripts/validation/spec_contradiction.py, sha256: b8ea4cd776f51a2044ee90f573650b97bb254515d77cebafda3c32a17dd2c1f0}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Validate Spec Coverage

## Definition — verbatim
(used, not defined)

> "The Validate Spec Coverage job reads these from the PR body, not the linked issue." — .claude/commands/push-pr.md:42

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/commands/push-pr.md | 42 | used here | CI job referenced to instruct authors how acceptance criteria in PR descriptions are evaluated. |
| scripts/validation/spec_contradiction.py | 4 | used here | Documented as the CI check reading PR description, linked issue, and code as a unified spec. |

## Consumes
Pull request markdown description (`## Acceptance criteria` checkboxes), linked issue text, and changed code.

## Produces
Pass/fail verification signal detecting unmet criteria or spec contradictions.

## When applied
Executed automatically in CI workflows upon pull request creation or update.

## Sub-concepts
none

## Part of
push-pr-command, spec-contradiction

## Implementation status
clean

## Design notes
An automated CI verification gate that enforces alignment between the stated requirements and the actual pull request implementation. It treats the PR description, linked issue, and code as a single unified specification, flagging discrepancies, unchecked acceptance criteria, or conflicting model tiers.
