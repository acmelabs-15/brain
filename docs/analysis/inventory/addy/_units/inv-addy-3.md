---
unit: inv-addy-3
phase: 1
package: addy
session: 001
subagent_returned: complete
---

# Unit inv-addy-3

## Files assigned
- [x] sources/addy/.github/ISSUE_TEMPLATE/skill-gap.yml (2669 bytes, 81 lines)
- [x] sources/addy/.github/workflows/test-plugin-install.yml (2703 bytes, 100 lines)
- [x] sources/addy/.gitignore (121 bytes, 10 lines)
- [x] sources/addy/AGENTS.md (5386 bytes, 93 lines)
- [x] sources/addy/agents/code-reviewer.md (3995 bytes, 103 lines)
- [x] sources/addy/agents/security-auditor.md (4992 bytes, 113 lines)
- [x] sources/addy/agents/test-engineer.md (3275 bytes, 96 lines)
- [x] sources/addy/agents/web-performance-auditor.md (12278 bytes, 185 lines)
- [x] sources/addy/CLAUDE.md (4094 bytes, 61 lines)
- [x] sources/addy/commands/build.toml (3840 bytes, 44 lines)
- [x] sources/addy/commands/code-simplify.toml (1066 bytes, 22 lines)
- [x] sources/addy/commands/constraints.toml (2775 bytes, 33 lines)
Note: `.opencode/skills` is a symlink to `../skills/` — no card needed per METHOD.md §1.1.

## Outputs produced
- docs/analysis/inventory/addy/github-issue-template-skill-gap-yml.md (2325 bytes)
- docs/analysis/inventory/addy/github-workflows-test-plugin-install-yml.md (3361 bytes)
- docs/analysis/inventory/addy/gitignore.md (1177 bytes)
- docs/analysis/inventory/addy/agents-md.md (3406 bytes)
- docs/analysis/inventory/addy/agents-code-reviewer-md.md (3110 bytes)
- docs/analysis/inventory/addy/agents-security-auditor-md.md (3395 bytes)
- docs/analysis/inventory/addy/agents-test-engineer-md.md (2777 bytes)
- docs/analysis/inventory/addy/agents-web-performance-auditor-md.md (4746 bytes)
- docs/analysis/inventory/addy/claude-md.md (2136 bytes)
- docs/analysis/inventory/addy/commands-build-toml.md (2872 bytes)
- docs/analysis/inventory/addy/commands-code-simplify-toml.md (2197 bytes)
- docs/analysis/inventory/addy/commands-constraints-toml.md (3076 bytes)
- docs/analysis/inventory/addy/_units/inv-addy-3.md

## Scripts executed
none

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- `commands/build.toml` is the canonical entry for EXACT group 1 in `docs/analysis/manifest/addy-duplicates.md`, satisfying alias `.gemini/commands/build.toml` in `inv-addy-2`.
- `commands/code-simplify.toml` is part of VARIANT pair V2 with `.gemini/commands/code-simplify.toml` (in `inv-addy-2`), differing only in referencing `AGENTS.md` instead of `GEMINI.md`.
- `commands/constraints.toml` is part of VARIANT pair V1 with `.gemini/commands/constraints.toml` (in `inv-addy-2`), differing only in referencing `AGENTS.md and CLAUDE.md` instead of `AGENTS.md and GEMINI.md`.
- The persona agents (`code-reviewer`, `security-auditor`, `test-engineer`) are invoked by `/ship` in parallel fan-out mode with a central merge step.
- `web-performance-auditor` is explicitly isolated from `/ship` fan-out and only invoked via `/webperf` due to applicability being limited to web projects.

## Blocked or uncertain
none

## Time and size
Source read: 47,194 bytes (~11,800 tokens).
Output written: 34,578 bytes cards + unit report (~8,700 tokens).
