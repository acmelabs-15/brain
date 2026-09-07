---
package: matt
name: _existing
slug: existing
kind: technique
package_phase: matt:engineering
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: skills/engineering/wizard/template.sh, sha256: 33cbe9dfb1d0e9185b60248a52aabed14bc64785a00cac695e302e739dd6c153}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# _existing

## Definition — verbatim
> "_existing KEY: current value of KEY in ENV_FILE, if any." — skills/engineering/wizard/template.sh:91

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/engineering/wizard/template.sh | 92 | defined here | Bash helper function that reads and returns the existing value of a key in ENV_FILE to support defaults on re-runs. |

## Consumes
An environment variable key name and the target `$ENV_FILE` file path.

## Produces
The current value string of the specified key printed to stdout, or returns exit status 1 if absent.

## When applied
Invoked internally by `ask` and `ask_secret` when prompting for configuration inputs during wizard stage execution.

## Sub-concepts
none

## Part of
wizard

## Implementation status
clean

## Design notes
A bash helper function in `template.sh` that checks the target `.env` file for existing key-value pairs. By retrieving prior values, it allows interactive input functions (`ask` and `ask_secret`) to offer current settings as re-run defaults, making wizard execution safe and repeatable without requiring re-entry of unmodified configurations.
