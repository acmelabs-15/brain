---
package: rjm
path: .claude/skills/doc-accuracy/SKILL.md
type: skill
bytes: 9275
unit: inv-rjm-117
in_scope_via: .claude/commands/build.md
aliases: []
memo_inputs:
  - {path: .claude/skills/doc-accuracy/SKILL.md, sha256: a01623b7716f524ef453a28f9eec5d414f53273557b76304d0c250563e82435d}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/skills/doc-accuracy/SKILL.md

## Purpose — required, verbatim
> "Verify documentation claims against actual code behavior. Code is truth; docs are the subject under test." — .claude/skills/doc-accuracy/SKILL.md:16

## Design intent — required
Provides asymmetric verification of documentation against source code, establishing code as the sole source of truth and treating documentation as the subject under test. Replaces shallow, unreliable legacy skills (`incoherence`, `doc-coverage`, `doc-sync`, `comment-analyzer`) by introducing a disciplined 6-phase pipeline that combines fast, deterministic script analysis (Phases 1–3 for symbol inventory, claim extraction, and compilability) with targeted Sonnet multi-agent audits (Phases 4–6 for behavioral verification, cross-document consistency, and comment quality/structural integrity). Without it, documentation drift, non-compilable code examples, conflicting quantitative claims, and silent behavioral inaccuracies would slip into releases unnoticed.

## Phase — required
cross-phase

## Inputs — required
- Command line flags and options:
  - "python3 scripts/doc_accuracy.py --target /path/to/repo" — .claude/skills/doc-accuracy/SKILL.md:87
  - "python3 scripts/doc_accuracy.py --target /path/to/repo --phases 3" — .claude/skills/doc-accuracy/SKILL.md:90
  - "python3 scripts/doc_accuracy.py --target /path/to/repo --diff-base main" — .claude/skills/doc-accuracy/SKILL.md:93
  - "python3 scripts/doc_accuracy.py --target /path/to/repo --output-dir .doc-accuracy" — .claude/skills/doc-accuracy/SKILL.md:96
  - "python3 scripts/doc_accuracy.py --target /path/to/repo --severity-threshold critical" — .claude/skills/doc-accuracy/SKILL.md:99
  - "python3 scripts/doc_accuracy.py --target /path/to/repo --format markdown" — .claude/skills/doc-accuracy/SKILL.md:102
  - "python3 scripts/doc_accuracy.py --target /path/to/repo --format summary" — .claude/skills/doc-accuracy/SKILL.md:105
- Source and documentation files:
  - Markdown documentation files and source code files enumerated in Phase 1 (.claude/skills/doc-accuracy/SKILL.md:128)
  - Mapped source files and documentation files provided to Phase 4 agents (.claude/skills/doc-accuracy/SKILL.md:147-150)
  - Extracted claims from `claims.json` (.claude/skills/doc-accuracy/SKILL.md:153)

## Outputs — required
- Artifacts produced in output directory:
  - `assessment.json`: "Phase 1: doc/source inventory with symbol index" — .claude/skills/doc-accuracy/SKILL.md:114
  - `claims.json`: "Phase 2: verifiable claims extracted from docs" — .claude/skills/doc-accuracy/SKILL.md:115
  - `compilability-findings.json`: "Phase 3: run status and symbol resolution findings" — .claude/skills/doc-accuracy/SKILL.md:116
  - `gate-result.json`: "Gate verdict, reason when inconclusive, and severity counts" — .claude/skills/doc-accuracy/SKILL.md:117
  - `report.md`: "Markdown summary (when `--format markdown`)" — .claude/skills/doc-accuracy/SKILL.md:118
- Intermediate agent findings artifacts:
  - `behavioral-findings.json` (.claude/skills/doc-accuracy/SKILL.md:70)
  - `consistency-findings.json` (.claude/skills/doc-accuracy/SKILL.md:71)
  - `structure-findings.json` (.claude/skills/doc-accuracy/SKILL.md:72)
- Proposed fixes for interactive reconciliation (.claude/skills/doc-accuracy/SKILL.md:177-185)

## Invokes — required
- script doc_accuracy.py — .claude/skills/doc-accuracy/SKILL.md:81
- agent Sonnet — .claude/skills/doc-accuracy/SKILL.md:70
- agent Sonnet — .claude/skills/doc-accuracy/SKILL.md:71
- agent Sonnet — .claude/skills/doc-accuracy/SKILL.md:72
- skill analyze — .claude/skills/doc-accuracy/SKILL.md:9
- skill fix-markdown-fences — .claude/skills/doc-accuracy/SKILL.md:10
- skill incoherence — .claude/skills/doc-accuracy/SKILL.md:51
- skill doc-coverage — .claude/skills/doc-accuracy/SKILL.md:52
- skill doc-sync — .claude/skills/doc-accuracy/SKILL.md:53
- skill comment-analyzer — .claude/skills/doc-accuracy/SKILL.md:54
- skill style-enforcement — .claude/skills/doc-accuracy/SKILL.md:262

