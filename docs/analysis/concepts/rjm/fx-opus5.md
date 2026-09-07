---
package: rjm
name: fx-opus5
slug: fx-opus5
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/context-optimizer/references/rule-audit-evidence.md, sha256: 70d527ebb420739aa099f7982f4dc28e44432b3fa91532ae93ed5e0fa78e34e9}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# fx-opus5

## Definition — verbatim
(used, not defined)

> "24 failures sit in the four Opus artifacts (`fx-opus5` 6, `var-opus-1` 8," — .claude/skills/context-optimizer/references/rule-audit-evidence.md:24

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/context-optimizer/references/rule-audit-evidence.md | 24 | used here | Named as one of the four Opus evaluation artifact files containing judge truncation failures. |

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
An evaluation artifact run identifier (`fx-opus5.json`) designating a fixed-prompt Opus 5 evaluation sweep in rule audit experiments rather than a lifecycle concept.
