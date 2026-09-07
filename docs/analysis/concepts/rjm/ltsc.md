---
package: rjm
name: LTSC
slug: ltsc
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/windows-image-updater/SKILL.md, sha256: 5b0330798cb4c66b87902f3afb3fd95ca8803dbbaa49a8db04f30154c713e27c}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# LTSC

## Definition — verbatim
(used, not defined)

> "| **LTSC** | Long-Term Servicing Channel, a Windows release model (e.g., LTSC2019, LTSC2022) |" — .claude/skills/windows-image-updater/SKILL.md:39

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/windows-image-updater/SKILL.md | 39 | defined here | Defined in the required knowledge table as the Windows servicing channel release model. |

## Consumes
none

## Produces
none

## When applied
none

## Sub-concepts
none

## Part of
none

## Implementation status
defects: doc-drift

## Design notes
`LTSC` (Long-Term Servicing Channel) is an operating system release model acronym designating stable Windows release branches rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
