---
package: rjm
name: Acceptance coverage
slug: acceptance-coverage
kind: technique
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

# Acceptance coverage

## Definition — verbatim
> "Each requirement has a passing test. Map to acceptance criteria from /spec output." — .claude/commands/test.md:49

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/commands/test.md | 49 | defined here | Core evaluation dimension under Gate 1 (Functional Testing) ensuring all requirement acceptance criteria from `/spec` have passing tests. |

## Consumes
Acceptance criteria from `/spec` output, implemented feature code, test suite execution results.

## Produces
Bidirectional traceability mapping demonstrating that every functional specification requirement is satisfied by passing verification assertions.

## When applied
Applied during Gate 1 (Functional Testing) of `/test` execution when evaluating CODE and MIXED pull requests.

## Sub-concepts
none

## Part of
test

## Implementation status
defects: doc-drift

## Design notes
Acceptance coverage ensures that test suites do not merely verify isolated units or mechanical code branches, but directly prove that end-to-end user requirements and behavioral specifications defined during `/spec` are satisfied. Without acceptance coverage mapping, a project risks shipping implementations with high code coverage metrics that nevertheless fail to deliver requested features.
