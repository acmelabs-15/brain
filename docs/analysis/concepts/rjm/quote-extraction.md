---
package: rjm
name: Quote Extraction
slug: quote-extraction
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/prompt-engineer/references/prompt-engineering-multi-turn.md, sha256: d4baf475bf65bb62eebadd4ee3458feed74409068cf1fad9195fbade1ff5ae06}
  - {path: .claude/skills/prompt-engineer/references/prompt-engineering-single-turn.md, sha256: 18d14cb05a5fae5714355776fc4016fe1af5af0709f06bc8b4745e30b2771db9}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Quote Extraction

## Definition — verbatim
> "Before complex analysis on documents, require the model to extract relevant quotes first. This forces evidence commitment before reasoning, preventing hallucination from \"impressions.\"" — .claude/skills/prompt-engineer/references/prompt-engineering-single-turn.md:280

## Also called — verbatim
`Quote Extraction for Grounding` — .claude/skills/prompt-engineer/references/prompt-engineering-single-turn.md:278

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/prompt-engineer/references/prompt-engineering-multi-turn.md | 17 | used here | Cited as a single-turn grounding technique that stacks with Chain-of-Verification to enhance factual accuracy. |
| .claude/skills/prompt-engineer/references/prompt-engineering-single-turn.md | 278 | defined here | Detailed as a grounding pattern requiring models to extract relevant verbatim quotes before performing analysis on documents. |

## Consumes
Large reference documents, source code, or background context.

## Produces
Extracted verbatim source quotations placed in dedicated tags prior to downstream analysis.

## When applied
Applied before performing complex analysis on documents (>10K-20K tokens) to prevent hallucinations and force evidentiary grounding.

## Sub-concepts
none

## Part of
prompt-engineer

## Implementation status
clean

## Design notes
Quote Extraction is an input enhancement technique that forces models to commit to verbatim text evidence before formulating an analysis. By requiring quotation prior to reasoning, it prevents models from confabulating post-hoc justifications and anchors conclusions directly in cited facts.
