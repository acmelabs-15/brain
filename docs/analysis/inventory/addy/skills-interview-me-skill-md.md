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
verified: 2026-09-05 quote-check+coverage
---

# skills/interview-me/SKILL.md

## Purpose — required, verbatim
> "Extracts what the user actually wants instead of what they think they should want. Achieves this through one-question-at-a-time interview until ~95% confidence about the underlying intent." — skills/interview-me/SKILL.md:3

## Design intent — required
Closes the intent gap before design or code begins by conducting a strict one-question-at-a-time dialogue where each question carries the agent's explicit guess and confidence level. It forces the surfacing of tacit constraints and unstated assumptions, specifically filtering out convention-signaling answers and buzzwords to establish a confirmed, bounded statement of intent before downstream specification or planning skills take over.

## Phase — required
addy:Define

## Inputs — required
- Underspecified user request or explicit interrogation trigger:
> "when the user explicitly invokes (\"interview me\", \"grill me\", \"are we sure?\", \"stress-test my thinking\")" — skills/interview-me/SKILL.md:3
- Core intent dimensions (user, purpose, success metrics, constraints) — skills/interview-me/SKILL.md:20
- User answers and reactions to sequential interview questions with attached hypotheses — skills/interview-me/SKILL.md:58-62

## Outputs — required
- Confirmed statement of intent:
> "The output of this skill is a **confirmed statement of intent**: the restate from Step 4, with an explicit yes from Step 5." — skills/interview-me/SKILL.md:136
- Optional persistent intent artifact:
> "docs/intent/[topic].md" — skills/interview-me/SKILL.md:138

## Invokes — required
- skill idea-refine — skills/interview-me/SKILL.md:14
- skill spec-driven-development — skills/interview-me/SKILL.md:14
- skill doubt-driven-development — skills/interview-me/SKILL.md:14
- skill planning-and-task-breakdown — skills/interview-me/SKILL.md:184
- skill source-driven-development — skills/interview-me/SKILL.md:186

## Invoked by — required
- doc README.md — README.md:234
- config CLAUDE.md — CLAUDE.md:21
- skill skills/using-agent-skills/SKILL.md — skills/using-agent-skills/SKILL.md:19
- skill skills/constraint-driven-development/SKILL.md — skills/constraint-driven-development/SKILL.md:59

## Concepts named — required, verbatim
- `interview-me` — skills/interview-me/SKILL.md:2 — defined here
- `idea-refine` — skills/interview-me/SKILL.md:14 — used here
- `spec-driven-development` — skills/interview-me/SKILL.md:14 — used here
- `doubt-driven-development` — skills/interview-me/SKILL.md:14 — used here
- `Hypothesize` — skills/interview-me/SKILL.md:40 — defined here
- `confidence number` — skills/interview-me/SKILL.md:40 — defined here
- `one question at a time` — skills/interview-me/SKILL.md:53 — defined here
- `want vs. should want` — skills/interview-me/SKILL.md:79 — defined here
- `Out of scope` — skills/interview-me/SKILL.md:106 — defined here
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
none

## Observations
- Explicit loading constraint: "Do not invoke in non-interactive contexts" — skills/interview-me/SKILL.md:36
- Core stopping heuristic: "Can I predict the user's reaction to the next three questions I would ask?" — skills/interview-me/SKILL.md:128
- Mandatory non-goal bounding: "Including \"Out of scope\" is non-negotiable. Half of misalignment is silent disagreement about what is *not* being built." — skills/interview-me/SKILL.md:111

## Context cost
14359 bytes, ~3300 tokens. Standalone skill prompt; references other skills conceptually without importing them.
