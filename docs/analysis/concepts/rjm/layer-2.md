---
package: rjm
name: Layer 2
slug: layer-2
kind: gate
package_phase: cross-phase
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

# Layer 2

## Definition — verbatim
(used, not defined)

> "Deterministic Layer 1 and Layer 2 checks for the prose-self-check skill." — .claude/skills/prose-self-check/scripts/prose_lint.py:19

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/prose-self-check/scripts/prose_lint.py | 19 | used here | Named in the module docstring as the structural check layer implemented by `prose_lint.py`. |

## Consumes
Target prose artifact text.

## Produces
Structural finding reports flagging contrast framing ("not X, it's Y"), trailing offers, signposting openers, and model identity phrases.

## When applied
Executed in conjunction with Layer 1 during the automated script pass of prose-self-check.

## Sub-concepts
none

## Part of
prose-self-check

## Implementation status
defects: script-bug, doc-drift, other

## Design notes
In prose-self-check, Layer 2 checks sentence structure patterns across entire documents, catching structural AI writing habits like contrast framing and manufactured trailing offers that keyword linters miss.
