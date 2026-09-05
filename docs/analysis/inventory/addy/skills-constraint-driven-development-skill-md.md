---
package: addy
path: skills/constraint-driven-development/SKILL.md
type: skill
bytes: 20880
unit: inv-addy-40
deprecated: false
aliases: []
memo_inputs:
  - {path: skills/constraint-driven-development/SKILL.md, sha256: 19d0aba70ced988c67739d5edd2a9b124a0783788c2baa70a8cc64cdd90612e5}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# skills/constraint-driven-development/SKILL.md

## Purpose — required, verbatim
> "Establishes a project's quality bar as a written contract and stops agents quietly lowering it." — skills/constraint-driven-development/SKILL.md:3

## Design intent — required
Defines and enforces a durable, machine-checkable quality bar recorded in `CONSTRAINTS.md` at the project root. While other skills describe quality aspirations in prose, constraint-driven development translates quality expectations into explicit thresholds with assigned verification tools and lifecycle execution points. It recognizes that autonomous agents operating in tight edit loops will instinctively seek the cheapest road to green (silencing linters, skipping tests, stripping assertions, dropping unfinished stubs, or weakening thresholds) unless bounded by an immutable diff-scoped floor. By establishing a four-question intake with sensible defaults, ratcheting unmeasured baselines, mapping tools by execution cost, and providing an escalation path from documentation to automated diff guards, it ensures quality standards persist across sessions and prevent architectural erosion.

## Phase — required
addy:Define ("Define" — README.md:356)

## Inputs — required
- User responses from 4-question intake interview:
  - Selected dimensions beyond the floor (test coverage on new code, security scanning, performance budgets, accessibility, architecture boundaries): `Q1: Beyond the floor, which of these do you want enforced?` — skills/constraint-driven-development/SKILL.md:62
  - Check enforcement policy (block vs. warn): `Q2: When a check fails while the agent is mid-task, should it block or warn?` — skills/constraint-driven-development/SKILL.md:74
  - Numeric thresholds vs. baseline ratcheting: `Q3: Do you have target numbers in mind, or should I measure where you are today and hold that line?` — skills/constraint-driven-development/SKILL.md:80
  - Tolerable execution latency: `Q4: What's the slowest check you'll tolerate before the agent hands work back?` — skills/constraint-driven-development/SKILL.md:86
- Auto-detected stack configuration: `package.json`, `pyproject.toml`, `go.mod`, `Cargo.toml`, test runner configs, `eslint.config.*`, `biome.json`, `.ruff.toml`, `coverage/`, `.github/workflows/`, `.gitlab-ci.yml`, `.claude/`, `.codex/`, `AGENTS.md` — skills/constraint-driven-development/SKILL.md:46-53
- Merge-base diff and untracked files for floor enforcement — skills/constraint-driven-development/SKILL.md:206, 216

## Outputs — required
- Repository quality contract file: `CONSTRAINTS.md` — skills/constraint-driven-development/SKILL.md:93
- Added instruction line in agent rule files: `AGENTS.md` and `CLAUDE.md` — skills/constraint-driven-development/SKILL.md:140
- Layered check scripts added to `package.json`: `check:fast`, `check:task`, `check:full` — skills/constraint-driven-development/SKILL.md:175-177

## Invokes — required
- reference floor-guard.md — skills/constraint-driven-development/SKILL.md:216
- skill interview-me — skills/constraint-driven-development/SKILL.md:59
- skill code-review-and-quality — skills/constraint-driven-development/SKILL.md:10
- skill test-driven-development — skills/constraint-driven-development/SKILL.md:10
- skill security-and-hardening — skills/constraint-driven-development/SKILL.md:10
- skill ci-cd-and-automation — skills/constraint-driven-development/SKILL.md:33
- skill performance-optimization — skills/constraint-driven-development/SKILL.md:311
- command /build — skills/constraint-driven-development/SKILL.md:192
- command /test — skills/constraint-driven-development/SKILL.md:193
- command /review — skills/constraint-driven-development/SKILL.md:194
- command /ship — skills/constraint-driven-development/SKILL.md:195
- doc CONSTRAINTS.md — skills/constraint-driven-development/SKILL.md:93

## Invoked by — required
- command .claude/commands/constraints.md — .claude/commands/constraints.md:5
- command commands/constraints.toml — commands/constraints.toml:4
- skill using-agent-skills — skills/using-agent-skills/SKILL.md:22

