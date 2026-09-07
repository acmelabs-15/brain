---
package: matt
name: vertical-slice-rules
slug: vertical-slice-rules
kind: checklist
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

# vertical-slice-rules

## Definition — verbatim
> "<vertical-slice-rules>" — skills/engineering/to-tickets/SKILL.md:29

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/engineering/to-tickets/SKILL.md | 29 | defined here | Opening tag bounding four mandatory criteria for decomposing work into vertical slice tickets. |

## Consumes
Proposed feature specifications and draft ticket breakdown.

## Produces
Strictly bounded vertical slice tickets meeting verticality, verifiability, context window sizing, and prefactoring requirements.

## When applied
Step 3 ("Draft vertical slices") of `/to-tickets` when structuring work into tracer-bullet tickets.

## Sub-concepts
none

## Part of
to-tickets

## Implementation status
defects: missing-path (skills/engineering/to-tickets/SKILL.md:11 missing setup command)

## Design notes
A four-point criteria checklist governing ticket granularity in `/to-tickets`: each slice must span all architectural layers end-to-end (vertical, not horizontal), be independently demoable/verifiable, fit within a single fresh context window, and sequence any prefactoring first. This prevents horizontal silos and oversized work units that overflow agent context windows.
