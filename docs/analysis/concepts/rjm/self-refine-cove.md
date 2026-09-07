---
package: rjm
name: Self-Refine + CoVe
slug: self-refine-cove
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

# Self-Refine + CoVe

## Definition — verbatim
> "Apply verification after refinement to catch introduced errors:" — .claude/skills/prompt-engineer/references/prompt-engineering-multi-turn.md:746

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/prompt-engineer/references/prompt-engineering-multi-turn.md | 744 | defined here | Defined as a composite multi-turn technique combining iterative refinement with post-refinement verification. |

## Consumes
Task prompt, initial draft, feedback prompt, and factored verification questions.

## Produces
Verified refined output across a six-turn interaction sequence.

## When applied
When refining complex, fact-heavy outputs where iterative modification risks introducing hallucinations or factual errors.

## Sub-concepts
self-refine, chain-of-verification

## Part of
prompt-engineering-patterns

## Implementation status
clean

## Design notes
Self-Refine + CoVe bridges iterative text improvement and factual grounding by appending a Chain-of-Verification (CoVe) cycle directly onto a Self-Refine workflow. This ensures that creative or stylistic revisions introduced during refinement passes are systematically vetted for factual consistency before final delivery.
