---
unit: inv-addy-3
phase: 1
package: addy
session: 001
subagent_returned: complete
---

# Unit inv-addy-3

## Files assigned
- [x] sources/addy/.github/ISSUE_TEMPLATE/skill-gap.yml
- [x] sources/addy/.github/workflows/test-plugin-install.yml
- [x] sources/addy/.gitignore
- [x] sources/addy/.opencode/skills (symlink to ../skills/, §1.1 no card needed; reference recorded on agents-md.md)
- [x] sources/addy/AGENTS.md
- [x] sources/addy/agents/code-reviewer.md
- [x] sources/addy/agents/security-auditor.md
- [x] sources/addy/agents/test-engineer.md
- [x] sources/addy/agents/web-performance-auditor.md
- [x] sources/addy/CLAUDE.md
- [x] sources/addy/commands/build.toml
- [x] sources/addy/commands/code-simplify.toml
- [x] sources/addy/commands/constraints.toml

## Outputs produced
- docs/analysis/inventory/addy/github-issue-template-skill-gap-yml.md (3049 bytes)
- docs/analysis/inventory/addy/github-workflows-test-plugin-install-yml.md (3910 bytes)
- docs/analysis/inventory/addy/gitignore.md (1435 bytes)
- docs/analysis/inventory/addy/agents-md.md (4010 bytes)
- docs/analysis/inventory/addy/agents-code-reviewer-md.md (3509 bytes)
- docs/analysis/inventory/addy/agents-security-auditor-md.md (3716 bytes)
- docs/analysis/inventory/addy/agents-test-engineer-md.md (3184 bytes)
- docs/analysis/inventory/addy/agents-web-performance-auditor-md.md (5009 bytes)
- docs/analysis/inventory/addy/claude-md.md (2661 bytes)
- docs/analysis/inventory/addy/commands-build-toml.md (3318 bytes)
- docs/analysis/inventory/addy/commands-code-simplify-toml.md (2534 bytes)
- docs/analysis/inventory/addy/commands-constraints-toml.md (3549 bytes)
- docs/analysis/inventory/addy/_units/inv-addy-3.md (2640 bytes)

## Scripts executed
none

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- `commands/build.toml` is the canonical card satisfying EXACT alias `.gemini/commands/build.toml` (assigned in inv-addy-2); listed under `aliases: [".gemini/commands/build.toml"]` in frontmatter.
- `commands/code-simplify.toml` and `commands/constraints.toml` form VARIANT pairs V2 and V1 respectively with `.gemini/commands/code-simplify.toml` and `.gemini/commands/constraints.toml` (assigned in inv-addy-2).
- `.opencode/skills` is a symlink pointing to `../skills/` (§1.1, no card needed); its role in the skill-driven execution model is recorded on `docs/analysis/inventory/addy/agents-md.md`.
- `CLAUDE.md:13` exhibits `doc-drift` by omitting `/constraints` from its enumerated list of slash commands.

## Blocked or uncertain
none

## Time and size
Approximate source read: 47,194 bytes (~11,800 tokens).
Approximate output written: ~42,500 bytes (~10,600 tokens).
