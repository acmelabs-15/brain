---
package: addy
path: .claude/commands/constraints.md
type: command
bytes: 2762
unit: inv-addy-4
---

# .claude/commands/constraints.md

## Purpose — required, verbatim
> "Define and enforce this project's quality bar — interview, sane defaults, CONSTRAINTS.md" — .claude/commands/constraints.md:2

## Design intent — required
Enforces repository quality boundaries by detecting current project tooling, conducting a focused ≤4 question interview with defaults, generating `CONSTRAINTS.md` (Floor, enforced metrics, measured values, exceptions table), installing appropriate verification tools (Semgrep, gitleaks, osv-scanner, axe-core, Lighthouse, size-limit, dependency-cruiser, Stryker), placing checks by cost (`check:fast`, `check:task`, `check:full`), updating `CLAUDE.md`, and verifying the current branch. Supports subcommands `check`, `guard`, and `ratchet`.

## Phase — required
`cross-phase`

## Inputs — required
- `$ARGUMENTS` (default setup vs subcommands: `check`, `guard`, `ratchet`)
- Project configuration files (`package.json`, `pyproject.toml`, `go.mod`), test runner, lint configs, coverage output, CI workflows
- Git diff

## Outputs — required
- `CONSTRAINTS.md` at repository root
- `package.json` scripts (`check:fast`, `check:task`, `check:full`)
- `CLAUDE.md` instructions

## Invokes — required
- skill constraint-driven-development — .claude/commands/constraints.md:5 (named `agent-skills:constraint-driven-development`)

## Invoked by — required
none

## Concepts named — required, verbatim
- `constraint-driven-development` — .claude/commands/constraints.md:5 — used here
- `Detect first` — .claude/commands/constraints.md:11 — defined here
- `CONSTRAINTS.md` — .claude/commands/constraints.md:2, 19, 21, 25 — defined here
- `Floor section` — .claude/commands/constraints.md:19 — defined here
- `exceptions table` — .claude/commands/constraints.md:19 — defined here
- `check:fast` — .claude/commands/constraints.md:21 — defined here
- `check:task` — .claude/commands/constraints.md:21 — defined here
- `check:full` — .claude/commands/constraints.md:21 — defined here
- `/constraints check` — .claude/commands/constraints.md:30 — defined here
- `/constraints guard` — .claude/commands/constraints.md:31 — defined here
- `/constraints ratchet` — .claude/commands/constraints.md:32 — defined here

## Structure
- `---` (frontmatter: description) — .claude/commands/constraints.md:1-3
- Steps 1–7 numbered list — .claude/commands/constraints.md:11-27
- `Sub-commands:` list — .claude/commands/constraints.md:29-32

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
- Explicit principle: "A dimension with a number and no tool behind it is an aspiration" (.claude/commands/constraints.md:21).
- Cost-based check tiering: edit loop (seconds), task end (<90s), review/CI (deep).

## Context cost
- File size: 2,762 bytes (~690 tokens).
- Transitive cost when invoked: loads `constraint-driven-development` SKILL.md (20,880 bytes, ~5,220 tokens).