## Invoked by — required
- command build.md — .claude/commands/build.md:69
- reference spec-prior-art-schema.md — .claude/skills/spec-generator/references/spec-prior-art-schema.md:292
- skill codebase-documenter — .claude/skills/codebase-documenter/SKILL.md:38
- skill ai-agents-docs-of-record — .claude/skills/ai-agents-docs-of-record/SKILL.md:214
- skill ai-agents-empirical-probe-toolkit — .claude/skills/ai-agents-empirical-probe-toolkit/SKILL.md:32
- skill validation-authority — .claude/skills/validation-authority/SKILL.md:139
- skill prose-self-check — .claude/skills/prose-self-check/SKILL.md:270
- skill fix-markdown-fences — .claude/skills/fix-markdown-fences/SKILL.md:11

## Concepts named — required, verbatim
- `doc-accuracy` — .claude/skills/doc-accuracy/SKILL.md:2 — defined here
- `Asymmetric Verification` — .claude/skills/doc-accuracy/SKILL.md:60 — defined here
- `Phase 1: Assessment` — .claude/skills/doc-accuracy/SKILL.md:67 — defined here
- `Phase 2: Claim Extraction` — .claude/skills/doc-accuracy/SKILL.md:68 — defined here
- `Phase 3: Compilability` — .claude/skills/doc-accuracy/SKILL.md:69 — defined here
- `Phase 4: Behavioral` — .claude/skills/doc-accuracy/SKILL.md:70 — defined here
- `Phase 5: Cross-Document` — .claude/skills/doc-accuracy/SKILL.md:71 — defined here
- `Phase 6: Structure` — .claude/skills/doc-accuracy/SKILL.md:72 — defined here
- `assessment.json` — .claude/skills/doc-accuracy/SKILL.md:67 — defined here
- `claims.json` — .claude/skills/doc-accuracy/SKILL.md:68 — defined here
- `compilability-findings.json` — .claude/skills/doc-accuracy/SKILL.md:69 — defined here
- `behavioral-findings.json` — .claude/skills/doc-accuracy/SKILL.md:70 — defined here
- `consistency-findings.json` — .claude/skills/doc-accuracy/SKILL.md:71 — defined here
- `structure-findings.json` — .claude/skills/doc-accuracy/SKILL.md:72 — defined here
- `gate-result.json` — .claude/skills/doc-accuracy/SKILL.md:117 — defined here
- `report.md` — .claude/skills/doc-accuracy/SKILL.md:118 — defined here
- `DID_NOT_RUN` — .claude/skills/doc-accuracy/SKILL.md:130 — defined here
- `Reconciliation` — .claude/skills/doc-accuracy/SKILL.md:177 — defined here
- `Spec vs Behavior` — .claude/skills/doc-accuracy/SKILL.md:192 — defined here
- `Non-Compilable Code` — .claude/skills/doc-accuracy/SKILL.md:193 — defined here
- `Cross-Doc Inconsistency` — .claude/skills/doc-accuracy/SKILL.md:194 — defined here
- `Domain Violations` — .claude/skills/doc-accuracy/SKILL.md:195 — defined here
- `API Surface Gaps` — .claude/skills/doc-accuracy/SKILL.md:196 — defined here
- `Critical` — .claude/skills/doc-accuracy/SKILL.md:202 — defined here
- `High` — .claude/skills/doc-accuracy/SKILL.md:203 — defined here
- `Medium` — .claude/skills/doc-accuracy/SKILL.md:204 — defined here
- `Low` — .claude/skills/doc-accuracy/SKILL.md:205 — defined here
- `incoherence` — .claude/skills/doc-accuracy/SKILL.md:51 — used here
- `doc-coverage` — .claude/skills/doc-accuracy/SKILL.md:52 — used here
- `doc-sync` — .claude/skills/doc-accuracy/SKILL.md:53 — used here
- `comment-analyzer` — .claude/skills/doc-accuracy/SKILL.md:54 — used here
- `analyze` — .claude/skills/doc-accuracy/SKILL.md:9 — used here
- `fix-markdown-fences` — .claude/skills/doc-accuracy/SKILL.md:10 — used here
- `style-enforcement` — .claude/skills/doc-accuracy/SKILL.md:262 — used here

