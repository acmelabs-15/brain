---
package: rjm
path: .claude/skills/book-to-skill/references/method-extraction-template.md
type: reference
bytes: 1482
unit: inv-rjm-91
in_scope_via: .claude/skills/book-to-skill/SKILL.md
aliases: []
memo_inputs:
  - {path: .claude/skills/book-to-skill/references/method-extraction-template.md, sha256: e69c3035b5a689a13d34fd13d0fdc82a53fbd17044ce6ebb33552721fe705090}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/skills/book-to-skill/references/method-extraction-template.md

## Purpose — required, verbatim
> "Use during Phase 1 of `book-to-skill`. Fill out one of these per book. Output drives the SkillForge handoff in Phase 3." — .claude/skills/book-to-skill/references/method-extraction-template.md:3

## Design intent — required
Standardized extraction template for Phase 1 of the `book-to-skill` workflow that structures the distillation of non-fiction procedural books into machine-actionable methods. Imposes five forcing questions covering problem definition, ordered action steps, repeating rules, failure modes, and diagnostic inquiries while screening out non-executable material like author anecdotes and generic advice. Solves the problem of vague, narrative, or unrepeatable skill prompts by providing a strict gate before skill synthesis.

## Phase — required
rjm:spec

## Inputs — required
- Book metadata attributes:
  "Book metadata" — .claude/skills/book-to-skill/references/method-extraction-template.md:5
  "- Title:" — .claude/skills/book-to-skill/references/method-extraction-template.md:7
  "- Author:" — .claude/skills/book-to-skill/references/method-extraction-template.md:8
  "- Year (if known):" — .claude/skills/book-to-skill/references/method-extraction-template.md:9
  "- Edition / chapter range covered:" — .claude/skills/book-to-skill/references/method-extraction-template.md:10
- Book text examined through five forcing questions

## Outputs — required
- Structured method payload file:
  "Save the answers as `method.json` (or YAML) in the workspace before moving to Phase 2." — .claude/skills/book-to-skill/references/method-extraction-template.md:56

## Invokes — required
none

## Invoked by — required
- skill book-to-skill — .claude/skills/book-to-skill/SKILL.md:61

## Concepts named — required, verbatim
`book-to-skill` — .claude/skills/book-to-skill/references/method-extraction-template.md:3 — used here
`SkillForge` — .claude/skills/book-to-skill/references/method-extraction-template.md:3 — used here
`llm-wiki` — .claude/skills/book-to-skill/references/method-extraction-template.md:16 — used here
`diagnose-mode` — .claude/skills/book-to-skill/references/method-extraction-template.md:42 — used here
`method.json` — .claude/skills/book-to-skill/references/method-extraction-template.md:56 — defined here

## Structure
# Method Extraction Template — .claude/skills/book-to-skill/references/method-extraction-template.md:1
## Book metadata — .claude/skills/book-to-skill/references/method-extraction-template.md:5
## Five forcing questions — .claude/skills/book-to-skill/references/method-extraction-template.md:12
### Q1. What problem does this book solve? — .claude/skills/book-to-skill/references/method-extraction-template.md:14
### Q2. What are the steps of the method, in order? — .claude/skills/book-to-skill/references/method-extraction-template.md:18
### Q3. What rules does the author repeat across chapters? — .claude/skills/book-to-skill/references/method-extraction-template.md:26
### Q4. What mistakes does the author warn against? — .claude/skills/book-to-skill/references/method-extraction-template.md:33
### Q5. What questions does the author ask the reader? — .claude/skills/book-to-skill/references/method-extraction-template.md:40
## Anti-patterns (do not extract) — .claude/skills/book-to-skill/references/method-extraction-template.md:47
## Output — .claude/skills/book-to-skill/references/method-extraction-template.md:54

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- `missing-path`: References `llm-wiki` (.claude/skills/book-to-skill/references/method-extraction-template.md:16) as a fallback destination for descriptive reference knowledge, but no `llm-wiki` skill or document exists in the repository.

## Observations
- Defines a mandatory halting rule: if Q2 cannot produce at least two ordered concrete steps, the book lacks an extractable method and extraction stops immediately.
- Explicitly filters out author biographical sketches, illustrative war stories, and cross-book citations to keep agent skill contexts concise.

## Context cost
1482 bytes, approximately 370 tokens.
