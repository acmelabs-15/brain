---
package: rjm
name: EN_DASH
slug: en-dash
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

# EN_DASH

## Definition — verbatim
(used, not defined)

> "for dash, name in ((EM_DASH, \"em_dash\"), (EN_DASH, \"en_dash\")):" — .claude/skills/prose-self-check/scripts/prose_lint.py:1184

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/prose-self-check/scripts/prose_lint.py | 54 | defined here | Python constant defining Unicode en-dash character escape to comply with byte-level dash ban. |
| .claude/skills/prose-self-check/scripts/prose_lint.py | 1184 | defined here | Iterated in lexical analysis loop to scan prose lines for en-dash occurrences. |

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
A Python constant identifier in prose_lint.py representing the Unicode en-dash character targeted by repository linting rules.
