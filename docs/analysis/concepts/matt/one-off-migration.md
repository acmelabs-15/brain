---
package: matt
name: one-off migration
slug: one-off-migration
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

# one-off migration

## Definition — verbatim
(used, not defined)

> "running a one-off migration, moving a project from state A to state B." — external/wizard.md:25

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| external/wizard.md | 25 | used here | Identifies transitional project migrations as a core use case for generating ephemeral setup wizards. |

## Consumes
A project state transition requiring non-repeatable configuration, schema updates, or environment variable adjustments.

## Produces
An ephemeral wizard script that guides the cutover and is deleted after execution.

## When applied
When transitioning infrastructure, upgrading major dependencies, or moving data between systems.

## Sub-concepts
none

## Part of
wizard

## Implementation status
clean

## Design notes
A one-off migration is an operational transition that is executed once and never repeated. Because it does not justify permanent CI tooling or long-term repo automation, Matt's lifecycle encapsulates it in an ephemeral bash script that is run once and discarded.
