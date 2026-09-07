---
package: rjm
name: Lib mirror drift
slug: lib-mirror-drift
kind: gate
package_phase: rjm:verify
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/ai-agents-generation-and-release/SKILL.md, sha256: f21f81ca99b028e049733f4a75da58c62b2603d0c74e74bfd6a88459ae76272d}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Lib mirror drift

## Definition — verbatim
> "package edited without sync" — .claude/skills/ai-agents-generation-and-release/SKILL.md:108

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/ai-agents-generation-and-release/SKILL.md | 108 | used here | Drift gate ensuring shared Python packages in scripts/ are synchronized into .claude/lib/ with relative imports. |

## Consumes
Shared Python packages under `scripts/` (`hook_utilities/`, `github_core/`, `ai_review_common/`).

## Produces
Verification status from `scripts/sync_plugin_lib.py --check`.

## When applied
Checked during pre-push and CI workflows whenever Python utilities in `scripts/` are modified.

## Sub-concepts
none

## Part of
phase-3-run-the-drift-gates-locally-before-pushing

## Implementation status
defects: unfailable-gate, doc-drift

## Design notes
Lib mirror drift is the verification gate guarding the synchronization of shared Python library code. Because `.claude/lib/` must mirror `scripts/` with relative imports for plugin portability, `scripts/sync_plugin_lib.py --check` verifies that changes in the canonical scripts directory have been synced to the mirror before PR submission.
