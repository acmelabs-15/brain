---
package: rjm
name: recovery helper
slug: recovery-helper
kind: technique
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

# recovery helper

## Definition — verbatim
> "check was to call the recovery helper on each stored payload. It returned" — .claude/skills/context-optimizer/references/rule-audit-measurement-discipline.md:103

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/context-optimizer/references/rule-audit-measurement-discipline.md | 103 | used here | Function invoked on archived payloads to extract score values when strict parsing fails. |

## Consumes
Malformed or truncated raw evaluation payloads.

## Produces
Salvaged score triples or `None` if no recoverable verdict is present.

## When applied
Applied during evaluation score parsing when strict parser execution raises an error.

## Sub-concepts
recover-verdict, salvage-scores

## Part of
rule-audit-measurement-discipline

## Implementation status
clean

## Design notes
A specialized parsing component designed to recover structured data from malformed model responses, serving as a secondary salvage path when strict parsing fails.
