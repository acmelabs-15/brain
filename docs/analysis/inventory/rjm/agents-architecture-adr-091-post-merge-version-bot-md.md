---
package: rjm
path: .agents/architecture/ADR-091-post-merge-version-bot.md
type: agent
bytes: 15709
unit: inv-rjm-39
in_scope_via: .agents/architecture/README.md
aliases: []
memo_inputs:
  - {path: .agents/architecture/ADR-091-post-merge-version-bot.md, sha256: f9087705e02b6f98efcca48c002b33fe051035ea5db1f6912716c72890b16db8}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .agents/architecture/ADR-091-post-merge-version-bot.md

## Purpose — required, verbatim
> "**Accept the post-merge auto-bump bot for `plugin.json` and the committed count baselines.**" — .agents/architecture/ADR-091-post-merge-version-bot.md:120

## Design intent — required
Eliminates O(N^2) merge conflict serialization across open PRs caused by manual edits to scalar version fields in parity plugin manifests (`.claude/.claude-plugin/plugin.json` and `src/copilot-cli/.claude-plugin/plugin.json`) and committed code-quality count baselines (`taste_count_baseline.txt` and `ruff_count_baseline.txt`). By shifting version increments and baseline ratcheting to an automated post-merge GitHub Actions workflow running on `push` to `main`, PR branches can merge concurrently without rebumping or conflicting on scalar counters. (Note: While later superseded by ADR-092 due to GitHub Actions bot permissions and torn-main CI bypass failures, the architectural intent was to decouple PR author workflows from centralized counter ownership).

## Phase — required
none

## Inputs — required
Push events to the `main` branch with content diffs under `.claude/**` or `src/copilot-cli/**` (excluding `plugin.json`), current SemVer patch version in `.claude/.claude-plugin/plugin.json` and `src/copilot-cli/.claude-plugin/plugin.json`, quality counter results from `scripts/ci/taste_count_ratchet.py` and `scripts/ci/ruff_count_ratchet.py`, and baseline counters in `scripts/ci/taste_count_baseline.txt` and `scripts/ci/ruff_count_baseline.txt`.

## Outputs — required
Automated post-merge atomic commit to `main` updating the patch version in both parity manifests (`.claude/.claude-plugin/plugin.json` and `src/copilot-cli/.claude-plugin/plugin.json`) with commit message `chore(plugins): auto-bump version to <new> [skip ci]`; ratcheted baseline counts written to `scripts/ci/taste_count_baseline.txt` and `scripts/ci/ruff_count_baseline.txt`; inverted PR-time gate check that fails if a PR diff manually touches `version` in parity manifests.

## Invokes — required
- doc ADR-079 — .agents/architecture/ADR-091-post-merge-version-bot.md:6
- doc ADR-092 — .agents/architecture/ADR-091-post-merge-version-bot.md:7
- script build/scripts/validate_plugin_version_bump.py — .agents/architecture/ADR-091-post-merge-version-bot.md:47
- config .github/workflows/validate-plugin-version-bump.yml — .agents/architecture/ADR-091-post-merge-version-bot.md:49
- script build/scripts/check_plugin_manifest_parity.py — .agents/architecture/ADR-091-post-merge-version-bot.md:52
- script scripts/validation/run_plugin_version_bump_ci.py — .agents/architecture/ADR-091-post-merge-version-bot.md:68
- script scripts/ci/taste_count_ratchet.py — .agents/architecture/ADR-091-post-merge-version-bot.md:76
- script scripts/ci/count_ratchet.py — .agents/architecture/ADR-091-post-merge-version-bot.md:76
- script scripts/ci/ruff_count_ratchet.py — .agents/architecture/ADR-091-post-merge-version-bot.md:81
- config .github/workflows/pytest.yml — .agents/architecture/ADR-091-post-merge-version-bot.md:113
- doc .github/instructions/plugin-version-bump.instructions.md — .agents/architecture/ADR-091-post-merge-version-bot.md:204
- doc ADR-006 — .agents/architecture/ADR-091-post-merge-version-bot.md:271
- doc ADR-072 — .agents/architecture/ADR-091-post-merge-version-bot.md:273

## Invoked by — required
- doc .agents/architecture/README.md — .agents/architecture/README.md:208
- doc ADR-091 — .agents/architecture/ADR-079-merge-time-plugin-version-bump.md:7
- doc ADR-091 — .agents/architecture/ADR-092-omit-plugin-manifest-version.md:6

