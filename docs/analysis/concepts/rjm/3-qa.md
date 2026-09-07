---
package: rjm
name: /3-qa
slug: 3-qa
kind: phase
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: docs/workflow-commands.md, sha256: 9973a4075e74a995c9fd811732e52457f3e6b26a94da896e3ba9f976c5dcaef0}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# /3-qa

## Definition — verbatim
> "| `/3-qa` | `/test` | Expanded from 1 gate to 6 gates |" — docs/workflow-commands.md:215

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/workflow-commands.md | 215 | defined here | Documented in comparison table as the legacy verification command replaced by /test. |

## Consumes
Implemented code changes and unit test suites.

## Produces
Quality assurance verification verdict.

## When applied
Executed following legacy implementation to test changes before security checks.

## Sub-concepts
none

## Part of
lifecycle

## Implementation status
defects: doc-drift

## Design notes
`/3-qa` was the legacy quality assurance phase slash command in rjm running a single QA check before PR #1611 replaced it with the multi-dimensional `/test` command covering 6 specialized verification gates.
