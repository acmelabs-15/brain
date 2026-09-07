---
package: rjm
name: general-purpose
slug: general-purpose
kind: name-only
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/review/SKILL.md, sha256: cf8e377d27c1ac99b60acb63a0c4bdda2eae139abc38dda591cc9314be5f5dac}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# general-purpose

## Definition — verbatim
(used, not defined)

> "general-purpose" — .claude/skills/review/SKILL.md:72

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/review/SKILL.md | 72 | used here | Fallback subagent type for axes without dedicated agents. |

## Consumes
none

## Produces
none

## When applied
none

## Sub-concepts
none

## Part of
review

## Implementation status
defects: missing-path, doc-drift

## Design notes
`general-purpose` is a Claude Code built-in subagent type identifier used as an execution fallback when dedicated domain agents are unavailable, classified as name-only per D-023.
