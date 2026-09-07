---
package: rjm
name: non-monotonic improvement
slug: non-monotonic-improvement
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

# non-monotonic improvement

## Definition — verbatim
> "For tasks with multi-aspect feedback like Acronym Generation, the output quality can fluctuate during the iterative process, improving on one aspect while losing out on another." — .claude/skills/prompt-engineer/references/prompt-engineering-multi-turn.md:110

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/prompt-engineer/references/prompt-engineering-multi-turn.md | 108 | defined here | Cited as a fundamental limitation of multi-aspect iterative refinement where quality fluctuates across turns. |

## Consumes
Multi-aspect feedback, score histories, and candidate outputs across iterative refinement cycles.

## Produces
Score tracking across iterations to enable selection of the maximum total score output.

## When applied
Observed during iterative refinement of complex tasks with competing quality criteria.

## Sub-concepts
none

## Part of
iterative-refinement

## Implementation status
clean

## Design notes
A behavioral pattern and limitation in multi-turn refinement where candidate quality fluctuates across iterations rather than monotonically increasing. In rjm prompt engineering, systems mitigate this by tracking multi-aspect scores across all iterations and selecting the best-so-far output rather than naively returning the final iteration.
