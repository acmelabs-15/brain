---
package: matt
name: ask_secret
slug: ask-secret
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

# ask_secret

## Definition — verbatim
> "is like ask, but input is hidden." — skills/engineering/wizard/template.sh:113

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/engineering/wizard/SKILL.md | 35 | defined here | Listed as a core library helper function for prompting and capturing sensitive credential inputs. |
| skills/engineering/wizard/template.sh | 113 | defined here | Interactive bash function that prompts for sensitive values with hidden keyboard input and re-run retention. |

## Consumes
An environment variable key name, prompt string, and existing `$ENV_FILE` value if previously stored.

## Produces
Assigns the user-entered secret value into the named bash variable with terminal echoing disabled.

## When applied
When reading secret keys, passwords, or authentication tokens that must not be displayed on screen.

## Sub-concepts
hidden-secret-entry

## Part of
wizard

## Implementation status
clean

## Design notes
An interactive secret input helper in the wizard template library. Similar to `ask`, it prompts the user for a configuration value and retains previously saved values on re-run, but uses `read -rs` to suppress terminal echoing, safeguarding API tokens and passwords during setup.
