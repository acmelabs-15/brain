---
unit: inv-matt-2
phase: 1
package: matt
session: 005
subagent_returned: complete
---

# Unit inv-matt-2

## Files assigned
- [x] sources/matt/.changeset/remove-em-dashes-repo-wide.md (350 bytes, 6 lines)
- [x] sources/matt/.changeset/skill-tool-invocation-terminology.md (1006 bytes, 10 lines)
- [x] sources/matt/.changeset/user-invoked-skill-invocation.md (1565 bytes, 12 lines)
- [x] sources/matt/.changeset/wait-what-context-map.md (191 bytes, 6 lines)
- [x] sources/matt/.claude-plugin/marketplace.json (605 bytes, 24 lines)
- [x] sources/matt/.claude-plugin/plugin.json (1636 bytes, 49 lines)
- [x] sources/matt/.github/workflows/release.yml (780 bytes, 38 lines)
- [x] sources/matt/.gitignore (21 bytes, 3 lines)
- [x] sources/matt/.out-of-scope/mainstream-issue-trackers-only.md (1573 bytes, 26 lines)
- [x] sources/matt/.out-of-scope/question-limits.md (1259 bytes, 19 lines)
- [x] sources/matt/.out-of-scope/setup-skill-verify-mode.md (1125 bytes, 16 lines)

## Outputs produced
- docs/analysis/inventory/matt/changeset-remove-em-dashes-repo-wide-md.md (2033 bytes)
- docs/analysis/inventory/matt/changeset-skill-tool-invocation-terminology-md.md (3091 bytes)
- docs/analysis/inventory/matt/changeset-user-invoked-skill-invocation-md.md (3119 bytes)
- docs/analysis/inventory/matt/changeset-wait-what-context-map-md.md (1597 bytes)
- docs/analysis/inventory/matt/claude-plugin-marketplace-json.md (1760 bytes)
- docs/analysis/inventory/matt/claude-plugin-plugin-json.md (3858 bytes)
- docs/analysis/inventory/matt/github-workflows-release-yml.md (1748 bytes)
- docs/analysis/inventory/matt/gitignore.md (1026 bytes)
- docs/analysis/inventory/matt/out-of-scope-mainstream-issue-trackers-only-md.md (2982 bytes)
- docs/analysis/inventory/matt/out-of-scope-question-limits-md.md (1994 bytes)
- docs/analysis/inventory/matt/out-of-scope-setup-skill-verify-mode-md.md (2071 bytes)
- docs/analysis/inventory/matt/_units/inv-matt-2.md

## Scripts executed
none

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- `AGENTS.md` is a root symlink to `CLAUDE.md`. Per METHOD §1.1 No Card Needed rule, symlinks do not require inventory cards; the reference is recorded on `docs/analysis/inventory/matt/changeset-remove-em-dashes-repo-wide-md.md`.
- Architectural conventions established across `.changeset/` and `.out-of-scope/` files have major implications for later synthesis phases:
  - Invocation terminology: prose mentions like "run `/skill`" fail to load skills reliably; explicit directives (`Call the Skill tool with "<skill>"`) are required (`.changeset/skill-tool-invocation-terminology.md`).
  - User-invoked vs model-invoked boundary: skills cannot invoke user-invoked skills via tool calls; autonomous flows must not attempt programmatic handoffs to user-invoked workflows (`.changeset/user-invoked-skill-invocation.md`).
  - Context navigation: multi-context repos use `CONTEXT-MAP.md` to index local `CONTEXT.md` files (`.changeset/wait-what-context-map.md`).
  - Plugin composition: `plugin.json` specifies 25 skills across `engineering` and `productivity` categories without defining any slash commands, maintaining Matt's conversation-first architecture.
  - Scope boundaries: first-class issue tracker support is restricted to mainstream systems (GitHub, GitLab, Backlog.md) with local markdown and custom fallback (`.out-of-scope/mainstream-issue-trackers-only.md`); grilling has no numeric question limits (`.out-of-scope/question-limits.md`); verification of setup is handled through natural-language conversational steering rather than dedicated flags (`.out-of-scope/setup-skill-verify-mode.md`).

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~2,528 tokens (10,111 bytes across 11 files).
Approximate tokens of output written: ~6,320 tokens (25,279 bytes across 11 cards).
