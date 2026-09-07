---
package: rjm
name: Automated bisect
slug: automated-bisect
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/git-advanced-workflows/SKILL.md, sha256: f47de2380592b3c3bc098f7f3683406968b1df7aadd981c57f79315205659161}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Automated bisect

## Definition — verbatim
> "**Automated bisect:**" — .claude/skills/git-advanced-workflows/SKILL.md:94

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/git-advanced-workflows/SKILL.md | 94 | defined here | Defined as the automated execution of git bisect run with an executable test script. |

## Consumes
Known good and bad commit boundaries, and an executable verification script (e.g. ./test.sh).

## Produces
Automated binary search log and final output identifying the breaking commit.

## When applied
When isolating a regression where test pass/fail status can be evaluated deterministically via script exit codes.

## Sub-concepts
none

## Part of
git-bisect-workflow

## Implementation status
defects: orphan

## Design notes
Automated bisect executes git bisect run with a test script (exit 0=good, 125=skip, non-zero=bad) to locate regressions automatically without manual checkout testing.
