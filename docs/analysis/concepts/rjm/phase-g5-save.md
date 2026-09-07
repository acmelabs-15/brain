---
package: rjm
name: Phase G5: Save
slug: phase-g5-save
kind: phase
package_phase: rjm:spec
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/adr-generator/SKILL.md, sha256: 24f61b48fb967e2617d4a41e1d0e5c34f1895f3b9b69764f5b778692c18b34bb}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Phase G5: Save

## Definition — verbatim
(used, not defined)

> "### Phase G5: Save" — .claude/skills/adr-generator/SKILL.md:178

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/adr-generator/SKILL.md | 178 | defines | Fifth phase in ADR generator workflow writing the validated ADR to its destination directory and recommending multi-agent review. |

## Consumes
Fully validated ADR content and resolved file path from earlier phases.

## Produces
Persisted ADR file on disk and a recommendation to initiate multi-agent debate review via adr-review.

## When applied
Final phase of adr-generator after Phase G4 validation succeeds.

## Sub-concepts
none

## Part of
adr-generator

## Implementation status
clean

## Design notes
The persistence and handoff phase of the ADR generator workflow. In Phase G5, the generator writes the validated markdown file to the destination path matching detected naming conventions and zero-padding, then recommends that the author invoke adr-review for multi-agent validation.
