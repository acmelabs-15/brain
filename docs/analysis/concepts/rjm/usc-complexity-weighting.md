---
package: rjm
name: USC + Complexity Weighting
slug: usc-complexity-weighting
kind: technique
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

# USC + Complexity Weighting

## Definition — verbatim
> "Filter by complexity before consistency selection:" — .claude/skills/prompt-engineer/references/prompt-engineering-multi-turn.md:759

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/prompt-engineer/references/prompt-engineering-multi-turn.md | 757 | defined here | Defined as an aggregation technique combining complexity filtering with Universal Self-Consistency. |

## Consumes
N sampled reasoning chains generated for a multi-step problem.

## Produces
Curated subset of high-complexity reasoning chains and a selected consensus output.

## When applied
When aggregating non-deterministic model generations where simple majority voting risks being skewed by shortcut reasoning.

## Sub-concepts
universal-self-consistency, complexity-weighted-voting

## Part of
prompt-engineering-patterns

## Implementation status
clean

## Design notes
USC + Complexity Weighting filters sampled reasoning paths by reasoning complexity before applying Universal Self-Consistency. Restricting the candidate pool to the most thorough chains prevents superficial or hasty reasoning from dominating the final consensus selection.
