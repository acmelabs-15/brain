---
unit: inv-addy-33
phase: 1
package: addy
session: 001
subagent_returned: complete
---

# Unit inv-addy-33

## Files assigned
- [x] /Users/peterkloss/Dev/ACMElabs/brain-v2/sources/addy/hooks/sdd-cache-post.sh (4567 bytes, 136 lines) — read in full
- [x] /Users/peterkloss/Dev/ACMElabs/brain-v2/sources/addy/hooks/sdd-cache-pre.sh (4261 bytes, 107 lines) — read in full
- [x] /Users/peterkloss/Dev/ACMElabs/brain-v2/sources/addy/hooks/SDD-CACHE.md (8398 bytes, 168 lines) — read in full
- [x] /Users/peterkloss/Dev/ACMElabs/brain-v2/sources/addy/hooks/session-start-test.sh (1224 bytes, 47 lines) — read in full
- [x] /Users/peterkloss/Dev/ACMElabs/brain-v2/sources/addy/hooks/session-start.sh (1392 bytes, 29 lines) — read in full
- [x] /Users/peterkloss/Dev/ACMElabs/brain-v2/sources/addy/hooks/simplify-ignore-test.sh (8709 bytes, 254 lines) — read in full
- [x] /Users/peterkloss/Dev/ACMElabs/brain-v2/sources/addy/hooks/SIMPLIFY-IGNORE.md (3863 bytes, 91 lines) — read in full
- [x] /Users/peterkloss/Dev/ACMElabs/brain-v2/sources/addy/hooks/simplify-ignore.sh (12173 bytes, 303 lines) — read in full
- [x] /Users/peterkloss/Dev/ACMElabs/brain-v2/sources/addy/LICENSE (1068 bytes, 22 lines) — read in full
- [x] /Users/peterkloss/Dev/ACMElabs/brain-v2/sources/addy/plugin.json (129 bytes, 6 lines) — read in full

## Outputs produced
- docs/analysis/inventory/addy/hooks-sdd-cache-post-sh.md (4162 bytes)
- docs/analysis/inventory/addy/hooks-sdd-cache-pre-sh.md (4205 bytes)
- docs/analysis/inventory/addy/hooks-sdd-cache-md.md (2898 bytes)
- docs/analysis/inventory/addy/hooks-session-start-test-sh.md (3584 bytes)
- docs/analysis/inventory/addy/hooks-session-start-sh.md (2838 bytes)
- docs/analysis/inventory/addy/hooks-simplify-ignore-test-sh.md (3243 bytes)
- docs/analysis/inventory/addy/hooks-simplify-ignore-md.md (2460 bytes)
- docs/analysis/inventory/addy/hooks-simplify-ignore-sh.md (4268 bytes)
- docs/analysis/inventory/addy/license.md (1085 bytes)
- docs/analysis/inventory/addy/plugin-json.md (1408 bytes)
- docs/analysis/inventory/addy/_units/inv-addy-33.md (6652 bytes)

## Scripts executed
- sources/addy/hooks/session-start-test.sh: `bash hooks/session-start-test.sh` (exit 1)
- sources/addy/hooks/simplify-ignore-test.sh: `bash hooks/simplify-ignore-test.sh` (exit 0)
- sources/addy/hooks/sdd-cache-post.sh: `echo '{"tool_input":{"url":"https://react.dev/reference/react/useActionState","prompt":"extract the signature"},"tool_response":"useActionState(action, initialState) returns [state, formAction, isPending]"}' | bash hooks/sdd-cache-post.sh` (exit 0)
- sources/addy/hooks/sdd-cache-pre.sh: `echo '{"tool_input":{"url":"https://react.dev/reference/react/useActionState","prompt":"extract the signature"}}' | bash hooks/sdd-cache-pre.sh` (exit 2)
- sources/addy/hooks/session-start.sh: `bash hooks/session-start.sh` (exit 0)
- sources/addy/hooks/simplify-ignore.sh: `echo '{}' | bash hooks/simplify-ignore.sh` (exit 0)

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- **Hook registration bifurcation**: `hooks/hooks.json` (covered in `inv-addy-32`) only registers `hooks/session-start.sh` under the `SessionStart` event. In contrast, neither `sdd-cache` (`hooks/sdd-cache-pre.sh`, `hooks/sdd-cache-post.sh`) nor `simplify-ignore` (`hooks/simplify-ignore.sh`) are declared in `hooks/hooks.json`. Instead, their companion guides (`hooks/SDD-CACHE.md`, `hooks/SIMPLIFY-IGNORE.md`) instruct developers to configure them manually in project-level `.claude/settings.json` under `PreToolUse`, `PostToolUse`, and `Stop` hooks.
- **Contract defect in `hooks/session-start-test.sh`**: `bash hooks/session-start-test.sh` exits with code 1 (`Error: expected IMPORTANT priority, got undefined`). The test asserts the legacy payload schema `{ priority: "IMPORTANT", message: ... }`, but `hooks/session-start.sh:7` was migrated to output the standard Claude Code envelope `{ hookSpecificOutput: { hookEventName: "SessionStart", additionalContext: ... } }`. This represents an unmaintained test failure (`script-bug`, `cross-file-contradiction`).
- **Ambient meta-skill injection**: `hooks/session-start.sh` reads and inlines `skills/using-agent-skills/SKILL.md` (covered in `inv-addy-20`), formatting it into the `additionalContext` envelope so the entire agent skill routing flowchart and core operating behaviors are ambient in Claude Code / Codex CLI sessions upon initialization. It includes a fallback mechanism if `jq` is unavailable.
- **WebFetch caching mechanism for SDD**: `hooks/sdd-cache-pre.sh` and `hooks/sdd-cache-post.sh` support `skills/source-driven-development/SKILL.md` (covered in `inv-addy-18` and `inv-addy-29`). Because Claude Code does not pass HTTP response headers to hooks, `sdd-cache-post.sh` issues an out-of-band HTTP HEAD request via `curl` to capture origin `ETag` and `Last-Modified` validators, hashing URL to `.claude/sdd-cache/<sha>.json`. On subsequent calls, `sdd-cache-pre.sh` executes conditional HEAD validation; upon receiving HTTP 304 Not Modified, it exits code 2 with the cached body on stderr, cleanly short-circuiting the redundant `WebFetch` tool invocation.
- **Transparent code redaction during simplification**: `hooks/simplify-ignore.sh` supports the `/code-simplify` command (`skills/code-simplification/SKILL.md`, covered in `inv-addy-39`). It replaces annotated blocks between `simplify-ignore-start` and `simplify-ignore-end` with placeholder hashes during `PreToolUse` (Read), restores original blocks while applying AI edits during `PostToolUse` (Edit/Write), and cleans up cached state on `Stop`. A crash recovery invocation `echo '{}' | bash hooks/simplify-ignore.sh` is provided if the session aborts prematurely. Concurrency is handled via atomic lockdirs (`$CACHE/${ID}.lock`).
- **Plugin packaging & Licensing**: `plugin.json` defines the root Antigravity plugin manifest (`agent-skills`), verified by `scripts/validate-versions.js` (inv-addy-43) and documented in `README.md` (inv-addy-34). `LICENSE` grants permissive MIT open-source terms for the package.

## Blocked or uncertain
none

## Time and size
- Approximate tokens of source read: ~11,446 tokens (45,784 bytes across 10 files)
- Approximate tokens of output written: ~9,200 tokens (30,151 bytes across 10 cards + 6,652 bytes unit report)
