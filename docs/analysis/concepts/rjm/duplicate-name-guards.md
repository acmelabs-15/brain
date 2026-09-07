---
package: rjm
name: duplicate-name guards
slug: duplicate-name-guards
kind: gate
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/context-optimizer/references/rule-audit-measurement-discipline.md, sha256: f4d18d9ff8942cccc310f26dbf6a33f6473a8cf65d03c3e1b681be91d680227e}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# duplicate-name guards

## Definition — verbatim
> "A second-order form of the same trap: this instrument has two duplicate-name" — .claude/skills/context-optimizer/references/rule-audit-measurement-discipline.md:126

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/context-optimizer/references/rule-audit-measurement-discipline.md | 126 | used here | Defensive checks guarding against duplicate field keys in raw and parsed payloads. |

## Consumes
Evaluator payloads, JSON objects, YAML mappings.

## Produces
Validation rejections when duplicate key definitions are detected.

## When applied
Applied before and during JSON/YAML parsing to prevent key overriding attacks.

## Sub-concepts
structural-guard

## Part of
rule-audit-measurement-discipline

## Implementation status
clean

## Design notes
Defensive validation checks that detect duplicate key occurrences in serialized data (both textually and structurally), preventing silent key-overwrite exploits.
