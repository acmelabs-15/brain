---
package: rjm
name: Test Coverage Assessment
slug: test-coverage-assessment
kind: artifact
package_phase: rjm:review
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/review/references/qa.md, sha256: bf74398ff1a5ffb8b34b3e7dbdf05d61223e7b750fe59520b2b862a52dfb0ef7}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Test Coverage Assessment

## Definition — verbatim
> "### Test Coverage Assessment (For CODE/WORKFLOW PRs)" — .claude/skills/review/references/qa.md:168

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/review/references/qa.md | 168 | defined here | Output summary table format verifying coverage across unit tests, edge cases, error paths, and assertions with file and line evidence citations. |

## Consumes
Static code inspection findings, pre-executed test execution results, and test file evidence.

## Produces
A structured Markdown summary table detailing test coverage status (Adequate/Missing/Partial) and citations across unit tests, edge cases, error paths, and assertions.

## When applied
Emitted as a required output section in QA review reports for all CODE and WORKFLOW pull requests.

## Sub-concepts
none

## Part of
qa-review

## Implementation status
clean

## Design notes
A structured QA review artifact in rjm requiring reviewers to tabulate concrete evidence of test coverage across unit tests, boundary conditions, error handling paths, and assertion validity before approving pull requests.
