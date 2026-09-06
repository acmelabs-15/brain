---
package: rjm
path: .claude/skills/cynefin-classifier/scripts/classify.py
type: script
bytes: 13632
unit: inv-rjm-113
in_scope_via: .claude/skills/cynefin-classifier/SKILL.md
aliases: []
memo_inputs:
  - {path: .claude/skills/cynefin-classifier/scripts/classify.py, sha256: f5ce4befe58c6a8a7f8e8545099f29fca17bf8f89a0a63b40d09a8875028cb6a}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/skills/cynefin-classifier/scripts/classify.py

## Purpose — required, verbatim
> "Classifies problems into Cynefin domains based on cause-effect characteristics and recommends appropriate response strategies." — .claude/skills/cynefin-classifier/scripts/classify.py:4-5

## Design intent — required
Deterministic command-line heuristic classification script applying the Cynefin Framework to problem descriptions. Parses user problem statements and optional environment context, evaluates keyword frequencies across five domains (Clear, Complicated, Complex, Chaotic, Confusion), calculates classification confidence (HIGH, MEDIUM, LOW), and emits structured Markdown or JSON recommendations covering domain, rationale, strategy, recommended actions, pitfall warnings, temporal transition notes, and boundary alerts. Provides semantic exit codes (0 for complete classification, 1 for invalid arguments, 2 for insufficient information / Confusion domain) designed for integration into upstream lifecycle automation like `/spec` and `spec-generator`, allowing automated pipelines to gate or halt progression upon detecting chaotic or unresolved problem spaces.

## Phase — required
rjm:spec

## Inputs — required
- CLI argument `--problem` (required problem description string) (.claude/skills/cynefin-classifier/scripts/classify.py:427)
- CLI argument `--context` (optional environment/constraint context string) (.claude/skills/cynefin-classifier/scripts/classify.py:432)
- CLI argument `--json` (optional boolean flag for JSON serialization) (.claude/skills/cynefin-classifier/scripts/classify.py:436)

## Outputs — required
- stdout: Formatted Markdown classification report or JSON object (`ClassificationResult`) (.claude/skills/cynefin-classifier/scripts/classify.py:450,452)
- stderr: Error message when problem argument is empty (.claude/skills/cynefin-classifier/scripts/classify.py:444)
- exit code: 0 (complete), 1 (invalid arguments), 2 (Confusion domain / insufficient info) (.claude/skills/cynefin-classifier/scripts/classify.py:445,456,458)

## Invokes — required
none

## Invoked by — required
- skill cynefin-classifier — .claude/skills/cynefin-classifier/SKILL.md:259
- skill cynefin-classifier — .claude/skills/cynefin-classifier/SKILL.md:374

## Concepts named — required, verbatim
- `Cynefin` — .claude/skills/cynefin-classifier/scripts/classify.py:2 — used here
- `Cynefin Framework` — .claude/skills/cynefin-classifier/scripts/classify.py:2 — used here
- `Domain` — .claude/skills/cynefin-classifier/scripts/classify.py:22 — defined here
- `Clear` — .claude/skills/cynefin-classifier/scripts/classify.py:25 — defined here
- `Complicated` — .claude/skills/cynefin-classifier/scripts/classify.py:26 — defined here
- `Complex` — .claude/skills/cynefin-classifier/scripts/classify.py:27 — defined here
- `Chaotic` — .claude/skills/cynefin-classifier/scripts/classify.py:28 — defined here
- `Confusion` — .claude/skills/cynefin-classifier/scripts/classify.py:29 — defined here
- `Confidence` — .claude/skills/cynefin-classifier/scripts/classify.py:32 — defined here
- `HIGH` — .claude/skills/cynefin-classifier/scripts/classify.py:35 — defined here
- `MEDIUM` — .claude/skills/cynefin-classifier/scripts/classify.py:36 — defined here
- `LOW` — .claude/skills/cynefin-classifier/scripts/classify.py:37 — defined here
- `Sense-Categorize-Respond` — .claude/skills/cynefin-classifier/scripts/classify.py:127 — defined here
- `Sense-Analyze-Respond` — .claude/skills/cynefin-classifier/scripts/classify.py:128 — defined here
- `Probe-Sense-Respond` — .claude/skills/cynefin-classifier/scripts/classify.py:129 — defined here
- `Act-Sense-Respond` — .claude/skills/cynefin-classifier/scripts/classify.py:130 — defined here
- `Gather Information` — .claude/skills/cynefin-classifier/scripts/classify.py:131 — defined here
- `temporal_note` — .claude/skills/cynefin-classifier/scripts/classify.py:62 — defined here
- `boundary_note` — .claude/skills/cynefin-classifier/scripts/classify.py:63 — defined here
- `compound_note` — .claude/skills/cynefin-classifier/scripts/classify.py:64 — defined here

