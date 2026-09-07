---
package: rjm
name: has_size_exception
slug: has-size-exception
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/skillforge/scripts/frontmatter.py, sha256: ec8b87b73f02570615731d4d085f799e9206c2b0da9a7b6be8a297019b74120f}
  - {path: scripts/validation/command_size.py, sha256: cbeb57d3bc9941c5f9fdabed6fe453b2240a62f4f4b68b21f9dcd9b7dd706861}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# has_size_exception

## Definition — verbatim
(used, not defined)

> "def has_size_exception(content: str) -> bool:" — .claude/skills/skillforge/scripts/frontmatter.py:13

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/skillforge/scripts/frontmatter.py | 13 | defined here | Shared utility function checking whether YAML frontmatter declares `size-exception: true`. |
| scripts/validation/command_size.py | 53 | defined here | Validator function parsing frontmatter to detect declared size exceptions in command files. |

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
Python validation helper function for parsing frontmatter size exception flags, classified as name-only per D-023.
