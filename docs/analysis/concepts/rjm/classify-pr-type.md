---
package: rjm
name: Classify PR Type
slug: classify-pr-type
kind: phase
package_phase: rjm:test
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/commands/test.md, sha256: 74281fbfcba952ff4e88e177f7059484e828b78e5084a3de8463343dd82ef69d}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Classify PR Type

## Definition — verbatim
> "## Step 0: Classify PR Type" — .claude/commands/test.md:25

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/commands/test.md | 25 | defined here | Step 0 in `/test` analyzing changed files against base branch to categorize PR types and gate activation. |

## Consumes
Git diff file listing comparing HEAD against the target base branch (`origin/<base-branch>` or `main`).

## Produces
A PR type classification (e.g., core logic, documentation, test suite, refactor) gating subsequent test dimensions.

## When applied
Executed as the initial step upon invoking `/test`.

## Sub-concepts
none

## Part of
test

## Implementation status
defects: doc-drift

## Design notes
Classify PR Type acts as an intelligent router at the entrance of the test command. By analyzing the set of modified files, it identifies whether a PR contains functional code, documentation changes, or test additions, allowing the test orchestrator to skip inapplicable verification gates and optimize token and execution efficiency.
