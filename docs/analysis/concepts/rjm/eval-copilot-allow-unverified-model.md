---
package: rjm
name: EVAL_COPILOT_ALLOW_UNVERIFIED_MODEL
slug: eval-copilot-allow-unverified-model
kind: name-only
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/context-optimizer/references/rule-audit-instrument.md, sha256: e44bedb58e00f8ca48ec3ee0cb3b8396e3cecf9bfde2e87f00e98adee9c6ee18}
  - {path: scripts/eval/_copilot_cli_constants.py, sha256: f9b2ba5ce05a132735fe5fb3f29fb101ec98771dc18d6a3ef6e9fc9920ac6c0c}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# EVAL_COPILOT_ALLOW_UNVERIFIED_MODEL

## Definition — verbatim
(used, not defined)

> "UNVERIFIED_MODEL_ENV: str = \"EVAL_COPILOT_ALLOW_UNVERIFIED_MODEL\"" — scripts/eval/_copilot_cli_constants.py:14

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/context-optimizer/references/rule-audit-instrument.md | 283 | used here | Environment variable allowing operators to bypass model confirmation checks knowingly when running unverified Copilot CLI models. |
| scripts/eval/_copilot_cli_constants.py | 14 | used here | Exported constant defining the environment variable string name. |

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
`EVAL_COPILOT_ALLOW_UNVERIFIED_MODEL` is an environment variable configuration name used to explicitly bypass model attribution checks in the Copilot CLI evaluation provider, classified as `kind: name-only` per D-023.
