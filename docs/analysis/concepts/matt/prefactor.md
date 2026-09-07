---
package: matt
name: prefactor
slug: prefactor
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: skills/engineering/to-tickets/SKILL.md, sha256: 5c9fba69845c2519b9b35b9af42ae5142c21f8ca15ac2123dc2722002c8058ae}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# prefactor

## Definition — verbatim
> "Look for opportunities to prefactor the code to make the implementation easier." — skills/engineering/to-tickets/SKILL.md:23

## Also called — verbatim
> "prefactoring" — skills/engineering/to-tickets/SKILL.md:34

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/engineering/to-tickets/SKILL.md | 23 | defined here | Prescribes identifying codebase restructuring opportunities before adding new features. |

## Consumes
Codebase exploration insights and proposed feature design requirements.

## Produces
Preparatory refactoring tickets sequenced before feature implementation slices.

## When applied
During codebase exploration prior to drafting vertical slices, when restructuring existing code makes subsequent feature implementation easier.

## Sub-concepts
none

## Part of
to-tickets

## Implementation status
defects: missing-path (skills/engineering/to-tickets/SKILL.md:11 missing setup command)

## Design notes
Prefactoring embodies the principle "Make the change easy, then make the easy change." Rather than tangling structural adjustments with new feature logic within a single ticket or commit, prefactoring isolates preparatory restructuring into dedicated prerequisite tickets. This keeps diffs clean, lowers cognitive load, and ensures that when new functionality is introduced, the codebase already accommodates it cleanly.
