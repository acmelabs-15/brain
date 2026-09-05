---
package: matt
path: external/to-questionnaire.md
type: external-doc
bytes: 351319
unit: inv-matt-27
deprecated: false
aliases: []
memo_inputs:
  - {path: external/to-questionnaire.md, sha256: 944f39991b6d567415860535866346206cdaa310cffad3c28b14dc036d539e0c}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# external/to-questionnaire.md

## Purpose — required, verbatim
> "Turn open questions into a doc someone else fills in." — external/to-questionnaire.md:24

## Design intent — required
Public web documentation and reference guide for the `/to-questionnaire` productivity skill published on Matt Pocock's AI Hero catalog (aihero.dev/skills-to-questionnaire). It addresses the recurring failure mode where a developer's planning, design, or grilling workflow stalls because critical knowledge or decision authority belongs to someone else (a client, executive, domain expert, or separate team). Rather than interrogating the developer about subject matter they do not know, the skill conducts a strictly bounded two-exchange interview focused solely on the "send" (who the recipient is and what decisions/facts are needed back) and compiles a clean, non-branching discovery questionnaire in Markdown (`to-questionnaire-<slug>.md`). This document is tailored to the recipient's role, ordered most-important-first, structured with single-topic questions and answer stubs, grants explicit permission to answer "I don't know", and provides a closing catch-all question. Without this skill, developers either get trapped in unproductive agent loops grilling them on topics they cannot answer, produce unstructured or intimidating lists of questions, or fail to capture answers in a shape that cleanly unblocks downstream development.

## Phase — required
matt:Productivity Skills

## Inputs — required
- Recipient identity and relationship: "Who is it going to?" — external/to-questionnaire.md:35
- Information needs and decision blockers: "What do you need back?" — external/to-questionnaire.md:36
- Preceding conversation state: "same conversation" — external/to-questionnaire.md:51 where the "drafting can draw on it" — external/to-questionnaire.md:51

## Outputs — required
- Markdown discovery questionnaire file: "Markdown document" — external/to-questionnaire.md:25 drafted in the "current directory" — external/to-questionnaire.md:38 ("discovery questionnaire" — external/to-questionnaire.md:40)
- Questionnaire structure includes a purpose line, a "short context section" — external/to-questionnaire.md:42, questions "grouped under themed headings" — external/to-questionnaire.md:43, answer stubs ("One idea per question, never compound, with an answer stub beneath it" — external/to-questionnaire.md:44), explicit guidance that "a flagged uncertainty is useful; a confident guess that reads like a fact is not." — external/to-questionnaire.md:45, and a "closing catch-all" — external/to-questionnaire.md:46
- Non-branching single-recipient document: "flat, grouped list, not a tree that skips section D if you answered A." — external/to-questionnaire.md:48 ("one run produces one document for one person." — external/to-questionnaire.md:48)

## Invokes — required
- command /to-questionnaire — external/to-questionnaire.md:28
- skill grill-me — external/to-questionnaire.md:30
- skill grill-with-docs — external/to-questionnaire.md:30
- skill prototype — external/to-questionnaire.md:30
- skill to-spec — external/to-questionnaire.md:74
- skill ask-matt — external/to-questionnaire.md:74
- skill handoff — external/to-questionnaire.md:74
- skill teach — external/to-questionnaire.md:74

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `The /to-questionnaire Skill` — external/to-questionnaire.md:24 — defined here
- `to-questionnaire` — external/to-questionnaire.md:25 — defined here
- `questionnaire` — external/to-questionnaire.md:25 — defined here
- `send` — external/to-questionnaire.md:26 — defined here
- `gap` — external/to-questionnaire.md:26 — defined here
- `/to-questionnaire` — external/to-questionnaire.md:28 — defined here
- `agent` — external/to-questionnaire.md:28 — used here
- `grill-me` — external/to-questionnaire.md:30 — used here
- `grill-with-docs` — external/to-questionnaire.md:30 — used here
- `prototype` — external/to-questionnaire.md:30 — used here
- `grilling` — external/to-questionnaire.md:31 — used here
- `discovery questionnaire` — external/to-questionnaire.md:40 — defined here
- `most-important-first` — external/to-questionnaire.md:43 — defined here
- `branching` — external/to-questionnaire.md:48 — defined here
- `multi-recipient` — external/to-questionnaire.md:48 — defined here
- `session` — external/to-questionnaire.md:51 — used here
- `context` — external/to-questionnaire.md:51 — used here
- `model` — external/to-questionnaire.md:55 — used here
- `ticket` — external/to-questionnaire.md:59 — used here
- `rounds` — external/to-questionnaire.md:61 — used here
- `standalone` — external/to-questionnaire.md:73 — defined here
- `to-spec` — external/to-questionnaire.md:74 — used here
- `ask-matt` — external/to-questionnaire.md:74 — used here
- `handoff` — external/to-questionnaire.md:74 — used here
- `teach` — external/to-questionnaire.md:74 — used here
- `Getting Started` — external/to-questionnaire.md:74 — used here
- `The Main Flow` — external/to-questionnaire.md:74 — used here
- `Shaping` — external/to-questionnaire.md:74 — used here
- `Upkeep` — external/to-questionnaire.md:74 — used here
- `Productivity Skills` — external/to-questionnaire.md:74 — used here
- `Reference Skills` — external/to-questionnaire.md:74 — used here

## Structure
- # The /to-questionnaire Skill
- ## What it does
- ## When to reach for it
- ## The send, not the subject
- ## The document
- ## Common questions
- ## It's working if
- ## Where it fits
- ## Install the skills
- ## Related reading
- ### Learn
- ### Cohorts
- ### Account
- ### Agents

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- doc-drift — external/to-questionnaire.md:24 — Header navigation displays 25 total skills ("18 / 25" — external/to-questionnaire.md:24) matching plugin.json, while promotional text in line 74 says "Installs the whole set" for general skills installation without distinguishing the full 25-skill catalog count.
- orphan — external/to-questionnaire.md:1 — External documentation page snapshot is an orphan not invoked or required by any build/runtime execution path in sources/matt/.

## Observations
- Clarifies the fundamental division of labor between `grill-me` and `to-questionnaire`: `grill-me` explores questions when the answers are in your own head (or unsharpened), whereas `to-questionnaire` is for when answers reside in someone else's head: "getting them out of someone else is this." — external/to-questionnaire.md:61.
- Explains why questionnaires are deliberately static and flat rather than branching: "planning more than two or three questions ahead of a real answer plans badly" — external/to-questionnaire.md:55.
- Emphasizes the "send, not the subject" interview rule: the agent is explicitly prohibited from drifting into interviewing about the subject itself: "A question about the subject itself is the skill off the rails." — external/to-questionnaire.md:66 and "The interview is two exchanges, and then it stops." — external/to-questionnaire.md:33.
- Highlights async collaboration dynamics where single-pass efficiency is critical: "async means you may only get one pass." — external/to-questionnaire.md:43.
- Details the rationale against multi-recipient questionnaires: "If three people hold three parts of the answer, run it three times, once per person." — external/to-questionnaire.md:53.
- Describes the positioning of `to-questionnaire` at the boundary of knowledge: "It sits at the boundary of your own knowledge, where the next move is another person rather than another skill" — external/to-questionnaire.md:73.
- Snapshot source URL: "https://aihero.dev/skills-to-questionnaire" — external/to-questionnaire.md:1.

## Context cost
351319 bytes, approximately 88,000 tokens (full HTML snapshot including Next.js script bundles, stylesheets, and hydration state). 0 loaded runtime dependencies.
