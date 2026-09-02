---
package: addy
path: .gemini/commands/constraints.toml
type: command
bytes: 2775
unit: inv-addy-1
---

# .gemini/commands/constraints.toml

## Purpose — required, verbatim
> "Define and enforce this project's quality bar — interview, sane defaults, CONSTRAINTS.md" — .gemini/commands/constraints.toml:1

## Design intent — required
Establishes, enforces, and ratchets codebase quality constraints through an initial environment inspection and a concise, default-assisted Socratic interview. It generates a living `CONSTRAINTS.md` file backed by concrete CLI tools organized by execution cost tiers (`check:fast`, `check:task`, `check:full`), preventing agents or contributors from lowering quality thresholds, bypassing tests, or adding linter suppressions to force builds to pass. Without it, quality bars remain implicit, unverifiable, and subject to gradual degradation.

## Phase — required
`addy:Verify`

## Inputs — required
- Command arguments `$ARGUMENTS` — .gemini/commands/constraints.toml:6
- Codebase metadata: `package.json`, `pyproject.toml`, `go.mod`, test runners, lint configs, current coverage output, CI workflows, agent configuration — .gemini/commands/constraints.toml:10
- User interview responses (<= 4 questions with defaults) — .gemini/commands/constraints.toml:12-16

## Outputs — required
- `CONSTRAINTS.md` at repository root (Floor section, enforced numbers, measured-only metrics, exceptions table with owners and expiry dates, command mappings) — .gemini/commands/constraints.toml:18, 20
- Script entries in `package.json`: `check:fast`, `check:task`, `check:full` — .gemini/commands/constraints.toml:20
- Quality bar instructions added to `AGENTS.md` and `GEMINI.md` — .gemini/commands/constraints.toml:24
- Verification and guard inspection reports — .gemini/commands/constraints.toml:26, 29-31

## Invokes — required
- skill constraint-driven-development — .gemini/commands/constraints.toml:4
- external-tool Semgrep — .gemini/commands/constraints.toml:20
- external-tool gitleaks (always --redact) — .gemini/commands/constraints.toml:20
- external-tool osv-scanner — .gemini/commands/constraints.toml:20
- external-tool axe-core — .gemini/commands/constraints.toml:20
- external-tool Lighthouse — .gemini/commands/constraints.toml:20
- external-tool size-limit — .gemini/commands/constraints.toml:20
- external-tool dependency-cruiser — .gemini/commands/constraints.toml:20
- external-tool Stryker — .gemini/commands/constraints.toml:20

## Invoked by — required
none

## Concepts named — required, verbatim
- `constraint-driven-development` — .gemini/commands/constraints.toml:4 — used here
- `CONSTRAINTS.md` — .gemini/commands/constraints.toml:1, 18, 20, 24 — defined here
- `Floor section` — .gemini/commands/constraints.toml:13, 18, 31 — defined here
- `exceptions table` — .gemini/commands/constraints.toml:18 — defined here
- `check:fast` — .gemini/commands/constraints.toml:20 — defined here
- `check:task` — .gemini/commands/constraints.toml:20 — defined here
- `check:full` — .gemini/commands/constraints.toml:20 — defined here
- `Semgrep` — .gemini/commands/constraints.toml:20 — used here
- `gitleaks` — .gemini/commands/constraints.toml:20 — used here
- `osv-scanner` — .gemini/commands/constraints.toml:20 — used here
- `axe-core` — .gemini/commands/constraints.toml:20 — used here
- `Lighthouse` — .gemini/commands/constraints.toml:20 — used here
- `size-limit` — .gemini/commands/constraints.toml:20 — used here
- `dependency-cruiser` — .gemini/commands/constraints.toml:20 — used here
- `Stryker` — .gemini/commands/constraints.toml:20 — used here
- `check placement by cost` — .gemini/commands/constraints.toml:22 — defined here
- `/constraints check` — .gemini/commands/constraints.toml:29 — defined here
- `/constraints guard` — .gemini/commands/constraints.toml:30 — defined here
- `/constraints ratchet` — .gemini/commands/constraints.toml:31 — defined here

## Structure
- `1. Detect first.` — .gemini/commands/constraints.toml:10
- `2. Interview, at most four questions.` — .gemini/commands/constraints.toml:12
- `3. Write CONSTRAINTS.md` — .gemini/commands/constraints.toml:18
- `4. Install what each picked dimension needs.` — .gemini/commands/constraints.toml:20
- `5. Place each check by cost.` — .gemini/commands/constraints.toml:22
- `6. Point the agent at it.` — .gemini/commands/constraints.toml:24
- `7. Verify.` — .gemini/commands/constraints.toml:26
- `Sub-commands:` — .gemini/commands/constraints.toml:28

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
- Clear anti-hallucination / grounding rule: "A dimension with a number and no tool behind it is an aspiration" (.gemini/commands/constraints.toml:20).
- Explicit rule for missing environments: if accessibility/performance checks require a running URL and the repo has none, drop the dimension rather than inventing a mock check (.gemini/commands/constraints.toml:20).
- Tiered check placement by execution cost: types/lint/secrets in edit loop (seconds), related tests/changed-line coverage at task end (<90s), everything else at review/CI (.gemini/commands/constraints.toml:22).
- Defines three explicit operational sub-commands: `check` (status report), `guard` (anti-weakening diff audit), and `ratchet` (lock today's measured values as new floor) (.gemini/commands/constraints.toml:29-31).

## Context cost
- File size: 2,775 bytes (~690 tokens).
- Transitive context cost when invoked: loads `skills/constraint-driven-development/SKILL.md` (10,480 bytes), totaling ~13,255 bytes (~3,310 tokens) before reading repo config.
