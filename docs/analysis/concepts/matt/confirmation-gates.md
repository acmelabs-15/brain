---
package: matt
name: confirmation gates
slug: confirmation-gates
kind: gate
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: CHANGELOG.md, sha256: ef5b5c5dfab4103bebcff8820eadbc9634b45fb06c2098c5ce39fb83039b4bcd}
  - {path: external/wizard.md, sha256: 47fd5b24319f7bd272a8b1060a1a9eedb8fd9b73cb0584bf56e1b01351fddec1}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# confirmation gates

## Definition — verbatim
(used, not defined)
> "<td>Sequences the irreversible steps behind confirmation gates</td>" — external/wizard.md:30

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| CHANGELOG.md | 46 | used here | Highlighted as a UX safety mechanism in the wizard bash script template. |
| external/wizard.md | 30 | used here | Explains that one-off migrations sequence irreversible actions behind explicit confirmation gates. |

## Consumes
An impending irreversible state transition or sensitive operational action.

## Produces
Explicit interactive user confirmation or aborted script execution.

## When applied
Before executing irreversible steps, destructive operations, or secret writes in generated wizard scripts.

## Sub-concepts
none

## Part of
wizard

## Implementation status
defects: missing-path, doc-drift (in CHANGELOG.md)

## Design notes
Confirmation gates are interactive verification checkpoints embedded in generated wizard scripts to ensure that users explicitly acknowledge and verify irreversible actions before execution proceeds.
