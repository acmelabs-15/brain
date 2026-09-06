---
package: rjm
path: scripts/validation/check_shipped_skill_routes.py
type: script
bytes: 28940
unit: inv-rjm-284
in_scope_via: docs/workflow-commands.md
aliases: []
memo_inputs:
  - {path: scripts/validation/check_shipped_skill_routes.py, sha256: bafff39d3de4725ac44e0ec799ac0b66e8dd4c701136ab47edf20adcf007b9c2}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/validation/check_shipped_skill_routes.py

## Purpose — required, verbatim
> "Routing gate: a plugin root must contain every skill its tables route to." — scripts/validation/check_shipped_skill_routes.py:14

## Design intent — required
Enforces routing integrity across multi-platform plugin packaging roots (`.claude` and direct children of `src/` such as `src/claude` and `src/copilot-cli`). When skills are excluded or dropped from specific platform distributions (e.g. `merge-resolver` excluded from Copilot CLI packaging in `templates/platforms/copilot-cli.yaml` under issue #2026), failure to update routing tables in markdown causes coordination drift where users are directed to skills missing from their installed distribution. The validator operates without an allowlist so typos fail equally with dropped skills. It uses CommonMark parsing via `markdown_parser` to restrict extraction strictly to table cells, preventing false positives in headings or prose, and unwraps balanced delimiter pairs and trailing punctuation so valid routes are extracted cleanly while malformed routes fail closed.

## Phase — required
cross-phase

## Inputs — required
- CLI options:
  - `--root`: "Repository root (default: current directory)" — scripts/validation/check_shipped_skill_routes.py:580
- Filesystem discovery targets:
  - Candidate plugin roots: `<repo_root>/.claude` and `<repo_root>/src/*` verified to contain `.claude-plugin/plugin.json` (`PLUGIN_MANIFEST` — scripts/validation/check_shipped_skill_routes.py:191)
  - Installed skills: directories under `<root>/skills/*/SKILL.md` (`SKILL_FILE` — scripts/validation/check_shipped_skill_routes.py:196)
  - Markdown files under each discovered root: pruned of working copies and environments (`PRUNED_DIRS` — scripts/validation/check_shipped_skill_routes.py:200)
  - Table cell text parsed via CommonMark parser (`scripts.utils.markdown_parser` — scripts/validation/check_shipped_skill_routes.py:187)

## Outputs — required
- Standard output reports:
  - Pass verdict: "Skill: route(s) resolve across" — scripts/validation/check_shipped_skill_routes.py:626
  - Routing failure report: "[FAIL] plugin roots route to skills they do not contain:" — scripts/validation/check_shipped_skill_routes.py:614
  - Individual finding lines: `  <path>:<line>: routes to 'Skill: <skill>' but <root>/skills/<skill>/SKILL.md does not exist` or `... not a legal skill name` (scripts/validation/check_shipped_skill_routes.py:295-305, 616)
  - Remediation instructions for excluded platform skills: `Either ship the skill, or change the route. When a skill is excluded...` (scripts/validation/check_shipped_skill_routes.py:618-622)
- Diagnostic stderr reports:
  - Configuration error for missing plugin roots: "no plugin roots found under" — scripts/validation/check_shipped_skill_routes.py:591
  - Vacuous run refusal error: "no 'Skill:' routes found in any plugin root;" — scripts/validation/check_shipped_skill_routes.py:607
  - Error reports from caught `CheckError` conditions (scripts/validation/check_shipped_skill_routes.py:600)
- Process exit codes:
  - "EXIT_OK = 0" — scripts/validation/check_shipped_skill_routes.py:282
  - "EXIT_DRIFT = 1" — scripts/validation/check_shipped_skill_routes.py:283
  - "EXIT_CONFIG = 2" — scripts/validation/check_shipped_skill_routes.py:284

## Invokes — required
- script markdown_parser — scripts/validation/check_shipped_skill_routes.py:187

## Invoked by — required
- script checks_plugin.py — scripts/validation/checks_plugin.py:106

## Concepts named — required, verbatim
- `Routing gate` — scripts/validation/check_shipped_skill_routes.py:14 — defined here
- `copilot-cli.yaml` — scripts/validation/check_shipped_skill_routes.py:21 — used here
- `merge-resolver` — scripts/validation/check_shipped_skill_routes.py:21 — used here
- `autoplan` — scripts/validation/check_shipped_skill_routes.py:26 — used here
- `SKILL.md` — scripts/validation/check_shipped_skill_routes.py:42 — used here
- `CommonMark` — scripts/validation/check_shipped_skill_routes.py:56 — used here
- `SkillForge` — scripts/validation/check_shipped_skill_routes.py:66 — used here
- `CANONICAL_ROOT_NAME` — scripts/validation/check_shipped_skill_routes.py:189 — defined here
- `PLATFORM_PARENT` — scripts/validation/check_shipped_skill_routes.py:190 — defined here
- `PLUGIN_MANIFEST` — scripts/validation/check_shipped_skill_routes.py:191 — defined here
- `SKILL_FILE` — scripts/validation/check_shipped_skill_routes.py:196 — defined here
- `PRUNED_DIRS` — scripts/validation/check_shipped_skill_routes.py:200 — defined here
- `_ROUTE_RE` — scripts/validation/check_shipped_skill_routes.py:212 — defined here
- `_NAME_RE` — scripts/validation/check_shipped_skill_routes.py:215 — defined here
- `_PAIRS` — scripts/validation/check_shipped_skill_routes.py:222 — defined here
- `_TRAILING` — scripts/validation/check_shipped_skill_routes.py:227 — defined here
- `_BRACKETS` — scripts/validation/check_shipped_skill_routes.py:236 — defined here
- `_awaited_closers` — scripts/validation/check_shipped_skill_routes.py:239 — defined here
- `_unwrap` — scripts/validation/check_shipped_skill_routes.py:259 — defined here
- `EXIT_OK` — scripts/validation/check_shipped_skill_routes.py:282 — defined here
- `EXIT_DRIFT` — scripts/validation/check_shipped_skill_routes.py:283 — defined here
- `EXIT_CONFIG` — scripts/validation/check_shipped_skill_routes.py:284 — defined here
- `Finding` — scripts/validation/check_shipped_skill_routes.py:288 — defined here
- `CheckError` — scripts/validation/check_shipped_skill_routes.py:308 — defined here
- `skill_names` — scripts/validation/check_shipped_skill_routes.py:312 — defined here
- `_stat_mode` — scripts/validation/check_shipped_skill_routes.py:330 — defined here
- `_present` — scripts/validation/check_shipped_skill_routes.py:354 — defined here
- `_is_directory` — scripts/validation/check_shipped_skill_routes.py:376 — defined here
- `discover_roots` — scripts/validation/check_shipped_skill_routes.py:386 — defined here
- `iter_markdown` — scripts/validation/check_shipped_skill_routes.py:402 — defined here
- `_cell_text` — scripts/validation/check_shipped_skill_routes.py:460 — defined here
- `route_names` — scripts/validation/check_shipped_skill_routes.py:510 — defined here
- `scan_root` — scripts/validation/check_shipped_skill_routes.py:525 — defined here
- `main` — scripts/validation/check_shipped_skill_routes.py:574 — defined here

## Structure
- Module docstring with motivation and design principles (scripts/validation/check_shipped_skill_routes.py:14-172)
  - `Why this exists` (scripts/validation/check_shipped_skill_routes.py:16)
  - `The invariant` (scripts/validation/check_shipped_skill_routes.py:37)
  - `Precision comes from parsing, not from an allowlist` (scripts/validation/check_shipped_skill_routes.py:47)
  - `Rendering is the contract, not source bytes` (scripts/validation/check_shipped_skill_routes.py:84)
  - `Walk discipline` (scripts/validation/check_shipped_skill_routes.py:136)
- Module imports and environment setup (scripts/validation/check_shipped_skill_routes.py:174-188)
- Root, manifest, and pruning path constants (scripts/validation/check_shipped_skill_routes.py:189-202)
- Route regular expressions, bracket balancing tables, and unwrapping helpers (scripts/validation/check_shipped_skill_routes.py:204-280)
- Exit code definitions, Finding dataclass, and CheckError exception (scripts/validation/check_shipped_skill_routes.py:282-310)
- Skill discovery and stat validation utilities (scripts/validation/check_shipped_skill_routes.py:312-384)
- Bounded plugin root discovery (scripts/validation/check_shipped_skill_routes.py:386-400)
- Markdown file traversal with pruning logic (scripts/validation/check_shipped_skill_routes.py:402-458)
- Table cell text filtering and route name parsing (scripts/validation/check_shipped_skill_routes.py:460-523)
- Root scanning and routing validation (scripts/validation/check_shipped_skill_routes.py:525-572)
- Command-line argument parsing and main execution (scripts/validation/check_shipped_skill_routes.py:574-630)
- Script entry point invocation (scripts/validation/check_shipped_skill_routes.py:632-634)

## Scripts — required if type is script or the skill ships scripts
- **path:** `scripts/validation/check_shipped_skill_routes.py`
- **language:** Python (python3)
- **lines:** 634
- **documented invocation:**
  - `[sys.executable, str(script), "--root", str(repo_root)]` in `scripts/validation/checks_plugin.py:116-118`
- **executed:** yes
- **actual command run:** `python3 scripts/validation/check_shipped_skill_routes.py`
- **abridged stdout:** `[PASS] 30 Skill: route(s) resolve across 3 plugin root(s)`
- **actual exit code:** 0
- **documented exit codes vs. actual exit paths in code:**
  - Documented:
    - "EXIT_OK = 0" — scripts/validation/check_shipped_skill_routes.py:282
    - "EXIT_DRIFT = 1" — scripts/validation/check_shipped_skill_routes.py:283
    - "EXIT_CONFIG = 2" — scripts/validation/check_shipped_skill_routes.py:284
  - Actual exit paths in code:
    - `return EXIT_CONFIG` — scripts/validation/check_shipped_skill_routes.py:594
    - `return EXIT_CONFIG` — scripts/validation/check_shipped_skill_routes.py:601
    - `return EXIT_CONFIG` — scripts/validation/check_shipped_skill_routes.py:611
    - `return EXIT_DRIFT` — scripts/validation/check_shipped_skill_routes.py:623
    - `return EXIT_OK` — scripts/validation/check_shipped_skill_routes.py:629
    - `raise SystemExit(main())` — scripts/validation/check_shipped_skill_routes.py:633
  - Result: Documented exit codes match actual exit paths in code.
- **for validators/gates:**
  - Can exit non-zero: Exits 1 (EXIT_DRIFT) when any plugin root routes to a skill not present in that root or has a malformed route name; exits 2 (EXIT_CONFIG) if roots cannot be found, if zero routes are found across roots (vacuous pass refusal), or on filesystem / decode / parse errors (`CheckError`).
  - Verified on repository: Exits 0 on the pinned repository commit with `[PASS] 30 Skill: route(s) resolve across 3 plugin root(s)`.
- **does the output match what the documentation claims:** Yes, outputs pass status reporting total routes and plugin roots.

## Defects — required
none

## Observations
- Architecture enforces strict fail-closed behavior across filesystem interactions: `_stat_mode` treats broken symlinks and unstatable paths as `CheckError` rather than reporting them absent, preventing whole plugin roots from dropping silently from validation.
- Vacuity protection is enforced both per-root (`scan_root:560`) and globally (`main:603`): a plugin root that ships skills but yields zero routes raises an error, ensuring a broken markdown parser or empty scan cannot report a false green pass.
- Scopes root discovery to `.claude` and direct children of `src/` rather than recursive globs, avoiding slow scans or false positives in development worktree clones under `.cache/worktrees/`, `.claude/worktrees/`, and `.wt/`.

## Context cost
28940 bytes, 634 lines, ~7200 tokens (plus imported `scripts/utils/markdown_parser.py` 46123 bytes).
