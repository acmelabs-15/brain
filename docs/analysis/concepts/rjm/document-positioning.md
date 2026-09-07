---
package: rjm
name: Document Positioning
slug: document-positioning
kind: pattern
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

# Document Positioning

## Definition — verbatim
> "Place your long documents and inputs (~20K+ tokens) near the top of your prompt, above your query, instructions, and examples... Queries at the end can improve response quality." — .claude/skills/prompt-engineer/references/prompt-engineering-single-turn.md:244

## Also called — verbatim
> "### Document Positioning: Data First, Instructions Last" — .claude/skills/prompt-engineer/references/prompt-engineering-single-turn.md:240

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/prompt-engineer/references/prompt-engineering-single-turn.md | 240 | defined here | Defined as a structural pattern positioning long documents above instructions and queries. |

## Consumes
Substantial source documents, code files, or data inputs (~20K+ tokens).

## Produces
Organized prompt structure placing context data at the top, instructions in the middle, and terminal queries at the bottom.

## When applied
When designing prompts containing large context documents, source files, or reference data.

## Sub-concepts
none

## Part of
prompt-engineering-patterns

## Implementation status
clean

## Design notes
Document Positioning aligns prompt layout with transformer attention dynamics by placing long context data first, followed by task instructions and the final query. Positioning source material before directives improves recall and generation quality on long-context tasks without added token cost.
