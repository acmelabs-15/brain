# Challenge Report: `inv-addy-8`

## Challenge Summary

**Overall risk assessment**: LOW

All worker claims for unit `inv-addy-8` were subjected to direct empirical execution and adversarial stress-testing. Every execution claim was verified verbatim. The worker correctly discovered and documented an `always-failing-gate` in `hooks/session-start-test.sh` where the test was not updated after `hooks/session-start.sh` adopted Claude Code's standard `hookSpecificOutput` envelope. The opt-in `hooks/simplify-ignore.sh` hook was subjected to 10+ stress-test scenarios, including malformed JSON, missing dependencies, massive payloads, file moves/deletions, and non-standard path characters. It exhibited robust fault tolerance and defensive recovery throughout. Anti-drift checks confirm 0 empty required inventory fields, clean glossary compliance, and 100% passing test suite.

---

## Challenges

### [Low] Challenge 1: Concurrency Collision in `simplify-ignore.sh` Exits Silently

- **Assumption challenged**: `simplify-ignore.sh` safely coordinates concurrent sessions accessing the same file.
- **Attack scenario**: If two parallel subagent or tool calls invoke `PreToolUse Read` simultaneously on the same file, line 190 (`mkdir "$CACHE/${ID}.lock"`) fails for the second invocation. The second invocation executes `exit 0` immediately at line 197 without filtering the file or waiting for the first process to finish filtering.
- **Blast radius**: If the first process hasn't finished writing the filtered file, the second reader might read raw unmasked content if timing is unfavorable. However, in standard Claude Code / Antigravity single-session agent workflows, tool calls for a single session are serialized.
- **Mitigation**: The worker already documented this defect under `script-bug` in `docs/analysis/inventory/addy/hooks-simplify-ignore-sh.md:125` ("Concurrency lock failure exits silently with code 0 instead of retrying or waiting"). This defect is accurately cataloged per METHOD.md R5.

### [Low] Challenge 2: Fragility of Basename Exclusion in `simplify-ignore.sh`

- **Assumption challenged**: Basename filtering at line 179 (`case "$(basename "$FILE_PATH")" in simplify-ignore*|SIMPLIFY-IGNORE*) exit 0 ;; esac`) reliably prevents the hook from filtering its own source or test files.
- **Attack scenario**: If a test file is named `test-simplify.js` instead of starting with `simplify-ignore*`, and contains the ignore markers, it will be masked unexpectedly.
- **Blast radius**: Minimal. The convention is explicitly documented in `SIMPLIFY-IGNORE.md` and test files adhere to the prefix. Worker documented this defect under `missing-path` in `hooks-simplify-ignore-sh.md:126`.

---

## Stress Test Results

| Test ID | Scenario / Command | Expected Behavior | Actual Behavior | Result |
|---|---|---|---|---|
| **ST-01** | `echo '{}' \| bash hooks/simplify-ignore.sh` | Clean exit 0, no output | Exit code `0`, empty stdout/stderr | **PASS** |
| **ST-02** | `bash hooks/simplify-ignore-test.sh` | 21 tests pass, exit 0 | Output: `Results: 21 passed, 0 failed`, exit `0` | **PASS** |
| **ST-03** | `bash hooks/session-start-test.sh` | Fails with exit 1, priority error | Exit code `1`, `Error: expected IMPORTANT priority, got undefined` | **PASS** |
| **ST-04** | Malformed JSON stdin: `INVALID_JSON{{` | Graceful parse warning, exit 0 | `Warning: failed to parse .tool_input.file_path...`, exit `0` | **PASS** |
| **ST-05** | Empty stdin string | No error, exit 0 | Exit code `0`, empty stdout/stderr | **PASS** |
| **ST-06** | JSON array payload: `["Read", "file.js"]` | Parse warning, exit 0 | `Warning: failed to parse .tool_input.file_path...`, exit `0` | **PASS** |
| **ST-07** | JSON primitive number: `12345` | Parse warning, exit 0 | `Warning: failed to parse .tool_input.file_path...`, exit `0` | **PASS** |
| **ST-08** | JSON primitive null: `null` | Exit 0 | Exit code `0` | **PASS** |
| **ST-09** | Non-string `tool_name`: `{"tool_name": 123}` | Exit 0 | Exit code `0` | **PASS** |
| **ST-10** | Non-object `tool_input`: `{"tool_name": "Read", "tool_input": "file.js"}` | Parse warning, exit 0 | `Warning: failed to parse .tool_input.file_path...`, exit `0` | **PASS** |
| **ST-11** | Massive payload: 5MB random base64 stream | Parse warning truncated to 120 chars, exit 0 | Truncated warning emitted, exit code `0` | **PASS** |
| **ST-12** | Filename with spaces and single quotes in path | Read masks placeholder, Edit updates, Stop restores | Full lifecycle executed cleanly, exit code `0` | **PASS** |
| **ST-13** | File moved/deleted prior to session `Stop` | Detect missing file, warn to stderr, save `<file>.recovered`, exit 0 | Emitted warning, created `<file>.recovered` with original code, exit `0` | **PASS** |
| **ST-14** | Missing `jq` dependency guard (`PATH=/bin`) | Non-zero exit with missing jq error | Stderr: `error: missing jq`, exit code `1` | **PASS** |
| **ST-15** | Anti-drift: `bun run scripts/synthesis/coverage.ts` | 0 empty required inventory fields | `Empty required inventory fields: 0` | **PASS** |
| **ST-16** | Anti-drift: `bun run scripts/synthesis/glossary-lint.ts` | Clean glossary lint | Output: `Glossary lint: clean`, exit `0` | **PASS** |
| **ST-17** | Test suite: `bun test` | All tests pass | `89 pass, 0 fail, 155 expect() calls`, exit `0` | **PASS** |

---

## Unchallenged Areas

- **Source code of `sources/addy/`**: Pinned clone, read-only per METHOD.md §1.1. Modifying source files is forbidden. Defects found in source files are documented in inventory entries per METHOD.md R5.
