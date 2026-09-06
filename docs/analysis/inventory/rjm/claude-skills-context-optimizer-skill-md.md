---
package: rjm
path: .claude/skills/context-optimizer/SKILL.md
type: skill
bytes: 18729
unit: inv-rjm-109
in_scope_via: .agents/architecture/README.md
aliases: []
memo_inputs:
  - {path: .claude/skills/context-optimizer/SKILL.md, sha256: eb0f4a89d3aff53674b65870897195b1d75531ae2ab962f97f0b85bf5dbc8042}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/skills/context-optimizer/SKILL.md

## Purpose — required, verbatim
> "Tooling suite for optimizing Claude Code context placement. Passive context (AGENTS.md, @imports) achieves 100% pass rates versus 53-79% for skills by eliminating decision points." — .claude/skills/context-optimizer/SKILL.md:15

## Design intent — required
Provides an automated tooling suite and decision doctrine for optimizing context placement across Claude Code projects. Grounded in empirical research (Vercel evaluations demonstrating that passive context achieves 100% pass rates compared to 53-79% for skills by eliminating agent retrieval decision points, balanced against Anthropic context-engineering warnings regarding overconstraint and continuous token burn), it operationalizes the principle: passive context earns its slot only for what the model cannot know (post-cutoff framework APIs, repository gotchas, local conventions), while pre-trained engineering knowledge belongs in progressive disclosure or deletion. The skill bundles scripts to classify content (Skill vs PassiveContext vs Hybrid), compress markdown to pipe-delimited formats, extract details into index files, and mechanically validate structural compliance and size exception audits. Without this skill, repository maintainers risk either unbounded passive context bloat (billing tokens on every turn) or skill retrieval failures from ambiguous agent decision points.

## Phase — required
cross-phase

## Inputs — required
- Target content and file paths:
  - Skill directories (e.g. `.claude/skills/github` — .claude/skills/context-optimizer/SKILL.md:157)
  - Skill specification files (e.g. `SKILL.md` — .claude/skills/context-optimizer/SKILL.md:160)
  - Passive context markdown files (e.g. README.md, CRITICAL-CONTEXT.md, AGENTS.md — .claude/skills/context-optimizer/SKILL.md:259)
- Script flags and options:
  - `-p` / `--path`: path to skill or directory (.claude/skills/context-optimizer/SKILL.md:157)
  - `-d` / `--details`: detailed metrics (.claude/skills/context-optimizer/SKILL.md:163)
  - `-i` / `--input`: input file path (.claude/skills/context-optimizer/SKILL.md:209)
  - `-l` / `--level`: compression level (light, medium, aggressive — .claude/skills/context-optimizer/SKILL.md:212)
  - `-o` / `--output`: output file path (.claude/skills/context-optimizer/SKILL.md:212)
  - `-v` / `--verbose`: verbose output (.claude/skills/context-optimizer/SKILL.md:215)
  - `--format`: output format (`json`, `table` — .claude/skills/context-optimizer/SKILL.md:333)
- User triggers:
  - "analyze skill placement" — .claude/skills/context-optimizer/SKILL.md:19
  - "compress markdown" — .claude/skills/context-optimizer/SKILL.md:20
  - "optimize context" — .claude/skills/context-optimizer/SKILL.md:21
  - "extract and index" — .claude/skills/context-optimizer/SKILL.md:22
  - "audit always-on rules" — .claude/skills/context-optimizer/SKILL.md:23

## Outputs — required
- Classification JSON with placement recommendation (`Skill`, `PassiveContext`, `Hybrid`), confidence score, reasoning, and component recommendations (.claude/skills/context-optimizer/SKILL.md:168-177)
- Compressed markdown text / pipe-delimited format achieving 40-80% token reduction (.claude/skills/context-optimizer/SKILL.md:195, 220)
- Extracted section detail files and compact index files (.claude/skills/context-optimizer/SKILL.md:253, 268-275)
- Compliance check results in JSON or table format with violation, warning, and scope details (.claude/skills/context-optimizer/SKILL.md:329-336)
- Decisions / verdicts on context placement:
  - "Skill vs Passive Context vs Hybrid" — .claude/skills/context-optimizer/SKILL.md:4
  - "Classification matches expected type (Skill/PassiveContext/Hybrid)" — .claude/skills/context-optimizer/SKILL.md:34
  - "Compliance validator returns exit code 0" — .claude/skills/context-optimizer/SKILL.md:36

