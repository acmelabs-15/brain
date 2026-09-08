---
package: rjm
name: Markdown Lint
slug: markdown-lint
kind: gate
package_phase: rjm:ship
implementation_in_scope: true
deprecated: false
verified: 2026-09-08 quote-check+coverage
memo_inputs:
  - {path: scripts/validation/pre_pr.py, sha256: 9b1ca1a51122132e1184bb4a0a890c0f2c1896156f159aeb5436f12c6a89db88}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Markdown Lint

## Definition — verbatim
(used, not defined)

> "3. Markdown Lint (auto-fix and validate)" — scripts/validation/pre_pr.py:10

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/pre_pr.py | 10 | used here | Documented as step 3 in the pre-PR validation sequence executing markdown auto-fix and linting. |

## Consumes
Tracked markdown files (*.md) across documentation, skills, commands, and agent definitions.

## Produces
Markdown linting pass/fail verdict and auto-fixed markdown formatting.

## When applied
Executed as part of the pre-PR shift-left validation suite, or standalone via the `--markdown-lint-only` CLI flag.

## Sub-concepts
none

## Part of
pre-pr

## Implementation status
defects: doc-drift

## Design notes
A shift-left validation gate in `pre_pr.py` that executes markdownlint with automated fixing against repository markdown documents. Born out of the PR #908 incident where an unscoped formatting pass exploded into a 95-file diff, it ensures markdown styling issues are resolved locally before submitting pull requests.
