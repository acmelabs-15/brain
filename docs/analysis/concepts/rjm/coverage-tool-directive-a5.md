---
package: rjm
name: Coverage tool directive (A5)
slug: coverage-tool-directive-a5
kind: gate
package_phase: rjm:test
implementation_in_scope: true
deprecated: false
verified: 2026-09-08 quote-check+coverage
memo_inputs:
  - {path: templates/agents/qa.shared.md, sha256: 7dbd4253b250290b87341f59885ccb93c7f5813272a96b955db391c9b035c941}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Coverage tool directive (A5)

## Definition — verbatim
> "**Coverage tool directive (A5)**: Before asserting any coverage claim, run the coverage tool against the diff. Do not rely on memory or test counts." — templates/agents/qa.shared.md:71

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| templates/agents/qa.shared.md | 71 | defines | Mandatory verification directive requiring actual tool execution before asserting test coverage numbers. |

## Consumes
Implementation diffs, stack-specific coverage tools, and `.agents/governance/TESTING-RIGOR.md`.

## Produces
Empirically measured coverage output lines and percentages pasted into test reports.

## When applied
Mandatory before making any test coverage assertion or claiming compliance with coverage thresholds.

## Sub-concepts
none

## Part of
quality-assurance-specialist

## Implementation status
defects: missing-path

## Design notes
A blocking verification directive enforcing that all coverage claims are substantiated by executing the canonical coverage tool against the current diff during the active session. It eliminates fabricated or guessed coverage percentages by requiring the tool's verbatim output line to be incorporated into the QA report.
