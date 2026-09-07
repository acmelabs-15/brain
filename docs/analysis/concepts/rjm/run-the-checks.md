---
package: rjm
name: Run the checks
slug: run-the-checks
kind: gate
package_phase: rjm:verify
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/autoplan/SKILL.md, sha256: 96706c2d86a99a812a776ad92981eeeaabd975776e4eeb30b7ba6809cfe18fd9}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Run the checks

## Definition — verbatim
> "2. **Run the checks.** Tests, lint, and type checks always run before a commit" — .claude/skills/autoplan/SKILL.md:154

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/autoplan/SKILL.md | 154 | defined here | Mandatory default requiring automated test, lint, and type checks to execute before claiming completion. |

## Consumes
Working directory changes and repository validation tools.

## Produces
Passing test suites, linting reports, and type verification before commit creation.

## When applied
Before any commit or task completion claim in an autoplan run.

## Sub-concepts
none

## Part of
phase-3-execute-with-defaults

## Implementation status
clean

## Design notes
Run the checks is an inviolable execution invariant in rjm. It strictly prohibits agents from asking rhetorical questions such as 'should I run the tests?', requiring that test suites, linter checks, and static type verifications run automatically. No commit or delivery claim is valid without concrete test evidence produced by running these checks.
