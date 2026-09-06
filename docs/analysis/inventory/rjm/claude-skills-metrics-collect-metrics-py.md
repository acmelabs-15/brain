---
package: rjm
path: .claude/skills/metrics/collect_metrics.py
type: skill
bytes: 12936
unit: inv-rjm-127
in_scope_via: .agents/architecture/README.md
aliases: []
memo_inputs:
  - {path: .claude/skills/metrics/collect_metrics.py, sha256: aae715e460693787e19570b0a4b426f67d52e990a4a8781448708151603286c5}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/skills/metrics/collect_metrics.py

## Purpose — required, verbatim
> "Collects and reports metrics on agent usage from git history." — .claude/skills/metrics/collect_metrics.py:4

## Design intent — required
CLI and library utility that mines git commit history and diff trees to quantify autonomous agent adoption, invocation frequency, conventional commit category coverage, and security review compliance on infrastructure modifications. It parses agent names from commit messages using regular expressions (identifying 19 distinct agent roles and attribution syntaxes), classifies conventional commit prefixes, matches infrastructure file paths, and aggregates findings into structured JSON, formatted Markdown reports, or console summaries. Without it, engineering teams and orchestrators lack empirical visibility into whether agents are actually being utilized, whether adoption meets predefined thresholds (e.g. 50% commit coverage), and whether high-risk infrastructure changes undergo mandatory security review.

## Phase — required
cross-phase

## Inputs — required
- Command-line arguments:
  - `--since`: "Number of days to analyze" (default: 30) — .claude/skills/metrics/collect_metrics.py:373
  - `--output`: "Output format" choices=["json", "markdown", "summary"] (default: "summary") — .claude/skills/metrics/collect_metrics.py:378
  - `--repo-path`: "Repository path" (default: ".") — .claude/skills/metrics/collect_metrics.py:380
- Git repository commit logs and diff trees accessed via `git log` and `git diff-tree` (.claude/skills/metrics/collect_metrics.py:67, 102)

## Outputs — required
- Formatted metrics report written to stdout in one of three formats:
  - Structured JSON object containing `period`, `metric_1_invocation_rate`, `metric_2_coverage`, `metric_4_infrastructure_review`, and `metric_5_distribution` (.claude/skills/metrics/collect_metrics.py:186, 395)
  - Markdown report with executive summary and metric tables (.claude/skills/metrics/collect_metrics.py:288, 397)
  - Human-readable summary banner (.claude/skills/metrics/collect_metrics.py:237, 399)

## Invokes — required
none

## Invoked by — required
- skill metrics — .claude/skills/metrics/SKILL.md:81
- skill metrics — .claude/skills/metrics/SKILL.md:87
- skill metrics — .claude/skills/metrics/SKILL.md:90
- skill metrics — .claude/skills/metrics/SKILL.md:93
- skill metrics — .claude/skills/metrics/SKILL.md:174

## Concepts named — required, verbatim
- `Agent Metrics Collection Utility` — .claude/skills/metrics/collect_metrics.py:2 — defined here
- `ADR-035` — .claude/skills/metrics/collect_metrics.py:7 — used here
- `AGENT_PATTERNS` — .claude/skills/metrics/collect_metrics.py:22 — defined here
- `INFRASTRUCTURE_PATTERNS` — .claude/skills/metrics/collect_metrics.py:32 — defined here
- `COMMIT_TYPE_PATTERNS` — .claude/skills/metrics/collect_metrics.py:46 — defined here
- `conventional commit` — .claude/skills/metrics/collect_metrics.py:125 — used here
- `metric_1_invocation_rate` — .claude/skills/metrics/collect_metrics.py:193 — defined here
- `metric_2_coverage` — .claude/skills/metrics/collect_metrics.py:197 — defined here
- `metric_4_infrastructure_review` — .claude/skills/metrics/collect_metrics.py:205 — defined here
- `metric_5_distribution` — .claude/skills/metrics/collect_metrics.py:217 — defined here
- `orchestrator` — .claude/skills/metrics/collect_metrics.py:23 — used here
- `security` — .claude/skills/metrics/collect_metrics.py:23 — used here
- `qa` — .claude/skills/metrics/collect_metrics.py:23 — used here

