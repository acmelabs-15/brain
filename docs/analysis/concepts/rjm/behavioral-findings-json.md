---
package: rjm
name: behavioral-findings.json
slug: behavioral-findings-json
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

# behavioral-findings.json

## Definition — verbatim
(used, not defined)

> "Phase 4: Behavioral        (Sonnet agents, 3-7m) -> behavioral-findings.json" — .claude/skills/doc-accuracy/SKILL.md:70

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/doc-accuracy/SKILL.md | 70 | defined here | Artifact specification declaring Phase 4 behavioral findings JSON output path. |

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
`behavioral-findings.json` is an artifact file name emitted by Phase 4 of doc-accuracy storing behavioral verification findings rather than an independent SDLC lifecycle concept, classified as `kind: name-only` per D-023.
