---
package: matt
name: upserts
slug: upserts
kind: technique
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

# upserts

## Definition — verbatim
(used, not defined)

> "idempotent <code class=\"ah-code-inline\">.env</code> upserts" — external/wizard.md:40

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| external/wizard.md | 40 | used here | Details the mutation mechanism used by wizards to update existing environment variables or append new ones. |

## Consumes
A key name, a new value, and a target configuration file.

## Produces
An in-place replacement of the key's value if present, or an appended key-value line if absent.

## When applied
Implemented by `write_env` helpers in the wizard template when writing configuration values.

## Sub-concepts
none

## Part of
wizard

## Implementation status
clean

## Design notes
Upserting combines updating existing values with inserting missing ones. In the wizard skill, the `write_env` helper parses `.env` files line by line, replacing matching key definitions while preserving formatting and comments, or appending new keys when not found.
