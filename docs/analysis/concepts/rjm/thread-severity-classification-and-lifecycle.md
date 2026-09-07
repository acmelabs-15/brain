---
package: rjm
name: Thread Severity Classification and Lifecycle
slug: thread-severity-classification-and-lifecycle
kind: checklist
package_phase: rjm:review
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: docs/autonomous-pr-monitor.md, sha256: caca26ec0269cbd68d7d14d74e1c83c69e8fcda1aeffc8e550d09c4859bbfcba}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Thread Severity Classification and Lifecycle

## Definition — verbatim
> "### Thread Severity Classification and Lifecycle" — docs/autonomous-pr-monitor.md:132
> "Every conversation on a PR MUST traverse the full lifecycle before the PR can land. No shortcuts." — docs/autonomous-pr-monitor.md:134

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/autonomous-pr-monitor.md | 132 | defined here | Defines the mandatory 5-step conversation lifecycle (READ, TRIAGE, SOLVE, REPLY, RESOLVE) and severity classification rules for PR review comments. |

## Consumes
Unresolved pull request conversation comments, author metadata, and code diff context.

## Produces
Code corrections for blocking threads, explanatory replies with commit SHAs, and resolved thread statuses.

## When applied
Applied to every unresolved review conversation on an open pull request prior to granting merge approval.

## Sub-concepts
none

## Part of
pr-triage-protocol

## Implementation status
defects: missing-path, internal-contradiction

## Design notes
Thread Severity Classification and Lifecycle guarantees that all review comments undergo rigorous inspection, categorization (Blocking, Informational, Bot-only, Stale), and documented resolution before a pull request is cleared for landing.
