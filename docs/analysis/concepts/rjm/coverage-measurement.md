---
package: rjm
name: Coverage measurement
slug: coverage-measurement
kind: technique
package_phase: rjm:test
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/ai-agents-diagnostics-toolkit/references/instrument-guides.md, sha256: be47542008b1aef449e2366ade2f13b336d8de6f05a426d4234572a8e97a6f7a}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Coverage measurement

## Definition — verbatim
> "### Coverage measurement" — .claude/skills/ai-agents-diagnostics-toolkit/references/instrument-guides.md:99

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/ai-agents-diagnostics-toolkit/references/instrument-guides.md | 99 | defined here | Defined as the diagnostic technique and pytest command sequence for obtaining trustworthy test coverage metrics across repository packages. |

## Consumes
Python test suites, pytest-cov plugin, and targeted module paths.

## Produces
Terminal coverage report displaying line and branch coverage percentages against repository targets (100% security, 80% business, 60% docs).

## When applied
Applied during local testing, pre-PR validation, and QA verification to measure whether changed code is exercised by tests.

## Sub-concepts
coverage

## Part of
ai-agents-diagnostics-toolkit

## Implementation status
defects: unfailable-gate, other

## Design notes
The diagnostic procedure in rjm for measuring test execution coverage using pytest and pytest-cov. It provides explicit command forms (`uv run pytest <exact test files> --cov=<module_name> --cov-branch --cov-fail-under=100`) to ensure test coverage metrics reliably reflect branch execution on modified code rather than producing measurement theater.
