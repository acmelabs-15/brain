---
package: matt
name: reset --hard
slug: reset-hard
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: skills/misc/git-guardrails-claude-code/scripts/block-dangerous-git.sh, sha256: 234922b83c0a1737ee7300806c21ac0f389b07aaeb65c2d71ccedafbc5e1ea4b}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# reset --hard

## Definition — verbatim
(used, not defined)

> "reset --hard" — skills/misc/git-guardrails-claude-code/scripts/block-dangerous-git.sh:15

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/misc/git-guardrails-claude-code/scripts/block-dangerous-git.sh | 15 | defined here | Blocked command pattern array entry intercepting hard reset operations. |

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
A git command argument pattern targeting destructive hard reset operations, classified as name-only because it is a command invocation fragment rather than an agent lifecycle concept.
