---
package: rjm
name: get_pr_checks.py
slug: get-pr-checks-py
kind: name-only
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/github-url-intercept/SKILL.md, sha256: 598a7fda8d4d2d6d3308524266285eeec763778d3f7998d49ff35b39054abbd8}
  - {path: .claude/skills/github-url-intercept/scripts/test_url_routing.py, sha256: 0d7c3d86de7c4172a02a6600c687f75049fd2854cf1b0c9bf33494930bcc84d6}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# get_pr_checks.py

## Definition — verbatim
(used, not defined)

> "| `/pull/{n}/checks` | `get_pr_checks.py` | `--pull-request {n} --owner {o} --repo {r}` |" — .claude/skills/github-url-intercept/SKILL.md:171

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/github-url-intercept/scripts/test_url_routing.py | 89 | used here | Path segment referenced in CHECKS_SCRIPT_PATH constant. |
| .claude/skills/github-url-intercept/SKILL.md | 171 | used here | Listed in the URL Routing Table as the execution script for pull request check runs. |

## Consumes
none

## Produces
none

## When applied
none

## Sub-concepts
none

## Part of
github-url-intercept

## Implementation status
defects: doc-drift, missing-path

## Design notes
Script file name representing the external utility for inspecting GitHub CI check runs for pull requests; classified as name-only per D-023 because it is a file name rather than an architectural lifecycle concept.
