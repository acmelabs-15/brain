---
package: addy
name: clean history
slug: clean-history
kind: pattern
package_phase: addy:Ship
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: evals/cases/git-workflow-and-versioning.json, sha256: d89f00dcf6164edc74e721272259db4423c9ea59dd73aecd6202194aeb716a75}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# clean history

## Definition — verbatim
(used, not defined)
> "The working tree mixes a refactor, a bug fix, and a new feature. Turn it into a clean history." — evals/cases/git-workflow-and-versioning.json:35

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| evals/cases/git-workflow-and-versioning.json | 35 | used here | Eval prompt demanding mixed working tree changes be organized into an orderly commit history. |

## Consumes
A complex working tree with mixed changes (refactors, fixes, features) or disorganized commit series.

## Produces
An organized sequence of atomic commits where each commit addresses a single concern with a clear message.

## When applied
Before submitting code for review, ensuring branch history is tidy, readable, and bisectable.

## Sub-concepts
none

## Part of
- git-workflow-and-versioning

## Implementation status
clean

## Design notes
Clean history requires that code changes be organized into a deliberate sequence of atomic commits. By untangling mixed edits into logical steps, developers enable clear code reviews and reliable git bisection.