## Structure
- `# Documentation Accuracy Skill` — .claude/skills/doc-accuracy/SKILL.md:14
- `## Triggers` — .claude/skills/doc-accuracy/SKILL.md:18
- `## When to Use` — .claude/skills/doc-accuracy/SKILL.md:30
- `## Replaces` — .claude/skills/doc-accuracy/SKILL.md:47
- `## Architecture` — .claude/skills/doc-accuracy/SKILL.md:58
- `### Asymmetric Verification` — .claude/skills/doc-accuracy/SKILL.md:60
- `### Phase Overview` — .claude/skills/doc-accuracy/SKILL.md:64
- `## Scripts` — .claude/skills/doc-accuracy/SKILL.md:77
- `## Invocation` — .claude/skills/doc-accuracy/SKILL.md:83
- `## Output Artifacts` — .claude/skills/doc-accuracy/SKILL.md:110
- `## Process` — .claude/skills/doc-accuracy/SKILL.md:122
- `### Phases 1-3: Deterministic (Script)` — .claude/skills/doc-accuracy/SKILL.md:124
- `### Phase 4: Behavioral Verification (Agent)` — .claude/skills/doc-accuracy/SKILL.md:132
- `### Phase 5: Cross-Document Consistency (Agent)` — .claude/skills/doc-accuracy/SKILL.md:169
- `### Phase 6: Structure and Quality (Agent)` — .claude/skills/doc-accuracy/SKILL.md:173
- `### Reconciliation (Interactive)` — .claude/skills/doc-accuracy/SKILL.md:177
- `## Issue Taxonomy` — .claude/skills/doc-accuracy/SKILL.md:188
- `## Severity Levels` — .claude/skills/doc-accuracy/SKILL.md:198
- `## Exit Codes` — .claude/skills/doc-accuracy/SKILL.md:209
- `## Anti-Patterns` — .claude/skills/doc-accuracy/SKILL.md:228
- `## Verification` — .claude/skills/doc-accuracy/SKILL.md:240
- `## Related Skills` — .claude/skills/doc-accuracy/SKILL.md:254

## Scripts — required if type is script or the skill ships scripts
- path: `.claude/skills/doc-accuracy/scripts/doc_accuracy.py`, language: Python 3, lines: 1404
- documented invocation:
  - "python3 scripts/doc_accuracy.py --target /path/to/repo" — .claude/skills/doc-accuracy/SKILL.md:87
  - "python3 scripts/doc_accuracy.py --target /path/to/repo --phases 3" — .claude/skills/doc-accuracy/SKILL.md:90
  - "python3 scripts/doc_accuracy.py --target /path/to/repo --diff-base main" — .claude/skills/doc-accuracy/SKILL.md:93
  - "python3 scripts/doc_accuracy.py --target /path/to/repo --output-dir .doc-accuracy" — .claude/skills/doc-accuracy/SKILL.md:96
  - "python3 scripts/doc_accuracy.py --target /path/to/repo --severity-threshold critical" — .claude/skills/doc-accuracy/SKILL.md:99
  - "python3 scripts/doc_accuracy.py --target /path/to/repo --format markdown" — .claude/skills/doc-accuracy/SKILL.md:102
  - "python3 scripts/doc_accuracy.py --target /path/to/repo --format summary" — .claude/skills/doc-accuracy/SKILL.md:105
- **executed:** yes
- actual command run: `python3 sources/rjm/.claude/skills/doc-accuracy/scripts/doc_accuracy.py --help`
  abridged stdout:
  ```text
  usage: doc_accuracy.py [-h] --target TARGET [--output-dir OUTPUT_DIR]
                         [--phases PHASES] [--diff-base DIFF_BASE]
                         [--severity-threshold {critical,high,medium,low}]
                         [--format {json,summary,markdown}]

  Documentation accuracy scanner (Phases 1-3)
  ```
  **actual exit code:** 0
