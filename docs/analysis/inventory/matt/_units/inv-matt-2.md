---
unit: inv-matt-2
phase: 1
package: matt
session: 001
subagent_returned: complete
---

# Unit inv-matt-2

## Files assigned
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/matt/.changeset/remove-em-dashes-repo-wide.md`
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/matt/.changeset/skill-tool-invocation-terminology.md`
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/matt/.changeset/user-invoked-skill-invocation.md`
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/matt/.changeset/wait-what-context-map.md`
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/matt/.claude-plugin/marketplace.json`
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/matt/.claude-plugin/plugin.json`
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/matt/.github/workflows/release.yml`
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/matt/.gitignore`
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/matt/.out-of-scope/mainstream-issue-trackers-only.md`
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/matt/.out-of-scope/question-limits.md`
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/matt/.out-of-scope/setup-skill-verify-mode.md`

## Outputs produced
- `docs/analysis/inventory/matt/changeset-remove-em-dashes-repo-wide-md.md` (1813 bytes)
- `docs/analysis/inventory/matt/changeset-skill-tool-invocation-terminology-md.md` (3203 bytes)
- `docs/analysis/inventory/matt/changeset-user-invoked-skill-invocation-md.md` (3251 bytes)
- `docs/analysis/inventory/matt/changeset-wait-what-context-map-md.md` (1731 bytes)
- `docs/analysis/inventory/matt/claude-plugin-marketplace-json.md` (1696 bytes)
- `docs/analysis/inventory/matt/claude-plugin-plugin-json.md` (3294 bytes)
- `docs/analysis/inventory/matt/github-workflows-release-yml.md` (1640 bytes)
- `docs/analysis/inventory/matt/gitignore.md` (1238 bytes)
- `docs/analysis/inventory/matt/out-of-scope-mainstream-issue-trackers-only-md.md` (2836 bytes)
- `docs/analysis/inventory/matt/out-of-scope-question-limits-md.md` (1996 bytes)
- `docs/analysis/inventory/matt/out-of-scope-setup-skill-verify-mode-md.md` (1893 bytes)

## Scripts executed
none

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- Unit inv-matt-2 covers repository configuration, plugin manifests, changeset histories, and architectural boundary documents (.out-of-scope/).
- AGENTS.md in sources/matt/ is a symlink to CLAUDE.md (§1.1); no inventory card was written for it per METHOD.md §1.1.
- Plugin manifests (.claude-plugin/plugin.json) enumerate 25 active skills across skills/engineering/ and skills/productivity/.
- Changeset documents capture critical lifecycle evolution:
  - Transition from prose-based skill invocation ("run /skill") to explicit tool calls (`Call the Skill tool with "..."`) to ensure invocation reliability and harness-neutrality.
  - Prohibition on calling user-invoked skills via the Skill tool, mandating that agents instruct users to run setup skills instead.
  - Multi-context repository support via CONTEXT-MAP.md routing to specific CONTEXT.md files.
  - Repo-wide styling constraint prohibiting em-dashes across prose and metadata.
- Boundary documents (.out-of-scope/) define core philosophy:
  - Issue tracker integration restricted to mainstream tools (GitHub, GitLab, Backlog.md) to limit CLI maintenance surface; custom and local markdown are escape hatches.
  - Grilling sessions deliberately lack hard question ceilings; conversational steering ("wrap up, summarise, and move on") is the intended control mechanism.
  - Setup verification is integrated conversationally into setup-matt-pocock-skills rather than split into a separate skill or command-line flag.
- None of this unit's files appear in docs/analysis/manifest/matt-duplicates.md (no duplication ledger entries).

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~2,500 tokens (10,111 bytes across 11 files); approximate tokens of output written: ~5,800 tokens (24,591 bytes across 11 inventory cards).
