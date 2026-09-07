---
package: rjm
name: Layer 1
slug: layer-1
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

# Layer 1

## Definition — verbatim
(used, not defined)

> "Deterministic Layer 1 and Layer 2 checks for the prose-self-check skill." — .claude/skills/prose-self-check/scripts/prose_lint.py:19

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/prose-self-check/scripts/prose_lint.py | 19 | used here | Named in the module docstring as the deterministic lexical check layer implemented by `prose_lint.py`. |

## Consumes
Target prose artifact text, voice rule files, and universal formatting constraints.

## Produces
Lexical finding reports flagging em-dashes, en-dashes, and tiered banned vocabulary.

## When applied
Executed first during the prose self-check quality pass over agent-generated prose.

## Sub-concepts
none

## Part of
prose-self-check

## Implementation status
defects: script-bug, doc-drift, other

## Design notes
In prose-self-check, Layer 1 provides automated lexical linting for high-signal punctuation tells (em/en-dashes) and dynamically parsed banned words, catching low-level vocabulary tells deterministically before human or higher-layer review.
