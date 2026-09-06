---
package: rjm
path: .claude/skills/metrics/SKILL.md
type: skill
bytes: 7454
unit: inv-rjm-127
in_scope_via: .agents/architecture/README.md
aliases: []
memo_inputs:
  - {path: .claude/skills/metrics/SKILL.md, sha256: 702620038e2f62fbf3a88eca8f6c4efb606f8e48926ec03c4422169918bff9fe}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/skills/metrics/SKILL.md

## Purpose — required, verbatim
> "This utility collects and reports metrics on agent usage from git history." — .claude/skills/metrics/SKILL.md:15

## Design intent — required
Skill specification and invocation guide that defines the workflow for collecting multi-agent usage metrics from repository git logs and generating operational health reports. Solves the problem of lack of visibility into agent system health, adoption velocity, and governance compliance by wrapping `collect_metrics.py` with standard trigger phrases (`collect agent metrics`, `generate metrics dashboard`, `weekly metrics report`), clear operational guidelines, anti-patterns (such as comparing mismatched time windows or ignoring zero coverage), and verification checklists. It defines four core metrics (Invocation Rate, Agent Coverage, Infrastructure Review, and Usage Distribution), targets, detection patterns, and output formatting (summary, markdown, JSON) for human operators and CI workflows. Without it, engineers and agents would lack standardized triggers, verification gates, and procedures for measuring whether agent adoption meets quality and security thresholds.

## Phase — required
cross-phase

## Inputs — required
- Trigger phrases: `collect agent metrics`, `generate metrics dashboard`, `check agent adoption rate`, `weekly metrics report`, `export metrics as JSON` (.claude/skills/metrics/SKILL.md:21-25)
- Git repository history
- CLI options: `--since <days>`, `--output {json,markdown,summary}` (.claude/skills/metrics/SKILL.md:87-93)

## Outputs — required
- Console summary output (.claude/skills/metrics/SKILL.md:147)
- Formatted markdown report optionally saved to `.agents/metrics/` (.claude/skills/metrics/SKILL.md:150, 177)
- Structured JSON output for programmatic automation and CI integration (.claude/skills/metrics/SKILL.md:154)

## Invokes — required
- script collect_metrics.py — .claude/skills/metrics/SKILL.md:81
- script collect_metrics.py — .claude/skills/metrics/SKILL.md:87
- script collect_metrics.py — .claude/skills/metrics/SKILL.md:90
- script collect_metrics.py — .claude/skills/metrics/SKILL.md:93
- script collect_metrics.py — .claude/skills/metrics/SKILL.md:174

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `Agent Metrics Collection Utility` — .claude/skills/metrics/SKILL.md:11 — defined here
- `ADR-080` — .claude/skills/metrics/SKILL.md:8 — used here
- `Metric 1: Invocation Rate` — .claude/skills/metrics/SKILL.md:102 — defined here
- `Metric 2: Agent Coverage` — .claude/skills/metrics/SKILL.md:103 — defined here
- `Metric 4: Infrastructure Review` — .claude/skills/metrics/SKILL.md:104 — defined here
- `Metric 5: Usage Distribution` — .claude/skills/metrics/SKILL.md:105 — defined here
- `haiku` — .claude/skills/metrics/SKILL.md:7 — used here
- `sonnet-tier` — .claude/skills/metrics/SKILL.md:8 — used here
- `vendor-portability` — .claude/skills/metrics/SKILL.md:224 — used here

