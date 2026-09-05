---
unit: inv-rjm-40
phase: 1
package: rjm
session: 004
subagent_returned: complete
---

# Unit inv-rjm-40

## Files assigned
- [x] `.agents/architecture/ADR-092-omit-plugin-manifest-version.md`
- [x] `.agents/architecture/ADR-093-verify-red-checks-with-the-same-checker.md`
- [x] `.agents/architecture/ADR-094-govern-copilot-cli-compatibility.md`
- [x] `.agents/architecture/ADR-095-scoped-re-review-axes.md`

## Outputs produced
- `docs/analysis/inventory/rjm/agents-architecture-adr-092-omit-plugin-manifest-version-md.md` (10080 bytes)
- `docs/analysis/inventory/rjm/agents-architecture-adr-093-verify-red-checks-with-the-same-checker-md.md` (5658 bytes)
- `docs/analysis/inventory/rjm/agents-architecture-adr-094-govern-copilot-cli-compatibility-md.md` (6451 bytes)
- `docs/analysis/inventory/rjm/agents-architecture-adr-095-scoped-re-review-axes-md.md` (6008 bytes)
- `docs/analysis/inventory/rjm/_units/inv-rjm-40.md`

## Scripts executed
none

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- ADR-092 directly reverses ADR-079 (inventoried in inv-rjm-32) and supersedes ADR-091: it removes `version` from all plugin manifests (`.claude/.claude-plugin/plugin.json`, `src/copilot-cli/.claude-plugin/plugin.json`, and `src/claude/.claude-plugin/plugin.json`) so Claude Code resolves freshness from the git commit SHA. Inverts `build/scripts/validate_plugin_version_bump.py` to enforce absence of the field.
- ADR-093 mandates that local runs only clear red CI checks when tools, rulesets, flags, and versions are demonstrably identical; exemplifies the repository convention where governance ADRs maintain `implemented: true` while remaining `status: proposed` (acceptance reserved as a maintainer action).
- ADR-094 supersedes ADR-044, delegating Copilot CLI version ownership to executable surfaces (`.github/actions/ai-review/action.yml` for the required review pin and `.github/workflows/nightly-cli-smoke.yml` for the Renovate-managed smoke pin).
- ADR-095 establishes the pattern of formally recording rejected architectural proposals (`status: rejected`) to prevent re-litigation. Demonstrates via empirical incident data (PR #5059) why scoping re-reviews by past-flagged axes is fundamentally flawed. Also notes an existing gap in `validate_review_marker.py`, which validates formatting without enforcing axis set membership or completeness.

## Blocked or uncertain
none

## Time and size
Approximate source read: ~12,000 tokens (47,941 bytes).
Approximate output written: ~7,200 tokens (28,197 bytes in 4 cards + unit report).
