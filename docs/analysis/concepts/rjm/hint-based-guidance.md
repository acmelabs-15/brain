---
package: rjm
name: Hint-Based Guidance
slug: hint-based-guidance
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

# Hint-Based Guidance

## Definition — verbatim
> "When you know what aspects the output should emphasize, provide explicit hints rather than relying on the model to infer importance." — .claude/skills/prompt-engineer/references/prompt-engineering-single-turn.md:979

## Also called — verbatim
> "### Hint-Based Guidance (Directional Stimulus Prompting)" — .claude/skills/prompt-engineer/references/prompt-engineering-single-turn.md:977

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/prompt-engineer/references/prompt-engineering-single-turn.md | 977 | defined here | Defined as an output guidance pattern supplying directional stimulus and keywords to align output focus. |

## Consumes
Task prompt and designated focal points, keywords, or thematic cues.

## Produces
Targeted response that emphasizes desired facets without hallucinating missing details.

## When applied
When generated summaries or dialogue responses overlook critical dimensions or require specific topical alignment.

## Sub-concepts
none

## Part of
prompt-engineering-patterns

## Implementation status
clean

## Design notes
Hint-Based Guidance (Directional Stimulus Prompting) steers language model generation by providing concise keywords or topical hints within task prompts. Directing attention toward primary themes aligns output focus without prescribing rigid content that might cause hallucinations.
