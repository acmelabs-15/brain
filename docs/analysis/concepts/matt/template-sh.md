---
package: matt
name: template.sh
slug: template-sh
kind: template
package_phase: matt:engineering
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: external/wizard.md, sha256: 47fd5b24319f7bd272a8b1060a1a9eedb8fd9b73cb0584bf56e1b01351fddec1}
  - {path: skills/engineering/wizard/SKILL.md, sha256: bdf31d48211ea559878f95a4f344aeabf8d85897488ba564382bab0b000daac1}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# template.sh

## Definition — verbatim
(used, not defined)

> "The delightful UX is already solved by [template.sh](template.sh)" — skills/engineering/wizard/SKILL.md:10

## Also called — verbatim
`template` — external/wizard.md:40

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| external/wizard.md | 40 | used here | Details the reusable shell script library that handles wizard terminal UX, secret entry, and upserts. |
| skills/engineering/wizard/SKILL.md | 10 | used here | Instructs the agent to copy template.sh and author stages without hand-editing the core library. |

## Consumes
Scoped wizard stages, target URLs, and destination variable mappings.

## Produces
A self-contained, executable interactive bash script.

## When applied
Copied as the starting skeleton whenever generating a setup or migration wizard.

## Sub-concepts
none

## Part of
wizard

## Implementation status
clean

## Design notes
`template.sh` is the foundational bash template shipped with the wizard skill. It provides a standardized terminal UI library (screen clearing, secret masking, URL launching, progress tracking, idempotent upserts) so that agents author only stage logic rather than reinventing shell scripting conventions.
