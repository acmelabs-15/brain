---
package: rjm
name: Diversity-Based Selection
slug: diversity-based-selection
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/prompt-engineer/references/prompt-engineering-single-turn.md, sha256: 18d14cb05a5fae5714355776fc4016fe1af5af0709f06bc8b4745e30b2771db9}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Diversity-Based Selection

## Definition — verbatim
> "Selecting from example pool" — .claude/skills/prompt-engineer/references/prompt-engineering-single-turn.md:26

## Also called — verbatim
> "### Diversity-Based Example Selection" — .claude/skills/prompt-engineer/references/prompt-engineering-single-turn.md:578

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/prompt-engineer/references/prompt-engineering-single-turn.md | 26 | defined here | Defined as an example selection strategy choosing diverse examples from candidate pools to prevent error clustering. |

## Consumes
Candidate pool of few-shot demonstrations across varied problem categories.

## Produces
Demonstration set spanning distinct problem categories and reasoning structures.

## When applied
When selecting few-shot examples from an uncurated or large demonstration pool.

## Sub-concepts
none

## Part of
prompt-engineering-patterns

## Implementation status
clean

## Design notes
Diversity-Based Selection selects few-shot demonstrations that span distinct problem domains and structures rather than sampling candidates closest to the input query. By avoiding high-similarity sampling, it prevents the prompt from concentrating on frequent-error clusters and maintains robustness even when some exemplars contain errors.
