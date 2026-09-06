---
package: rjm
path: scripts/incoherence.py
type: script
bytes: 37983
unit: inv-rjm-246
in_scope_via: docs/skill-reference.md
aliases: []
memo_inputs:
  - {path: scripts/incoherence.py, sha256: 8db97228fdf182875839e2f43c3b7c510a26219f51ed1c1e212e01307cc8ae9e}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/incoherence.py

## Purpose — required, verbatim
> "Incoherence Detector - Step-based incoherence detection workflow" — scripts/incoherence.py:3

## Design intent — required
Automates a structured, multi-step, multi-agent protocol for detecting contradictions and ambiguities across documentation and codebases, followed by a human-in-the-loop reconciliation workflow. It organizes incoherence detection into two distinct phases (Detection: steps 1–13, and Reconciliation: steps 14–22), coordinating parent orchestrators and specialized sub-agents (Haiku explorers across 11 abstract consistency dimensions, Sonnet deep-dive verifiers, Developer and Technical Writer reconciliation agents). Without it, auditing doc-vs-code drift and cross-reference integrity across large software repositories requires unstructured ad-hoc inspection, lacking reproducible coverage checks, candidate scoring, and conflict-free multi-agent file reconciliation.

## Phase — required
`rjm:Code Quality` (also internal workflow phases: `rjm:DETECTION PHASE` and `rjm:RECONCILIATION PHASE`; deprecated in favor of `rjm:doc-accuracy`).

## Inputs — required
- Command-line arguments parsed by `argparse` (scripts/incoherence.py:904-907):
  - `--step-number`: Step number in workflow (integer, 1 to 22)
  - `--total-steps`: Total steps in workflow (integer, e.g. 22)
  - `--thoughts`: String containing agent context, survey results, dimension selections, candidate findings, or reconciliation instructions
- Incoherence report markdown file (consumed during reconciliation phase, steps 14, 21; scripts/incoherence.py:33, 514, 832):
  - Sections formatted with issue IDs (`I1`, `I2`, ...), `<!-- USER: ... -->` resolution markers, and status indicators
- Codebase files inspected during agent execution:
  - Step 1 survey: `README.md`, `CLAUDE.md`, directory listings, package manifests (scripts/incoherence.py:137)
  - Steps 4-6 broad sweep: documentation (`docs/`, `README`), source code (`src/`), configs, schemas, type definitions, tests (scripts/incoherence.py:208-212)
  - Step 10 deep-dive: source files around primary and conflicting claims with 100+ lines of context (scripts/incoherence.py:365-373)

## Outputs — required
- Formatted console workflow instructions printed to stdout detailing current step (`INCOHERENCE DETECTOR - Step N/TOTAL`), agent type (`[PARENT]` or `[SUB-AGENT]`), phase (`[DETECTION]` or `[RECONCILIATION]`), echoed thoughts, required actions, and next step invocation (scripts/incoherence.py:928-940)
- Incoherence Report markdown file generated at step 13 (scripts/incoherence.py:448-496) with executive summary, severity breakdown, issues table, Source A/B quotes, analysis, suggestions, and user resolution template blocks
- Target file modifications applied by Developer and Technical Writer agents during reconciliation steps 18-19 (scripts/incoherence.py:568-570, 704-726)
- Updated Incoherence Report with `#### Status` markers (`✅ RESOLVED — {file}:{line}: {description}`) inserted after user resolution blocks at step 21 (scripts/incoherence.py:832-859)
- Structured reconciliation summary table printed to stdout at step 22 with resolved/skipped status counts (scripts/incoherence.py:873-887)

## Invokes — required
- script incoherence.py — scripts/incoherence.py:7
- agent Explore — scripts/incoherence.py:173
- agent Developer — scripts/incoherence.py:568

## Invoked by — required
- doc skill-reference.md — docs/skill-reference.md:112
- script check_plugin_frontmatter_self_containment.py — scripts/validation/check_plugin_frontmatter_self_containment.py:47

