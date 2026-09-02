---
package: addy
path: evals/README.md
type: doc
bytes: 8114
unit: inv-addy-2
---

# evals/README.md

## Purpose — required, verbatim
> "# Skill Evals\n\nHow this repo measures whether its skills actually work: that they **trigger** when they should, **stay distinct** from each other, and **change agent behavior** the way each skill promises." — evals/README.md:1-3

## Design intent — required
Explains the 3-tiered evaluation methodology for the skill catalog. It bridges structural validation (Tier 1), deterministic lexical routing and collision detection (Tier 2 TF-IDF rank checks), and headless behavioral transcript grading (Tier 3 execution/dialogue evaluations). It establishes catalog-level regression testing, requiring every skill to provide positive/negative triggers and behavioral fixtures, while enforcing execution hygiene (throwaway git workspaces, pre-approved permissions, stdin piping, and pressure testing against authority/urgency).

## Phase — required
`addy:VERIFY`

## Inputs — required
- Skill definitions in `skills/*/SKILL.md`
- Command definitions in `commands/*.md`
- Eval case definitions in `evals/cases/*.json`
- Fixture directories in `evals/fixtures/*/`
- CLI flags: `--min-rank1 <N>`, `--behavioral <skill-name>`, `--dry-run`

## Outputs — required
- Tier 2 stdout routing verification reports, rank-1 rate percentages, collision warnings
- Tier 3 behavioral grading reports: `evals/results/<skill-name>.eval-<id>.grading.json`
- Process exit codes (0 for pass, 1 for errors/threshold breaches)

## Invokes — required
- script `scripts/validate-skills.js` — evals/README.md:18
- script `scripts/validate-commands.js` — evals/README.md:18
- script `scripts/run-evals.js` — evals/README.md:19, 28, 29, 32, 33
- skill `test-driven-development` — evals/README.md:32, 33, 46, 62
- skill `documentation-and-adrs` — evals/README.md:52
- case schema `evals/cases/<skill-name>.json` — evals/README.md:42
- fixture directory `evals/fixtures/<name>/` — evals/README.md:36, 63, 75, 82
- result directory `evals/results/` — evals/README.md:38

## Invoked by — required
- doc `CLAUDE.md` — CLAUDE.md:15
- doc `CONTRIBUTING.md` — CONTRIBUTING.md:5, 42
- doc `docs/developer-onboarding.md` — docs/developer-onboarding.md:5, 72, 115
- script `scripts/run-evals.js` — scripts/run-evals.js:5, 51

## Concepts named — required, verbatim
- `SKILL.md` — evals/README.md:7 — used here
- `skill-creator v2` — evals/README.md:9 — used here
- `evals.json` — evals/README.md:9 — used here
- `Superpowers` — evals/README.md:10 — used here
- `Structural` — evals/README.md:18 — defined here
- `Trigger & routing` — evals/README.md:19 — defined here
- `Behavioral` — evals/README.md:20 — defined here
- `lexical approximation` — evals/README.md:22 — defined here
- `TF-IDF` — evals/README.md:22 — used here
- `execution` — evals/README.md:36, 58, 75, 82 — defined here
- `dialogue` — evals/README.md:36, 75, 82 — defined here
- `throwaway git repository` — evals/README.md:36 — used here
- `execution trace` — evals/README.md:36, 38 — used here
- `time pressure` — evals/README.md:38 — used here
- `sunk cost` — evals/README.md:38 — used here
- `authority pressure` — evals/README.md:38 — used here
- `test-driven-development` — evals/README.md:46 — used here
- `documentation-and-adrs` — evals/README.md:52 — used here
- `trigger rank-1 rate` — evals/README.md:85 — defined here
- `collision check` — evals/README.md:86 — defined here

## Structure
- `# Skill Evals` — line 1
- `## Prior art (and what we adopted)` — line 5
- `## The three tiers` — line 14
- `## Running` — line 24
- `## Eval case format` — line 40
- `## Adding a skill` — line 80
- `## Metrics to watch` — line 84

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/run-evals.js`, language: JavaScript (Node.js/Bun), lines: 590
- documented invocation: `node scripts/run-evals.js` — evals/README.md:28; `node scripts/run-evals.js --min-rank1 80` — evals/README.md:29; `node scripts/run-evals.js --behavioral test-driven-development` — evals/README.md:32; `node scripts/run-evals.js --behavioral test-driven-development --dry-run` — evals/README.md:33
- **executed:** yes
- actual command run: `bun scripts/run-evals.js`, abridged stdout: `Running skill evals across 25 skills, 25 case files ... 136 checks passed — 0 error(s), 0 warning(s) ... trigger rank-1 rate: 86% (72/84 positive prompts rank their skill first) ... PASSED`, **actual exit code: 0**
- actual command run: `bun scripts/run-evals.js --min-rank1 80`, abridged stdout: `136 checks passed — 0 error(s), 0 warning(s) ... trigger rank-1 rate: 86% (72/84 positive prompts rank their skill first) ... PASSED`, **actual exit code: 0**
- actual command run: `bun scripts/run-evals.js --behavioral test-driven-development --dry-run`, abridged stdout: `[dry-run] eval 1: execution trace in workspace + 1 fixture(s); claude -p ... [dry-run] eval 2: ... [dry-run] eval 3: ...`, **actual exit code: 0**
- documented exit codes vs. actual exit paths: documented "Exit code 1 on any error-level failure" (`scripts/run-evals.js:26`); actual exit paths in code: `process.exit(1)` on invalid CLI options (`scripts/run-evals.js:573, 579`), `process.exit(errors ? 1 : 0)` in `runDeterministic` (`scripts/run-evals.js:383`), `process.exit(failures ? 1 : 0)` in `runBehavioral` (`scripts/run-evals.js:559`).
- for validators/gates: can exit non-zero (exits 1 on missing cases, failing triggers, collisions >= 0.75, rank-1 below floor, or failed behavioral expectations); does not fail on default branch (136 checks pass, 86% rank-1 rate).
- does the output match what the documentation claims? yes, output matches 3-tier deterministic check and dry-run behavioral format.

## Defects — required
none

## Observations
Documents the foundational testing and validation architecture for Addy's skill catalog. Identifies prior art inspirations (Anthropic's `skill-creator v2` and Obra's `Superpowers`) and defines the novel Tier-2 TF-IDF routing validation and collision prevention mechanism.

## Context cost
8,114 bytes (~2,028 tokens) file size.
