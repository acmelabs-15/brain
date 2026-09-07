---
package: rjm
name: RETRO-STATE
slug: retro-state
kind: name-only
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/commands/retro.md, sha256: fbb66599fec7bacf613b20b35c9178a06bce46793cdca2f019063e2ecba02014}
  - {path: .claude/skills/retrospective/scripts/run_retrospective.py, sha256: 7bef09acd131cbf5a9bbe725c86d14b2024da5828e639f81d0d02cbdcf4e1d9e}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# RETRO-STATE

## Definition — verbatim
(used, not defined)

> "scratch. Skeletons carry the marker `<!-- RETRO-STATE: skeleton-pending-fill -->`" — .claude/commands/retro.md:10

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/commands/retro.md | 10 | used here | Documented as the HTML comment metadata key embedded in retrospective skeletons to track completion status. |
| .claude/skills/retrospective/scripts/run_retrospective.py | 425 | used here | Checked programmatically to verify that a target file is indeed an unfilled skeleton before allowing fill operations. |

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
clean

## Design notes
RETRO-STATE is an HTML comment metadata marker (`<!-- RETRO-STATE: ... -->`) embedded in retrospective markdown files to denote processing status rather than an active lifecycle concept per D-023.