## Concepts named — required, verbatim
- `Incoherence Detector` — scripts/incoherence.py:3 — defined here
- `DETECTION PHASE` — scripts/incoherence.py:12 — defined here
- `RECONCILIATION PHASE` — scripts/incoherence.py:20 — defined here
- `DIMENSION_CATALOG` — scripts/incoherence.py:39 — defined here
- `ABSTRACT DIMENSION CATALOG` — scripts/incoherence.py:40 — defined here
- `CATEGORY A: SPECIFICATION VS BEHAVIOR` — scripts/incoherence.py:45 — defined here
- `CATEGORY B: INTERFACE CONTRACT INTEGRITY` — scripts/incoherence.py:51 — defined here
- `CATEGORY C: CROSS-REFERENCE CONSISTENCY` — scripts/incoherence.py:57 — defined here
- `CATEGORY D: TEMPORAL CONSISTENCY (Staleness)` — scripts/incoherence.py:63 — defined here
- `CATEGORY E: ERROR HANDLING CONSISTENCY` — scripts/incoherence.py:69 — defined here
- `CATEGORY F: CONFIGURATION & ENVIRONMENT` — scripts/incoherence.py:74 — defined here
- `CATEGORY G: AMBIGUITY & UNDERSPECIFICATION` — scripts/incoherence.py:79 — defined here
- `CATEGORY H: POLICY & CONVENTION COMPLIANCE` — scripts/incoherence.py:85 — defined here
- `CATEGORY I: COMPLETENESS & DOCUMENTATION GAPS` — scripts/incoherence.py:91 — defined here
- `CATEGORY J: COMPOSITIONAL CONSISTENCY` — scripts/incoherence.py:97 — defined here
- `CATEGORY K: IMPLICIT CONTRACT INTEGRITY` — scripts/incoherence.py:105 — defined here
- `get_step_guidance` — scripts/incoherence.py:122 — defined here
- `CODEBASE SURVEY` — scripts/incoherence.py:133 — defined here
- `DIMENSION SELECTION` — scripts/incoherence.py:156 — defined here
- `EXPLORATION DISPATCH` — scripts/incoherence.py:171 — defined here
- `BROAD SWEEP` — scripts/incoherence.py:200 — defined here
- `COVERAGE CHECK` — scripts/incoherence.py:229 — defined here
- `GAP-FILL EXPLORATION` — scripts/incoherence.py:255 — defined here
- `FORMAT EXPLORATION FINDINGS` — scripts/incoherence.py:278 — defined here
- `SYNTHESIS & CANDIDATE SELECTION` — scripts/incoherence.py:311 — defined here
- `DEEP-DIVE DISPATCH` — scripts/incoherence.py:324 — defined here
- `DEEP-DIVE EXPLORATION` — scripts/incoherence.py:361 — defined here
- `TRUE_INCOHERENCE` — scripts/incoherence.py:383 — defined here
- `FALSE_POSITIVE` — scripts/incoherence.py:384 — defined here
- `FORMAT RESULTS` — scripts/incoherence.py:392 — defined here
- `VERDICT ANALYSIS` — scripts/incoherence.py:427 — defined here
- `REPORT GENERATION` — scripts/incoherence.py:443 — defined here
- `Incoherence Report` — scripts/incoherence.py:450 — defined here
- `RECONCILE PARSE` — scripts/incoherence.py:508 — defined here
- `ALREADY_RESOLVED` — scripts/incoherence.py:519 — defined here
- `NO_RESOLUTION` — scripts/incoherence.py:523 — defined here
- `TO_PROCESS` — scripts/incoherence.py:524 — defined here
- `RECONCILE ANALYZE` — scripts/incoherence.py:550 — defined here
- `Developer` — scripts/incoherence.py:568 — used here
- `Technical Writer` — scripts/incoherence.py:569 — used here
- `RECONCILE PLAN` — scripts/incoherence.py:593 — defined here
- `RECONCILE DISPATCH` — scripts/incoherence.py:649 — defined here
- `RECONCILE APPLY` — scripts/incoherence.py:702 — defined here
- `RECONCILE FORMAT` — scripts/incoherence.py:748 — defined here
- `RECONCILE COLLECT` — scripts/incoherence.py:783 — defined here
- `RECONCILE UPDATE` — scripts/incoherence.py:830 — defined here
- `RECONCILE COMPLETE` — scripts/incoherence.py:867 — defined here
- `main` — scripts/incoherence.py:902 — defined here

## Structure
- Shebang and module docstring with usage overview and workflow outline (scripts/incoherence.py:1-34)
- Standard library imports (`argparse`, `os`) (scripts/incoherence.py:36-37)
- `DIMENSION_CATALOG`: Multi-line catalog of abstract consistency dimensions A through K with selection rules (scripts/incoherence.py:39-119)
- `get_step_guidance`: Dispatch function mapping step numbers 1–22 to action instructions and next step transitions (scripts/incoherence.py:122-899):
  - Detection Phase parent steps 1–3: Survey, dimension selection, exploration dispatch (scripts/incoherence.py:130-191)
  - Detection Phase exploration sub-agent steps 4–7: Broad sweep, coverage check, gap-fill, format findings (scripts/incoherence.py:197-302)
  - Detection Phase candidate selection and dispatch steps 8–9: Synthesis, deep-dive dispatch (scripts/incoherence.py:308-352)
  - Detection Phase deep-dive sub-agent steps 10–11: Deep-dive exploration, format results (scripts/incoherence.py:358-422)
  - Detection Phase report generation steps 12–13: Verdict analysis, report generation (scripts/incoherence.py:424-499)
  - Reconciliation Phase parent steps 14–17: Parse resolutions, analyze targets, plan waves, dispatch wave (scripts/incoherence.py:505-693)
  - Reconciliation Phase sub-agent steps 18–19: Apply resolution, format result (scripts/incoherence.py:699-778)
  - Reconciliation Phase parent steps 20–22: Collect wave results, update report, output summary (scripts/incoherence.py:780-897)
  - Default fallback for unknown step numbers (scripts/incoherence.py:899)
