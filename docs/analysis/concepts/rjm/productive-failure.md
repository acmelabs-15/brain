---
package: rjm
name: productive failure
slug: productive-failure
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/cynefin-classifier/references/software-applications.md, sha256: f7e15c1b5144a4af053fd201bf675d5648e67d04787b8e4b24dad09104cdebdc}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# productive failure

## Definition — verbatim
(used, not defined)

> "- Tolerance for \"productive failure\"" — .claude/skills/cynefin-classifier/references/software-applications.md:149

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/cynefin-classifier/references/software-applications.md | 149 | used here | Identified as a necessary team cultural trait in the Complex domain to extract actionable learning from unsuccessful experiments. |

## Consumes
Failed experiment telemetry, blameless retrospective processes, hypotheses logs.

## Produces
System understanding, invalidation of faulty assumptions, boundary discovery, refined follow-up probes.

## When applied
During post-experiment evaluation in Complex domains when a probe produces negative or unexpected results.

## Sub-concepts
none

## Part of
safe-to-fail-experiment-culture

## Implementation status
clean

## Design notes
Productive failure reframes unsuccessful experiments not as execution defects, but as empirical data that narrows the solution space in complex environments. In complex software development where cause-and-effect cannot be pre-analyzed, learning what does not work is essential progress toward finding patterns that do.
