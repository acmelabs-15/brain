---
package: rjm
name: VALID_AGENT_TYPES
slug: valid-agent-types
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/skillforge/scripts/_constants.py, sha256: 7d95cd0e323d528ee16098e199af1dbf91434ae1e8cd7e2e312e1acecca669b6}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# VALID_AGENT_TYPES

## Definition — verbatim
(used, not defined)

> "VALID_AGENT_TYPES = {'Explore', 'Plan', 'general-purpose'}" — .claude/skills/skillforge/scripts/_constants.py:48

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/skillforge/scripts/_constants.py | 48 | defined here | Constant set defining allowable sub-agent types ('Explore', 'Plan', 'general-purpose') for forked execution. |

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
clean

## Design notes
VALID_AGENT_TYPES is a Python constant set defining permissible agent types for forked skill execution rather than an operational lifecycle concept, classified as name-only per D-023.