- `main`: Argument parsing, phase/agent determination, banner and guidance formatting, console output (scripts/incoherence.py:902-940)
- Script execution guard `if __name__ == "__main__": main()` (scripts/incoherence.py:943-944)

## Scripts — required if type is script or the skill ships scripts
- **path:** `scripts/incoherence.py`
- **language:** Python (python3)
- **lines:** 945
- **documented invocation:**
  - `python3 incoherence.py --step-number 1 --total-steps 22 --thoughts "Analyzing project X"` — scripts/incoherence.py:7
  - `python3 incoherence.py --step-number 14 --total-steps 22 --thoughts "Reconciling..."` — scripts/incoherence.py:10
- **executed:** yes
- **actual command run:** `python3 sources/rjm/scripts/incoherence.py --step-number 1 --total-steps 22 --thoughts "Analyzing project X"`
- **abridged stdout:**
```
======================================================================
INCOHERENCE DETECTOR - Step 1/22
[DETECTION] [PARENT]
======================================================================

THOUGHTS: Analyzing project X

REQUIRED ACTIONS:
  CODEBASE SURVEY
  
  Gather MINIMAL context. Do NOT read domain-specific docs.
  
  ALLOWED: README.md (first 50 lines), CLAUDE.md, directory listing, package manifest
  NOT ALLOWED: Detailed docs, source code, configs, tests
  
  Identify:
  1. CODEBASE TYPE: library/service/CLI/framework/application
  2. PRIMARY LANGUAGE
  3. DOCUMENTATION LOCATIONS
  4. INFO SOURCE TYPES:
     [ ] README/guides  [ ] API docs  [ ] Code comments
     [ ] Type definitions  [ ] Configs  [ ] Schemas
     [ ] ADRs  [ ] Style guides  [ ] CONTRIBUTING.md
     [ ] Test descriptions  [ ] Error catalogs

NEXT: Invoke step 2 with survey results in --thoughts
======================================================================
```
- **actual exit code:** 0
- **documented exit codes vs. actual exit paths in code:**
  - Documented: none in docstring or help text.
  - Actual exit paths in code:
    - Normal completion from `main()` returns `None`, exiting with status code 0 (scripts/incoherence.py:940).
    - `argparse.ArgumentParser.parse_args()` exits with status code 2 on missing or invalid arguments, and status code 0 on `-h`/`--help` (scripts/incoherence.py:907).
    - No explicit `sys.exit()` or `exit()` calls exist in code (the `sys` module is not imported).
- **for validators/gates:** Not an automated gate or pass/fail validator; acts as a dynamic prompt and step-guidance generator for a 22-step human-in-the-loop agent workflow. Exits 0 on any step number (including unknown step numbers >= 23 or <= 0); exits 2 on missing CLI parameters.
- **does the output match what the documentation claims:** Yes. It prints the step banner, phase, agent type, thoughts, action instructions, and next step command matching the workflow documented in lines 12–29.

## Defects — required
- `missing-path` · docs/skill-reference.md:112 · Documentation references legacy `.claude/skills/incoherence/scripts/incoherence.py`, but directory `.claude/skills/incoherence/` does not exist in the repository; the script was moved or left under top-level `scripts/incoherence.py`.
- `doc-drift` · docs/skill-reference.md:112 · `docs/skill-reference.md` deprecates incoherence in favor of `doc-accuracy`, noting it is retained only for reconciliation, but top-level `scripts/incoherence.py` retains both the full 13-step detection workflow and 9-step reconciliation workflow.
- `internal-contradiction` · scripts/incoherence.py:465 · Report template specifies `**Dimension**: [A-I category name]` at line 465, contradicting lines 40–113 and line 161 where the dimension catalog defines 11 categories from A through K (`CATEGORY A` through `CATEGORY K`).
- `orphan` · scripts/incoherence.py:1 · Script is not invoked by any active Claude Code command or skill in the repository; it is only referenced historically as deprecated in `docs/skill-reference.md:112` and `scripts/validation/check_plugin_frontmatter_self_containment.py:47`.

## Observations
- Two-phase human-in-the-loop architecture: separates detection (automated sweep and deep-dive) from reconciliation, requiring the human operator to manually inspect the generated report and fill in `<!-- USER: ... -->` resolution blocks before step 14 can run.
- Idempotent reconciliation: step 14 checks for existing `✅ RESOLVED` status markers to avoid re-processing previously reconciled issues, allowing incremental reconciliation runs.
- Model role tiering: explicitly leverages fast/cheap models (Haiku) for broad exploration across dimensions (step 3), more capable models (Sonnet) for deep-dive verification (step 9), and functional agent personas (Developer for code, Technical Writer for docs) for wave-based file modification (steps 15–17).
- Category taxonomy: provides 11 rigorous consistency dimensions (A through K) covering spec vs behavior, interface contracts, cross-references, staleness, error handling, configs, ambiguity, ADR compliance, doc gaps, compositional consistency, and naming illusions.

## Context cost
37983 bytes, 945 lines, ~9500 tokens. When executing, each step prints between 20 to 80 lines of instructions without loading external files, keeping per-step prompt overhead around 200–800 tokens.
