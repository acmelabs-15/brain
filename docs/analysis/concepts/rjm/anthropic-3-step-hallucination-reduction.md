---
package: rjm
name: Anthropic 3-Step Hallucination Reduction
slug: anthropic-3-step-hallucination-reduction
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/prompt-engineer/references/prompting-anti-patterns.md, sha256: bb3bb55f446fe40863d1d4460e2885e4f1115d196236896d4107656891eb1bc2}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Anthropic 3-Step Hallucination Reduction

## Definition — verbatim
> "### Anthropic 3-Step Hallucination Reduction" — .claude/skills/prompt-engineer/references/prompting-anti-patterns.md:43
> "1. Allow "I don't know" (prevents gap-filling with plausible fiction)" — .claude/skills/prompt-engineer/references/prompting-anti-patterns.md:45

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/prompt-engineer/references/prompting-anti-patterns.md | 43 | defined here | Defined as a three-step technique (allow unknown, verify citations, direct quotes) to minimize factual hallucinations. |

## Consumes
Factual question answering, document extraction, or research prompt specifications.

## Produces
Explicit verification constraints that force citation checking and prevent fabricated answers.

## When applied
When designing prompts for information retrieval, research analysis, or factual synthesis tasks.

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
The Anthropic 3-Step Hallucination Reduction pattern reduces fabrication by allowing the model to acknowledge ignorance, requiring citations for factual assertions, and mandating direct quotes before analysis. The package notes the documented tradeoff: strict citation constraints reduce creative output by 15-20%, making toggleable modes necessary.
