---
package: rjm
name: Full Rollback
slug: full-rollback
kind: technique
package_phase: rjm:ship
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: docs/codeql-rollout-checklist.md, sha256: 72ef700c707d07c429d84a9776f758a2f8fc5f450b08fedcefe835e8b7376441}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Full Rollback

## Definition — verbatim
> "### Full Rollback" — docs/codeql-rollout-checklist.md:361

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/codeql-rollout-checklist.md | 361 | defined here | Final emergency rollback procedure restoring all CodeQL workflows, configs, scripts, and skills to last known good commit. |

## Consumes
Catastrophic failures across both CI pipelines and local scanning scripts; git revision history.

## Produces
Complete removal or restoration of all CodeQL workflows, scripts, configuration files, and skills.

## When applied
When both CI and local scanning mechanisms are broken beyond quick repair.

## Sub-concepts
none

## Part of
none

## Implementation status
defects: always-failing-gate, missing-path, doc-drift

## Design notes
Full Rollback is the nuclear recovery option in the CodeQL deployment lifecycle. Employed only when both CI pipelines and local tooling are critically broken, it moves affected files to a backup branch or reverts them to the last known good commit, completely restoring the repository to a pre-CodeQL baseline without risking uncommitted changes.
