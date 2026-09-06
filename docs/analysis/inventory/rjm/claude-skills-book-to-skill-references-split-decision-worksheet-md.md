---
package: rjm
path: .claude/skills/book-to-skill/references/split-decision-worksheet.md
type: reference
bytes: 2088
unit: inv-rjm-91
in_scope_via: .claude/skills/book-to-skill/SKILL.md
aliases: []
memo_inputs:
  - {path: .claude/skills/book-to-skill/references/split-decision-worksheet.md, sha256: 75b638c48f0cb77fee436e5ab901d1d0970afc5a92a335757e396aa699a2dd19}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/skills/book-to-skill/references/split-decision-worksheet.md

## Purpose — required, verbatim
> "Use during Phase 2 of `book-to-skill`. Decides whether the book becomes one skill or two." — .claude/skills/book-to-skill/references/split-decision-worksheet.md:3

## Design intent — required
Analytical decision matrix and worksheet for Phase 2 of `book-to-skill`. Evaluates whether a book's extracted methodology warrants decomposition into two distinct skills—a diagnostic interrogation skill (`<book>-diagnose`) and a generative application skill (`<book>-apply`)—or should remain a single skill. Solves the architectural problem of conflating evaluative diagnostic prompts with generative drafting recipes, preventing bloated, unfocused skills.

## Phase — required
rjm:spec

## Inputs — required
- Extraction results from Phase 1 (`method.json`):
  "Inputs (from Phase 1)" — .claude/skills/book-to-skill/references/split-decision-worksheet.md:5
  "Q2 step count:" — .claude/skills/book-to-skill/references/split-decision-worksheet.md:7
  "Q2 steps produce a concrete output artifact (yes/no):" — .claude/skills/book-to-skill/references/split-decision-worksheet.md:8
  "Q5 question count:" — .claude/skills/book-to-skill/references/split-decision-worksheet.md:9
  "Q5 questions interrogate the operator's situation (yes/no):" — .claude/skills/book-to-skill/references/split-decision-worksheet.md:10

## Outputs — required
- Architectural split determination appended to method metadata:
  "Append the decision and rationale to `method.json` from Phase 1." — .claude/skills/book-to-skill/references/split-decision-worksheet.md:45

## Invokes — required
none

## Invoked by — required
- skill book-to-skill — .claude/skills/book-to-skill/SKILL.md:78

## Concepts named — required, verbatim
`book-to-skill` — .claude/skills/book-to-skill/references/split-decision-worksheet.md:3 — used here
`<book>-diagnose` — .claude/skills/book-to-skill/references/split-decision-worksheet.md:16 — defined here
`<book>-apply` — .claude/skills/book-to-skill/references/split-decision-worksheet.md:16 — defined here
`The Mom Test` — .claude/skills/book-to-skill/references/split-decision-worksheet.md:28 — used here
`momtest-diagnose` — .claude/skills/book-to-skill/references/split-decision-worksheet.md:34 — used here
`momtest-apply` — .claude/skills/book-to-skill/references/split-decision-worksheet.md:34 — used here
`Atomic Habits` — .claude/skills/book-to-skill/references/split-decision-worksheet.md:36 — used here
`atomic-habits-apply` — .claude/skills/book-to-skill/references/split-decision-worksheet.md:41 — used here
`method.json` — .claude/skills/book-to-skill/references/split-decision-worksheet.md:45 — used here
`Diagnose/apply split decision` — .claude/skills/book-to-skill/references/split-decision-worksheet.md:45 — defined here
`SkillForge` — .claude/skills/book-to-skill/references/split-decision-worksheet.md:45 — used here

## Structure
# Diagnose / Apply Split Decision Worksheet — .claude/skills/book-to-skill/references/split-decision-worksheet.md:1
## Inputs (from Phase 1) — .claude/skills/book-to-skill/references/split-decision-worksheet.md:5
## Decision matrix — .claude/skills/book-to-skill/references/split-decision-worksheet.md:12
## Tie-breakers when unsure — .claude/skills/book-to-skill/references/split-decision-worksheet.md:21
## Worked example: *The Mom Test* (Rob Fitzpatrick) — .claude/skills/book-to-skill/references/split-decision-worksheet.md:28
## Worked example: *Atomic Habits* (James Clear) — .claude/skills/book-to-skill/references/split-decision-worksheet.md:36
## Output — .claude/skills/book-to-skill/references/split-decision-worksheet.md:43

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
- Formalizes four decision branches:
  1. Q5 non-trivial + Q2 multi-step with output -> Split into `<book>-diagnose` and `<book>-apply`.
  2. Q5 non-trivial + Q2 without output -> Single skill, diagnose-only.
  3. Q5 trivial + Q2 multi-step with output -> Single skill, apply-only.
  4. Neither -> Halt and re-run Phase 1.
- Establishes concrete tie-breakers: distinct invocation contexts (review vs drafting), distinct target audiences, or projected skill size exceeding 500 lines all trigger a split; otherwise defaults conservatively to a single skill.

## Context cost
2088 bytes, approximately 520 tokens.
