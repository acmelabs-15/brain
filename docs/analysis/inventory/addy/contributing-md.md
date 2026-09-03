---
package: addy
path: CONTRIBUTING.md
type: doc
bytes: 7179
unit: inv-addy-8
---

# CONTRIBUTING.md

## Purpose — required, verbatim
> "Thanks for your interest in contributing! This project is a collection of production-grade engineering skills for AI coding agents.
>
> New here? [docs/developer-onboarding.md](docs/developer-onboarding.md) is a guided tour of how the repo fits together (the five layers, the verification loop, and the contribution paths) and tells you when to read this document, [skill-anatomy.md](docs/skill-anatomy.md), and [evals/README.md](evals/README.md). This file is the authoritative rulebook; the onboarding guide is the map." — CONTRIBUTING.md:3-5

## Design intent — required
The authoritative contribution governance manual and quality gate specification for the repository. It addresses the risks of catalog bloat, prompt drift, duplicate skill submissions, and unverifiable workflows by establishing mandatory pre-flight checks (`gh pr list --state open`, catalog search, anatomy compliance, explicit gap justification), defining a rigorous skill quality bar (Specific, Verifiable, Battle-tested, Minimal), and requiring that every new skill include an automated eval test suite (`evals/cases/<skill-name>.json` with at least 3 positive triggers, 2 negative triggers with owner attribution, and 1 behavioral execution/dialogue eval). It strictly forbids leaking repository-scoped configuration (`AGENTS.md`, `CLAUDE.md`) into consumer environments, bans unmaintainable documentation translations, and provides instructions for testing the session-start lifecycle hook. Without it, the repository would accumulate redundant, un-evaluated prompts with high regression rates across AI agent environments.

## Phase — required
`cross-phase` (contribution policies, evaluation gates, and quality standards applicable to all lifecycle phases)

## Inputs — required
- Contributor pull requests and proposed skill directories under `skills/` (CONTRIBUTING.md:7-68)
- Existing catalog in `README.md` and `skills/` directory (CONTRIBUTING.md:13)
- Open GitHub pull requests queried via `gh pr list --state open` (CONTRIBUTING.md:14)
- Skill anatomy specifications in `docs/skill-anatomy.md` (CONTRIBUTING.md:15, 23, 44)
- Eval case schemas and fixtures in `evals/cases/`, `evals/fixtures/`, and `evals/README.md` (CONTRIBUTING.md:42)
- Environment tools: `jq`, `mktemp`, bash (CONTRIBUTING.md:77-105)
- Community issue reports submitted via GitHub issue template `skill-gap.yml` (CONTRIBUTING.md:116)

## Outputs — required
none (governance rules, PR requirements, and validation standards)

## Invokes — required
- doc docs/developer-onboarding.md — CONTRIBUTING.md:5
- doc docs/skill-anatomy.md — CONTRIBUTING.md:5, 15, 23
- doc evals/README.md — CONTRIBUTING.md:5, 42
- doc README.md — CONTRIBUTING.md:13
- dir skills/ — CONTRIBUTING.md:13, 22, 61, 71
- dir evals/cases/ — CONTRIBUTING.md:42
- dir evals/fixtures/ — CONTRIBUTING.md:42
- dir scripts/ — CONTRIBUTING.md:60
- dir references/ — CONTRIBUTING.md:61
- file AGENTS.md — CONTRIBUTING.md:71
- file CLAUDE.md — CONTRIBUTING.md:71
- hook hooks/session-start.sh — CONTRIBUTING.md:79, 83
- skill skills/using-agent-skills/SKILL.md — CONTRIBUTING.md:79, 84
- script hooks/session-start-test.sh — CONTRIBUTING.md:79, 87, 99
- template .github/ISSUE_TEMPLATE/skill-gap.yml — CONTRIBUTING.md:116

## Invoked by — required
- file CLAUDE.md — CLAUDE.md:39, 56
- file AGENTS.md — AGENTS.md:88
- doc README.md — README.md:410
- doc docs/developer-onboarding.md — docs/developer-onboarding.md:5, 86, 88, 94, 116
- doc docs/opencode-setup.md — docs/opencode-setup.md:136
- fixture evals/fixtures/context-engineering/context-audit.md — evals/fixtures/context-engineering/context-audit.md:6

