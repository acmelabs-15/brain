---
package: rjm
name: Cursor Bugbot
slug: cursor-bugbot
kind: role
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-103-skill-output-python-contract-correction.md, sha256: 7e0f36a70c1989ef807b0df12d36597bb7b75330c1cd42a1cd552b898a106ef0}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Cursor Bugbot

## Definition — verbatim
(used, not defined)

> "Cursor Bugbot" — .agents/architecture/ADR-103-skill-output-python-contract-correction.md:287

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-103-skill-output-python-contract-correction.md | 287 | used here | Cited as the automated reviewer that identified silent drift vulnerabilities in test parametrize lists on PR #5283. |

## Consumes
Pull request diffs, automated tests, and contract definitions.

## Produces
Automated bug reports and regression warnings highlighting test suite gaps and contract drift.

## When applied
During automated pull request code review on PR branches.

## Sub-concepts
none

## Part of
none

## Implementation status
defects: missing-path

## Design notes
Automated review bot in the PR review workflow that analyzes code changes and test coverage to flag potential silent failures, contract drift, and unexercised edge cases.
