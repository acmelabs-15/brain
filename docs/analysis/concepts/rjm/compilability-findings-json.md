---
package: rjm
name: compilability-findings.json
slug: compilability-findings-json
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/doc-accuracy/SKILL.md, sha256: a01623b7716f524ef453a28f9eec5d414f53273557b76304d0c250563e82435d}
  - {path: .claude/skills/doc-accuracy/scripts/doc_accuracy.py, sha256: e2a6c5623a7e91beaa30b099757c63e1648f530db3e3d2b4d2281dc34f4cc2f8}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# compilability-findings.json

## Definition — verbatim
(used, not defined)

> "Phase 3: Compilability     (script-only, <60s)  -> compilability-findings.json" — .claude/skills/doc-accuracy/SKILL.md:69

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/doc-accuracy/scripts/doc_accuracy.py | 1358 | defined here | Output file written by Phase 3 containing compilability verification status and findings. |
| .claude/skills/doc-accuracy/SKILL.md | 69 | defined here | Artifact specification declaring Phase 3 output artifact path and format. |

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
defects: doc-drift, script-bug, internal-contradiction

## Design notes
`compilability-findings.json` is an artifact file name emitted by Phase 3 of doc-accuracy storing symbol check findings rather than an independent SDLC lifecycle concept, classified as `kind: name-only` per D-023.
