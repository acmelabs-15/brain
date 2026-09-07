---
package: rjm
name: EVAL_PROVIDER=copilot-cli
slug: eval-provider-copilot-cli
kind: name-only
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/context-optimizer/references/rule-audit-instrument.md, sha256: e44bedb58e00f8ca48ec3ee0cb3b8396e3cecf9bfde2e87f00e98adee9c6ee18}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# EVAL_PROVIDER=copilot-cli

## Definition — verbatim
(used, not defined)

> "| Provider | `EVAL_PROVIDER=copilot-cli` |" — .claude/skills/context-optimizer/references/rule-audit-instrument.md:178

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/context-optimizer/references/rule-audit-instrument.md | 178 | used here | Environment variable configuration specifying GitHub Copilot CLI as the evaluation provider transport for rule audit runs. |

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
`EVAL_PROVIDER=copilot-cli` is an environment variable configuration assignment selecting the Copilot CLI execution harness for evaluation benchmarks, classified as `kind: name-only` per D-023.
