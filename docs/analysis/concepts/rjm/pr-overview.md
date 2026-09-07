---
package: rjm
name: PR overview
slug: pr-overview
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/github-url-intercept/references/patterns.md, sha256: 06b2c777aaf19693918da842130ca7682818a4b8a38fb1f6fe69fb651a601752}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# PR overview

## Definition — verbatim
(used, not defined)

> "| PR overview | get_pr_context.py | Structured JSON, proper error handling |" — .claude/skills/github-url-intercept/references/patterns.md:131

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/github-url-intercept/references/patterns.md | 131 | used here | Table entry identifying pull request summary retrieval need routed to get_pr_context.py. |

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
defects: orphan, doc-drift, other

## Design notes
PR overview is an information retrieval requirement label in patterns.md mapping pull request summary needs to get_pr_context.py, classified as kind: name-only per D-023.
