---
package: rjm
name: Discovery mode
slug: discovery-mode
kind: technique
package_phase: rjm:spec
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/business-strategy/references/mom-test.md, sha256: 09980e08320f81700c21cb6346b6ea1b094637ea4566dc81d071508d84d090d3}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Discovery mode

## Definition — verbatim
> "Discovery mode: dig into their workflow and past behavior, no pitch." — .claude/skills/business-strategy/references/mom-test.md:18

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/business-strategy/references/mom-test.md | 18 | defines | Interview operational posture dedicated to unearthing workflows and past actions without introducing product concepts. |

## Consumes
Broad hypothesis about a problem domain and target user group.

## Produces
Documented customer workflows, existing workarounds, frustration points, and operational bottlenecks.

## When applied
Applied when the team has not yet spoken with anyone in the target customer group.

## Sub-concepts
none

## Part of
the-mom-test

## Implementation status
clean

## Design notes
Discovery mode represents the initial interview posture in The Mom Test framework. By strictly forbidding pitches or solution previews, it ensures founders listen purely to how prospects currently navigate their workflows and where real friction resides, preventing premature convergence on flawed product ideas.
