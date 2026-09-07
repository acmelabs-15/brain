---
package: rjm
name: description-matching router
slug: description-matching-router
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/eval/eval_skill_router.py, sha256: 3aa5d1334db711e7d16cda841dd34bdde659def740f1f217a3ee4055d8a30b70}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# description-matching router

## Definition — verbatim
> "A description-matching router picks a skill from its frontmatter description alone." — scripts/eval/eval_skill_router.py:6

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/eval/eval_skill_router.py | 6 | used here | Describes routing architecture where skill selection relies solely on frontmatter descriptions. |

## Consumes
User prompt query and candidate frontmatter descriptions.

## Produces
Selected skill or agent name to handle the user query.

## When applied
Invoked when selecting an appropriate skill or agent based on semantic description matching without loading full tool implementations into context.

## Sub-concepts
skip-clause

## Part of
none

## Implementation status
defects: doc-drift, orphan

## Design notes
An agent dispatch pattern where an LLM router selects appropriate skills or subagents relying strictly on compact YAML frontmatter descriptions, minimizing context window token consumption.
