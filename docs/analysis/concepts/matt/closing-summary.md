---
package: matt
name: closing summary
slug: closing-summary
kind: artifact
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

# closing summary

## Definition — verbatim
(used, not defined)

> "and a closing summary of everything it had to skip." — external/wizard.md:40

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| external/wizard.md | 40 | used here | Final terminal screen of a wizard detailing completed actions, written values, and skipped items. |

## Consumes
The execution log, written variable lists, and skipped warning stages from the wizard run.

## Produces
A consolidated terminal report outlining what succeeded and what manual steps remain.

## When applied
Rendered automatically at the conclusion of all wizard stages.

## Sub-concepts
none

## Part of
wizard

## Implementation status
clean

## Design notes
The closing summary is the final terminal view rendered by a wizard script. It provides immediate visibility into which files were updated, which secrets were saved to CI, and which external steps could not be automated (e.g., if `gh` CLI was missing), ensuring the human knows exactly what remains.
