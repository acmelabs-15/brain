---
package: rjm
name: sync-before-build chain
slug: sync-before-build-chain
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-103-skill-output-python-contract-correction.md, sha256: 7e0f36a70c1989ef807b0df12d36597bb7b75330c1cd42a1cd552b898a106ef0}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# sync-before-build chain

## Definition — verbatim
(used, not defined)

> "sync-before-build chain" — .agents/architecture/ADR-103-skill-output-python-contract-correction.md:250

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-103-skill-output-python-contract-correction.md | 250 | used here | Describes mirroring shared library files to `.claude/lib/` and `src/copilot-cli/lib/` before executing platform builds. |

## Consumes
Canonical library files and synchronization scripts.

## Produces
Synchronized platform mirror directories and built platform packages.

## When applied
Prior to running platform build commands (`build_all.py --platform copilot-cli`).

## Sub-concepts
none

## Part of
none

## Implementation status
defects: missing-path

## Design notes
Build sequencing pattern defined in `.claude/rules/generated-artifacts.md` requiring shared library files to be synchronized across target platform directories before platform packaging scripts run, preventing stale code inclusion.
