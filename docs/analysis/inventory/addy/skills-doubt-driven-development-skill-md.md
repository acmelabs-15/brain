---
package: addy
path: skills/doubt-driven-development/SKILL.md
type: skill
bytes: 16499
unit: inv-addy-41
deprecated: false
aliases: []
memo_inputs:
  - {path: skills/doubt-driven-development/SKILL.md, sha256: 0a058297aa6bdf90b0ff45c3537af4cb0005f4af6b0d202fc07b7b5984db50ea}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# skills/doubt-driven-development/SKILL.md

## Purpose — required, verbatim
> "Subjects every non-trivial decision to a fresh-context adversarial review before it stands. Use when correctness matters more than speed, when working in unfamiliar code, when stakes are high (production, security-sensitive logic, irreversible operations), or any time a confident output would be cheaper to verify now than to debug later." — skills/doubt-driven-development/SKILL.md:3

## Design intent — required
Solves the problem of confident hallucination and accumulated cognitive bias in autonomous agents during extended sessions, where unexamined assumptions quietly harden into accepted facts. By establishing an in-flight adversarial review discipline (CLAIM → EXTRACT → DOUBT → RECONCILE → STOP) that cross-examines non-trivial architectural choices, module boundary crossings, and invariant claims before they are committed, it catches defects while course correction remains cheap. It materializes fresh-context subagent reviewers biased to disprove rather than validate, provides an optional user-authorized cross-model escalation protocol (Gemini CLI, Codex CLI) with strict read-only sandboxing and stdin piping to neutralize prompt injection, and enforces a bounded 3-cycle loop with checkable anti-theater signals. Without this skill, agents fall victim to confirmation bias and rubber-stamp their own reasoning, leaving critical defects to be caught only at late-stage PR review or in production.

## Phase — required
addy:Build

## Inputs — required
- Non-trivial decisions, branching logic additions, boundary crossings, or unverified invariant assertions — skills/doubt-driven-development/SKILL.md:16-29
- Compact 2-3 line claim and why-it-matters statement — skills/doubt-driven-development/SKILL.md:64-71
- Extracted minimal reviewable artifact (diff or function) and explicit contract stripped of journey reasoning — skills/doubt-driven-development/SKILL.md:78-84, 102-106
- Adversarial review prompt instructing the reviewer to find issues, edge cases, unstated assumptions, and hidden coupling — skills/doubt-driven-development/SKILL.md:89-100
- User response to interactive cross-model review prompt (Gemini CLI, Codex CLI, manual external, or skip) and explicit authorization per invocation — skills/doubt-driven-development/SKILL.md:120-125, 164, 205
- External CLI availability check (`which`), version test (`--version`), and flags/auth confirmation — skills/doubt-driven-development/SKILL.md:128-133

## Outputs — required
- Isolated adversarial review prompt written to a temp file (e.g. `/tmp/doubt-prompt.md`) containing ARTIFACT + CONTRACT — skills/doubt-driven-development/SKILL.md:140-149
- Adversarial review findings from fresh-context reviewer or cross-model CLI piped via stdin — skills/doubt-driven-development/SKILL.md:89-104, 140-149
- Finding classifications in strict precedence order: Contract misread, Valid + actionable, Valid trade-off, or Noise — skills/doubt-driven-development/SKILL.md:172-178
- Reconciled artifact modifications or explicitly documented trade-offs — skills/doubt-driven-development/SKILL.md:175-177
- Explicit status announcements in interactive and non-interactive contexts ("Proceeding with single-model findings only", "Cross-model skipped: non-interactive context") — skills/doubt-driven-development/SKILL.md:159, 163
- Escalation to user when stop condition triggers after 3 unresolved cycles or doubt theater is detected — skills/doubt-driven-development/SKILL.md:185-189, 215

## Invokes — required
- reference references/orchestration-patterns.md — skills/doubt-driven-development/SKILL.md:46
- agent code-reviewer — skills/doubt-driven-development/SKILL.md:110
- skill test-driven-development — skills/doubt-driven-development/SKILL.md:227
- skill debugging-and-error-recovery — skills/doubt-driven-development/SKILL.md:228

## Invoked by — required
- command .claude/commands/build.md — .claude/commands/build.md:39
- command commands/build.toml — commands/build.toml:38
- skill skills/using-agent-skills/SKILL.md — skills/using-agent-skills/SKILL.md:29
- skill skills/interview-me/SKILL.md — skills/interview-me/SKILL.md:14
- doc CLAUDE.md — CLAUDE.md:23
- doc README.md — README.md:253
- doc docs/adoption-guide.md — docs/adoption-guide.md:84
- doc docs/getting-started.md — docs/getting-started.md:139

