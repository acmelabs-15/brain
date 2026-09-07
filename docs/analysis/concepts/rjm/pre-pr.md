---
package: rjm
name: Pre-PR
slug: pre-pr
kind: gate
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: AGENTS.md, sha256: a872352c2c57ff59c7db1238910b6685b800ab8a3e8fa9e37a76418d467df471}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Pre-PR

## Definition — verbatim
> "**Pre-PR**: `uv run python scripts/validation/pre_pr.py`|No BLOCKING|Security scan|Style `.gemini/styleguide.md`" — AGENTS.md:18

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| AGENTS.md | 18 | defined here | Mandatory local pre-submission validation gate enforcing tests, security scans, and style compliance. |

## Consumes
Committed changes, security scan rules, styleguide standards, and test suites.

## Produces
Pre-PR verification verdict authorizing pull request creation and branch push.

## When applied
Mandatory checkpoint before opening a pull request or pushing a feature branch.

## Sub-concepts
none

## Part of
gates

## Implementation status
clean

## Design notes
A comprehensive pre-submission quality gate in rjm combining automated script validation (`pre_pr.py`), blocking issue resolution, security scanning, and styleguide compliance before pull requests can be opened.
