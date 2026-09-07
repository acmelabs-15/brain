---
package: rjm
name: Push PR Command
slug: push-pr-command
kind: technique
package_phase: rjm:ship
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/commands/push-pr.md, sha256: 9383f9915870dc023605e1632ffa9176982dd1f47a60894138b4ba6c16f67418}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Push PR Command

## Definition — verbatim
> "# Push PR Command" — .claude/commands/push-pr.md:10

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/commands/push-pr.md | 10 | defined here | Defined as the slash command documenting branch creation, PR body preparation, and PR creation workflows. |

## Consumes
Completed implementation commits on a working branch and PR template.

## Produces
Remote branch push and opened pull request with structured acceptance criteria.

## When applied
When work is complete, validated, and ready for code review and CI verification.

## Sub-concepts
conventional-commit, secure-path-allocator, validate-spec-coverage

## Part of
ship-phase

## Implementation status
clean

## Design notes
The standardized slash command workflow for publishing changes as pull requests. It orchestrates conventional branch naming, invokes the secure path allocator for PR description composition, and enforces formatting rules required by CI quality gates like spec coverage validation.
