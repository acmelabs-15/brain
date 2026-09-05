---
unit: inv-addy-33
phase: 1
package: addy
session: 005
subagent_returned: complete
---

# Unit inv-addy-33

## Files assigned
- [x] sources/addy/hooks/sdd-cache-post.sh (4567 bytes, 136 lines)
- [x] sources/addy/hooks/sdd-cache-pre.sh (4261 bytes, 107 lines)
- [x] sources/addy/hooks/SDD-CACHE.md (8398 bytes, 168 lines)
- [x] sources/addy/hooks/session-start-test.sh (1224 bytes, 47 lines)
- [x] sources/addy/hooks/session-start.sh (1392 bytes, 29 lines)
- [x] sources/addy/hooks/simplify-ignore-test.sh (8709 bytes, 254 lines)
- [x] sources/addy/hooks/SIMPLIFY-IGNORE.md (3863 bytes, 91 lines)
- [x] sources/addy/hooks/simplify-ignore.sh (12173 bytes, 303 lines)
- [x] sources/addy/LICENSE (1068 bytes, 22 lines)
- [x] sources/addy/plugin.json (129 bytes, 6 lines)

## Outputs produced
- docs/analysis/inventory/addy/hooks-sdd-cache-post-sh.md (5278 bytes)
- docs/analysis/inventory/addy/hooks-sdd-cache-pre-sh.md (4922 bytes)
- docs/analysis/inventory/addy/hooks-sdd-cache-md.md (3076 bytes)
- docs/analysis/inventory/addy/hooks-session-start-test-sh.md (3859 bytes)
- docs/analysis/inventory/addy/hooks-session-start-sh.md (3734 bytes)
- docs/analysis/inventory/addy/hooks-simplify-ignore-test-sh.md (3859 bytes)
- docs/analysis/inventory/addy/hooks-simplify-ignore-md.md (2827 bytes)
- docs/analysis/inventory/addy/hooks-simplify-ignore-sh.md (4550 bytes)
- docs/analysis/inventory/addy/license.md (2217 bytes)
- docs/analysis/inventory/addy/plugin-json.md (1765 bytes)
- docs/analysis/inventory/addy/_units/inv-addy-33.md (2800 bytes)

## Scripts executed
- sources/addy/hooks/sdd-cache-post.sh: `echo '{"tool_input": {"url": "https://react.dev/reference/react/useActionState", "prompt": "extract the signature"}, "tool_response": "useActionState(action, initialState) returns [state, formAction, isPending]"}' | bash hooks/sdd-cache-post.sh`, exit code 0
- sources/addy/hooks/sdd-cache-pre.sh: `echo '{"tool_input": {"url": "https://react.dev/reference/react/useActionState", "prompt": "extract the signature"}}' | bash hooks/sdd-cache-pre.sh`, exit code 2
- sources/addy/hooks/session-start.sh: `bash hooks/session-start.sh`, exit code 0
- sources/addy/hooks/session-start-test.sh: `bash hooks/session-start-test.sh`, exit code 1
- sources/addy/hooks/simplify-ignore.sh: `echo '{}' | bash hooks/simplify-ignore.sh`, exit code 0
- sources/addy/hooks/simplify-ignore-test.sh: `bash hooks/simplify-ignore-test.sh`, exit code 0

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- `hooks/session-start.sh` is configured in `hooks/hooks.json` (unit `inv-addy-32`) to inject `skills/using-agent-skills/SKILL.md` (unit `inv-addy-12`) on `SessionStart`.
- `hooks/session-start-test.sh` is an always-failing test on the default branch because `hooks/session-start.sh` was migrated to the Claude Code `hookSpecificOutput` envelope without updating `session-start-test.sh`. This test is cited in `CONTRIBUTING.md:87` (unit `inv-addy-34`) and `docs/developer-onboarding.md:69` (unit `inv-addy-35`).
- `hooks/sdd-cache-pre.sh` and `hooks/sdd-cache-post.sh` support `source-driven-development` (`skills/source-driven-development/SKILL.md` in unit `inv-addy-10`), but are not registered in `hooks/hooks.json`; they require manual configuration in `.claude/settings.json` per `hooks/SDD-CACHE.md`.
- `hooks/simplify-ignore.sh` supports `/code-simplify` (`commands/code-simplify.toml` in unit `inv-addy-1` and `skills/code-simplification/SKILL.md` in unit `inv-addy-4`), but is similarly not configured in `hooks/hooks.json`.
- `plugin.json` is the root Antigravity plugin manifest whose version is checked against `.claude-plugin/plugin.json` (unit `inv-addy-1`) and `.codex-plugin/plugin.json` (unit `inv-addy-1`) by `scripts/validate-versions.js` (unit `inv-addy-34`).

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~11,446 tokens (45,784 bytes across 10 files)
Approximate tokens of output written: ~9,700 tokens (~38,800 bytes across 11 files)