## Structure
- `# Agent Metrics Collection Utility` — .claude/skills/metrics/SKILL.md:11
- `## Purpose` — .claude/skills/metrics/SKILL.md:13
- `## Triggers` — .claude/skills/metrics/SKILL.md:17
- `## When to Use` — .claude/skills/metrics/SKILL.md:29
- `## Process` — .claude/skills/metrics/SKILL.md:45
- `## Anti-Patterns` — .claude/skills/metrics/SKILL.md:53
- `## Verification` — .claude/skills/metrics/SKILL.md:65
- `## Available Scripts` — .claude/skills/metrics/SKILL.md:77
- `## Quick Start` — .claude/skills/metrics/SKILL.md:83
- `## Metrics Collected` — .claude/skills/metrics/SKILL.md:96
- `## Detection Patterns` — .claude/skills/metrics/SKILL.md:107
- `### Agent Detection` — .claude/skills/metrics/SKILL.md:109
- `### Infrastructure Files` — .claude/skills/metrics/SKILL.md:117
- `### Commit Types` — .claude/skills/metrics/SKILL.md:133
- `## Output Formats` — .claude/skills/metrics/SKILL.md:143
- `### Summary (Default)` — .claude/skills/metrics/SKILL.md:145
- `### Markdown` — .claude/skills/metrics/SKILL.md:149
- `### JSON` — .claude/skills/metrics/SKILL.md:153
- `## CI Integration` — .claude/skills/metrics/SKILL.md:157
- `## Manual Report Generation` — .claude/skills/metrics/SKILL.md:168
- `## Extending the Utility` — .claude/skills/metrics/SKILL.md:184
- `### Adding New Metrics` — .claude/skills/metrics/SKILL.md:186
- `### Adding New Agent Patterns` — .claude/skills/metrics/SKILL.md:193
- `### Adding Infrastructure Patterns` — .claude/skills/metrics/SKILL.md:197
- `## Troubleshooting` — .claude/skills/metrics/SKILL.md:201
- `### No Agents Detected` — .claude/skills/metrics/SKILL.md:203
- `### Git Errors` — .claude/skills/metrics/SKILL.md:209
- `## Related Documents` — .claude/skills/metrics/SKILL.md:215

## Scripts — required if type is script or the skill ships scripts
The skill ships `collect_metrics.py`:
- path: `.claude/skills/metrics/collect_metrics.py`, language: Python 3, lines: 406
- documented invocation:
  - "python .claude/skills/metrics/collect_metrics.py" — .claude/skills/metrics/SKILL.md:87
  - "python .claude/skills/metrics/collect_metrics.py --since 90 --output markdown" — .claude/skills/metrics/SKILL.md:90
  - "python .claude/skills/metrics/collect_metrics.py --output json" — .claude/skills/metrics/SKILL.md:93
  - "python .claude/skills/metrics/collect_metrics.py" — .claude/skills/metrics/SKILL.md:174
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
  Documented in `collect_metrics.py` docstring (0: Success, 1: Error). Code executes `return 0` on clean completion (.claude/skills/metrics/collect_metrics.py:401) and `return 1` on missing path or non-git directory (.claude/skills/metrics/collect_metrics.py:386, 390).
- for validators/gates: can it exit non-zero? Yes, exits 1 on missing directory or non-git repository. Does it fail on default branch? No, returns 0.
- does the output match what documentation claims? Yes, correctly outputs summary, markdown, or JSON with the 4 metrics.

## Defects — required
- `doc-drift` · .claude/skills/metrics/SKILL.md:189 · Line 189 instructs "Add collection logic to both scripts" and lines 195/199 reference `$AgentPatterns` and `$InfrastructurePatterns` arrays, indicating a former PowerShell implementation, but only `collect_metrics.py` is present in `.claude/skills/metrics/`.
- `orphan` · .claude/skills/metrics/SKILL.md:1 · Skill is not invoked by any lifecycle command or entry point; it exists as a standalone operational utility triggered on demand or via CI workflow.

## Observations
- Configures frontmatter model tier routing to `haiku` (.claude/skills/metrics/SKILL.md:7) under ADR-080 rule 3 ("routing/mechanical work where the cheaper tier suffices").
- Includes a vendor-portability comment block (.claude/skills/metrics/SKILL.md:224) acknowledging that related documentation paths (`docs/agent-metrics.md`, `.agents/metrics/dashboard-template.md`, `.agents/metrics/baseline-report.md`, `.github/workflows/agent-metrics.yml`) are repo-specific and not bundled with consumer installations.

## Context cost
7454 bytes (~1864 tokens) for SKILL.md.
Combined with shipped script `collect_metrics.py` (12936 bytes), total skill bundle context is 20390 bytes (~5098 tokens).