## Concepts named — required, verbatim
- `Constraint-Driven Development` — skills/constraint-driven-development/SKILL.md:6 — defined here
- `code-review-and-quality` — skills/constraint-driven-development/SKILL.md:10 — used here
- `test-driven-development` — skills/constraint-driven-development/SKILL.md:10 — used here
- `security-and-hardening` — skills/constraint-driven-development/SKILL.md:10 — used here
- `Spec-driven development` — skills/constraint-driven-development/SKILL.md:16 — used here
- `good enough to ship` — skills/constraint-driven-development/SKILL.md:16 — defined here
- `quality gates` — skills/constraint-driven-development/SKILL.md:23 — used here
- `/build auto` — skills/constraint-driven-development/SKILL.md:27 — used here
- `ci-cd-and-automation` — skills/constraint-driven-development/SKILL.md:33 — used here
- `Floor` — skills/constraint-driven-development/SKILL.md:38 — defined here
- `interview-me` — skills/constraint-driven-development/SKILL.md:59 — used here
- `Ratchets` — skills/constraint-driven-development/SKILL.md:82 — defined here
- `CONSTRAINTS.md` — skills/constraint-driven-development/SKILL.md:93 — defined here
- `Enforced with numbers` — skills/constraint-driven-development/SKILL.md:110 — defined here
- `Measured, not yet enforced` — skills/constraint-driven-development/SKILL.md:126 — defined here
- `Exceptions` — skills/constraint-driven-development/SKILL.md:133 — defined here
- `AGENTS.md` — skills/constraint-driven-development/SKILL.md:140 — used here
- `CLAUDE.md` — skills/constraint-driven-development/SKILL.md:140 — used here
- `check:fast` — skills/constraint-driven-development/SKILL.md:175 — defined here
- `check:task` — skills/constraint-driven-development/SKILL.md:176 — defined here
- `check:full` — skills/constraint-driven-development/SKILL.md:177 — defined here
- `BUILD` — skills/constraint-driven-development/SKILL.md:192 — used here
- `/build` — skills/constraint-driven-development/SKILL.md:192 — used here
- `VERIFY` — skills/constraint-driven-development/SKILL.md:193 — used here
- `/test` — skills/constraint-driven-development/SKILL.md:193 — used here
- `REVIEW` — skills/constraint-driven-development/SKILL.md:194 — used here
- `/review` — skills/constraint-driven-development/SKILL.md:194 — used here
- `SHIP` — skills/constraint-driven-development/SKILL.md:195 — used here
- `/ship` — skills/constraint-driven-development/SKILL.md:195 — used here
- `floor-guard.md` — skills/constraint-driven-development/SKILL.md:216 — defined here
- `External` — skills/constraint-driven-development/SKILL.md:220 — defined here
- `Project` — skills/constraint-driven-development/SKILL.md:221 — defined here
- `Suite` — skills/constraint-driven-development/SKILL.md:222 — defined here
- `Sane Defaults` — skills/constraint-driven-development/SKILL.md:234 — defined here
- `Escalation Path` — skills/constraint-driven-development/SKILL.md:252 — defined here
- `Written only` — skills/constraint-driven-development/SKILL.md:256 — defined here
- `Scripted` — skills/constraint-driven-development/SKILL.md:257 — defined here
- `Tool-backed` — skills/constraint-driven-development/SKILL.md:258 — defined here
- `performance-optimization` — skills/constraint-driven-development/SKILL.md:311 — used here

## Structure
- `# Constraint-Driven Development` — skills/constraint-driven-development/SKILL.md:6
- `## Overview` — skills/constraint-driven-development/SKILL.md:8
- `## When to Use` — skills/constraint-driven-development/SKILL.md:18
- `## Loading Constraints` — skills/constraint-driven-development/SKILL.md:36
- `## The Process` — skills/constraint-driven-development/SKILL.md:40
- `### Step 1: Detect before you ask` — skills/constraint-driven-development/SKILL.md:42
- `### Step 2: Four questions, each with a default` — skills/constraint-driven-development/SKILL.md:57
- `### Step 3: Write CONSTRAINTS.md` — skills/constraint-driven-development/SKILL.md:93
- `### Step 4: Install what each dimension needs` — skills/constraint-driven-development/SKILL.md:142
- `### Step 5: Wire it to the lifecycle` — skills/constraint-driven-development/SKILL.md:186
- `### Step 6: Guard the bar itself` — skills/constraint-driven-development/SKILL.md:202
- `### Step 7: Ratchets, when you don't have a number` — skills/constraint-driven-development/SKILL.md:226
- `## Sane Defaults` — skills/constraint-driven-development/SKILL.md:234
- `## Escalation Path` — skills/constraint-driven-development/SKILL.md:252
- `## Common Rationalizations` — skills/constraint-driven-development/SKILL.md:264
- `## Red Flags` — skills/constraint-driven-development/SKILL.md:275
- `## Verification` — skills/constraint-driven-development/SKILL.md:290
- `## See Also` — skills/constraint-driven-development/SKILL.md:304

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- doc-drift — skills/constraint-driven-development/SKILL.md:27: References `/build auto` ("You're about to run `/build auto` or any autonomous loop" — skills/constraint-driven-development/SKILL.md:27), but `.claude/commands/build.md` documents no `auto` option or autonomous mode.
- doc-drift — skills/constraint-driven-development/SKILL.md:191: Lifecycle wiring table lists stages as BUILD, VERIFY, REVIEW, SHIP (skills/constraint-driven-development/SKILL.md:192-195), omitting Explore, Define, and Plan from the repo's full seven-phase lifecycle taxonomy (README.md:354-370).

## Observations
- Identifies the behavioral tendency of agents to take the "cheapest road to green" when facing broken checks, formulating 5 explicit diff-level guard patterns (loosened thresholds, skipped tests, silenced checkers, stubs, and new exceptions).
- Formulates check circularity into External (independent database/browser measurement), Project (team rules), and Suite (unit/integration tests), mandating at least one non-circular external constraint.
- Introduces ratchets to track and prevent degradation on codebases that lack absolute target figures.
- Allocates verification placement strictly by execution duration budget: <5s for edit loop (`check:fast`), <90s for task end (`check:task`), minutes for review, and CI for full regression suites (`check:full`).

## Context cost
20,880 bytes (~5,220 tokens) for this skill + 5,851 bytes (~1,460 tokens) for references/floor-guard.md = 26,731 bytes (~6,680 tokens) total when reference implementation is loaded.