## Concepts named — required, verbatim
- `Production-grade engineering skills` — CONTRIBUTING.md:3 — used here
- `five layers` — CONTRIBUTING.md:5 — used here
- `verification loop` — CONTRIBUTING.md:5 — used here
- `authoritative rulebook` — CONTRIBUTING.md:5 — defined here
- `Search the catalog` — CONTRIBUTING.md:13 — defined here
- `Check open PRs` — CONTRIBUTING.md:14 — defined here
- `Read the anatomy` — CONTRIBUTING.md:15 — defined here
- `Justify the gap` — CONTRIBUTING.md:16 — defined here
- `kebab-case name` — CONTRIBUTING.md:22 — defined here
- `SKILL.md` — CONTRIBUTING.md:23, 40 — used here
- `YAML frontmatter` — CONTRIBUTING.md:24, 41, 67 — used here
- `trigger conditions` — CONTRIBUTING.md:25 — used here
- `Skill Quality Bar` — CONTRIBUTING.md:27 — defined here
- `Specific` — CONTRIBUTING.md:31 — defined here
- `Verifiable` — CONTRIBUTING.md:32 — defined here
- `Battle-tested` — CONTRIBUTING.md:33 — defined here
- `Minimal` — CONTRIBUTING.md:34 — defined here
- `eval case file` — CONTRIBUTING.md:42 — defined here | used here
- `positive triggers` — CONTRIBUTING.md:42 — defined here
- `negative triggers` — CONTRIBUTING.md:42 — defined here
- `behavioral eval` — CONTRIBUTING.md:42 — defined here
- `execution evals` — CONTRIBUTING.md:42 — defined here
- `dialogue eval` — CONTRIBUTING.md:42 — defined here
- `standard anatomy` — CONTRIBUTING.md:44 — defined here
- `Overview` — CONTRIBUTING.md:46 — defined here
- `When to Use` — CONTRIBUTING.md:47 — defined here
- `Process` — CONTRIBUTING.md:48 — defined here
- `Common Rationalizations` — CONTRIBUTING.md:49 — defined here
- `Red Flags` — CONTRIBUTING.md:50 — defined here
- `Verification` — CONTRIBUTING.md:51 — defined here
- `Repo-scoped files` — CONTRIBUTING.md:69 — defined here
- `session-start hook` — CONTRIBUTING.md:79 — used here
- `meta-skill` — CONTRIBUTING.md:79, 84 — used here
- `regression test` — CONTRIBUTING.md:79 — used here
- `no-jq fallback` — CONTRIBUTING.md:92, 104 — defined here
- `Skill gap` — CONTRIBUTING.md:116 — used here

## Structure
1. `# Contributing to Agent Skills` — CONTRIBUTING.md:1
2. `## Adding a New Skill` — CONTRIBUTING.md:7
3. `### Before proposing a new skill` — CONTRIBUTING.md:9
4. `### Creating the skill` — CONTRIBUTING.md:20
5. `### Skill Quality Bar` — CONTRIBUTING.md:27
6. `### Structure` — CONTRIBUTING.md:36
7. `### What Not to Do` — CONTRIBUTING.md:55
8. `## Modifying Existing Skills` — CONTRIBUTING.md:63
9. `## Repo-scoped files` — CONTRIBUTING.md:69
10. `## Translations` — CONTRIBUTING.md:73
11. `## Testing Hooks` — CONTRIBUTING.md:77
12. `### Reproducing the no-jq fallback` — CONTRIBUTING.md:92
13. `## Reporting Issues` — CONTRIBUTING.md:106
14. `## License` — CONTRIBUTING.md:121

## Scripts — required if type is script or the skill ships scripts
The file explicitly documents and instructs contributors to execute the hook regression test script:
- path: `hooks/session-start-test.sh`
- language: bash (with inline node / JavaScript, 47 lines)
- documented invocation: `bash hooks/session-start-test.sh` — CONTRIBUTING.md:87
- executed: yes
- actual command run: `cd sources/addy && bash hooks/session-start-test.sh`
- abridged stdout / stderr:
  ```
  [stdin]:8
      throw new Error(`expected IMPORTANT priority, got ${payload.priority}`);
      ^

  Error: expected IMPORTANT priority, got undefined
      at [stdin]:8:11
  ```
- actual exit code: 1
- documented exit codes: "Expected output: `session-start JSON payload OK`. The script exits non-zero on any assertion failure." — CONTRIBUTING.md:90
- actual exit paths in code:
  - Line 25: `throw new Error(...)` exits 1 (if `payload.priority !== 'IMPORTANT'`)
  - Line 29: `throw new Error(...)` exits 1 (if missing preface)
  - Line 33: `throw new Error(...)` exits 1 (if missing skill content)
  - Line 37: `throw new Error(...)` exits 1 (if `payload.priority !== 'INFO'`)
  - Line 41: `throw new Error(...)` exits 1 (if missing jq guidance)
  - Line 45: `console.log('session-start JSON payload OK')` / line 46: process exit 0
- for validators/gates: can it exit non-zero? Yes. Does it fail on default branch? YES, it ALWAYS fails on the pinned commit.
- does output match documentation claims? NO. Documentation claims output is `session-start JSON payload OK` (exit code 0), but the script crashes with exit code 1.

## Defects — required
- `script-bug` · `doc-drift` · `always-failing-gate` · CONTRIBUTING.md:86-90 vs hooks/session-start-test.sh:24-43 vs hooks/session-start.sh:21-25: The documented test command `bash hooks/session-start-test.sh` fails unconditionally with exit code 1 (`Error: expected IMPORTANT priority, got undefined`) because `hooks/session-start.sh` outputs Claude Code's modern `{"hookSpecificOutput": {"hookEventName": "SessionStart", "additionalContext": "..."}}` envelope, whereas `hooks/session-start-test.sh` asserts against deprecated root properties `payload.priority` and `payload.message`.
- `script-bug` · `doc-drift` · CONTRIBUTING.md:92-105 vs hooks/session-start-test.sh:36: The documented no-jq fallback command (`PATH=... bash hooks/session-start-test.sh`) also fails because the fallback payload in `hooks/session-start.sh:14` uses the `hookSpecificOutput` envelope without top-level `payload.priority === 'INFO'`.

## Observations
- Strict policy against documentation translations (CONTRIBUTING.md:73-76): articulates why translation PRs are rejected (maintenance burden, inevitable drift from source), maintaining English as the single canonical vocabulary across the repository.
- Explicit boundary on repository-scoped configuration files: warns against copying `AGENTS.md` and `CLAUDE.md` from the repo root into user codebases (CONTRIBUTING.md:69-72).
- Prohibits colocating references inside individual skill directories (`CONTRIBUTING.md:61`), enforcing centralized references in `references/`.

## Context cost
7,179 bytes (~1,750 tokens).
