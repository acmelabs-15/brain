---
package: matt
name: git clean -fd
slug: git-clean-fd
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: skills/misc/git-guardrails-claude-code/SKILL.md, sha256: 69b291d655626a01602b998a1836fcb93c058ede68dfafddfd71e87f17074764}
  - {path: skills/misc/git-guardrails-claude-code/scripts/block-dangerous-git.sh, sha256: 234922b83c0a1737ee7300806c21ac0f389b07aaeb65c2d71ccedafbc5e1ea4b}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# git clean -fd

## Definition — verbatim
(used, not defined)

> "git clean -fd" — skills/misc/git-guardrails-claude-code/scripts/block-dangerous-git.sh:9

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/misc/git-guardrails-claude-code/scripts/block-dangerous-git.sh | 9 | defined here | Blocked command pattern array entry intercepting forced removal of untracked files and directories. |
| skills/misc/git-guardrails-claude-code/SKILL.md | 14 | used here | Listed in documentation alongside git clean -f as a dangerous git command blocked by the hook. |

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
clean

## Design notes
Git CLI command and regex pattern for force-removing untracked files and directories from the working tree, classified as name-only because it is an external version control command rather than an agent lifecycle concept.
