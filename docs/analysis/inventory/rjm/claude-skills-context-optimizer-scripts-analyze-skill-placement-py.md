---
package: rjm
path: .claude/skills/context-optimizer/scripts/analyze_skill_placement.py
type: script
bytes: 12062
unit: inv-rjm-108
in_scope_via: .claude/skills/context-optimizer/SKILL.md
aliases: []
memo_inputs:
  - {path: .claude/skills/context-optimizer/scripts/analyze_skill_placement.py, sha256: 7073083f4b28fca148890b3a7149ef41098af111ded727c1350dac89b3857383}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/skills/context-optimizer/scripts/analyze_skill_placement.py

## Purpose — required, verbatim
> "Analyze skill content for optimal placement (Skill vs Passive Context vs Hybrid)." — .claude/skills/context-optimizer/scripts/analyze_skill_placement.py:2

## Design intent — required
Evaluates whether agent instructions should be located in an on-demand skill, always-on passive context (e.g. AGENTS.md), or a hybrid split. While the qualitative admission decision (whether content is already known by the model) remains governed by human doctrine, this script automates the structural classification by quantifying tool execution calls, action verbs, reference content ratios, and user-trigger patterns to provide confidence-scored placement recommendations.

## Phase — required
none

## Inputs — required
- Command-line arguments: `-p`/`--path` (skill directory or SKILL.md file path) or `-c`/`--content` (direct markdown string to analyze), plus optional `-d`/`--detailed` flag for detailed metrics ("-p" — .claude/skills/context-optimizer/scripts/analyze_skill_placement.py:410; "-c" — .claude/skills/context-optimizer/scripts/analyze_skill_placement.py:417; "-d" — .claude/skills/context-optimizer/scripts/analyze_skill_placement.py:423)
- Filesystem files: reads `SKILL.md` within the targeted directory or the specified `.md` file ("SKILL.md" — .claude/skills/context-optimizer/scripts/analyze_skill_placement.py:95; "Path must be a directory or .md file" — .claude/skills/context-optimizer/scripts/analyze_skill_placement.py:101)

## Outputs — required
- JSON output to stdout with schema `AnalysisResult`: `classification` ("Skill", "PassiveContext", or "Hybrid"), `confidence` (percentage integer), `reasoning` (semicolon-delimited list of detected traits), optional `metrics` (`tool_calls`, `action_verbs`, `reference_content_ratio`, `user_triggers`), and optional `recommendations` (`Passive` and `Skill` heading/script allocations) (.claude/skills/context-optimizer/scripts/analyze_skill_placement.py:58-66, 441)

## Invokes — required
- script path_validation — .claude/skills/context-optimizer/scripts/analyze_skill_placement.py:39

## Invoked by — required
- skill context-optimizer — .claude/skills/context-optimizer/SKILL.md:157

## Concepts named — required, verbatim
- `Skill` — .claude/skills/context-optimizer/scripts/analyze_skill_placement.py:6 — used here
- `Passive Context` — .claude/skills/context-optimizer/scripts/analyze_skill_placement.py:7 — used here
- `Hybrid` — .claude/skills/context-optimizer/scripts/analyze_skill_placement.py:8 — used here
- `Admission` — .claude/skills/context-optimizer/scripts/analyze_skill_placement.py:10 — defined here
- `Decision Framework` — .claude/skills/context-optimizer/scripts/analyze_skill_placement.py:24 — used here
- `ADR-035 Exit Code Standardization` — .claude/skills/context-optimizer/scripts/analyze_skill_placement.py:26 — used here
- `Metrics` — .claude/skills/context-optimizer/scripts/analyze_skill_placement.py:42 — defined here
- `Recommendations` — .claude/skills/context-optimizer/scripts/analyze_skill_placement.py:51 — defined here
- `AnalysisResult` — .claude/skills/context-optimizer/scripts/analyze_skill_placement.py:58 — defined here
- `ClassificationScore` — .claude/skills/context-optimizer/scripts/analyze_skill_placement.py:69 — defined here
- `CWE-22` — .claude/skills/context-optimizer/scripts/analyze_skill_placement.py:91 — used here

## Structure
none

## Scripts — required if type is script or the skill ships scripts
- path: `.claude/skills/context-optimizer/scripts/analyze_skill_placement.py`, language: Python, lines: 452
- documented invocation: "python3 .claude/skills/context-optimizer/scripts/analyze_skill_placement.py -p .claude/skills/github" — .claude/skills/context-optimizer/SKILL.md:157
- executed: yes
- actual command run: `python3 .claude/skills/context-optimizer/scripts/analyze_skill_placement.py -p .claude/skills/github`
  abridged stdout: `{"classification": "Skill", "confidence": 90, "reasoning": "High tool execution (13 calls); Many action verbs (44); High reference content ratio (0.96); User-triggered workflow (50 triggers)", "metrics": null, "recommendations": null}`
  actual exit code: 0
- documented exit codes: "0: Success - Analysis complete" — .claude/skills/context-optimizer/scripts/analyze_skill_placement.py:19; "1: Error - Invalid input or analysis failure" — .claude/skills/context-optimizer/scripts/analyze_skill_placement.py:20 vs actual exit paths: `return 0` (.claude/skills/context-optimizer/scripts/analyze_skill_placement.py:443), `return 1` (.claude/skills/context-optimizer/scripts/analyze_skill_placement.py:447); argparse exits with 2 on invalid arguments
- for validators/gates: N/A (classification utility, not a gate). Can exit non-zero (1 on missing path or invalid file type).
- does the output match what the documentation claims: yes, outputs valid JSON with classification, confidence, and reasoning matching SKILL.md format.

## Defects — required
none

## Observations
- The script separates structural shape analysis from admission decisions: it explicitly warns that pattern matching cannot determine whether a model pre-knows content.
- Integrates CWE-22 traversal prevention via `path_validation.validate_path_within_repo`.

## Context cost
12,062 bytes (script) + 3,487 bytes (`path_validation.py`) = 15,549 bytes total. Approximately 3,900 tokens.
