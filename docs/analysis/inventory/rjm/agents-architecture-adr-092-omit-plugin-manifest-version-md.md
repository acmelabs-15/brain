---
package: rjm
path: .agents/architecture/ADR-092-omit-plugin-manifest-version.md
type: agent
bytes: 23330
unit: inv-rjm-40
in_scope_via: .agents/architecture/README.md
aliases: []
memo_inputs:
  - {path: .agents/architecture/ADR-092-omit-plugin-manifest-version.md, sha256: 462ed9d98ef426df4d902de7c15020d39c32d9d7e388392a5bfecd67b0bb2077}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .agents/architecture/ADR-092-omit-plugin-manifest-version.md

## Purpose — required, verbatim
> "Delete `version` from all three packaged plugin manifests and keep it deleted. Freshness resolves from the git commit SHA." — .agents/architecture/ADR-092-omit-plugin-manifest-version.md:77

## Design intent — required
Architecture decision record establishing that the `version` field is removed from all packaged plugin manifests (`.claude/.claude-plugin/plugin.json`, `src/copilot-cli/.claude-plugin/plugin.json`, and `src/claude/.claude-plugin/plugin.json`) and marketplace catalogs, switching Claude Code freshness resolution to the underlying git commit SHA. Resolves the severe pull-request serialization and rebump contention measured in issue #4080 (where 14 of 22 conflicting PRs conflicted on the version line alone) and eliminates torn default-branch states between content changes and version bumps without relying on failure-prone, permission-blocked post-merge automation bots. Aligns with GitHub Copilot CLI's documented optional-metadata model while providing automatic, per-commit cache invalidation across environments.

## Phase — required
cross-phase

## Inputs — required
- Plugin manifest `.claude/.claude-plugin/plugin.json` — .agents/architecture/ADR-092-omit-plugin-manifest-version.md:28
- Plugin manifest `src/copilot-cli/.claude-plugin/plugin.json` — .agents/architecture/ADR-092-omit-plugin-manifest-version.md:29
- Plugin manifest `src/claude/.claude-plugin/plugin.json` — .agents/architecture/ADR-092-omit-plugin-manifest-version.md:30
- Marketplace catalog `.claude-plugin/marketplace.json` — .agents/architecture/ADR-092-omit-plugin-manifest-version.md:69
- Marketplace catalog `.github/plugin/marketplace.json` — .agents/architecture/ADR-092-omit-plugin-manifest-version.md:70
- "Issue #4080 measured the result on the open-PR queue. Of 22 conflicting PRs, **14 conflicted on nothing but the version line**." — .agents/architecture/ADR-092-omit-plugin-manifest-version.md:36
- Copilot CLI bundle reference `~/.copilot/pkg/linux-x64/1.0.78-0/app.js` — .agents/architecture/ADR-092-omit-plugin-manifest-version.md:252

## Outputs — required
- "No packaged manifest carries a `version` field." — .agents/architecture/ADR-092-omit-plugin-manifest-version.md:79
- "`build/scripts/validate_plugin_version_bump.py` is inverted: it now fails, exit 1, when any of the three manifests carries the key." — .agents/architecture/ADR-092-omit-plugin-manifest-version.md:79
- "A repository-state test in `tests/build_scripts/test_validate_plugin_version_bump.py` fails if one appears in either marketplace file." — .agents/architecture/ADR-092-omit-plugin-manifest-version.md:81
- "`check_plugin_manifest_parity.py` keeps only the description-count check (#2187, #3651). With no version there is nothing to hold equal." — .agents/architecture/ADR-092-omit-plugin-manifest-version.md:83
- "`.claude/rules/plugin-version-bump.md` is rewritten from a rebump recipe into that rule, and `.claude/rules/knowledge-persistence.md` drops its MUST to bump the manifests." — .agents/architecture/ADR-092-omit-plugin-manifest-version.md:85-86

## Invokes — required
- config .claude/.claude-plugin/plugin.json — .agents/architecture/ADR-092-omit-plugin-manifest-version.md:28
- config src/copilot-cli/.claude-plugin/plugin.json — .agents/architecture/ADR-092-omit-plugin-manifest-version.md:29
- config src/claude/.claude-plugin/plugin.json — .agents/architecture/ADR-092-omit-plugin-manifest-version.md:30
- config .claude-plugin/marketplace.json — .agents/architecture/ADR-092-omit-plugin-manifest-version.md:69
- config .github/plugin/marketplace.json — .agents/architecture/ADR-092-omit-plugin-manifest-version.md:70
- script build/scripts/validate_plugin_version_bump.py — .agents/architecture/ADR-092-omit-plugin-manifest-version.md:79
- script build/scripts/check_plugin_manifest_parity.py — .agents/architecture/ADR-092-omit-plugin-manifest-version.md:32
- script tests/build_scripts/test_validate_plugin_version_bump.py — .agents/architecture/ADR-092-omit-plugin-manifest-version.md:81
- doc .claude/rules/plugin-version-bump.md — .agents/architecture/ADR-092-omit-plugin-manifest-version.md:85
- doc .claude/rules/knowledge-persistence.md — .agents/architecture/ADR-092-omit-plugin-manifest-version.md:85
- file .github/workflows/validate-plugin-version-bump.yml — .agents/architecture/ADR-092-omit-plugin-manifest-version.md:99
- script scripts/validation/run_plugin_version_bump_ci.py — .agents/architecture/ADR-092-omit-plugin-manifest-version.md:190
- doc AGENTS.md — .agents/architecture/ADR-092-omit-plugin-manifest-version.md:193
- script .claude/skills/merge-resolver/scripts/resolve_pr_conflicts.py — .agents/architecture/ADR-092-omit-plugin-manifest-version.md:194
- script scripts/dev/dogfood_copilot_plugin.py — .agents/architecture/ADR-092-omit-plugin-manifest-version.md:195
- doc .agents/governance/GENERATOR-FILES.md — .agents/architecture/ADR-092-omit-plugin-manifest-version.md:197
- file scripts/ci/taste_count_baseline.txt — .agents/architecture/ADR-092-omit-plugin-manifest-version.md:222
- file scripts/validation/vendor_portability_baseline.txt — .agents/architecture/ADR-092-omit-plugin-manifest-version.md:225
- doc ADR-079 — .agents/architecture/ADR-092-omit-plugin-manifest-version.md:16
- doc ADR-091 — .agents/architecture/ADR-092-omit-plugin-manifest-version.md:16
- doc ADR-083 — .agents/architecture/ADR-092-omit-plugin-manifest-version.md:198
- doc ADR-072 — .agents/architecture/ADR-092-omit-plugin-manifest-version.md:241
- doc ADR-035 — .agents/architecture/ADR-092-omit-plugin-manifest-version.md:242

