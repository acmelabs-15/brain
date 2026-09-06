---
package: rjm
path: .claude/skills/orphan-ref-validator/SKILL.md
type: skill
bytes: 21618
unit: inv-rjm-131
in_scope_via: .claude/commands/build.md
aliases: []
memo_inputs:
  - {path: .claude/skills/orphan-ref-validator/SKILL.md, sha256: 69f9c7a8e800ef594a858838198baecfc0ec92a1f3f7af1b5d4fd3bef244c5a3}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/skills/orphan-ref-validator/SKILL.md

## Purpose — required, verbatim
> "Scans structured artifacts (specs, ADRs, eval fixtures, plugin manifests, skill descriptions) for references to entities that do not exist in the working tree:" — .claude/skills/orphan-ref-validator/SKILL.md:15

## Design intent — required
Provides an automated, pre-commit and build-gate validation skill that scans structured artifacts (specs, architectural decision records, evaluation fixtures, plugin manifests, and skill descriptions) for references to skills, scripts, rules, or instruction documents that have been deleted, renamed, or never created. In a large autonomous-agent repository where dispatch is largely name-based (via frontmatter names, subagent strings, command paths) rather than statically linked, dead references silently accumulate as skills are pruned or refactored. `orphan-ref-validator` blocks orphaned references before they trigger costly review iterations or CI failures. It couples strict AST/regex extractors with defense-in-depth security checks (CWE-22 path traversal, CWE-59 symlink escapes, secret denylisting) and incorporates practical debt-management controls: baseline files for pre-existing debt and file/line HTML comment directives (`<!-- orphan-ref-ignore-file -->`, `<!-- orphan-ref-ignore -->`) for intentional historical documentation.

## Phase — required
rjm:build

## Inputs — required
- Structured artifact target files and directories passed via `--targets` or default tracked targets (`.md`, `.json`, `.yaml`, `.yml` under `.agents/specs/`, `.claude/rules/`, `.github/instructions/`, `src/copilot-cli/instructions/`, and `tests/`, plus plugin manifest JSON files) (.claude/skills/orphan-ref-validator/SKILL.md:55)
- Opt-in directories via command-line flags:
  - `--include-adrs`: adds `.agents/architecture/` and `docs/` (.claude/skills/orphan-ref-validator/SKILL.md:56)
  - `--include-skill-descriptions`: adds `.claude/skills/*/SKILL.md` (.claude/skills/orphan-ref-validator/SKILL.md:57)
- Working tree state checked as sources of truth:
  - `.claude/skills/<name>/SKILL.md` directories (source of truth for `skill_name`) (.claude/skills/orphan-ref-validator/SKILL.md:200)
  - `build/scripts/`, `scripts/validation/`, `scripts/`, `tests/` files on disk (source of truth for `script_path`) (.claude/skills/orphan-ref-validator/SKILL.md:201)
  - `.claude/rules/` files on disk (source of truth for `rule_path`) (.claude/skills/orphan-ref-validator/SKILL.md:202)
  - `.github/instructions/` and `src/copilot-cli/instructions/` files on disk (source of truth for `instruction_path`) (.claude/skills/orphan-ref-validator/SKILL.md:203)
- Command-line flags:
  - `--allow-missing-targets` (.claude/skills/orphan-ref-validator/SKILL.md:58)
  - `--allow-empty-scan` (.claude/skills/orphan-ref-validator/SKILL.md:59)
  - `--baseline FILE`: Path to baseline file of known pre-existing finding keys (`target_file:line:kind:referenced_entity`) (.claude/skills/orphan-ref-validator/SKILL.md:60)
  - `--repo-root PATH` (.claude/skills/orphan-ref-validator/SKILL.md:61)
  - `--output {json,human}` (.claude/skills/orphan-ref-validator/SKILL.md:62)
  - `--log-level {DEBUG,INFO,WARNING,ERROR}` (.claude/skills/orphan-ref-validator/SKILL.md:63)
- In-file ignore directives:
  - `<!-- orphan-ref-ignore-file -->` appearing in first 50 lines (.claude/skills/orphan-ref-validator/SKILL.md:145)
  - `<!-- orphan-ref-ignore -->` on the same line as a reference (.claude/skills/orphan-ref-validator/SKILL.md:146)

