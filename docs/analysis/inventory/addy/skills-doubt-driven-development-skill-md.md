---
package: addy
path: skills/doubt-driven-development/SKILL.md
type: skill
bytes: 16499
unit: inv-addy-18
---

# skills/doubt-driven-development/SKILL.md

## Purpose — required, verbatim
> "Subjects every non-trivial decision to a fresh-context adversarial review before it stands. Use when correctness matters more than speed, when working in unfamiliar code, when stakes are high (production, security-sensitive logic, irreversible operations), or any time a confident output would be cheaper to verify now than to debug later." — skills/doubt-driven-development/SKILL.md:3

> "Doubt-driven development is the discipline of materializing a fresh-context reviewer — biased to **disprove**, not approve — before any non-trivial output stands." — skills/doubt-driven-development/SKILL.md:10

## Design intent — required
In long-running agent sessions, confirmation bias and accumulated conversational context subtly transform speculative assumptions into accepted facts, causing agents to confidently commit flawed architectural choices, unverified invariants, or destructive operations. doubt-driven-development solves this by introducing an in-flight, adversarial cross-examination discipline that extracts minimal reviewable units (artifact and contract stripped of author rationalizations) and subjects them to an isolated, fresh-context reviewer prompted strictly to disprove and falsify the decision before it stands. Without it, agents lack an early-warning checkpoint between initial generation and post-hoc PR review, allowing hallucinated safety guarantees and blind spots to solidify into code where remediation is orders of magnitude more expensive.

## Phase — required
addy:Build

## Inputs — required
- Non-trivial decision / architectural proposal / code change / assertion / claim under scrutiny — skills/doubt-driven-development/SKILL.md:16-30
- Extracted smallest reviewable unit: `ARTIFACT` (diff, function, proposal, or assertion) and `CONTRACT` (constraints, requirements, invariant guarantees), stripped of author reasoning and without the CLAIM — skills/doubt-driven-development/SKILL.md:75-84, 102-106
- Review findings produced by isolated fresh-context reviewer — skills/doubt-driven-development/SKILL.md:99-100, 168-170
- User inputs: authorization / tool selection for optional cross-model escalation (Gemini CLI, Codex CLI, manual, skip), exact flag/auth confirmation, and override/stop commands — skills/doubt-driven-development/SKILL.md:118-133, 187

## Outputs — required
- Compact Step 1 statement: `CLAIM` and `WHY THIS MATTERS` — skills/doubt-driven-development/SKILL.md:62-74
- Adversarial review prompt with isolated `ARTIFACT` and `CONTRACT` blocks — skills/doubt-driven-development/SKILL.md:89-104
- Categorized review findings table or list under 4-tier precedence: `Contract misread`, `Valid + actionable`, `Valid trade-off`, `Noise` — skills/doubt-driven-development/SKILL.md:172-178
- Documented trade-offs for valid accepted issues — skills/doubt-driven-development/SKILL.md:176
- Revised artifact code/spec or updated contract addressing actionable issues — skills/doubt-driven-development/SKILL.md:174-175
- Announcement of cross-model status (user choice, failure, or non-interactive skip notice) — skills/doubt-driven-development/SKILL.md:159, 163
- Go/stop verdict (or escalation to human after 3 cycles or on unresolved doubts) — skills/doubt-driven-development/SKILL.md:181-192; evals/cases/doubt-driven-development.json:31

## Invokes — required
- reference ../../references/orchestration-patterns.md — skills/doubt-driven-development/SKILL.md:46, 229
- agent agents/ — skills/doubt-driven-development/SKILL.md:108, 110
- skill code-review-and-quality — skills/doubt-driven-development/SKILL.md:225
- skill source-driven-development — skills/doubt-driven-development/SKILL.md:226
- skill test-driven-development — skills/doubt-driven-development/SKILL.md:227
- skill debugging-and-error-recovery — skills/doubt-driven-development/SKILL.md:228

## Invoked by — required
- command .claude/commands/build.md — .claude/commands/build.md:39
- command commands/build.toml — commands/build.toml:38
- skill skills/interview-me/SKILL.md — skills/interview-me/SKILL.md:14, 185
- skill skills/using-agent-skills/SKILL.md — skills/using-agent-skills/SKILL.md:29, 154, 176
- doc README.md — README.md:253, 361
- doc CLAUDE.md — CLAUDE.md:23
- doc docs/adoption-guide.md — docs/adoption-guide.md:84
- doc docs/getting-started.md — docs/getting-started.md:139
- config evals/cases/doubt-driven-development.json — evals/cases/doubt-driven-development.json:2, 33
- external-doc sources/addy-external/doubt-driven-development.md — sources/addy-external/doubt-driven-development.md:5