## Invoked by — required
- doc ADR-092 — .agents/architecture/README.md:147
- agent ADR-092 — .agents/architecture/ADR-079-merge-time-plugin-version-bump.md:16
- agent ADR-092 — .agents/architecture/ADR-083-copilot-dogfood-surface-separation.md:390
- agent ADR-092 — .agents/architecture/ADR-091-post-merge-version-bot.md:7
- script ADR-092 — build/scripts/validate_plugin_version_bump.py:43
- script ADR-092 — build/scripts/check_plugin_manifest_parity.py:8
- script ADR-092 — scripts/dev/dogfood_copilot_plugin.py:124
- script ADR-092 — scripts/validation/run_plugin_version_bump_ci.py:24

Concepts named:
- `plugin.json` — .agents/architecture/ADR-092-omit-plugin-manifest-version.md:26 — used here
- `marketplace.json` — .agents/architecture/ADR-092-omit-plugin-manifest-version.md:45 — used here
- `Version management` — .agents/architecture/ADR-092-omit-plugin-manifest-version.md:40 — used here
- `Explicit version` — .agents/architecture/ADR-092-omit-plugin-manifest-version.md:51 — used here
- `Commit-SHA version` — .agents/architecture/ADR-092-omit-plugin-manifest-version.md:55 — defined here
- `skillsCacheDirty` — .agents/architecture/ADR-092-omit-plugin-manifest-version.md:63 — used here
- `pluginOperationsUpdatePlugin` — .agents/architecture/ADR-092-omit-plugin-manifest-version.md:63 — used here
- `manifest-parity gate` — .agents/architecture/ADR-092-omit-plugin-manifest-version.md:99 — used here
- `Post-merge auto-bump bot` — .agents/architecture/ADR-092-omit-plugin-manifest-version.md:115 — used here
- `GitHub merge queue` — .agents/architecture/ADR-092-omit-plugin-manifest-version.md:116 — used here
- `count_ratchet` — .agents/architecture/ADR-092-omit-plugin-manifest-version.md:155 — used here
- `EXIT_REGRESSION` — .agents/architecture/ADR-092-omit-plugin-manifest-version.md:157 — used here
- `content fingerprint` — .agents/architecture/ADR-092-omit-plugin-manifest-version.md:195 — defined here
- `merge-resolver` — .agents/architecture/ADR-092-omit-plugin-manifest-version.md:199 — used here
- `resolve_plugin_manifest_conflict` — .agents/architecture/ADR-092-omit-plugin-manifest-version.md:215 — defined here
- `ratchet files` — .agents/architecture/ADR-092-omit-plugin-manifest-version.md:226 — used here

## Structure
- # ADR-092: Omit `version` From Plugin Manifests and Resolve Freshness From the Commit SHA
- ## Status
- ## Date
- ## Context
- ### The measured cost
- ### What the hosts actually do
- ### This repository, measured
- ## Decision
- ### Why ADR-079's objection does not apply
- ## Prior Art Investigation
- ### What Currently Exists
- ### Historical Rationale
- ## Rationale
- ### Alternatives Considered
- ### Trade-offs
- ## Why ADR-091 is superseded within hours of landing
- ## Consequences
- ### Positive
- ### Negative
- ### Neutral
- ## Impact on Dependent Components
- ## Implementation Notes
- ## Scope: which conflict class this closes
- ## Acceptance Criteria
- ## Related Decisions
- ## References

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
- Empirically measures pull-request conflicts across 22 concurrent PRs, demonstrating that 14 PRs conflicted on nothing other than the version string counter.
- Documents the host cache resolution hierarchy for Claude Code (plugin.json -> marketplace.json -> git commit SHA -> unknown) and analyzes Copilot CLI Linux x64 bundle 1.0.78-0 to overturn ADR-079's prior assumption that Copilot CLI strictly required a changing in-tree version.
- Replaces PR-time hand bumps and fragile post-merge automation bots (which failed silently due to `[skip ci]`, branch protection ruleset 11104075 blocking `github-actions[bot]`, and `bot_managed=True` checks) with a static zero-write model where freshness resolves from the commit SHA.
- Inverts `validate_plugin_version_bump.py` to assert absence of the version key rather than presence/strictly-greater increase, preserving the CLI signature (0 clean, 1 violation, 2 config error).

## Context cost
23330 bytes, approximately 5800 tokens.
