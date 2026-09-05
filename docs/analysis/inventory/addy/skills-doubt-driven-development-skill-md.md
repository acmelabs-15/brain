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
verified: 2026-09-04 quote-check+coverage
---

# skills/doubt-driven-development/SKILL.md

## Purpose — required, verbatim
> "Subjects every non-trivial decision to a fresh-context adversarial review before it stands. Use when correctness matters more than speed, when working in unfamiliar code, when stakes are high (production, security-sensitive logic, irreversible operations), or any time a confident output would be cheaper to verify now than to debug later." — skills/doubt-driven-development/SKILL.md:3

## Design intent — required
Counters model overconfidence and context pollution by enforcing an adversarial, fresh-context review loop during active development rather than at final review. Isolates the decision under review into a stripped artifact and explicit contract (excluding the author's prior reasoning and conclusion), invokes an adversarial reviewer instructed to disprove and find defects rather than validate, supports optional user-authorized cross-model escalation (Gemini CLI, Codex CLI) with read-only sandboxes, classifies findings in a rigorous precedence order, and bounds iterations to three cycles to prevent unbounded loops.

## Phase — required
addy:Build

## Inputs — required
Non-trivial code diffs, function implementations, architectural proposals, or technical assertions (skills/doubt-driven-development/SKILL.md:16-23, 79-82), explicit constraints and acceptance contracts (skills/doubt-driven-development/SKILL.md:80, 103), user decisions on cross-model escalation (skills/doubt-driven-development/SKILL.md:120-125), and external CLI binary availability in PATH (skills/doubt-driven-development/SKILL.md:128-129).

## Outputs — required
Structured CLAIM and WHY THIS MATTERS statements (skills/doubt-driven-development/SKILL.md:66-71), stripped ARTIFACT and CONTRACT review packages (skills/doubt-driven-development/SKILL.md:102-103), adversarial review prompts and temp prompt files (skills/doubt-driven-development/SKILL.md:89-104, 140-149), classified finding reports (`Contract misread`, `Valid + actionable`, `Valid trade-off`, `Noise`) (skills/doubt-driven-development/SKILL.md:172-178), reconciled artifact updates, and escalation summaries to the user (skills/doubt-driven-development/SKILL.md:185-190).

## Invokes — required
- reference references/orchestration-patterns.md — skills/doubt-driven-development/SKILL.md:46
- skill code-review-and-quality — skills/doubt-driven-development/SKILL.md:225
- skill source-driven-development — skills/doubt-driven-development/SKILL.md:226
- skill test-driven-development — skills/doubt-driven-development/SKILL.md:227
- skill debugging-and-error-recovery — skills/doubt-driven-development/SKILL.md:228

## Invoked by — required
- command build — commands/build.toml:38
- skill using-agent-skills — skills/using-agent-skills/SKILL.md:29
- skill using-agent-skills — skills/using-agent-skills/SKILL.md:154
- skill using-agent-skills — skills/using-agent-skills/SKILL.md:176
- skill interview-me — skills/interview-me/SKILL.md:14
- skill interview-me — skills/interview-me/SKILL.md:185
- doc docs/adoption-guide.md — docs/adoption-guide.md:84

## Concepts named — required, verbatim
- `Doubt-Driven Development` — skills/doubt-driven-development/SKILL.md:6 — defined here
- `CLAIM` — skills/doubt-driven-development/SKILL.md:55 — defined here
- `EXTRACT` — skills/doubt-driven-development/SKILL.md:56 — defined here
- `DOUBT` — skills/doubt-driven-development/SKILL.md:57 — defined here
- `RECONCILE` — skills/doubt-driven-development/SKILL.md:58 — defined here
- `STOP` — skills/doubt-driven-development/SKILL.md:59 — defined here
- `Cross-model escalation` — skills/doubt-driven-development/SKILL.md:112 — defined here
- `Contract misread` — skills/doubt-driven-development/SKILL.md:174 — defined here
- `Valid + actionable` — skills/doubt-driven-development/SKILL.md:175 — defined here
- `Valid trade-off` — skills/doubt-driven-development/SKILL.md:176 — defined here
- `Noise` — skills/doubt-driven-development/SKILL.md:177 — defined here
- `Doubt theater` — skills/doubt-driven-development/SKILL.md:215 — defined here

## Structure
- # Doubt-Driven Development — skills/doubt-driven-development/SKILL.md:6
- ## Overview — skills/doubt-driven-development/SKILL.md:8
- ## When to Use — skills/doubt-driven-development/SKILL.md:14
- ## Loading Constraints — skills/doubt-driven-development/SKILL.md:42
- ## The Process — skills/doubt-driven-development/SKILL.md:49
- ### Step 1: CLAIM — Surface what stands — skills/doubt-driven-development/SKILL.md:62
- ### Step 2: EXTRACT — Smallest reviewable unit — skills/doubt-driven-development/SKILL.md:75
- ### Step 3: DOUBT — Invoke the fresh-context reviewer — skills/doubt-driven-development/SKILL.md:85
- #### Cross-model escalation — skills/doubt-driven-development/SKILL.md:112
- ### Step 4: RECONCILE — Fold findings back — skills/doubt-driven-development/SKILL.md:168
- ### Step 5: STOP — Bounded loop, not recursion — skills/doubt-driven-development/SKILL.md:181
- ## Common Rationalizations — skills/doubt-driven-development/SKILL.md:193
- ## Red Flags — skills/doubt-driven-development/SKILL.md:207
- ## Interaction with Other Skills — skills/doubt-driven-development/SKILL.md:223
- ## Verification — skills/doubt-driven-development/SKILL.md:231

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Addresses the specific psychological tendency of LLMs to generate plausible yet erroneous justifications in long conversational sessions ("A confident answer is not a correct one", skills/doubt-driven-development/SKILL.md:10). Emphasizes that personas must not invoke other personas (skills/doubt-driven-development/SKILL.md:46), and identifies "Doubt theater" (skills/doubt-driven-development/SKILL.md:215) as a critical red flag where multiple cycles occur without any finding being classified as actionable.

## Context cost
16499 bytes (~4125 tokens). Loads references/orchestration-patterns.md (18201 bytes, ~4550 tokens) when referenced. Total context: ~34700 bytes (~8675 tokens).
