---
package: rjm
name: Compound Problems
slug: compound-problems
kind: pattern
package_phase: rjm:spec
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/cynefin-classifier/SKILL.md, sha256: 693d6b820eed8768ff439de20b1541f57e73e716e8c9d5a111df606f9263ebf5}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Compound Problems

## Definition — verbatim
> "## Compound Problems" — .claude/skills/cynefin-classifier/SKILL.md:240

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/cynefin-classifier/SKILL.md | 240 | defined here | Guidance section detailing how to decompose, independently classify, and sequence work for issues spanning multiple Cynefin domains. |

## Consumes
Multi-faceted problem statements, system dependency graphs, cross-cutting requirements.

## Produces
Decomposed sub-problems with independent domain tags and prioritized execution sequencing.

## When applied
Applied when evaluating complex architectures or major initiatives that contain sub-components operating in different Cynefin domains.

## Sub-concepts
none

## Part of
cynefin-classifier

## Implementation status
defects: doc-drift

## Design notes
Compound Problems represent realistic software challenges that cannot be reduced to a single Cynefin domain. Instead of mischaracterizing the entire project under one label, this concept guides engineers to decompose the problem into discrete sub-problems, classify each on its own merits, and sequence execution logically (stabilizing chaotic parts first, executing clear quick wins, analyzing complicated components, and running complex experiments on a stabilized foundation).
