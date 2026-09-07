---
package: matt
name: write_env
slug: write-env
kind: technique
package_phase: matt:engineering
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: skills/engineering/wizard/SKILL.md, sha256: bdf31d48211ea559878f95a4f344aeabf8d85897488ba564382bab0b000daac1}
  - {path: skills/engineering/wizard/template.sh, sha256: 33cbe9dfb1d0e9185b60248a52aabed14bc64785a00cac695e302e739dd6c153}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# write_env

## Definition — verbatim
> "write_env KEY VALUE upserts KEY=VALUE into ENV_FILE (creates it; replaces" — skills/engineering/wizard/template.sh:128

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/engineering/wizard/SKILL.md | 35 | defined here | Cited as a core library helper function used to persist captured environment values into the target env file. |
| skills/engineering/wizard/template.sh | 130 | defined here | Function that upserts KEY=VALUE into ENV_FILE, creating the file or replacing existing keys idempotently. |

## Consumes
A key name and value string captured during wizard execution, and target `$ENV_FILE` path.

## Produces
An updated or appended `KEY=VALUE` entry in `$ENV_FILE`.

## When applied
When persisting captured configuration values to an environment file during interactive setup wizard execution.

## Sub-concepts
none

## Part of
wizard

## Implementation status
clean

## Design notes
A bash helper function in the wizard template library that performs idempotent upserts into an environment file (`.env`), ensuring that captured credentials and variables are saved without duplicating keys or corrupting file formatting on repeated wizard runs.