## Outputs — required
- Structured JSON output conforming to ADR-056 envelope on stdout (`--output json`, default) (.claude/skills/orphan-ref-validator/SKILL.md:67-100)
  - `Success`: boolean
  - `Data.findings`: array of findings with `kind`, `severity`, `target_file`, `line`, `referenced_entity`, `recommendation`
  - `Data.verdict`: string verdict (`CRITICAL_FAIL`, `WARN`, `PASS`, or `ERROR`)
  - `Data.counts`: summary dictionary containing `files_scanned`, `files_skipped`, `refs_checked`, `findings_total`, `findings_suppressed`, `directive_suppressed`, `incomplete_scans`
  - `Data.directive_suppressed`: array of directive-suppressed references
  - `Data.incomplete_scans`: array of incomplete scan target records
  - `Error`: error object or null
  - `Metadata`: dictionary with `Script`, `Version`, `Timestamp`
- Human-readable compact summary on stdout (`--output human`) (.claude/skills/orphan-ref-validator/SKILL.md:102-115)
- Verdict line on stdout: `VERDICT: PASS`, `VERDICT: WARN`, `VERDICT: CRITICAL_FAIL`, or `VERDICT: ERROR` (.claude/skills/orphan-ref-validator/SKILL.md:21, 99, 114, 167)
- Process exit code conforming to ADR-035:
  - `0`: `VERDICT: PASS` or `VERDICT: WARN` (.claude/skills/orphan-ref-validator/SKILL.md:21)
  - `1`: `VERDICT: CRITICAL_FAIL` (.claude/skills/orphan-ref-validator/SKILL.md:21)
  - `2`: Usage/configuration or incomplete scan (.claude/skills/orphan-ref-validator/SKILL.md:21)
  - `3`: External failure (.claude/skills/orphan-ref-validator/SKILL.md:21)
  - `4`: Permission failure (.claude/skills/orphan-ref-validator/SKILL.md:21)
- Baseline output file when stdout redirected: `orphan-ref-baseline.json` (.claude/skills/orphan-ref-validator/SKILL.md:346)

## Invokes — required
- script scan.py — .claude/skills/orphan-ref-validator/SKILL.md:41
- script __init__.py — .claude/skills/orphan-ref-validator/SKILL.md:176
- script validate_plugin_manifests.py — .claude/skills/orphan-ref-validator/SKILL.md:372

## Invoked by — required
- command build — .claude/commands/build.md:70
- command test — .claude/commands/test.md:96
- skill ai-agents-architecture-contract — .claude/skills/ai-agents-architecture-contract/SKILL.md:68
- skill ai-agents-config-catalog — .claude/skills/ai-agents-config-catalog/SKILL.md:78
- skill ai-agents-diagnostics-toolkit — .claude/skills/ai-agents-diagnostics-toolkit/SKILL.md:28
- rule canonical-source-mirror — .claude/rules/canonical-source-mirror.md:108

## Concepts named — required, verbatim
- `orphan-ref-validator` — .claude/skills/orphan-ref-validator/SKILL.md:2 — defined here
- `Finding` — .claude/skills/orphan-ref-validator/SKILL.md:17 — defined here
- `ADR-056` — .claude/skills/orphan-ref-validator/SKILL.md:21 — used here
- `ADR-035` — .claude/skills/orphan-ref-validator/SKILL.md:21 — used here
- `VERDICT: PASS` — .claude/skills/orphan-ref-validator/SKILL.md:21 — used here
- `VERDICT: WARN` — .claude/skills/orphan-ref-validator/SKILL.md:21 — used here
- `VERDICT: CRITICAL_FAIL` — .claude/skills/orphan-ref-validator/SKILL.md:21 — used here
- `OPT_IN_ADR_TARGETS` — .claude/skills/orphan-ref-validator/SKILL.md:122 — used here
- `OPT_IN_SKILL_TARGETS` — .claude/skills/orphan-ref-validator/SKILL.md:123 — used here
- `EXCLUDE_DIR_NAMES` — .claude/skills/orphan-ref-validator/SKILL.md:130 — used here
- `VERDICT: ERROR` — .claude/skills/orphan-ref-validator/SKILL.md:167 — used here
- `KNOWN_SINGLE_WORD_SKILLS` — .claude/skills/orphan-ref-validator/SKILL.md:200 — used here
- `FOREIGN_SKILL_CATALOGS` — .claude/skills/orphan-ref-validator/SKILL.md:205 — used here
- `CWE-22` — .claude/skills/orphan-ref-validator/SKILL.md:239 — used here
- `CWE-59` — .claude/skills/orphan-ref-validator/SKILL.md:239 — used here
- `Mandatory Exit Gate` — .claude/skills/orphan-ref-validator/SKILL.md:314 — used here
- `REQ-009` — .claude/skills/orphan-ref-validator/SKILL.md:367 — used here
- `DESIGN-009` — .claude/skills/orphan-ref-validator/SKILL.md:367 — used here
- `TASK-009` — .claude/skills/orphan-ref-validator/SKILL.md:367 — used here
- `ADR-042` — .claude/skills/orphan-ref-validator/SKILL.md:369 — used here

