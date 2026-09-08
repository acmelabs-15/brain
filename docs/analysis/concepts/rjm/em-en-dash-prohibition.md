---
package: rjm
name: Em/en-dash Prohibition
slug: em-en-dash-prohibition
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

# Em/en-dash Prohibition

## Definition — verbatim
> "Em/en-dash Prohibition" — scripts/validation/pre_pr_sequence.py:339

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/pre_pr_sequence.py | 339 | defined here | Pre-PR gate enforcing repository-wide prohibition of unicode em-dash and en-dash characters. |

## Consumes
Tracked repository files and commit diffs.

## Produces
Pass/fail gate verdict ensuring no unicode em-dashes or en-dashes are present.

## When applied
Executed during the pre-PR validation sequence.

## Sub-concepts
none

## Part of
pre-pr-sequence

## Implementation status
clean

## Design notes
Em/en-dash Prohibition is a repository style and encoding gate (Issue #1923, REQ-006-AC7) prohibiting unicode em-dash and en-dash characters in tracked files. Enforcing standard ASCII hyphens avoids encoding glitches and platform rendering differences across environments.
