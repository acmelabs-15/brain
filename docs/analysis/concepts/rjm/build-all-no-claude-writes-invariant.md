---
package: rjm
name: build_all no-claude-writes invariant
slug: build-all-no-claude-writes-invariant
kind: gate
package_phase: rjm:cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/ai-agents-change-control/references/provenance.md, sha256: 04ccff20a5972dda6a64eea54b0e39b152b0c950046a9924e4f23d856a453cb3}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# build_all no-claude-writes invariant

## Definition — verbatim
> "build_all no-claude-writes invariant" — .claude/skills/ai-agents-change-control/references/provenance.md:12

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/ai-agents-change-control/references/provenance.md | 12 | defined here | Provenance table row documenting the build_all.py build invariant that prohibits generators from writing into .claude/. |

## Consumes
Build scripts in build/scripts/build_all.py.

## Produces
Build aborts and error exits if any generator writes into the canonical .claude/ source directory.

## When applied
Enforced on every execution of build_all.py during build and release pipelines.

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
The build_all no-claude-writes invariant enforces one-way code generation (REQ-003-010) by causing build_all.py to fail if any generator writes into .claude/, ensuring canonical skills are never overwritten by generated mirrors.
