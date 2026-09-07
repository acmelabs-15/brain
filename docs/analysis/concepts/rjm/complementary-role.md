---
package: rjm
name: Complementary Role
slug: complementary-role
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/agents/code-simplifier.md, sha256: 143d7143d73e79244f789421c37577a0d0fd4ef4b2384975a28e8935ec98c87c}
  - {path: templates/agents/code-simplifier.shared.md, sha256: 4ec268bd1710b891d2cdbd614849ad34357aa8da48ebceb6e22afa0729731407}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Complementary Role

## Definition — verbatim
(used, not defined)

> "**Complementary Role**: Core code-writing standards are embedded here" — .claude/agents/code-simplifier.md:12

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/code-simplifier.md | 12 | defines | Callout defining how the code-simplifier agent complements the implementer role during code refinement. |
| templates/agents/code-simplifier.shared.md | 21 | defines | Shared template callout defining the complementary post-hoc refinement role alongside implementers. |

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
A document callout heading framing the relationship between initial code implementation and post-hoc refinement, not an independent lifecycle concept.