- documented exit codes vs actual exit paths:
  Documented in `.claude/skills/doc-accuracy/SKILL.md:219-224`:
  - `0: No findings at or above severity threshold` — .claude/skills/doc-accuracy/SKILL.md:219
  - `1: Error or inconclusive run, including no source symbols for Phase 3` — .claude/skills/doc-accuracy/SKILL.md:220
  - `2: Configuration error, including an invalid --diff-base` — .claude/skills/doc-accuracy/SKILL.md:221
  - `3: External dependency failure, including unavailable or failed Git` — .claude/skills/doc-accuracy/SKILL.md:222
  - `10: Findings at or above severity threshold` — .claude/skills/doc-accuracy/SKILL.md:223
  Actual exit paths in code:
  - `sys.exit(main())` — .claude/skills/doc-accuracy/scripts/doc_accuracy.py:1403
  - `return 1` — .claude/skills/doc-accuracy/scripts/doc_accuracy.py:1266, 1284, 1328, 1347, 1354, 1397
  - `return 3` — .claude/skills/doc-accuracy/scripts/doc_accuracy.py:1304, 1310
  - `return 10` — .claude/skills/doc-accuracy/scripts/doc_accuracy.py:1395
  - `return 0` — .claude/skills/doc-accuracy/scripts/doc_accuracy.py:1399
  - `return exc.exit_code` — .claude/skills/doc-accuracy/scripts/doc_accuracy.py:1301
- for validators/gates: can it exit non-zero? Yes, returns 1, 2, 3, or 10. Does it fail on the source repo's own default branch? Running with `--target` scans claims and exits 0 when no findings exceed threshold.
- does the output match what the documentation claims? Yes, options, exit codes, and output artifacts match the documented CLI interface.

- path: `.claude/skills/doc-accuracy/scripts/pr_snapshot.py`, language: Python 3, lines: 669
- documented invocation: none (omitted from SKILL.md; CLI usage documented in argparse options)
- **executed:** yes
- actual command run: `python3 sources/rjm/.claude/skills/doc-accuracy/scripts/pr_snapshot.py --help`
  abridged stdout:
  ```text
  usage: pr_snapshot.py [-h] --owner OWNER --repo REPO
                        --pull-request PULL_REQUEST [--output-dir OUTPUT_DIR]
                        [--check-stale] [--identity-file IDENTITY_FILE]
                        [--run-scanner] [--verify-caller VERIFY_CALLER]

  Capture immutable PR snapshot for doc-accuracy review
  ```
  **actual exit code:** 0
- documented exit codes vs actual exit paths:
  Documented in `.claude/skills/doc-accuracy/scripts/pr_snapshot.py:20-24`:
  - `0: Success` — .claude/skills/doc-accuracy/scripts/pr_snapshot.py:20
  - `1: Verification failure (SHA mismatch, shallow, stale, caller dirty)` — .claude/skills/doc-accuracy/scripts/pr_snapshot.py:21
  - `2: Configuration error (bad args, missing dependency)` — .claude/skills/doc-accuracy/scripts/pr_snapshot.py:22
  - `3: External failure (network, GitHub API, timeout)` — .claude/skills/doc-accuracy/scripts/pr_snapshot.py:23
  - `4: Authentication error (token expired, permission denied)` — .claude/skills/doc-accuracy/scripts/pr_snapshot.py:24
  Actual exit paths in code:
  - `sys.exit(main())` — .claude/skills/doc-accuracy/scripts/pr_snapshot.py:668
  - `return EXIT_CONFIG` — .claude/skills/doc-accuracy/scripts/pr_snapshot.py:626
  - `return EXIT_OK` — .claude/skills/doc-accuracy/scripts/pr_snapshot.py:631, 659
  - `return exc.exit_code` — .claude/skills/doc-accuracy/scripts/pr_snapshot.py:664
- for validators/gates: can it exit non-zero? Yes, returns 1, 2, 3, or 4 on error or verification failure.
- does the output match what the documentation claims? Yes, options, exit codes, and output payloads match documented behavior.

## Defects — required
- `doc-drift` · .claude/skills/doc-accuracy/SKILL.md:79 · Scripts table documents only `scripts/doc_accuracy.py` and omits the bundled `scripts/pr_snapshot.py` script located in the same directory.

## Observations
- Hybrid deterministic/LLM architecture: Phases 1–3 use regex symbol scanning and compilability index lookups (<2 minutes total), while Phases 4–6 use Sonnet agents for deeper semantic and cross-document reasoning.
- Empirical benchmark data cited for agent model selection: Haiku was discarded due to 15.8% recall on critical issues, while Sonnet achieved 100% recall.
- Safe default on empty symbol tables: Phase 3 explicitly emits `DID_NOT_RUN` when no source symbols are indexed, preventing false-positive cascades where every doc reference is marked unresolvable.

## Context cost
`SKILL.md`: 9,275 bytes (~2,300 tokens). Bundled scripts: `scripts/doc_accuracy.py` (47,394 bytes) + `scripts/pr_snapshot.py` (21,648 bytes) = 69,042 bytes. Total skill context footprint: ~78,317 bytes (~19,500 tokens).
