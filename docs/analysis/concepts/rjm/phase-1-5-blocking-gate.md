---
package: rjm
name: Phase 1.5 BLOCKING gate
slug: phase-1-5-blocking-gate
kind: gate
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/AGENTS.md, sha256: c36cd367a4f2c02dd84b708c93bcef1a0b76d811885f9f768ae4a98ac70cdc5a}
  - {path: scripts/check_skill_exists.py, sha256: 217d9c08ab8ab052abcfabed7a1f5db5c57d148ed2eb25407955b6d065892f16}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Phase 1.5 BLOCKING gate

## Definition — verbatim
> "**Role**: Skill existence verification for Phase 1.5 BLOCKING gate" — scripts/AGENTS.md:211

## Also called — verbatim
> "Used by Phase 1.5 BLOCKING gate to verify skill availability before operations." — scripts/check_skill_exists.py:5

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/AGENTS.md | 211 | defined here | Role specification documenting skill existence verification gate before proceeding with operations. |
| scripts/check_skill_exists.py | 5 | used here | Script docstring cites usage by Phase 1.5 BLOCKING gate to verify skill availability. |

## Consumes
Operation name, action name, and skill filesystem definitions.

## Produces
Binary gate verdict (exit 0 if skill exists, exit 1 if missing) halting workflow if unsatisfied.

## When applied
Triggered before workflow operations begin to ensure all required skill implementations exist on disk.

## Sub-concepts
check-skill-exists-py

## Part of
quality-gate

## Implementation status
defects: doc-drift, missing-path, orphan

## Design notes
A mandatory pre-execution verification gate in rjm that prevents agents from invoking missing or non-existent skills, halting execution before runtime errors occur.
