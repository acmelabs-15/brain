---
package: rjm
path: .claude/skills/book-to-skill/SKILL.md
type: skill
bytes: 7472
unit: inv-rjm-91
in_scope_via: .agents/architecture/README.md
aliases: []
memo_inputs:
  - {path: .claude/skills/book-to-skill/SKILL.md, sha256: d5c6f81724a9de3997a7e38db4200fe40c10297e1d2e304d149d35431ba988c4}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/skills/book-to-skill/SKILL.md

## Purpose — required, verbatim
> "Convert a book's method into the structured input SkillForge needs, then hand off." — .claude/skills/book-to-skill/SKILL.md:10

## Design intent — required
Specialized input adapter skill that translates methodology-bearing non-fiction books into structured generation payloads for `SkillForge` without bypassing downstream architectural, quality, and duplicate-triage gates. Enforces a clean separation of concerns: `book-to-skill` extracts core procedures (Phase 1) and determines diagnose/apply decomposition (Phase 2), but leaves skill specification, prompt generation, timelessness scoring, multi-agent evaluation, and `SKILL.md` synthesis to `SkillForge` (Phase 3).

## Phase — required
rjm:spec

## Inputs — required
- User trigger invocations:
  "turn this book into a skill" — .claude/skills/book-to-skill/SKILL.md:16
  "book-to-skill TITLE" — .claude/skills/book-to-skill/SKILL.md:17
  "extract method from TITLE" — .claude/skills/book-to-skill/SKILL.md:18
  "propose diagnose apply split for TITLE" — .claude/skills/book-to-skill/SKILL.md:19
- Methodological non-fiction book content provided by operator
- Intermediate extraction artifact:
  "method.json" — .claude/skills/book-to-skill/SKILL.md:51

## Outputs — required
- Structured payload artifact:
  "method.json" — .claude/skills/book-to-skill/SKILL.md:51
- Downstream SkillForge invocation command:
  "SkillForge: create skill <book-slug>[-diagnose|-apply]" — .claude/skills/book-to-skill/SKILL.md:85
- Triage options when duplicate detected:
  "When SkillForge's Phase 0 returns >=80% match against an existing skill, do NOT" — .claude/skills/book-to-skill/SKILL.md:105

## Invokes — required
- reference references/method-extraction-template.md — .claude/skills/book-to-skill/SKILL.md:61
- reference references/split-decision-worksheet.md — .claude/skills/book-to-skill/SKILL.md:78
- skill SkillForge — .claude/skills/book-to-skill/SKILL.md:85

## Invoked by — required
orphan

## Concepts named — required, verbatim
`SkillForge` — .claude/skills/book-to-skill/SKILL.md:10 — used here
`The Mom Test` — .claude/skills/book-to-skill/SKILL.md:4 — used here
`Make It Stick` — .claude/skills/book-to-skill/SKILL.md:4 — used here
`Influence` — .claude/skills/book-to-skill/SKILL.md:4 — used here
`The Pragmatic Programmer` — .claude/skills/book-to-skill/SKILL.md:4 — used here
`panning-for-gold` — .claude/skills/book-to-skill/SKILL.md:31 — used here
`llm-wiki` — .claude/skills/book-to-skill/SKILL.md:32 — used here
`slashcommandcreator` — .claude/skills/book-to-skill/SKILL.md:34 — used here
`method.json` — .claude/skills/book-to-skill/SKILL.md:51 — used here
`five forcing questions` — .claude/skills/book-to-skill/SKILL.md:51 — used here
`diagnose/apply split` — .claude/skills/book-to-skill/SKILL.md:63 — used here
`<book>-diagnose` — .claude/skills/book-to-skill/SKILL.md:72 — used here
`<book>-apply` — .claude/skills/book-to-skill/SKILL.md:72 — used here
`momtest-diagnose` — .claude/skills/book-to-skill/SKILL.md:76 — used here
`momtest-apply` — .claude/skills/book-to-skill/SKILL.md:76 — used here

## Structure
# book-to-skill — .claude/skills/book-to-skill/SKILL.md:8
## Triggers — .claude/skills/book-to-skill/SKILL.md:12
## When to Use — .claude/skills/book-to-skill/SKILL.md:21
## Out of Scope (do NOT do these) — .claude/skills/book-to-skill/SKILL.md:36
## Process — .claude/skills/book-to-skill/SKILL.md:45
### Phase 1: Extract the method — .claude/skills/book-to-skill/SKILL.md:49
### Phase 2: Decide diagnose/apply split — .claude/skills/book-to-skill/SKILL.md:63
### Phase 3: Hand off to SkillForge — .claude/skills/book-to-skill/SKILL.md:80
### SkillForge triage feedback loop — .claude/skills/book-to-skill/SKILL.md:103
## Anti-patterns — .claude/skills/book-to-skill/SKILL.md:111
## Relationship to other skills — .claude/skills/book-to-skill/SKILL.md:120
## Source — .claude/skills/book-to-skill/SKILL.md:129
## Verification — .claude/skills/book-to-skill/SKILL.md:134

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- `missing-path`: References `llm-wiki` (.claude/skills/book-to-skill/SKILL.md:32, 59, 126) for reference knowledge capture, but `llm-wiki` does not exist in the repository.
- `doc-drift`: Refers to `SkillForge` (.claude/skills/book-to-skill/SKILL.md:85, 124) with CamelCase casing, whereas the on-disk directory in `.claude/skills/skillforge` is lowercase.

## Observations
- Clear demarcation of responsibility: the skill explicitly lists out-of-scope operations (source acquisition, SKILL.md authoring, triage scans, timelessness scoring, multi-agent panels), preventing duplicate code and inconsistent review criteria across the agent ecosystem.
- Attributed to Ruben Hassid's "How to AI" framework (2026-05-09) for the forcing questions and diagnose/apply dichotomy.

## Context cost
7472 bytes (skill) + 1482 bytes (extraction template) + 2088 bytes (split worksheet) = 11042 bytes, approximately 2760 tokens.
