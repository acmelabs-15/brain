---
package: rjm
name: VALID_TOOLS
slug: valid-tools
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
verified: 2026-09-08 quote-check+coverage
memo_inputs:
  - {path: scripts/validation/skill_frontmatter.py, sha256: 60453703190dad39f2fe456824d6d9c29d2e427ffabc2a1dfc2734a146e9b57b}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# VALID_TOOLS

## Definition — verbatim
(used, not defined)

> "VALID_TOOLS: frozenset[str] = frozenset(" — scripts/validation/skill_frontmatter.py:77

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/skill_frontmatter.py | 77 | defined here | Constant frozenset of valid tool names accepted in `allowed-tools` frontmatter fields. |

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
defects: exit-code-mismatch, doc-drift, cross-file-contradiction

## Design notes
A schema constant frozenset in `skill_frontmatter.py` listing allowed tools for Claude Code and Copilot CLI, classified as name-only per D-023.
