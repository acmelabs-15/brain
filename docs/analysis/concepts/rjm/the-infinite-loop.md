---
package: rjm
name: The Infinite Loop
slug: the-infinite-loop
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/prompt-engineer/references/prompt-engineering-multi-turn.md, sha256: d4baf475bf65bb62eebadd4ee3458feed74409068cf1fad9195fbade1ff5ae06}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# The Infinite Loop

## Definition — verbatim
> "No explicit stopping condition for iterative refinement." — .claude/skills/prompt-engineer/references/prompt-engineering-multi-turn.md:659

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/prompt-engineer/references/prompt-engineering-multi-turn.md | 657 | defined here | Cataloged as an anti-pattern where refinement loops omit explicit termination conditions. |

## Consumes
Refinement loops guided by subjective or open-ended termination instructions (e.g. "until perfect").

## Produces
Excessive token consumption, hallucinated consensus, or endless refinement cycling.

## When applied
Identified when reviewing iterative prompt flows to mandate explicit iteration caps and threshold criteria.

## Sub-concepts
none

## Part of
prompt-engineer

## Implementation status
clean

## Design notes
An anti-pattern in iterative prompting where instructions fail to specify concrete termination bounds. In rjm, models rarely self-terminate accurately on subjective tasks; without explicit iteration limits (typically 2-4 cycles) or quantitative thresholds, loops incur unnecessary cost without improving quality.
