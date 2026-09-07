---
package: rjm
name: lint_prose
slug: lint-prose
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/prose-self-check/scripts/prose_lint.py, sha256: 2aed7e9397846a62fe81bea623a2913a15b3c8b6091241eb3b7fceb3a8feda25}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# lint_prose

## Definition — verbatim
(used, not defined)

> "def lint_prose(text: str, banned: set[str]) -> list[Finding]:" — .claude/skills/prose-self-check/scripts/prose_lint.py:1298

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/prose-self-check/scripts/prose_lint.py | 1298 | defined here | Public API function returning Layer 1 and Layer 2 findings in document order. |

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
defects: doc-drift, other, script-bug

## Design notes
A Python function identifier in prose_lint.py providing the programmatic entry point for prose linting.
