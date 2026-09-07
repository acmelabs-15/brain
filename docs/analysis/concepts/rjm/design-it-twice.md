---
package: rjm
name: Design It Twice
slug: design-it-twice
kind: technique
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

# Design It Twice

## Definition — verbatim
> "Design It Twice" — .claude/skills/software-engineering-library/references/philosophy-of-software-design.md:117

> "Your first design is rarely your best." — .claude/skills/software-engineering-library/references/philosophy-of-software-design.md:119

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/software-engineering-library/references/philosophy-of-software-design.md | 117 | defined here | Defined as an architectural discipline requiring engineers to draft and evaluate at least two materially different designs before committing to a public interface. |

## Consumes
Candidate interface sketches, alternative module decompositions, and trade-off analyses.

## Produces
Evaluated design comparisons and PR description summaries proving that architectural alternatives were explored.

## When applied
Applied when committing to a new public interface, introducing a major abstraction, or sketching a new tool, skill, or agent.

## Sub-concepts
none

## Part of
strategic-programming

## Implementation status
clean

## Design notes
An explicit design discipline in rjm ensuring that developers and agents do not settle on the first obvious abstraction. By forcing the articulation of two distinct designs, it exposes subtle trade-offs in interface complexity and long-term maintenance costs.
