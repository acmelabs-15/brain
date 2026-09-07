---
package: rjm
name: CWE-20
slug: cwe-20
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/reviewer-findings/SKILL.md, sha256: 04e77c280908ff452996e9cc7874985d34475f7fae25d2a49f1c2f4a2403b9b3}
  - {path: scripts/utils/markdown_parser.py, sha256: 5aa5af0430c9e30e1cb4683113bce9a0f6e6d8e4fb59322f908efea72dce6f44}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# CWE-20

## Definition — verbatim
(used, not defined)

> "pre-existing path (CWE-20; verified: `X=$(cat f)` on a file ending" — .claude/skills/reviewer-findings/SKILL.md:108

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/reviewer-findings/SKILL.md | 108 | used here | Cites CWE-20 improper input validation regarding trailing newline truncation in command substitutions. |
| scripts/utils/markdown_parser.py | 697 | used here | References CWE-20 vulnerability citation from a PR review round regarding comment masking in parser logic. |

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
defects: orphan, missing-path, doc-drift

## Design notes
CWE-20 is an external Common Weakness Enumeration security taxonomy identifier for improper input validation rather than an internal lifecycle concept.
