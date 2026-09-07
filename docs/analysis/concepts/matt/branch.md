---
package: matt
name: /branch
slug: branch
kind: name-only
package_phase: matt:productivity
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: docs/productivity/handoff.md, sha256: a8020faa68d0077e8a5701e817817c8858a5f1a70d5b3f16dc8034e7d8df0b44}
  - {path: external/handoff.md, sha256: e5ac1ebb0b42a1e7c5fbddb1e0b75cff7e08aadb480e116082812741225e6f5f}
  - {path: skills/in-progress/implement-spec/SKILL.md, sha256: f703b5f41df9c2202e19540d203e0d5fc32613572a838a070136cc22e712b129}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# /branch

## Definition — verbatim
(used, not defined)

> "**Is this the same as `/branch`, `--fork-session`, or the built-in `/handoff`?**" — docs/productivity/handoff.md:53

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/productivity/handoff.md | 53 | used here | Contrasted with /handoff as an unshipped command or alternative branching mechanism. |
| external/handoff.md | 50 | used here | Mentioned in FAQ contrasting targeted handoffs with session branching. |
| skills/in-progress/implement-spec/SKILL.md | 9 | used here | Refers to implementing an entire specification on a single git branch. |

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
`/branch` is a command identifier and git branch reference mentioned in FAQ comparisons and implementation goals rather than an authored lifecycle concept in the package.
