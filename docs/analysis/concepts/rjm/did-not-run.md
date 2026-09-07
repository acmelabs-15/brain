---
package: rjm
name: DID_NOT_RUN
slug: did-not-run
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/doc-accuracy/SKILL.md, sha256: a01623b7716f524ef453a28f9eec5d414f53273557b76304d0c250563e82435d}
  - {path: .claude/skills/doc-accuracy/scripts/doc_accuracy.py, sha256: e2a6c5623a7e91beaa30b099757c63e1648f530db3e3d2b4d2281dc34f4cc2f8}
  - {path: scripts/quality_gate/check_critical_failures.py, sha256: 0a1301cd214490a3495f8a8e79ee17029c7c35087d15be762675a82d5cb2e3a8}
  - {path: scripts/quality_gate/external_signal_gate.py, sha256: cb8b033119ec2c000474d36abc089ece414b9a36cf71b30921df7a95b37ed48d}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# DID_NOT_RUN

## Definition — verbatim
(used, not defined)

> "DID_NOT_RUN" — .claude/skills/doc-accuracy/scripts/doc_accuracy.py:931

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/doc-accuracy/scripts/doc_accuracy.py | 931 | defined here | Status value returned by Phase 3 compilability check when no source symbols are available to verify. |
| .claude/skills/doc-accuracy/SKILL.md | 130 | defined here | Documents Phase 3 fallback behavior emitting DID_NOT_RUN on empty symbol index. |
| scripts/quality_gate/check_critical_failures.py | 22 | used here | Added to blocking verdict set to ensure unrun verification checks prevent gate approval. |
| scripts/quality_gate/external_signal_gate.py | 79 | used here | Mapped to UNKNOWN in external signal normalization to prevent unexecuted reviews from passing. |

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
defects: script-bug, internal-contradiction, doc-drift, orphan

## Design notes
`DID_NOT_RUN` is an execution status constant signaling skipped or unexecuted verification checks rather than an independent SDLC lifecycle concept, classified as `kind: name-only` per D-023.
