---
package: matt
name: ephemeral by default
slug: ephemeral-by-default
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

# ephemeral by default

## Definition — verbatim
> "Ephemeral by default" — external/wizard.md:42

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| external/wizard.md | 42 | defined here | Section heading and architectural pattern dictating that wizard scripts should be discarded after running unless needed for repeatable onboarding. |

## Consumes
A one-off task or personal setup script.

## Produces
Execution in a scratch directory followed by deletion, preventing repository clutter.

## When applied
Applied as the default rule when writing setup scripts, committing only when explicitly requested for shared repo onboarding.

## Sub-concepts
none

## Part of
wizard

## Implementation status
clean

## Design notes
"Ephemeral by default" is an architectural rule governing generated setup scripts in Matt's design. To prevent repositories from accumulating stale, single-use scripts, wizards are written to scratch paths and deleted upon completion unless explicitly intended as repeatable team onboarding assets.