## Structure
- `# orphan-ref-validator` — .claude/skills/orphan-ref-validator/SKILL.md:11
- `## Purpose` — .claude/skills/orphan-ref-validator/SKILL.md:13
- `## Triggers` — .claude/skills/orphan-ref-validator/SKILL.md:25
- `## Path conventions` — .claude/skills/orphan-ref-validator/SKILL.md:34
- `## Inputs` — .claude/skills/orphan-ref-validator/SKILL.md:38
- `## Outputs` — .claude/skills/orphan-ref-validator/SKILL.md:65
- `## Process` — .claude/skills/orphan-ref-validator/SKILL.md:117
- `### Phase 1: Resolve Targets` — .claude/skills/orphan-ref-validator/SKILL.md:119
- `### Phase 2: Walk Files` — .claude/skills/orphan-ref-validator/SKILL.md:127
- `### Phase 3: Detect References` — .claude/skills/orphan-ref-validator/SKILL.md:134
- `### Ignore directives` — .claude/skills/orphan-ref-validator/SKILL.md:141
- `### Phase 4: Resolve and Verdict` — .claude/skills/orphan-ref-validator/SKILL.md:154
- `## Verification` — .claude/skills/orphan-ref-validator/SKILL.md:161
- `## Scripts` — .claude/skills/orphan-ref-validator/SKILL.md:171
- `## Anti-Patterns` — .claude/skills/orphan-ref-validator/SKILL.md:180
- `## Extension Points` — .claude/skills/orphan-ref-validator/SKILL.md:187
- `## Behavior` — .claude/skills/orphan-ref-validator/SKILL.md:194
- `### Reference detection` — .claude/skills/orphan-ref-validator/SKILL.md:196
- `### Verdict logic` — .claude/skills/orphan-ref-validator/SKILL.md:209
- `### Vendored install behavior` — .claude/skills/orphan-ref-validator/SKILL.md:221
- `### Path safety` — .claude/skills/orphan-ref-validator/SKILL.md:225
- `## Failure modes` — .claude/skills/orphan-ref-validator/SKILL.md:229
- `## When the /build gate fails` — .claude/skills/orphan-ref-validator/SKILL.md:245
- `## Investigation workflow` — .claude/skills/orphan-ref-validator/SKILL.md:277
- `## Examples` — .claude/skills/orphan-ref-validator/SKILL.md:290
- `## Tests` — .claude/skills/orphan-ref-validator/SKILL.md:304
- `## Wiring` — .claude/skills/orphan-ref-validator/SKILL.md:312
- "### `/build` Mandatory Exit Gate" — .claude/skills/orphan-ref-validator/SKILL.md:314
- `### PR exit gate: scope to changed files` — .claude/skills/orphan-ref-validator/SKILL.md:318
- `### Generating a baseline` — .claude/skills/orphan-ref-validator/SKILL.md:337
- `### Pre-push hook (optional)` — .claude/skills/orphan-ref-validator/SKILL.md:361
- `## References` — .claude/skills/orphan-ref-validator/SKILL.md:365

## Scripts — required if type is script or the skill ships scripts
- path: `.claude/skills/orphan-ref-validator/scripts/scan.py`, language: Python 3, lines: 1088
- documented invocation:
  - "uv run python \"${COPILOT_PLUGIN_ROOT:-${CLAUDE_PLUGIN_ROOT:-.claude}}\"/skills/orphan-ref-validator/scripts/scan.py" — .claude/skills/orphan-ref-validator/SKILL.md:294
- **executed:** yes
- actual command run: `uv run python .claude/skills/orphan-ref-validator/scripts/scan.py` (executed from `sources/rjm`)
  abridged stdout:
  ```json
  {
    "Success": true,
    "Data": {
      "findings": [...],
      "verdict": "CRITICAL_FAIL",
      "counts": {
        "files_scanned": 150,
        "files_skipped": 0,
        "refs_checked": 340,
        "findings_total": 48,
        "findings_suppressed": 0,
        "directive_suppressed": 35,
        "incomplete_scans": 0
      }
    }
  }
  VERDICT: CRITICAL_FAIL
  ```
  **actual exit code**: 1
