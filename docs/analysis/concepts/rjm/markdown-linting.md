---
package: rjm
name: Markdown Linting
slug: markdown-linting
kind: gate
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-08 quote-check+coverage
memo_inputs:
  - {path: scripts/validation/pre_pr_sequence.py, sha256: d485d238eadb8460ddeba05d06d352d2f8586addf3723d2bedd2c510f1cf49d2}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Markdown Linting

## Definition — verbatim
> "Markdown Linting" — scripts/validation/pre_pr_sequence.py:251

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/pre_pr_sequence.py | 251 | defined here | Pre-PR validation gate running markdownlint checks and automatic fixes across repository markdown documentation. |

## Consumes
Tracked markdown files (*.md) across documentation, skills, commands, and agent definitions.

## Produces
Markdown linting pass/fail verdict and auto-fixed markdown formatting.

## When applied
Executed during the shift-left pre-PR validation sequence.

## Sub-concepts
none

## Part of
pre-pr-sequence

## Implementation status
clean

## Design notes
Markdown Linting is a shift-left pre-PR gate executing markdownlint across repository documentation. Following the PR #908 incident where an unscoped lint pass modified dozens of files unexpectedly, this gate automates consistent markdown formatting, header syntax, and list styling within bounded scopes before pull request creation.