## Structure
none (python script; functions and definitions: AGENT_PATTERNS, INFRASTRUCTURE_PATTERNS, COMMIT_TYPE_PATTERNS, get_commits_since, get_commit_files, find_agents_in_text, get_commit_type, is_infrastructure_file, get_metrics, format_summary, format_markdown, main)

## Scripts — required if type is script or the skill ships scripts
- path: `.claude/skills/metrics/collect_metrics.py`, language: Python 3, lines: 406
- documented invocation:
  - "python .claude/skills/metrics/collect_metrics.py" — .claude/skills/metrics/SKILL.md:87
  - "python .claude/skills/metrics/collect_metrics.py --since 90 --output markdown" — .claude/skills/metrics/SKILL.md:90
  - "python .claude/skills/metrics/collect_metrics.py --output json" — .claude/skills/metrics/SKILL.md:93
  - "python .claude/skills/metrics/collect_metrics.py \\" — .claude/skills/metrics/SKILL.md:174
- **executed:** yes
- actual command run: `python3 .claude/skills/metrics/collect_metrics.py` (executed within `sources/rjm`)
- stdout:
  ```
  ============================================================
  AGENT METRICS SUMMARY
  ============================================================

  Period: 2026-08-06 to 2026-09-05
  Total Commits Analyzed: 401

  ----------------------------------------
  METRIC 1: INVOCATION RATE BY AGENT
  ----------------------------------------
    memory                 39 ( 59.1%)
    security                8 ( 12.1%)
    qa                      7 ( 10.6%)
    pr-comment-responder    3 (  4.5%)
    retrospective           3 (  4.5%)
    analyst                 3 (  4.5%)
    devops                  1 (  1.5%)
    orchestrator            1 (  1.5%)
    implementer             1 (  1.5%)

  ----------------------------------------
  METRIC 2: AGENT COVERAGE
  ----------------------------------------
    Overall: 16.0% (Target: 50%)
    Status: BEHIND

  ----------------------------------------
  METRIC 4: INFRASTRUCTURE REVIEW RATE
  ----------------------------------------
    Infrastructure Commits: 347
    With Security Review: 7
    Review Rate: 2.0% (Target: 100%)
    Status: BEHIND

  ============================================================
  ```
- **actual exit code**: 0
- documented exit codes vs actual exit paths:
  Documented in script docstring:
  - "0 - Success: Metrics collected and output successfully" — .claude/skills/metrics/collect_metrics.py:8
  - "1 - Error: Path not found or not a git repository" — .claude/skills/metrics/collect_metrics.py:9
  Actual exit paths in code:
  - `sys.exit(main())` — .claude/skills/metrics/collect_metrics.py:405
  - `return 0` (.claude/skills/metrics/collect_metrics.py:401) on successful metrics collection and output
  - `return 1` (.claude/skills/metrics/collect_metrics.py:386) when path does not exist
  - `return 1` (.claude/skills/metrics/collect_metrics.py:390) when path does not contain a `.git` directory
- for validators/gates: can it exit non-zero? Yes, returns 1 on invalid path or non-git directory. Does it fail on default branch? No, returns 0.
- does the output match what the documentation claims? Yes, produces console summary, markdown report, or JSON object matching documented schema.

## Defects — required
- `doc-drift` · .claude/skills/metrics/collect_metrics.py:5 · Docstring claims script "Implements the 8 key metrics defined in docs/agent-metrics.md.", but the implementation computes only 4 metrics (`metric_1_invocation_rate`, `metric_2_coverage`, `metric_4_infrastructure_review`, `metric_5_distribution`).
- `other` · .claude/skills/metrics/collect_metrics.py:98 · Subprocess execution invokes `git diff-tree` per commit sequentially in a Python loop without batching; on repositories with high commit volume this incurs substantial execution latency.

## Observations
- Pure Python standard library implementation requiring no external pip dependencies (`argparse`, `json`, `re`, `subprocess`, `sys`, `datetime`, `pathlib`).
- Pattern recognition covers 19 agent roles and diverse attribution forms (`Reviewed by: security`, `agent: implementer`, `[security-agent]`).
- Supports automated integration with CI pipelines (e.g. `.github/workflows/agent-metrics.yml`) via machine-readable JSON output mode.

## Context cost
12936 bytes (~3234 tokens). Self-contained Python script.
