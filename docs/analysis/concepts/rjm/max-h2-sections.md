---
package: rjm
name: MAX_H2_SECTIONS
slug: max-h2-sections
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

# MAX_H2_SECTIONS

## Definition — verbatim
(used, not defined)

> "MAX_H2_SECTIONS: int = 10" — .claude/skills/skillforge/scripts/skill_modularity_audit.py:61

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/skillforge/scripts/skill_modularity_audit.py | 61 | defined here | Constant defining the maximum recommended number of top-level H2 sections in a skill before incurring modularity penalties. |

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
Python constant identifier defining the threshold for top-level H2 sections in skill modularity auditing rather than an operational lifecycle concept.
