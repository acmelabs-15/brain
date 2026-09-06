---
package: addy
name: Code Quality
slug: code-quality
kind: gate
package_phase: addy:Review
implementation_in_scope: true
memo_inputs:
  - {path: docs/copilot-setup.md, sha256: c8fb9c61c286ea2fb0358de0fb2e3cd4cab2b5e356dbc455386fe349fae8a469}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# Code Quality

## Definition — verbatim
(used, not defined)
> "## Code Quality" — docs/copilot-setup.md:62

## Also called — verbatim
- `code-review-and-quality` — docs/copilot-setup.md:10

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/copilot-setup.md | 62 | used here | Section header in .github/copilot-instructions.md setting five-axis review standards and PR merge criteria. |

## Consumes
Candidate source code, pull requests, automated test outputs, type check results, and linter reports.

## Produces
Structured five-axis review assessments (evaluating correctness, readability, architecture, security, and performance) and merge gate clearance.

## When applied
During the Review phase prior to merging pull requests or completing implementation tasks.

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
Code Quality represents the multi-dimensional evaluation standard enforced across all pull requests and code modifications. By requiring code to be evaluated across five distinct axes (correctness, readability, architecture, security, performance), it ensures that reviews examine structural integrity, maintainability, and operational safety rather than stopping at superficial syntax or passing tests alone.
