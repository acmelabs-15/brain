---
package: rjm
name: github
slug: github
kind: reference
package_phase: rjm:ship
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/codeql-scan/SKILL.md, sha256: 8a6c6ef93c8eec0a5ec66fa0c367185ac6f166ca9f3bdfc9d2e8f6daae3ae0d6}
  - {path: .claude/skills/github-url-intercept/SKILL.md, sha256: 598a7fda8d4d2d6d3308524266285eeec763778d3f7998d49ff35b39054abbd8}
  - {path: .claude/skills/github-url-intercept/references/patterns.md, sha256: 06b2c777aaf19693918da842130ca7682818a4b8a38fb1f6fe69fb651a601752}
  - {path: .claude/skills/github-url-intercept/scripts/test_url_routing.py, sha256: 0d7c3d86de7c4172a02a6600c687f75049fd2854cf1b0c9bf33494930bcc84d6}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# github

## Definition — verbatim
(used, not defined)

> "| `github` | GitHub operations (PR comments, issues) | Report CodeQL findings to PR reviews |" — .claude/skills/codeql-scan/SKILL.md:188

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/codeql-scan/SKILL.md | 188 | used here | Listed as the integration skill handling GitHub operations such as posting PR comments and filing issues. |
| .claude/skills/github-url-intercept/references/patterns.md | 143 | used here | Referenced in URL routing table for API fallback operations not covered by native skill scripts. |
| .claude/skills/github-url-intercept/scripts/test_url_routing.py | 5 | used here | Referenced in test script docstring describing routing of intercepted URLs to github skill scripts. |
| .claude/skills/github-url-intercept/SKILL.md | 15 | used here | Listed in skill allowed-tools frontmatter for delegating GitHub platform operations. |

## Consumes
Analysis findings, PR metadata, and URL interception events.

## Produces
PR review comments, GitHub issues, and remote repository metadata.

## When applied
Invoked when lifecycle workflows interact with remote GitHub PRs, issues, or repository resources.

## Sub-concepts
none

## Part of
ship

## Implementation status
clean

## Design notes
A platform integration reference and skill in rjm that encapsulates GitHub API interactions, allowing lifecycle scanners and hooks to report findings directly onto pull requests and issue trackers.
