---
package: rjm
name: gh api
slug: gh-api
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/github-url-intercept/SKILL.md, sha256: 598a7fda8d4d2d6d3308524266285eeec763778d3f7998d49ff35b39054abbd8}
  - {path: .claude/skills/github-url-intercept/references/patterns.md, sha256: 06b2c777aaf19693918da842130ca7682818a4b8a38fb1f6fe69fb651a601752}
  - {path: .claude/skills/github-url-intercept/scripts/gist_routing.py, sha256: 85cdc928e039b3a64f71cd665a8839da1aaaa7995c734aa093b36cbf36f6d07f}
  - {path: .claude/skills/github-url-intercept/scripts/test_url_routing.py, sha256: 0d7c3d86de7c4172a02a6600c687f75049fd2854cf1b0c9bf33494930bcc84d6}
  - {path: scripts/validation/check_ruleset_params_drift.py, sha256: f0bfa925f0d2aa397f3f5aefe435c5b1fecdb0fcce928444332a4fbcb8b93c56}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# gh api

## Definition — verbatim
(used, not defined)

> "available, falls back to gh api for other resource types." — .claude/skills/github-url-intercept/scripts/test_url_routing.py:6

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/github-url-intercept/references/patterns.md | 14 | used here | Example API command fallback for retrieving specific pull request review comments. |
| .claude/skills/github-url-intercept/scripts/gist_routing.py | 251 | used here | Executable CLI command format constructed for gist resource querying. |
| .claude/skills/github-url-intercept/scripts/test_url_routing.py | 6 | used here | Documented fallback mechanism for URL types lacking dedicated script handlers. |
| .claude/skills/github-url-intercept/SKILL.md | 41 | used here | Copy-paste quick reference command template for querying review endpoints. |
| scripts/validation/check_ruleset_params_drift.py | 5 | used here | CLI tool used to query live repository ruleset parameters from GitHub. |

## Consumes
none

## Produces
none

## When applied
none

## Sub-concepts
none

## Part of
none

## Implementation status
defects: orphan, doc-drift, other, missing-path, exit-code-mismatch

## Design notes
gh api is the GitHub CLI subcommand used to query raw REST and GraphQL endpoints as a fallback when specialized skill scripts are unavailable, classified as kind: name-only per D-023.
