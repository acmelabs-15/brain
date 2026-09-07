---
package: rjm
name: Full pipeline staleness
slug: full-pipeline-staleness
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

# Full pipeline staleness

## Definition — verbatim
> "any canonical edit not mirrored to owned prefixes" — .claude/skills/ai-agents-generation-and-release/SKILL.md:107

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/ai-agents-generation-and-release/SKILL.md | 107 | used here | Drift gate validating that canonical source edits are fully reflected across all generator-owned prefixes. |

## Consumes
Entire canonical repository state and derived prefixes (`src/`, `.github/instructions/`, `docs/agent-catalog.md`).

## Produces
Verification verdict from `build/scripts/build_all.py --check`.

## When applied
Run in the `build-all-check` pre-push hook and CI pipelines before merging PRs.

## Sub-concepts
none

## Part of
phase-3-run-the-drift-gates-locally-before-pushing

## Implementation status
defects: unfailable-gate, doc-drift

## Design notes
Full pipeline staleness is the comprehensive repo-wide drift gate executed by `build/scripts/build_all.py --check`. By snapshotting owned trees and executing all seven generators in read-only mode, it ensures that every rule, skill, command, hook, and catalog document is strictly up to date with canonical sources before changes can be pushed or merged.
