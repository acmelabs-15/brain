---
package: rjm
name: MUST-9
slug: must-9
kind: gate
package_phase: rjm:cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/validation/agent_skill_discriminator_baseline.py, sha256: 25e7f6b164c7be6361c22acacc683a54b4b053fb01051e8c0643d223f09dfef3}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# MUST-9

## Definition — verbatim
> "``.claude/rules/ci-scripts.md`` MUST-9: \"A ratchet baseline is a claim" — scripts/validation/agent_skill_discriminator_baseline.py:160

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/agent_skill_discriminator_baseline.py | 160 | used here | Cited as the governance rule prohibiting ratchet baseline measurements from reading untracked working tree state. |

## Consumes
CI scripts and measurement tools generating or verifying ratchet baselines.

## Produces
Policy enforcement ensuring that ratchet baseline measurements read exclusively from committed git refs rather than on-disk directory walks.

## When applied
During the implementation and execution of any CI script or validator computing a ratchet baseline across repository artifacts.

## Sub-concepts
none

## Part of
ci-scripts-rules

## Implementation status
defects: missing-path

## Design notes
A governance rule (MUST-9) in `.claude/rules/ci-scripts.md` requiring ratchet baselines to measure committed ref state rather than untracked working tree files, preventing baseline pollution and ensuring reproducible checks across environments.
