---
package: addy
path: skills/constraint-driven-development/SKILL.md
type: skill
bytes: 20880
unit: inv-addy-40
aliases: []
memo_inputs:
  - {path: skills/constraint-driven-development/SKILL.md, sha256: 19d0aba70ced988c67739d5edd2a9b124a0783788c2baa70a8cc64cdd90612e5}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-04 quote-check+coverage
---

# skills/constraint-driven-development/SKILL.md

## Purpose — required, verbatim
> "This skill produces something different: a written record of **this project's** bar, with numbers, that outlives the conversation and can be checked mechanically." — skills/constraint-driven-development/SKILL.md:12

## Design intent — required
Prevents AI coding agents from generating high volumes of uninspected code or quietly lowering quality standards when hitting failing checks. Establishes a concrete, machine-verifiable `CONSTRAINTS.md` contract at repository root through a four-question intake interview with sane defaults. Structures checks across the development lifecycle by latency and cost, and watches git diffs for bar-lowering shortcuts (suppressions, skipped tests, removed assertions, stubs, and reduced thresholds).

## Phase — required
addy:Define

## Inputs — required
- Repository stack detection: `package.json`, `pyproject.toml`, `go.mod`, `Cargo.toml`
- Test runner and coverage configurations (`coverage/`)
- Existing linter configurations: `eslint.config.*`, `biome.json`, `.ruff.toml`
- CI configurations: `.github/workflows/`, `.gitlab-ci.yml`
- Agent harness files: `.claude/`, `.codex/`, `AGENTS.md`
- User responses to four structured intake questions (enforced dimensions, block vs. warn mid-task, target numbers vs. measure-and-hold, maximum tolerable latency)

## Outputs — required
- `CONSTRAINTS.md` at repository root
- Tiered check scripts in `package.json` (`check:fast`, `check:task`, `check:full`)
- Instruction line added to `AGENTS.md` and `CLAUDE.md`: `Read CONSTRAINTS.md before writing code. Do not weaken it to make a change pass.`

## Invokes — required
- reference references/floor-guard.md — skills/constraint-driven-development/SKILL.md:216
- skill interview-me — skills/constraint-driven-development/SKILL.md:59
- skill code-review-and-quality — skills/constraint-driven-development/SKILL.md:10
- skill test-driven-development — skills/constraint-driven-development/SKILL.md:10
- skill security-and-hardening — skills/constraint-driven-development/SKILL.md:10
- skill ci-cd-and-automation — skills/constraint-driven-development/SKILL.md:33
- skill performance-optimization — skills/constraint-driven-development/SKILL.md:311

## Invoked by — required
- command constraints — commands/constraints.toml:4
- command constraints — .claude/commands/constraints.md:5
- command constraints — .gemini/commands/constraints.toml:4
- skill using-agent-skills — skills/using-agent-skills/SKILL.md:22
- doc README.md — README.md:237

## Concepts named — required, verbatim
- `CONSTRAINTS.md` — skills/constraint-driven-development/SKILL.md:3 — defined here
- `code-review-and-quality` — skills/constraint-driven-development/SKILL.md:10 — used here
- `test-driven-development` — skills/constraint-driven-development/SKILL.md:10 — used here
- `security-and-hardening` — skills/constraint-driven-development/SKILL.md:10 — used here
- `Spec-driven development` — skills/constraint-driven-development/SKILL.md:16 — used here
- `Constraint-driven development` — skills/constraint-driven-development/SKILL.md:16 — defined here
- `ci-cd-and-automation` — skills/constraint-driven-development/SKILL.md:33 — used here
- `interview-me` — skills/constraint-driven-development/SKILL.md:59 — used here
- `Floor` — skills/constraint-driven-development/SKILL.md:102 — defined here
- `AGENTS.md` — skills/constraint-driven-development/SKILL.md:140 — used here
- `CLAUDE.md` — skills/constraint-driven-development/SKILL.md:140 — used here
- `Semgrep` — skills/constraint-driven-development/SKILL.md:153 — used here
- `gitleaks` — skills/constraint-driven-development/SKILL.md:154 — used here
- `osv-scanner` — skills/constraint-driven-development/SKILL.md:155 — used here
- `Lighthouse` — skills/constraint-driven-development/SKILL.md:156 — used here
- `size-limit` — skills/constraint-driven-development/SKILL.md:157 — used here
- `axe-core` — skills/constraint-driven-development/SKILL.md:158 — used here
- `dependency-cruiser` — skills/constraint-driven-development/SKILL.md:159 — used here
- `Stryker` — skills/constraint-driven-development/SKILL.md:160 — used here
- `Ratchets` — skills/constraint-driven-development/SKILL.md:226 — defined here
- `Escalation Path` — skills/constraint-driven-development/SKILL.md:252 — defined here
- `performance-optimization` — skills/constraint-driven-development/SKILL.md:311 — used here

## Structure
- `# Constraint-Driven Development`
- `## Overview`
- `## When to Use`
- `## Loading Constraints`
- `## The Process`
- `### Step 1: Detect before you ask`
- `### Step 2: Four questions, each with a default`
- `### Step 3: Write CONSTRAINTS.md`
- `### Step 4: Install what each dimension needs`
- `### Step 5: Wire it to the lifecycle`
- `### Step 6: Guard the bar itself`
- `### Step 7: Ratchets, when you don't have a number`
- `## Sane Defaults`
- `## Escalation Path`
- `## Common Rationalizations`
- `## Red Flags`
- `## Verification`
- `## See Also`

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Separates constraints into three ranks of circularity: External (axe-core, osv-scanner, Lighthouse), Project (linters, architectural boundaries), and Suite (project's own tests). Stresses that a quality bar made entirely of suite tests is circular. Recommends diff-scoped checks mapped to tiered scripts (`check:fast`, `check:task`, `check:full`) to prevent latency fatigue.

## Context cost
20880 bytes (~5220 tokens). Following invokes to `references/floor-guard.md` (5851 bytes, ~1463 tokens) brings total context to ~26731 bytes (~6683 tokens).
