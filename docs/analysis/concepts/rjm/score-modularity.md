---
package: rjm
name: _score_modularity
slug: score-modularity
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/skillforge/scripts/skill_modularity_audit.py, sha256: 55ccc09bdac6caa91ec34111cd8faa6ffddafc52b0684f831ba21993eeab07f9}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# _score_modularity

## Definition — verbatim
(used, not defined)

> "def _score_modularity(" — .claude/skills/skillforge/scripts/skill_modularity_audit.py:97

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/skillforge/scripts/skill_modularity_audit.py | 97 | defined here | Helper function calculating a 0-100 modularity score based on size penalties, section focus, and progressive disclosure bonuses. |

## Consumes
none

## Produces
none

## When applied
none

## Sub-concepts
none

## Part of
none

## Implementation status
defects: doc-drift, exit-code-mismatch

## Design notes
Private Python function identifier in skill_modularity_audit.py calculating modularity scores rather than an operational lifecycle concept.
