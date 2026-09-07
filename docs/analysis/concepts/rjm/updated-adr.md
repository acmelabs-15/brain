---
package: rjm
name: Updated ADR
slug: updated-adr
kind: artifact
package_phase: rjm:review
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/adr-review/references/artifacts.md, sha256: 82daf59b64761376f05dd9a47a02294f060cf150675f6c926722ee1d7c300c65}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Updated ADR

## Definition — verbatim
(used, not defined)

> "## Updated ADR" — .claude/skills/adr-review/references/artifacts.md:36

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/adr-review/references/artifacts.md | 36 | defines | Revised ADR document incorporating debate feedback saved to `.agents/architecture/ADR-NNN-[title].md`. |

## Consumes
Original proposed ADR and synthesized resolutions from multi-agent review rounds.

## Produces
Final revised ADR file saved to `.agents/architecture/` with updated status upon consensus.

## When applied
Generated in Phase 3 and finalized upon consensus in Phase 4 of adr-review.

## Sub-concepts
none

## Part of
adr-review

## Implementation status
defects: missing-path

## Design notes
The primary output artifact of the adr-review validation process. It represents the updated architectural decision record incorporating reviewer critiques, addressing blocking concerns, capturing dissent in alternatives, and updating lifecycle status upon achieving consensus.
