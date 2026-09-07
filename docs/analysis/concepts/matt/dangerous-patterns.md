---
package: matt
name: DANGEROUS_PATTERNS
slug: dangerous-patterns
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

# DANGEROUS_PATTERNS

## Definition — verbatim
(used, not defined)

> "DANGEROUS_PATTERNS=(" — skills/misc/git-guardrails-claude-code/scripts/block-dangerous-git.sh:6

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/misc/git-guardrails-claude-code/scripts/block-dangerous-git.sh | 6 | defined here | Bash array variable declaring regex patterns of destructive git operations intercepted by the hook script. |

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
A Bash script array variable in the git guardrails hook that enumerates dangerous git command patterns to block, classified as name-only because it is a script implementation variable rather than an agent lifecycle concept.