## Invokes — required
- script analyze_skill_placement.py — .claude/skills/context-optimizer/SKILL.md:43
- script compress_markdown_content.py — .claude/skills/context-optimizer/SKILL.md:44
- script test_skill_passive_compliance.py — .claude/skills/context-optimizer/SKILL.md:45
- script extract_and_index.py — .claude/skills/context-optimizer/SKILL.md:46
- script path_validation.py — .claude/skills/context-optimizer/SKILL.md:47
- script instruction_budget.py — .claude/skills/context-optimizer/SKILL.md:114
- script command_size.py — .claude/skills/context-optimizer/SKILL.md:305
- script skill_size.py — .claude/skills/context-optimizer/SKILL.md:311
- reference rule-audit-procedure.md — .claude/skills/context-optimizer/SKILL.md:23
- reference model-context-doctrine.md — .claude/skills/context-optimizer/SKILL.md:23
- reference rule-audit-instrument.md — .claude/skills/context-optimizer/SKILL.md:120
- reference rule-audit-evidence.md — .claude/skills/context-optimizer/SKILL.md:121
- reference rule-audit-parser-forensics.md — .claude/skills/context-optimizer/SKILL.md:122
- reference rule-audit-measurement-discipline.md — .claude/skills/context-optimizer/SKILL.md:123
- reference vibe-engineering.md — .claude/skills/context-optimizer/SKILL.md:127
- reference claude-code-productivity-patterns.md — .claude/skills/context-optimizer/SKILL.md:128
- doc vercel-passive-context-vs-skills-research.md — .claude/skills/context-optimizer/SKILL.md:125

## Invoked by — required
- doc skill-reference.md — docs/skill-reference.md:186
- script passive_context_budget.py — scripts/validation/passive_context_budget.py:232
- user direct invocation (user-invocable: true — .claude/skills/context-optimizer/SKILL.md:6)

## Concepts named — required, verbatim
- `context-optimizer` — .claude/skills/context-optimizer/SKILL.md:2 — defined here
- `Skill` — .claude/skills/context-optimizer/SKILL.md:4 — defined here
- `Passive Context` — .claude/skills/context-optimizer/SKILL.md:4 — defined here
- `Hybrid` — .claude/skills/context-optimizer/SKILL.md:4 — defined here
- `context-gather` — .claude/skills/context-optimizer/SKILL.md:4 — used here
- `AGENTS.md` — .claude/skills/context-optimizer/SKILL.md:15 — used here
- `@imports` — .claude/skills/context-optimizer/SKILL.md:15 — used here
- `analyze_skill_placement.py` — .claude/skills/context-optimizer/SKILL.md:43 — defined here
- `compress_markdown_content.py` — .claude/skills/context-optimizer/SKILL.md:44 — defined here
- `test_skill_passive_compliance.py` — .claude/skills/context-optimizer/SKILL.md:45 — defined here
- `extract_and_index.py` — .claude/skills/context-optimizer/SKILL.md:46 — defined here
- `path_validation.py` — .claude/skills/context-optimizer/SKILL.md:47 — defined here
- `tiktoken` — .claude/skills/context-optimizer/SKILL.md:51 — used here
- `Decision Framework` — .claude/skills/context-optimizer/SKILL.md:60 — defined here
- `pr-comment-responder` — .claude/skills/context-optimizer/SKILL.md:88 — used here
- `Progressive disclosure` — .claude/skills/context-optimizer/SKILL.md:111 — used here
- `instruction_budget.py` — .claude/skills/context-optimizer/SKILL.md:114 — used here
- `model-context-doctrine.md` — .claude/skills/context-optimizer/SKILL.md:118 — used here
- `rule-audit-procedure.md` — .claude/skills/context-optimizer/SKILL.md:119 — used here
- `rule-audit-instrument.md` — .claude/skills/context-optimizer/SKILL.md:120 — used here
- `rule-audit-evidence.md` — .claude/skills/context-optimizer/SKILL.md:121 — used here
- `rule-audit-parser-forensics.md` — .claude/skills/context-optimizer/SKILL.md:122 — used here
- `rule-audit-measurement-discipline.md` — .claude/skills/context-optimizer/SKILL.md:123 — used here
- `vibe-engineering.md` — .claude/skills/context-optimizer/SKILL.md:127 — used here
- `claude-code-productivity-patterns.md` — .claude/skills/context-optimizer/SKILL.md:128 — used here
- `pipe-delimited format` — .claude/skills/context-optimizer/SKILL.md:195 — defined here
- `extract-and-index pattern` — .claude/skills/context-optimizer/SKILL.md:253 — defined here
- `CLAUDE.md` — .claude/skills/context-optimizer/SKILL.md:277 — used here
- `size exceptions` — .claude/skills/context-optimizer/SKILL.md:295 — used here
- `MEMORY.md` — .claude/skills/context-optimizer/SKILL.md:303 — used here
- `command_size.py` — .claude/skills/context-optimizer/SKILL.md:305 — used here
- `skill_size.py` — .claude/skills/context-optimizer/SKILL.md:311 — used here
- `ADR-042` — .claude/skills/context-optimizer/SKILL.md:411 — used here
- `ADR-035` — .claude/skills/context-optimizer/SKILL.md:413 — used here

