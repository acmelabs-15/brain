---
unit: inv-matt-2
phase: 1
package: matt
session: 011
subagent_returned: complete
---

# Unit inv-matt-2

## Files assigned
- [x] sources/matt/.changeset/remove-em-dashes-repo-wide.md
- [x] sources/matt/.changeset/skill-tool-invocation-terminology.md
- [x] sources/matt/.changeset/user-invoked-skill-invocation.md
- [x] sources/matt/.changeset/wait-what-context-map.md
- [x] sources/matt/.claude-plugin/marketplace.json
- [x] sources/matt/.claude-plugin/plugin.json
- [x] sources/matt/.github/workflows/release.yml
- [x] sources/matt/.gitignore
- [x] sources/matt/.out-of-scope/mainstream-issue-trackers-only.md
- [x] sources/matt/.out-of-scope/question-limits.md
- [x] sources/matt/.out-of-scope/setup-skill-verify-mode.md

## Outputs produced
- docs/analysis/inventory/matt/changeset-remove-em-dashes-repo-wide-md.md (2342 bytes)
- docs/analysis/inventory/matt/changeset-skill-tool-invocation-terminology-md.md (4782 bytes)
- docs/analysis/inventory/matt/changeset-user-invoked-skill-invocation-md.md (4456 bytes)
- docs/analysis/inventory/matt/changeset-wait-what-context-map-md.md (1823 bytes)
- docs/analysis/inventory/matt/claude-plugin-marketplace-json.md (2328 bytes)
- docs/analysis/inventory/matt/claude-plugin-plugin-json.md (3804 bytes)
- docs/analysis/inventory/matt/github-workflows-release-yml.md (2224 bytes)
- docs/analysis/inventory/matt/gitignore.md (1094 bytes)
- docs/analysis/inventory/matt/out-of-scope-mainstream-issue-trackers-only-md.md (3501 bytes)
- docs/analysis/inventory/matt/out-of-scope-question-limits-md.md (2648 bytes)
- docs/analysis/inventory/matt/out-of-scope-setup-skill-verify-mode-md.md (2726 bytes)

## Scripts executed
none

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- Addressed all Phase 1V verification findings:
  - `.changeset/skill-tool-invocation-terminology.md`: Added `.agents/invocation.md` (line 9), `cross-skill invocation` (line 5), `harness-neutral` (line 7), `trigger syntax` (line 7), and all invoked/referenced skills.
  - `.claude-plugin/marketplace.json`: Added `Claude Code plugin` (line 7), `spec/ticket flows` (line 12), and `domain modelling` (line 12).
  - `.gitignore`: Clean, verified pass.
- `.claude-plugin/plugin.json` exposes 25 active production skills to Claude Code users, deliberately omitting experimental skills in `skills/in-progress/` (8 skills) and `skills/misc/` (4 skills).
- `.changeset/remove-em-dashes-repo-wide.md` cites `AGENTS.md`, which is a symlink to `CLAUDE.md` in `sources/matt/` (catalogued in Unit Facts §1.1).
- `.changeset/user-invoked-skill-invocation.md` and `.changeset/skill-tool-invocation-terminology.md` define invocation conventions codified in `.agents/invocation.md`, distinguishing between user-invoked and model-invoked skills.

## Blocked or uncertain
none

## Time and size
Approximate source read: 10111 bytes (~2500 tokens).
Approximate output written: 31728 bytes (~7800 tokens).
