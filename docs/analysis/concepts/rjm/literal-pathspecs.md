---
package: rjm
name: --literal-pathspecs
slug: literal-pathspecs
kind: name-only
package_phase: none
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

# --literal-pathspecs

## Definition — verbatim
(used, not defined)

> "invocation below with `--literal-pathspecs` (a global flag placed before" — .claude/skills/reviewer-findings/SKILL.md:120

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/reviewer-findings/SKILL.md | 120 | used here | Global Git CLI flag disabling pathspec magic to prevent accidental tree traversal on untrusted paths. |

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
defects: orphan, missing-path

## Design notes
--literal-pathspecs is a command-line flag for Git disabling pathspec magic during premise verification rather than an independent lifecycle concept.