## Structure
- frontmatter — .claude/skills/context-optimizer/SKILL.md:1
- # Context Optimizer — .claude/skills/context-optimizer/SKILL.md:13
- ## Triggers — .claude/skills/context-optimizer/SKILL.md:17
- ## Process — .claude/skills/context-optimizer/SKILL.md:25
- ## Verification — .claude/skills/context-optimizer/SKILL.md:32
- ## Scripts — .claude/skills/context-optimizer/SKILL.md:39
- ## Prerequisites — .claude/skills/context-optimizer/SKILL.md:49
- ## Decision Framework — .claude/skills/context-optimizer/SKILL.md:60
- ### Passive Context Earns Its Slot Only For What The Model Cannot Know — .claude/skills/context-optimizer/SKILL.md:64
- ### Keep Out Of Passive Context — .claude/skills/context-optimizer/SKILL.md:71
- ### Use Skills For — .claude/skills/context-optimizer/SKILL.md:76
- ### Hybrid Pattern — .claude/skills/context-optimizer/SKILL.md:84
- ## Why This Matters — .claude/skills/context-optimizer/SKILL.md:90
- ### Read That Table Honestly — .claude/skills/context-optimizer/SKILL.md:101
- ## References — .claude/skills/context-optimizer/SKILL.md:116
- ## Related — .claude/skills/context-optimizer/SKILL.md:130
- ### Clear Skill Classification — .claude/skills/context-optimizer/SKILL.md:354
- ### Clear Passive Classification — .claude/skills/context-optimizer/SKILL.md:362
- ### Hybrid Classification — .claude/skills/context-optimizer/SKILL.md:370
- ### Marketplace Value — .claude/skills/context-optimizer/SKILL.md:417

## Scripts — required if type is script or the skill ships scripts
- path: `.claude/skills/context-optimizer/scripts/test_skill_passive_compliance.py`, language: Python 3, lines: 846
- documented invocation:
  - "python3 scripts/test_skill_passive_compliance.py" — .claude/skills/context-optimizer/SKILL.md:330
  - "python3 scripts/test_skill_passive_compliance.py --path .claude/skills/github --format table" — .claude/skills/context-optimizer/SKILL.md:333
