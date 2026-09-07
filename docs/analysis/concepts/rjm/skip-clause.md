---
package: rjm
name: SKIP-clause
slug: skip-clause
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

# SKIP-clause

## Definition — verbatim
(used, not defined)

> "Skill-Router Eval: measure whether SKIP-clause descriptions improve sibling disambiguation." — scripts/eval/eval_skill_router.py:2

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/eval/eval_skill_router.py | 2 | used here | Referenced in script header docstring as the target disambiguation mechanism under evaluation. |

## Consumes
Sibling skill/agent definitions with overlapping domain boundaries.

## Produces
Frontmatter description directives explicitly routing out-of-scope requests to sibling skills.

## When applied
Applied when authoring skill or agent frontmatter descriptions to prevent router misclassification across closely related tools.

## Sub-concepts
none

## Part of
description-matching-router

## Implementation status
defects: doc-drift, orphan

## Design notes
A prompt engineering pattern in rjm where skill frontmatter descriptions include explicit negative routing rules ("Do NOT use for X; use <sibling> instead") to improve LLM router disambiguation between related sibling skills.