## Concepts named — required, verbatim
- `doubt-driven-development` — skills/doubt-driven-development/SKILL.md:2 — defined here
- `Doubt-Driven Development` — skills/doubt-driven-development/SKILL.md:6 — defined here
- `fresh-context reviewer` — skills/doubt-driven-development/SKILL.md:10 — defined here
- `/review` — skills/doubt-driven-development/SKILL.md:12 — used here
- `non-trivial` — skills/doubt-driven-development/SKILL.md:16 — defined here
- `orchestration anti-pattern` — skills/doubt-driven-development/SKILL.md:46 — used here
- `degraded self-questioning fallback` — skills/doubt-driven-development/SKILL.md:47 — defined here
- `Doubt cycle` — skills/doubt-driven-development/SKILL.md:54 — defined here
- `CLAIM` — skills/doubt-driven-development/SKILL.md:55, 62 — defined here
- `EXTRACT` — skills/doubt-driven-development/SKILL.md:56, 75 — defined here
- `DOUBT` — skills/doubt-driven-development/SKILL.md:57, 85 — defined here
- `RECONCILE` — skills/doubt-driven-development/SKILL.md:58, 168 — defined here
- `STOP` — skills/doubt-driven-development/SKILL.md:59, 181 — defined here
- `artifact` — skills/doubt-driven-development/SKILL.md:77 — defined here
- `contract` — skills/doubt-driven-development/SKILL.md:77 — defined here
- `Adversarial review` — skills/doubt-driven-development/SKILL.md:90 — defined here
- `ARTIFACT` — skills/doubt-driven-development/SKILL.md:102 — defined here
- `CONTRACT` — skills/doubt-driven-development/SKILL.md:103 — defined here
- `role-based reviewers` — skills/doubt-driven-development/SKILL.md:108 — used here
- `code-reviewer` — skills/doubt-driven-development/SKILL.md:110 — used here
- `Cross-model escalation` — skills/doubt-driven-development/SKILL.md:112 — defined here
- `Single-model review` — skills/doubt-driven-development/SKILL.md:120 — defined here
- `cross-model second opinion` — skills/doubt-driven-development/SKILL.md:122 — defined here
- `Gemini CLI` — skills/doubt-driven-development/SKILL.md:122 — used here
- `Codex CLI` — skills/doubt-driven-development/SKILL.md:122 — used here
- `read-only sandbox` — skills/doubt-driven-development/SKILL.md:143, 151 — defined here
- `Contract misread` — skills/doubt-driven-development/SKILL.md:174 — defined here
- `Valid + actionable` — skills/doubt-driven-development/SKILL.md:175 — defined here
- `Valid trade-off` — skills/doubt-driven-development/SKILL.md:176 — defined here
- `Noise` — skills/doubt-driven-development/SKILL.md:177 — defined here
- `Doubt theater` — skills/doubt-driven-development/SKILL.md:215 — defined here
- `code-review-and-quality` — skills/doubt-driven-development/SKILL.md:225 — used here
- `source-driven-development` — skills/doubt-driven-development/SKILL.md:226 — used here
- `test-driven-development` — skills/doubt-driven-development/SKILL.md:227 — used here
- `RED step` — skills/doubt-driven-development/SKILL.md:227 — used here
- `debugging-and-error-recovery` — skills/doubt-driven-development/SKILL.md:228 — used here

## Structure
- ## Overview
- ## When to Use
- ## Loading Constraints
- ## The Process
- ### Step 1: CLAIM — Surface what stands
- ### Step 2: EXTRACT — Smallest reviewable unit
- ### Step 3: DOUBT — Invoke the fresh-context reviewer
- #### Cross-model escalation
- ### Step 4: RECONCILE — Fold findings back
- ### Step 5: STOP — Bounded loop, not recursion
- ## Common Rationalizations
- ## Red Flags
- ## Interaction with Other Skills
- ## Verification

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Explicitly prohibits loading the skill into subagent personas to avoid illegal persona-to-persona nesting: "A persona that follows Step 3 would spawn another persona — the orchestration anti-pattern explicitly forbidden by `../../references/orchestration-patterns.md` (\"personas do not invoke other personas\")" — skills/doubt-driven-development/SKILL.md:46. Mandates piping prompts through stdin instead of shell arguments to avoid prompt injection: "Never interpolate the artifact into a shell-quoted argument" — skills/doubt-driven-development/SKILL.md:135. Introduces a concrete checkable heuristic for superficial reviews: "across 2 or more cycles where the reviewer surfaced substantive findings, zero findings were classified as actionable. You are validating, not doubting. Stop and escalate." — skills/doubt-driven-development/SKILL.md:215.

## Context cost
16,499 bytes (~4,125 tokens). Loads no external files directly.