- **executed:** yes
- actual command run: `python3 .claude/skills/context-optimizer/scripts/test_skill_passive_compliance.py --path .claude/skills/github --format table`
  abridged stdout:
  ```
  Skill/Passive Context Compliance Check
  ======================================================================
  Timestamp: 2026-09-05T08:21:43.837132
  Path: .claude/skills/github
  CLAUDE.md: CLAUDE.md

  Summary:
    Total Checks: 6
    Passed: 6
    Failed: 0
    Warnings: 0
    Measurements: 1

  Scope:
    Measures only the selected CLAUDE.md file. Imports, hierarchical CLAUDE.md and AGENTS.md files, generated instructions, and plugin context are not included in its line count.
    Not evaluated:
      - @imported file size
      - hierarchical CLAUDE.md and AGENTS.md files
      - generated instruction layers
      - plugin-provided context
    Required separate checks:
      - Contributors: run skill_size.py separately for the scanned skill tree: .claude/skills/github (upstream rjmurillo/ai-agents only)
    CLAUDE.md Single-File Measurement: Measured 58 lines in this CLAUDE.md. No vendor line limit was applied.

  [PASS] All evaluated checks passed. See scope and separate checks.
  ```
  **actual exit code**: 0
- documented exit codes vs. actual exit paths:
  Documented in SKILL.md:
  - "0=pass, 1=violations" — .claude/skills/context-optimizer/SKILL.md:45
  - "0 = all passed, 1 = violations detected" — .claude/skills/context-optimizer/SKILL.md:336
  Actual exit paths in script:
  - `return 1 if results.summary["failed"] > 0 else 0` — .claude/skills/context-optimizer/scripts/test_skill_passive_compliance.py:837
  - `return 1` — .claude/skills/context-optimizer/scripts/test_skill_passive_compliance.py:841
  - `sys.exit(main())` — .claude/skills/context-optimizer/scripts/test_skill_passive_compliance.py:845
- for validators/gates: can it exit non-zero? yes, exits 1 when compliance violations are found or on unhandled exceptions. Does it fail on the source repo's own default branch? No, returns exit code 0 (288 checks passed, 0 failed, 0 warnings on default `.claude` directory).
- does the output match what the documentation claims? Yes, produces structured JSON or table output with evaluated checks, measurement details, scope explanations, and exit codes 0 and 1.

## Defects — required
- `doc-drift` · .claude/skills/context-optimizer/SKILL.md:209 · Script invocation examples `python3 scripts/compress_markdown_content.py` (lines 209, 212, 215) and `python3 scripts/extract_and_index.py` (lines 259, 262, 265) and `python3 scripts/test_skill_passive_compliance.py` (lines 330, 333) assume the working directory is the skill directory (`.claude/skills/context-optimizer/`), whereas line 157 explicitly invokes from the repo root (`python3 .claude/skills/context-optimizer/scripts/analyze_skill_placement.py`).
- `missing-path` · .claude/skills/context-optimizer/SKILL.md:125 · Cites `.agents/analysis/vercel-passive-context-vs-skills-research.md`, which is outside standard Claude Code runtime distribution and acknowledged at line 425 as a vendor-portability issue where vendored plugin installs lose the target file.
- `doc-drift` · .claude/skills/context-optimizer/SKILL.md:45 · Exit code table lists "0=pass, 1=violations" for `test_skill_passive_compliance.py` while sibling scripts list ADR-035 4-state exit codes (`0=success, 1=error, 2=config, 3=external`). `test_skill_passive_compliance.py` only implements exit codes 0 and 1.

## Observations
- Empirical synthesis of context trade-offs: reconciles Vercel's 100% vs 53-79% pass-rate finding for passive context with Anthropic's overconstraint findings, formulating the razor: "Passive Context Earns Its Slot Only For What The Model Cannot Know" (post-cutoff APIs, repo gotchas) while pre-trained knowledge belongs in progressive disclosure or deletion.
- Token cost transparency: highlights that while passive context achieves high pass rates in benchmark evals, it imposes a continuous token penalty on every request, documenting that the always-on corpus expanded from an 8KB target to ~95KB.
- Mechanical compression patterns: introduces pipe-delimited formatting and extract-and-index patterns designed to achieve 60-80% token reduction while preserving semantic retrieval anchors.
- Vendor limit clarification: explicitly notes that Claude Code loads `CLAUDE.md` in full without a 200-line vendor limit, clarifying that Anthropic's 200-line / 25KB auto-memory limit applies only to `MEMORY.md`.

## Context cost
18729 bytes (~4682 tokens) for `SKILL.md`. Full skill bundle across all 8 references and 5 scripts is ~220KB (~55k tokens).
