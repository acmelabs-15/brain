---
package: rjm
name: complexity-based consistency
slug: complexity-based-consistency
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

# complexity-based consistency

## Definition — verbatim
> "We propose complexity-based consistency, where instead of taking a majority vote among all generated chains, we vote over the top K complex chains." — .claude/skills/prompt-engineer/references/prompt-engineering-multi-turn.md:513

## Also called — verbatim
> "Complexity-Weighted Voting" — .claude/skills/prompt-engineer/references/prompt-engineering-multi-turn.md:511

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/prompt-engineer/references/prompt-engineering-multi-turn.md | 513 | defined here | Defined via Fu et al. as an aggregation strategy that filters for and votes among the top K complex chains. |

## Consumes
Multiple candidate reasoning chains with distinct reasoning step counts.

## Produces
A filtered subset of complex reasoning chains and a majority vote prediction derived solely from thorough reasoning paths.

## When applied
When reasoning complexity varies across sampled chains and simple chains risk introducing superficial shortcut errors.

## Sub-concepts
none

## Part of
aggregation-and-consistency

## Implementation status
clean

## Design notes
An aggregation technique that ranks sampled reasoning chains by reasoning step complexity and restricts majority voting to the top K most complex chains. In rjm prompt engineering, it filters out shortcut heuristics without requiring additional model calls.