## Concepts named — required, verbatim
- `doubt-driven-development` — skills/doubt-driven-development/SKILL.md:2, 6, 10 — defined here
- `fresh-context adversarial review` — skills/doubt-driven-development/SKILL.md:3, 10, 87 — defined here
- `/review` — skills/doubt-driven-development/SKILL.md:12, 200, 216, 225 — used here
- `non-trivial decision` — skills/doubt-driven-development/SKILL.md:16, 40 — defined here
- `main-session orchestrator` — skills/doubt-driven-development/SKILL.md:44, 229 — used here
- `orchestration anti-pattern` — skills/doubt-driven-development/SKILL.md:46, 229 — used here
- `orchestration-patterns.md` — skills/doubt-driven-development/SKILL.md:46, 229 — used here
- `degraded self-questioning fallback` — skills/doubt-driven-development/SKILL.md:47 — defined here
- `Doubt cycle` — skills/doubt-driven-development/SKILL.md:54 — defined here
- `Step 1: CLAIM` — skills/doubt-driven-development/SKILL.md:55, 62 — defined here
- `Step 2: EXTRACT` — skills/doubt-driven-development/SKILL.md:56, 75 — defined here
- `Step 3: DOUBT` — skills/doubt-driven-development/SKILL.md:57, 85 — defined here
- `Step 4: RECONCILE` — skills/doubt-driven-development/SKILL.md:58, 168 — defined here
- `Step 5: STOP` — skills/doubt-driven-development/SKILL.md:59, 181 — defined here
- `CLAIM block` — skills/doubt-driven-development/SKILL.md:67, 81 — defined here
- `WHY THIS MATTERS` — skills/doubt-driven-development/SKILL.md:69 — defined here
- `ARTIFACT` — skills/doubt-driven-development/SKILL.md:77, 102, 106 — defined here
- `CONTRACT` — skills/doubt-driven-development/SKILL.md:77, 103, 106 — defined here
- `Smallest reviewable unit` — skills/doubt-driven-development/SKILL.md:75 — defined here
- `Adversarial prompt` — skills/doubt-driven-development/SKILL.md:89-104, 110 — defined here
- `code-reviewer` — skills/doubt-driven-development/SKILL.md:110 — used here
- `Cross-model escalation` — skills/doubt-driven-development/SKILL.md:112, 114 — defined here
- `Gemini CLI` — skills/doubt-driven-development/SKILL.md:122, 148 — used here
- `Codex CLI` — skills/doubt-driven-development/SKILL.md:122, 144 — used here
- `manual external review` — skills/doubt-driven-development/SKILL.md:122, 155 — defined here
- `read-only sandbox` — skills/doubt-driven-development/SKILL.md:143, 151 — used here
- `/loop` — skills/doubt-driven-development/SKILL.md:161 — used here
- `autonomous-loop` — skills/doubt-driven-development/SKILL.md:161 — used here
- `Contract misread` — skills/doubt-driven-development/SKILL.md:174 — defined here
- `Valid + actionable` — skills/doubt-driven-development/SKILL.md:175 — defined here
- `Valid trade-off` — skills/doubt-driven-development/SKILL.md:176 — defined here
- `Noise` — skills/doubt-driven-development/SKILL.md:177 — defined here
- `Common Rationalizations` — skills/doubt-driven-development/SKILL.md:193 — defined here
- `Red Flags` — skills/doubt-driven-development/SKILL.md:207 — defined here
- `Doubt theater` — skills/doubt-driven-development/SKILL.md:215 — defined here
- `code-review-and-quality` — skills/doubt-driven-development/SKILL.md:225 — used here
- `source-driven-development` — skills/doubt-driven-development/SKILL.md:226 — used here
- `test-driven-development` — skills/doubt-driven-development/SKILL.md:227 — used here
- `TDD's RED step` — skills/doubt-driven-development/SKILL.md:227, 236 — used here
- `debugging-and-error-recovery` — skills/doubt-driven-development/SKILL.md:228 — used here
- `anti-pattern B` — skills/doubt-driven-development/SKILL.md:229 — used here
- `Verification checklist` — skills/doubt-driven-development/SKILL.md:231-244 — defined here

