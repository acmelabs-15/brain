---
package: rjm
name: "Phase 4: Regenerate All Mirrors"
slug: phase-4-regenerate-all-mirrors
kind: phase
package_phase: rjm:cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/ai-agents-portability-campaign/SKILL.md, sha256: 826dba704e99870bb0d7c622006959840c8d96ac45eb540b94b5eb9e1f6ffae9}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Phase 4: Regenerate All Mirrors

## Definition — verbatim
> "### Phase 4: Regenerate All Mirrors" — .claude/skills/ai-agents-portability-campaign/SKILL.md:167

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/ai-agents-portability-campaign/SKILL.md | 167 | defined here | Automation phase synchronizing all downstream platform mirrors from canonical sources. |

## Consumes
Validated canonical sources and generator scripts (`build/generate_agents.py`, `scripts/sync_plugin_lib.py`).

## Produces
Synchronized mirror artifacts across `.claude/` and `src/copilot-cli/`.

## When applied
Executed after canonical tests pass to propagate changes across all supported harness mirrors.

## Sub-concepts
none

## Part of
ai-agents-portability-campaign

## Implementation status
defects: doc-drift, missing-path

## Design notes
Phase 4 runs automated generator pipelines to re-derive all platform-specific mirrors from updated canonical sources in a single pass. Automated synchronization prevents manual copy-paste errors and maintains absolute parity between Claude Code and Copilot CLI surfaces.
