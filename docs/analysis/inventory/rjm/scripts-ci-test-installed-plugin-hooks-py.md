---
package: rjm
path: scripts/ci/test_installed_plugin_hooks.py
type: script
bytes: 16737
unit: inv-rjm-209
in_scope_via: .agents/architecture/ADR-097-zero-tool-use-hooks.md
aliases: []
memo_inputs:
  - {path: scripts/ci/test_installed_plugin_hooks.py, sha256: 7c14da017765e6ea5df1f3cdac71f1203ffb258520dc2b35b8a50407a2ebf160}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/ci/test_installed_plugin_hooks.py

## Purpose — required, verbatim
> "Materialize and test the installed plugin hooks as a consumer would see them." — scripts/ci/test_installed_plugin_hooks.py:1

## Design intent — required
Simulates consumer installation of the plugin (`/plugin install project-toolkit@ai-agents`) by copying the source tree into the standard installation layout, initializing an isolated scratch consumer git repository, setting the host environment, and validating that the shipped hook surface is internally consistent and non-wedging. In accordance with ADR-097 (which retired all tool-call hooks), the gate asserts bidirectional agreement between what `hooks.json` registers and what disk dispatchers exist: zero registered events with zero disk dispatchers passes as the clean ADR-097 state, whereas any orphaned dispatcher or missing dispatcher for a registered event fails. This keeps the multi-event validation path armed so that re-introducing a hook automatically re-engages fail-open and customer-wedge validation without silent skipping.

## Phase — required
none

## Inputs — required
- CLI argument `--plugin-source` (path to source plugin tree, e.g. `src/copilot-cli`) — scripts/ci/test_installed_plugin_hooks.py:253
- CLI argument `--install-root` (path to materialize the plugin layout) — scripts/ci/test_installed_plugin_hooks.py:254
- CLI argument `--consumer-cwd` (path to create scratch consumer git repository) — scripts/ci/test_installed_plugin_hooks.py:255
- CLI argument `--negative-env` (`true` or `false`, defaults to `false`) — scripts/ci/test_installed_plugin_hooks.py:260-264
- Plugin manifest file `hooks/hooks.json` under the materialized install root — scripts/ci/test_installed_plugin_hooks.py:170, 197
- Host environment variables: `COPILOT_PLUGIN_ROOT`, `CLAUDE_PLUGIN_ROOT`, `PATH` — scripts/ci/test_installed_plugin_hooks.py:111-125

## Outputs — required
- Materialized plugin directory tree at `install_root` — scripts/ci/test_installed_plugin_hooks.py:58
- Initialized consumer git repository at `--consumer-cwd` with initial commit — scripts/ci/test_installed_plugin_hooks.py:63-83
- Diagnostic execution output and assertion summaries to stdout and stderr — scripts/ci/test_installed_plugin_hooks.py:299-322, 381-394
- Exit code (0 for pass, 1 for hook assertion failure, 2 for configuration error) — scripts/ci/test_installed_plugin_hooks.py:29-31, 275, 292, 316, 322, 392, 394

## Invokes — required
none

## Invoked by — required
- doc .agents/architecture/ADR-097-zero-tool-use-hooks.md — .agents/architecture/ADR-097-zero-tool-use-hooks.md:38

## Concepts named — required, verbatim
- `ADR-097` — scripts/ci/test_installed_plugin_hooks.py:8 — used here
- `issue #4672` — scripts/ci/test_installed_plugin_hooks.py:10 — used here
- `fail open` — scripts/ci/test_installed_plugin_hooks.py:22 — used here
- `customer-wedge property` — scripts/ci/test_installed_plugin_hooks.py:91 — used here
- `issue #2205` — scripts/ci/test_installed_plugin_hooks.py:91 — used here
- `COPILOT_PLUGIN_ROOT` — scripts/ci/test_installed_plugin_hooks.py:111 — used here
- `CLAUDE_PLUGIN_ROOT` — scripts/ci/test_installed_plugin_hooks.py:112 — used here
- `Semgrep` — scripts/ci/test_installed_plugin_hooks.py:127 — used here
- `issue #5154` — scripts/ci/test_installed_plugin_hooks.py:156 — used here
- `PostToolUse` — scripts/ci/test_installed_plugin_hooks.py:156 — used here
- `PreToolUse` — scripts/ci/test_installed_plugin_hooks.py:157 — used here
- `hooks.json` — scripts/ci/test_installed_plugin_hooks.py:158 — used here
- `ADR-006` — scripts/ci/test_installed_plugin_hooks.py:258 — used here
- `_materialize_plugin` — scripts/ci/test_installed_plugin_hooks.py:54 — defined here
- `_create_consumer_repo` — scripts/ci/test_installed_plugin_hooks.py:61 — defined here
- `_bash_payload` — scripts/ci/test_installed_plugin_hooks.py:86 — defined here
- `_run_hook` — scripts/ci/test_installed_plugin_hooks.py:100 — defined here
- `_registered_events` — scripts/ci/test_installed_plugin_hooks.py:152 — defined here
- `_manifest_is_readable` — scripts/ci/test_installed_plugin_hooks.py:181 — defined here
- `_shipped_dispatchers` — scripts/ci/test_installed_plugin_hooks.py:210 — defined here
- `_find_dispatcher` — scripts/ci/test_installed_plugin_hooks.py:224 — defined here
- `main` — scripts/ci/test_installed_plugin_hooks.py:251 — defined here

