---
package: matt
name: pure action
slug: pure-action
kind: pattern
package_phase: matt:Upkeep
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: external/wizard.md, sha256: 47fd5b24319f7bd272a8b1060a1a9eedb8fd9b73cb0584bf56e1b01351fddec1}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# pure action

## Definition — verbatim
> "The stage is a pure action: a switch flipped, a plan upgraded" — external/wizard.md:38

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| external/wizard.md | 38 | defined here | Categorizes wizard stages that alter external state without producing an output secret, variable, or .env entry. |

## Consumes
A required configuration change in a third-party UI (e.g., toggling a feature flag, upgrading a service plan).

## Produces
Confirmation that an external action was completed, without saving any output strings to disk.

## When applied
When a wizard step requires human action but yields no credentials or environment keys.

## Sub-concepts
none

## Part of
wizard

## Implementation status
clean

## Design notes
Pure action represents a wizard stage whose purpose is exclusively state alteration rather than credential retrieval. Differentiating pure actions from value-capturing stages prevents scripts from creating unnecessary environment variables when a simple confirmation gate is sufficient.
