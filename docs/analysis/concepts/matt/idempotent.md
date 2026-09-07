---
package: matt
name: idempotent
slug: idempotent
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

# idempotent

## Definition — verbatim
(used, not defined)

> "idempotent <code class=\"ah-code-inline\">.env</code> upserts" — external/wizard.md:40

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| external/wizard.md | 40 | used here | Describes the safe re-run property of wizard configuration writes to local files. |

## Consumes
Target configuration files and newly captured key-value pairs.

## Produces
Safe, predictable configuration updates that yield the exact same state regardless of execution count.

## When applied
Enforced during every wizard file modification and environment variable write.

## Sub-concepts
none

## Part of
wizard

## Implementation status
clean

## Design notes
Idempotence is an essential design property in Matt's automation scripts. Wizard scripts must be safe to re-run after partial failures or Ctrl-C interrupts, updating existing keys in place without generating duplicate entries or corrupting state.