## Concepts named — required, verbatim
- `Post-Merge Bot` — .agents/architecture/ADR-091-post-merge-version-bot.md:12 — defined here
- `bot_managed` — .agents/architecture/ADR-091-post-merge-version-bot.md:16 — used here
- `manifest-only conflicts` — .agents/architecture/ADR-091-post-merge-version-bot.md:20 — defined here
- `taste-baseline-only conflicts` — .agents/architecture/ADR-091-post-merge-version-bot.md:20 — defined here
- `serialization cost` — .agents/architecture/ADR-091-post-merge-version-bot.md:20 — used here
- `Measured conflict classes` — .agents/architecture/ADR-091-post-merge-version-bot.md:28 — defined here
- `strictly-greater SemVer` — .agents/architecture/ADR-091-post-merge-version-bot.md:49 — used here
- `committed_baseline` — .agents/architecture/ADR-091-post-merge-version-bot.md:78 — used here
- `shallow-clone hazard` — .agents/architecture/ADR-091-post-merge-version-bot.md:110 — defined here
- `post-merge auto-bump bot` — .agents/architecture/ADR-091-post-merge-version-bot.md:120 — defined here
- `committed count baselines` — .agents/architecture/ADR-091-post-merge-version-bot.md:120 — defined here
- `PR-time gate` — .agents/architecture/ADR-091-post-merge-version-bot.md:127 — defined here
- `parity manifest` — .agents/architecture/ADR-091-post-merge-version-bot.md:129 — defined here
- `parity manifests` — .agents/architecture/ADR-091-post-merge-version-bot.md:153 — defined here
- `no-manual-bump enforcement` — .agents/architecture/ADR-091-post-merge-version-bot.md:151 — defined here
- `strict monotonicity` — .agents/architecture/ADR-091-post-merge-version-bot.md:155 — defined here
- `parity gate` — .agents/architecture/ADR-091-post-merge-version-bot.md:158 — defined here
- `Migration Plan` — .agents/architecture/ADR-091-post-merge-version-bot.md:184 — defined here
- `NBGV` — .agents/architecture/ADR-091-post-merge-version-bot.md:209 — used here
- `Helm chart` — .agents/architecture/ADR-091-post-merge-version-bot.md:211 — used here
- `Merge queue` — .agents/architecture/ADR-091-post-merge-version-bot.md:225 — used here
- `Custom merge driver` — .agents/architecture/ADR-091-post-merge-version-bot.md:226 — used here
- `Acceptance Criteria` — .agents/architecture/ADR-091-post-merge-version-bot.md:259 — defined here

## Structure
- `# ADR-091: Post-Merge Bot Owns Plugin Version and Count Baselines` — .agents/architecture/ADR-091-post-merge-version-bot.md:12
- `## Status` — .agents/architecture/ADR-091-post-merge-version-bot.md:14
- `## Date` — .agents/architecture/ADR-091-post-merge-version-bot.md:22
- `## Context` — .agents/architecture/ADR-091-post-merge-version-bot.md:26
- `### Measured conflict classes (2026-07-31, N=24 DIRTY)` — .agents/architecture/ADR-091-post-merge-version-bot.md:28
- `### Consumer inventory (measured, not from memory)` — .agents/architecture/ADR-091-post-merge-version-bot.md:43
- `### Why ADR-079's rejection is re-examined here` — .agents/architecture/ADR-091-post-merge-version-bot.md:84
- "### The `git rev-list --count` shallow-clone hazard" — .agents/architecture/ADR-091-post-merge-version-bot.md:110
- `## Decision` — .agents/architecture/ADR-091-post-merge-version-bot.md:118
- "### On the torn-`main` window" — .agents/architecture/ADR-091-post-merge-version-bot.md:166
- `## Migration Plan` — .agents/architecture/ADR-091-post-merge-version-bot.md:184
- `### Phase 1: deploy the bot (this ADR's implementation)` — .agents/architecture/ADR-091-post-merge-version-bot.md:186
- `### Phase 2: drain the existing queue` — .agents/architecture/ADR-091-post-merge-version-bot.md:200
- `## Prior Art Investigation` — .agents/architecture/ADR-091-post-merge-version-bot.md:207
- `## Rationale` — .agents/architecture/ADR-091-post-merge-version-bot.md:218
- `## Consequences` — .agents/architecture/ADR-091-post-merge-version-bot.md:230
- `### Positive` — .agents/architecture/ADR-091-post-merge-version-bot.md:232
- `### Negative` — .agents/architecture/ADR-091-post-merge-version-bot.md:240
- `### Neutral` — .agents/architecture/ADR-091-post-merge-version-bot.md:250
- `## Acceptance Criteria` — .agents/architecture/ADR-091-post-merge-version-bot.md:259
- `## Related Decisions` — .agents/architecture/ADR-091-post-merge-version-bot.md:268
- `## References` — .agents/architecture/ADR-091-post-merge-version-bot.md:277

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- missing-path · .agents/architecture/ADR-091-post-merge-version-bot.md:71 · References scripts/validation/validate_plugin_version_bump.py which does not exist in the repository (canonical script is at build/scripts/validate_plugin_version_bump.py).
- missing-path · .agents/architecture/ADR-091-post-merge-version-bot.md:188 · References planned workflow .github/workflows/post-merge-version-bump.yml which was deleted in PR #4179 after failed push-bot deployment and guarded by test_no_push_bot.py.
- internal-contradiction · .agents/architecture/ADR-091-post-merge-version-bot.md:16 · ADR records decision to deploy post-merge bot but status notes 4 silent failure modes (torn main on merge, never ran due to `[skip ci]`, ruleset 11104075 blocked push, `bot_managed` check blocked manual repair) causing immediate supersession by ADR-092.

## Observations
- Demonstrates the failure mode of branch-protection/ruleset interactions with automation: `github-actions[bot]` was not an authorized bypass actor on ruleset 11104075, resulting in silent GH013 push failures.
- Shows the subtle interaction where squash-merge commit messages quoting templates containing `[skip ci]` prevent subsequent CI workflows from triggering.
- Promptly superseded within 24 hours by ADR-092, which solved the conflict issue by removing the `version` field from manifests entirely.

## Context cost
15709 bytes, ~3900 tokens.
