---
package: rjm
name: Embedded Verification
slug: embedded-verification
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

# Embedded Verification

## Definition — verbatim
> "For factual accuracy, embed verification steps within prompts." — .claude/skills/prompt-engineer/references/prompt-engineering-single-turn.md:1437

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/prompt-engineer/references/prompt-engineering-single-turn.md | 1435 | defined here | Defined as a prompt verification technique embedding self-checking and open questions to improve factual accuracy. |

## Consumes
Drafted answers, generated analyses, and factual claims.

## Produces
Verified statements, corrected entity lists, and inconsistency revisions.

## When applied
> "After completing your analysis:" — .claude/skills/prompt-engineer/references/prompt-engineering-single-turn.md:1454

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
Embedded Verification incorporates self-checking procedures directly into single-turn prompts based on Chain-of-Verification (CoVe) research. By requiring the model to generate open verification questions about its own claims before finalizing its response, it counteracts the tendency of models to agree with yes/no framing or hallucinate facts on list-based tasks.
