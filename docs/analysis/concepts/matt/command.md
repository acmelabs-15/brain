---
package: matt
name: COMMAND
slug: command
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

# COMMAND

## Definition — verbatim
(used, not defined)

> "COMMAND=$(echo \"$INPUT\" | jq -r '.tool_input.command')" — skills/misc/git-guardrails-claude-code/scripts/block-dangerous-git.sh:4

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/misc/git-guardrails-claude-code/scripts/block-dangerous-git.sh | 4 | defined here | Shell variable storing the extracted CLI command string parsed from tool invocation JSON. |

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
A Bash script variable name used in the git safety hook to store the parsed command string being evaluated, rather than a software development lifecycle concept.
