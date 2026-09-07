---
package: rjm
name: path file
slug: path-file
kind: artifact
package_phase: rjm:review
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/reviewer-findings/SKILL.md, sha256: 04e77c280908ff452996e9cc7874985d34475f7fae25d2a49f1c2f4a2403b9b3}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# path file

## Definition — verbatim
> "needle file, the cited path to a path file. Confirm the needle file" — .claude/skills/reviewer-findings/SKILL.md:86

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/reviewer-findings/SKILL.md | 86 | defined here | Temporary file storing target file paths from review comments to prevent command breakout. |

## Consumes
File path cited within an external review comment.

## Produces
An isolated path file loaded safely into environment variables using sentinel stripping.

## When applied
Created prior to executing Git pathspec queries during review premise verification.

## Sub-concepts
none

## Part of
premise-verification

## Implementation status
defects: orphan, missing-path

## Design notes
A temporary verification artifact holding target file paths cited in review comments, preventing command breakouts or pathspec injection when verifying reviewer claims.
