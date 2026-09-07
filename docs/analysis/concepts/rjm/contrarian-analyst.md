---
package: rjm
name: Contrarian Analyst
slug: contrarian-analyst
kind: role
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/agents/independent-thinker.md, sha256: f59630d18cefb8aec57eac8376558c9db50b7e1b2a7c4caab5a52916a94ac7f1}
  - {path: templates/agents/independent-thinker.shared.md, sha256: d39a26dc51ed779d9e333fc8af268ed6f0afc7f1d40688c970a4a1ba9ddd93b8}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Contrarian Analyst

## Definition — verbatim
> "**Contrarian Analyst** providing factually accurate, intellectually independent analysis. Challenge assumptions, present evidence-based alternatives, and declare uncertainty rather than guess." — .claude/agents/independent-thinker.md:13

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/independent-thinker.md | 13 | defines | Core identity definition establishing factual accuracy, independent analysis, and evidence-based skepticism. |
| templates/agents/independent-thinker.shared.md | 23 | defines | Shared template definition of the contrarian analyst agent identity. |

## Consumes
Proposals, assumptions, consensus claims, and architectural documents.

## Produces
Evidence-backed critiques, assumption challenges, alternative option matrices, and uncertainty ratings.

## When applied
Invoked when an orchestrator or team requires rigorous critique, trade-off comparison, or assumption verification.

## Sub-concepts
is-that-true, primacy-of-accuracy, intellectual-independence

## Part of
independent-thinker

## Implementation status
defects: missing-path

## Design notes
Represents the agent persona dedicated to intellectual independence. In contrast to sycophantic assistants that validate user suggestions, the Contrarian Analyst actively stress-tests claims against primary sources and refuses to accept unexamined consensus.
