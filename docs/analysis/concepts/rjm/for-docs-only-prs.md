---
package: rjm
name: For DOCS-only PRs
slug: for-docs-only-prs
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/review/references/security.md, sha256: a6521fdd791166ea59d4b5853f52e348edcc22dfd4e3074c29c33e2524269727}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# For DOCS-only PRs

## Definition — verbatim
(used, not defined)

> "#### For DOCS-only PRs" — .claude/skills/review/references/security.md:171

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/review/references/security.md | 171 | defined here | Heading defining relaxation of CRITICAL_FAIL criteria for documentation-only pull requests. |

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
defects: internal-contradiction

## Design notes
A subsection heading in security review guidance exempting documentation-only PRs from standard code security failure criteria, classified as name-only per D-023.
