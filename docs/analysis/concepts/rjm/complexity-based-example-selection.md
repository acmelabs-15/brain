---
package: rjm
name: Complexity-Based Example Selection
slug: complexity-based-example-selection
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

# Complexity-Based Example Selection

## Definition — verbatim
> "When selecting few-shot examples, prefer examples with _more_ reasoning steps, not simpler ones." — .claude/skills/prompt-engineer/references/prompt-engineering-single-turn.md:553

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/prompt-engineer/references/prompt-engineering-single-turn.md | 551 | defined here | Defined as an example selection technique choosing few-shot demonstrations with more reasoning steps to foster thorough reasoning. |

## Consumes
Few-shot demonstration candidates, step-count annotations, or length proxies.

## Produces
Curated few-shot prompts with high reasoning complexity per example.

## When applied
> "Select examples that demonstrate the _full_ reasoning process, even if this means fewer total examples." — .claude/skills/prompt-engineer/references/prompt-engineering-single-turn.md:570

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
Complexity-Based Example Selection prioritizes demonstration examples containing more internal reasoning steps rather than maximizing the sheer quantity of simple examples. Grounded in research by Fu et al. (2023), it prevents models from learning superficial shortcuts and ensures that the full problem-solving trace is illustrated.
