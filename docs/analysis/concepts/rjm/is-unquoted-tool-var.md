---
package: rjm
name: is_unquoted_tool_var
slug: is-unquoted-tool-var
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

# is_unquoted_tool_var

## Definition — verbatim
(used, not defined)

> "def is_unquoted_tool_var(line: str, var: str) -> bool:" — .claude/skills/skillforge/scripts/check_docs_safety.py:32

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/skillforge/scripts/check_docs_safety.py | 32 | defined here | Function checking whether a tool variable in a command line lacks proper enclosing quotes. |

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
is_unquoted_tool_var is a Python validation function identifier detecting unquoted variable interpolation in hook commands rather than an operational lifecycle concept, classified as name-only per D-023.
