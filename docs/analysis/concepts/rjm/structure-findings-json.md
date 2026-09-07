---
package: rjm
name: structure-findings.json
slug: structure-findings-json
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/doc-accuracy/SKILL.md, sha256: a01623b7716f524ef453a28f9eec5d414f53273557b76304d0c250563e82435d}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# structure-findings.json

## Definition — verbatim
(used, not defined)

> "Phase 6: Structure         (Sonnet agent, 1-2m)  -> structure-findings.json" — .claude/skills/doc-accuracy/SKILL.md:72

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/doc-accuracy/SKILL.md | 72 | defined here | Artifact specification declaring Phase 6 structural findings JSON output path. |

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
`structure-findings.json` is an artifact file name emitted by Phase 6 of doc-accuracy storing structural and comment quality findings rather than an independent SDLC lifecycle concept, classified as `kind: name-only` per D-023.
