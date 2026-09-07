---
package: rjm
name: get_issue_context.py
slug: get-issue-context-py
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

# get_issue_context.py

## Definition — verbatim
(used, not defined)

> "python3 \"$SCRIPTS_DIR/issue/get_issue_context.py\" --issue {n} --owner {owner} --repo {repo}" — .claude/skills/github-url-intercept/SKILL.md:38

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/github-url-intercept/scripts/test_url_routing.py | 82 | used here | Specified as target script name in SCRIPT_ROUTES mapping for GitHub issue URLs. |
| .claude/skills/github-url-intercept/SKILL.md | 38 | used here | Documented as the primary copy-paste command for retrieving issue context. |

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
Script file name representing the external Python utility for extracting issue metadata and discussion threads; classified as name-only per D-023 because it is a file name rather than an architectural lifecycle concept.