## Structure
none (python script; functions and classes: `Domain`, `Confidence`, `DomainIndicators`, `ClassificationResult`, `count_keyword_matches`, `classify_problem`, `_generate_rationale`, `_generate_actions`, `_generate_temporal_note`, `_generate_boundary_note`, `main`)

## Scripts — required if type is script or the skill ships scripts
- path: `.claude/skills/cynefin-classifier/scripts/classify.py`, language: Python 3, lines: 463
- documented invocation:
  - "python3 .claude/skills/cynefin-classifier/scripts/classify.py" — .claude/skills/cynefin-classifier/SKILL.md:259
  - "python3 .claude/skills/cynefin-classifier/scripts/classify.py" — .claude/skills/cynefin-classifier/SKILL.md:374
- **executed:** yes
- actual command run: `python3 .claude/skills/cynefin-classifier/scripts/classify.py --problem "Description of the problem" --context "Additional context about constraints, environment"`
  abridged stdout:
  ```markdown
  ## Cynefin Classification

  **Problem**: Description of the problem

  ### Domain: CONFUSION

  **Confidence**: LOW

  ### Rationale

  No clear indicators for any specific domain. Insufficient information to classify confidently.

  ### Response Strategy

  **Approach**: Gather Information

  ### Recommended Actions

  1. List specific unknowns that block classification
  2. Gather minimum viable information
  3. Decompose into smaller sub-problems if possible
  4. Re-classify once information is available

  ### Pitfall Warning

  Assuming a domain without evidence. Acting before gathering sufficient information.

  ### Related Considerations

  - **Temporal**: Temporary state. Should resolve to another domain once information is gathered.
  ```
  **actual exit code**: 2
- documented exit codes vs. actual exit paths:
  Documented in script docstring:
  - "0: Classification complete" — .claude/skills/cynefin-classifier/scripts/classify.py:8
  - "1: Invalid arguments" — .claude/skills/cynefin-classifier/scripts/classify.py:9
  - "2: Insufficient information (Confusion domain)" — .claude/skills/cynefin-classifier/scripts/classify.py:10
  Actual exit paths in code:
  - `sys.exit(main())` — .claude/skills/cynefin-classifier/scripts/classify.py:462
  - `return 1` (.claude/skills/cynefin-classifier/scripts/classify.py:445) when `not args.problem.strip()`
  - `return 2` (.claude/skills/cynefin-classifier/scripts/classify.py:456) when `result.domain == Domain.CONFUSION`
  - `return 0` (.claude/skills/cynefin-classifier/scripts/classify.py:458) on successful classification into Clear, Complicated, Complex, or Chaotic
- for validators/gates: can it exit non-zero? Yes, exits 1 on invalid arguments (empty problem description) and 2 when problem is in Confusion domain. Does it fail on the source repo's own default branch? Not a repository health validator, but executes cleanly and exits 0 when given domain-specific problem inputs (e.g. "Fix typo in documentation"), 2 on generic inputs, and 1 on empty strings.
- does the output match what the documentation claims? Yes, matches Markdown format and JSON schema specifications in `SKILL.md:120-151`.

## Defects — required
- `unimplemented-feature` · .claude/skills/cynefin-classifier/scripts/classify.py:309 · Field `compound_note` is hardcoded to `None` with comment `# Would require deeper analysis`, leaving multi-domain compound problem decomposition unimplemented in the script despite being documented in `SKILL.md:240-250`.

## Observations
- Operates via zero-dependency deterministic keyword heuristics (`DOMAIN_KEYWORDS` map covering 10-20 trigger terms per domain).
- Implements tie-breaking logic at lines 276-283: when multiple domains tie for maximum score, it categorizes as `Domain.CONFUSION` with `Confidence.LOW` and exit code 2 to avoid premature commitment.
- Automatically calculates domain boundaries at lines 403-418: if any non-selected domain scores within 1 point of the maximum, it emits a `boundary_note` warning.

## Context cost
13632 bytes (~3408 tokens). Standard library only.
