---
package: rjm
name: Comment as crutch
slug: comment-as-crutch
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/software-engineering-library/references/philosophy-of-software-design.md, sha256: befb74458d7e26f163b688221fa3249bfeffe385a0ff863c0f970e17bc23b500}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Comment as crutch

## Definition — verbatim
> "**Comment as crutch**: a long comment that explains what the code is doing because the code does not say so. Rename, restructure, or extract until the code speaks; keep the comment only if it captures something the code cannot." — .claude/skills/software-engineering-library/references/philosophy-of-software-design.md:176

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/software-engineering-library/references/philosophy-of-software-design.md | 176 | defined here | Defined in anti-patterns as a long explanatory comment used to compensate for obscure or poorly structured code. |

## Consumes
none

## Produces
none

## When applied
Identified during code review to prompt refactoring, renaming, or extraction instead of relying on narrative comments.

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
A code quality anti-pattern in rjm where comments are used as substitutes for clean design. Rather than writing explanatory prose to describe confusing control flow, developers are required to restructure the code and improve identifiers until the implementation is self-evident.