## Structure
none (python script; functions: _materialize_plugin, _create_consumer_repo, _bash_payload, _run_hook, _registered_events, _manifest_is_readable, _shipped_dispatchers, _find_dispatcher, main)

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/ci/test_installed_plugin_hooks.py`, language: Python 3, lines: 399
- documented invocation:
  `python scripts/ci/test_installed_plugin_hooks.py --plugin-source src/copilot-cli \` — scripts/ci/test_installed_plugin_hooks.py:34
- executed: yes
- actual command run: `python3 sources/rjm/scripts/ci/test_installed_plugin_hooks.py --plugin-source src/copilot-cli --install-root /tmp/test-hook-inst --consumer-cwd /tmp/test-hook-consumer`
  abridged stdout: `installed plugin registers 0 hook event(s): []; 0 dispatcher(s) on disk\nPASS: zero registered hook events and zero shipped dispatchers (ADR-097 zero-tool-use-hooks state)\n\nAll assertions passed.`
  actual exit code: 0
- documented exit codes:
  `0 = all assertions passed` — scripts/ci/test_installed_plugin_hooks.py:29
  `1 = a hook assertion failed (the bug this gate catches)` — scripts/ci/test_installed_plugin_hooks.py:30
  `2 = configuration error (bad arguments, missing paths)` — scripts/ci/test_installed_plugin_hooks.py:31
  vs. actual exit paths in code:
  `scripts/ci/test_installed_plugin_hooks.py:275` (returns 2 if plugin_source directory missing)
  `scripts/ci/test_installed_plugin_hooks.py:292` (returns 1 if hooks.json missing or malformed)
  `scripts/ci/test_installed_plugin_hooks.py:316` (returns 1 if orphaned dispatchers exist with zero events)
  `scripts/ci/test_installed_plugin_hooks.py:322` (returns 0 for clean zero-event ADR-097 state)
  `scripts/ci/test_installed_plugin_hooks.py:392` (returns 1 if any event assertion failed)
  `scripts/ci/test_installed_plugin_hooks.py:394` (returns 0 if all event assertions passed)
  `scripts/ci/test_installed_plugin_hooks.py:398` (`raise SystemExit(main())`)
- for validators/gates: can it exit non-zero? yes (exits 1 on assertion failures or malformed manifests; exits 2 on bad arguments or missing paths). does it fail on the source repo's own default branch? no (passes with exit code 0 under ADR-097).
- does the output match what the documentation claims? yes (outputs explicit event and dispatcher counts and exits 0 on the clean default branch)

## Defects — required
- `script-bug` — `scripts/ci/test_installed_plugin_hooks.py:78` — `_create_consumer_repo` crashes with `CalledProcessError` if the consumer directory was previously initialized and has no uncommitted changes, because `git commit` exits 1 when there is nothing to commit.
- `other` — `scripts/ci/test_installed_plugin_hooks.py:240` — `_find_dispatcher` resolves path candidates with `candidate.is_file()`, which on case-insensitive filesystems (such as macOS APFS) matches `PreToolUse` even if only lowercase `preToolUse` is present on disk.

## Observations
- Implements defense against command injection and directory traversal in `_find_dispatcher` by asserting `candidate.is_relative_to(root)` and executing via `sys.executable` with argument lists rather than shell strings.
- Provides a `--negative-env` mode to test fail-open behavior: verifies that pointing the plugin root to a nonexistent path causes hooks to allow execution while writing a warning to stderr.
- The script inverts rather than deletes the legacy issue #4672 assertion: rather than treating zero registered events as an unconditional failure, it verifies agreement between registration and disk artifacts.

## Context cost
16,737 bytes (~4,184 tokens). Standalone Python script using standard library modules only (`argparse`, `json`, `os`, `shutil`, `subprocess`, `sys`, `pathlib`).