## Structure
- `# Doubt-Driven Development` — skills/doubt-driven-development/SKILL.md:6
- `## Overview` — skills/doubt-driven-development/SKILL.md:8
- `## When to Use` — skills/doubt-driven-development/SKILL.md:14
- `## Loading Constraints` — skills/doubt-driven-development/SKILL.md:42
- `## The Process` — skills/doubt-driven-development/SKILL.md:49
  - `### Step 1: CLAIM — Surface what stands` — skills/doubt-driven-development/SKILL.md:62
  - `### Step 2: EXTRACT — Smallest reviewable unit` — skills/doubt-driven-development/SKILL.md:75
  - `### Step 3: DOUBT — Invoke the fresh-context reviewer` — skills/doubt-driven-development/SKILL.md:85
    - `#### Cross-model escalation` — skills/doubt-driven-development/SKILL.md:112
  - `### Step 4: RECONCILE — Fold findings back` — skills/doubt-driven-development/SKILL.md:168
  - `### Step 5: STOP — Bounded loop, not recursion` — skills/doubt-driven-development/SKILL.md:181
- `## Common Rationalizations` — skills/doubt-driven-development/SKILL.md:193
- `## Red Flags` — skills/doubt-driven-development/SKILL.md:207
- `## Interaction with Other Skills` — skills/doubt-driven-development/SKILL.md:223
- `## Verification` — skills/doubt-driven-development/SKILL.md:231

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- cross-file-contradiction · skills/interview-me/SKILL.md:14 vs CLAUDE.md:23, README.md:361, skills/using-agent-skills/SKILL.md:176, commands/build.toml:38, and sources/addy-external/doubt-driven-development.md:5 · skills/interview-me/SKILL.md:14 explicitly classifies doubt-driven-development as an "other Define-phase" skill that "stress-tests a plan after you've drafted one", directly contradicting all authoritative listings that place it in the Build phase (addy:Build), as well as skills/doubt-driven-development/SKILL.md:12-28 which defines it as an in-flight implementation posture for non-trivial coding decisions.
- missing-path · skills/doubt-driven-development/SKILL.md:161 · References `/loop` alongside CI, autonomous-loop, and scheduled runs as non-interactive execution contexts, but no `/loop` slash command file exists in the repository (`.claude/commands/loop.md` or `commands/loop.toml` are absent).
- doc-drift · skills/doubt-driven-development/SKILL.md vs CLAUDE.md:23, README.md:361, and sources/addy-external/doubt-driven-development.md:5 · SKILL.md omits any explicit lifecycle phase designation in its frontmatter or body text (relying on generic phrasing like "in-flight posture" and "designed for the main-session orchestrator"), whereas CLAUDE.md, README.md, using-agent-skills/SKILL.md, .claude/commands/build.md:39, and the external documentation bind it specifically to the Build phase (`/build`).

## Observations
- Distinguishes between in-flight decision cross-examination (`doubt-driven-development`) and post-hoc PR artifact reviews (`code-review-and-quality` / `/review`).
- Architectural loading constraint: Strictly reserves execution to the main-session orchestrator and forbids inclusion in a subagent persona's `skills:` frontmatter to prevent persona-calls-persona recursion (violating `references/orchestration-patterns.md` Anti-Pattern B). Provides a degraded self-questioning fallback if trapped in a nested context.
- Cross-model escalation protocol: Establishes a concrete protocol for user-authorized cross-model reviews via external CLIs (`gemini`, `codex`) with mandatory safety protections (read-only sandbox flags `--sandbox read-only` and `--approval-mode plan`, piping stdin via temp files to avoid shell interpolation / injection). Mandates explicit interactive choice offering and explicit non-interactive skip announcements.
- Epistemological hygiene: Demands stripping the author's conclusions and CLAIM from the reviewer's prompt (passing `ARTIFACT` + `CONTRACT` only) to prevent confirmation bias and reviewer validation loops.
- Defined anti-rationalization check: Defines "Doubt theater" as a checkable failure signal where 2+ review cycles return substantive findings but 0 are classified as actionable.

## Context cost
File alone: 16,499 bytes (~4,125 tokens). File plus directly linked orchestration pattern reference (`references/orchestration-patterns.md` 18,201 B): 34,700 bytes (~8,675 tokens). Total transitive graph with mentioned companion skills (`code-review-and-quality` 20,555 B, `source-driven-development` 9,949 B, `test-driven-development` 16,483 B, `debugging-and-error-recovery` 13,858 B): 95,545 bytes (~23,886 tokens).