- documented exit codes vs. actual exit paths:
  Documented in SKILL.md:21: "VERDICT: PASS or VERDICT: WARN exits 0; VERDICT: CRITICAL_FAIL exits 1; usage/configuration or incomplete scan exits 2; external failures exit 3; permission failures exit 4."
  Actual exit paths in code:
  - `return 0` (.claude/skills/orphan-ref-validator/scripts/scan.py:1071) when verdict is PASS or WARN.
  - `return 1` (.claude/skills/orphan-ref-validator/scripts/scan.py:1073) when verdict is CRITICAL_FAIL.
  - `return scan_error_exit_code(envelope.Data.incomplete_scans)` (.claude/skills/orphan-ref-validator/scripts/scan.py:1062, 1076) returning 2 for config/missing targets or 4 for auth/permission errors.
- for validators/gates: can it exit non-zero? Yes, exits 1 on active critical findings, 2 on configuration/target errors, 4 on permission failures. Does it fail on the source repo's own default branch? Yes, executing a default repo-wide scan exits 1 (`VERDICT: CRITICAL_FAIL`) due to pre-existing orphan references in `.agents/specs/`.
- does the output match what the documentation claims? Output format matches the documented ADR-056 envelope schema and exit codes, but default repo-wide scan fails rather than passes as claimed in verification checklist line 168.

## Defects — required
- `doc-drift` · .claude/skills/orphan-ref-validator/SKILL.md:168 · Verification checklist states running `scan.py` from repo root "exits 0 with `VERDICT: PASS` on default tracked text targets", but executing the command on the repository default branch exits 1 with `VERDICT: CRITICAL_FAIL` due to pre-existing orphan references in `.agents/specs/`.
- `internal-contradiction` · .claude/skills/orphan-ref-validator/SKILL.md:168 · Verification checklist line 168 claims default scan passes (`VERDICT: PASS`), contradicting line 256-258 ("PR #3735 measured 1790 repo-wide findings") and line 320-322 ("A default repo-wide scan (no --targets) fails on pre-existing orphan refs that predate the gate").
- `doc-drift` · .claude/skills/orphan-ref-validator/SKILL.md:55 · Inputs table and Process Phase 2 (.claude/skills/orphan-ref-validator/SKILL.md:129) state that candidate scan targets have suffix matching `.md`, `.json`, `.yaml`, `.yml`, omitting `.py` which is included in `SCAN_FILE_SUFFIXES` (.claude/skills/orphan-ref-validator/scripts/walking.py:27).
- `doc-drift` · .claude/skills/orphan-ref-validator/SKILL.md:173 · The `## Scripts` table in `SKILL.md` lists only `scripts/scan.py` and `scripts/__init__.py`, omitting helper modules `scripts/walking.py`, `scripts/envelope.py`, `scripts/filters.py`, `scripts/patterns.py`, and `scripts/counts.py` that implement core scanning functionality.

## Observations
- False-positive acknowledgement: Documentation explicitly documents high historical false-positive rates (PR #3735: 1790 findings with only 68 true positives, line 256; `.serena/memories` 183 findings with 0 true positives) and provides concrete remediation workflows (scoping to changed files via `--targets $(git diff --name-only origin/main...HEAD)` or recording a baseline via `--baseline`).
- 50-line window constraint: Directive parser only inspects `text.splitlines()[:50]`, causing file-scope `<!-- orphan-ref-ignore-file -->` directives placed at line 51 or below to silently fail (.claude/skills/orphan-ref-validator/SKILL.md:148).
- Vendor portability: Uses `${COPILOT_PLUGIN_ROOT:-${CLAUDE_PLUGIN_ROOT:-.claude}}` path resolution across all documented CLI commands to support Claude Code plugins and Copilot CLI mirrors.

## Context cost
21618 bytes (~5405 tokens). When invoked, loads its companion scripts in `scripts/`: `scan.py` (39760 bytes), `walking.py` (12883 bytes), `patterns.py` (10933 bytes), `envelope.py` (9867 bytes), `filters.py` (9457 bytes), `counts.py` (4325 bytes), and `__init__.py` (625 bytes), totaling ~109.5 KB (~27.4K tokens).
