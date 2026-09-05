---
package: addy
path: skills/interview-me/SKILL.md
type: skill
bytes: 14359
unit: inv-addy-44
deprecated: false
aliases: []
memo_inputs:
  - {path: skills/interview-me/SKILL.md, sha256: 1d94741d10d2c826cd0c191aea3981ee94c8abb27ef2a166f6a372117d06448f}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-04 quote-check+coverage
---

# skills/interview-me/SKILL.md

## Purpose — required, verbatim
> "This skill closes the gap before it costs anything. The other Define-phase skills assume you already know roughly what you want: `idea-refine` generates variations from an idea, `spec-driven-development` writes the requirements down, `doubt-driven-development` stress-tests a plan after you've drafted one. Interview-me is the part before all of those, where you ask one question at a time, with your best guess attached, until you can predict what the user is going to say before they say it." — skills/interview-me/SKILL.md:14

## Design intent — required
Extracts what the user actually wants instead of conventional, underspecified requests ("build me X", "make it faster") before any plan, spec, or code exists. Prevents misaligned requirements from locking in by conducting a disciplined, one-question-at-a-time interview with explicit hypotheses, calibrated confidence levels (0–100%), and attached guesses. Concludes upon reaching ~95% confidence (the ability to predict the user's reaction to the next three questions) and producing an explicitly confirmed statement of intent with concrete boundaries and out-of-scope declarations.

## Phase — required
addy:Define

## Inputs — required
- Underspecified user requests or conventional asks: "build me X" — skills/interview-me/SKILL.md:3, "make it faster" — skills/interview-me/SKILL.md:10
- Explicit user invocation triggers: "interview me" — skills/interview-me/SKILL.md:3, "grill me" — skills/interview-me/SKILL.md:3, "are we sure?" — skills/interview-me/SKILL.md:3, "stress-test my thinking" — skills/interview-me/SKILL.md:3
- Answers and reactions to one-at-a-time interview questions: "one question at a time" — skills/interview-me/SKILL.md:14, "guess attached" — skills/interview-me/SKILL.md:14

## Outputs — required
- Confirmed statement of intent: "confirmed statement of intent" — skills/interview-me/SKILL.md:136
- Structured intent restatement: "Outcome:" — skills/interview-me/SKILL.md:101, "User:" — skills/interview-me/SKILL.md:102, "Why now:" — skills/interview-me/SKILL.md:103, "Success:" — skills/interview-me/SKILL.md:104, "Constraint:" — skills/interview-me/SKILL.md:105, "Out of scope:" — skills/interview-me/SKILL.md:106
- Optional intent file: "docs/intent/[topic].md" — skills/interview-me/SKILL.md:138

## Invokes — required
none

## Invoked by — required
- skill using-agent-skills — skills/using-agent-skills/SKILL.md:19
- skill constraint-driven-development — skills/constraint-driven-development/SKILL.md:59
- doc README.md — README.md:234
- doc CLAUDE.md — CLAUDE.md:21

## Concepts named — required, verbatim
- `interview-me` — skills/interview-me/SKILL.md:2 — defined here
- `Define` — skills/interview-me/SKILL.md:14 — used here
- `idea-refine` — skills/interview-me/SKILL.md:14 — used here
- `spec-driven-development` — skills/interview-me/SKILL.md:14 — used here
- `doubt-driven-development` — skills/interview-me/SKILL.md:14 — used here
- `Hypothesize, with a confidence number` — skills/interview-me/SKILL.md:40 — defined here
- `HYPOTHESIS` — skills/interview-me/SKILL.md:45 — defined here
- `CONFIDENCE` — skills/interview-me/SKILL.md:46 — defined here
- `Ask one question at a time, each with a guess attached` — skills/interview-me/SKILL.md:53 — defined here
- `want vs. should want` — skills/interview-me/SKILL.md:79 — defined here
- `Restate intent in the user's own words` — skills/interview-me/SKILL.md:94 — defined here
- `Out of scope` — skills/interview-me/SKILL.md:106 — defined here
- `Confirm — explicit yes, not "whatever you think"` — skills/interview-me/SKILL.md:113 — defined here
- `95% Confidence Stop` — skills/interview-me/SKILL.md:124 — defined here
- `confirmed statement of intent` — skills/interview-me/SKILL.md:136 — defined here
- `planning-and-task-breakdown` — skills/interview-me/SKILL.md:184 — used here
- `source-driven-development` — skills/interview-me/SKILL.md:186 — used here

## Structure
- # Interview Me — skills/interview-me/SKILL.md:6
- ## Overview — skills/interview-me/SKILL.md:8
- ## When to Use — skills/interview-me/SKILL.md:16
- ## Loading Constraints — skills/interview-me/SKILL.md:34
- ## The Process — skills/interview-me/SKILL.md:38
- ### Step 1: Hypothesize, with a confidence number — skills/interview-me/SKILL.md:40
- ### Step 2: Ask one question at a time, each with a guess attached — skills/interview-me/SKILL.md:53
- ### Step 3: Listen for "want vs. should want" — skills/interview-me/SKILL.md:79
- ### Step 4: Restate intent in the user's own words — skills/interview-me/SKILL.md:94
- ### Step 5: Confirm — explicit yes, not "whatever you think" — skills/interview-me/SKILL.md:113
- ### The 95% Confidence Stop — skills/interview-me/SKILL.md:124
- ## Output — skills/interview-me/SKILL.md:134
- ## Example — skills/interview-me/SKILL.md:140
- ## Interaction with Other Skills — skills/interview-me/SKILL.md:180
- ## Common Rationalizations — skills/interview-me/SKILL.md:188
- ## Red Flags — skills/interview-me/SKILL.md:201
- ## Verification — skills/interview-me/SKILL.md:214

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- doc-drift · skills/interview-me/SKILL.md:3: Frontmatter description includes detailed trigger scenarios, whereas the external catalog page external/interview-me.md:5 truncates the description to a shorter summary.
- doc-drift · skills/interview-me/SKILL.md:14: Places interview-me in Define phase before spec-driven-development, but external catalog page external/interview-me.md:12 associates it with the /spec command badge while commands/spec.toml:4 only invokes spec-driven-development.

## Observations
- Explicit loading constraint (skills/interview-me/SKILL.md:36): mandates a live, responsive user and strictly forbids invocation in non-interactive contexts (CI pipelines, scheduled runs, `/loop`, autonomous-loop).
- Rejection of polite non-confirmations (skills/interview-me/SKILL.md:115-120): explicitly defines "Whatever you think is best", "Sounds good", "Sure, let's go", and silence as non-affirmations requiring follow-up options or reframing.
- Mandatory "Out of scope" line in intent restatement (skills/interview-me/SKILL.md:111): non-goals prevent silent misalignment, which accounts for half of project divergences.

## Context cost
14359 bytes, ~3,500 tokens. Loads no other files directly.
