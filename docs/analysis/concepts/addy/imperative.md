---
package: addy
name: imperative
slug: imperative
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

# imperative

## Definition — verbatim
(used, not defined)
> "Commit messages are imperative and standalone" — evals/cases/git-workflow-and-versioning.json:42

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| evals/cases/git-workflow-and-versioning.json | 42 | used here | Eval expectation specifying that commit message summaries must use imperative mood verbs. |

## Consumes
A staged atomic change requiring a commit message.

## Produces
A commit message summary written in the imperative mood (e.g. "Add feature" rather than "Added feature").

## When applied
Whenever drafting git commit message subject lines.

## Sub-concepts
none

## Part of
- git-workflow-and-versioning
- atomic-commits

## Implementation status
clean

## Design notes
The imperative convention standardizes git commit message subject lines by phrasing them as commands completing the sentence "If applied, this commit will...". This aligns with git's own built-in commit messages (e.g. Merge, Revert).
