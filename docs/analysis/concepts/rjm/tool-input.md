---
package: rjm
name: TOOL_INPUT
slug: tool-input
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/skillforge/scripts/check_docs_safety.py, sha256: 1853c181c749bc1f147533aab5a23ab12b03170a1a9526d3bf72c5c6055eaea7}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# TOOL_INPUT

## Definition — verbatim
(used, not defined)

> "Flags markdown lines where $TOOL_INPUT or $TOOL_OUTPUT appear in command" — .claude/skills/skillforge/scripts/check_docs_safety.py:5

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/skillforge/scripts/check_docs_safety.py | 5 | used here | Environment variable parameter flagged when appearing unquoted in markdown documentation command examples. |

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
TOOL_INPUT is a hook command environment variable representing tool input payloads rather than an operational lifecycle concept, classified as name-only per D-023.
