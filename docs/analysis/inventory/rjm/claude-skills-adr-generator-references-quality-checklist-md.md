---
package: rjm
path: .claude/skills/adr-generator/references/quality-checklist.md
type: reference
bytes: 1550
unit: inv-rjm-76
in_scope_via: .claude/skills/adr-generator/SKILL.md
aliases: []
memo_inputs:
  - {path: .claude/skills/adr-generator/references/quality-checklist.md, sha256: 8a66e192b59dcb7663bf3a054a57c2655d4d2aaf8c60429ae8ca15c2fa961cf4}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/skills/adr-generator/references/quality-checklist.md

## Purpose — required, verbatim
> "Self-validation checklist for Phase G4. All items must pass before saving the ADR." — .claude/skills/adr-generator/references/quality-checklist.md:3

## Design intent — required
Concise self-validation checklist enforcing quality, structural completeness, content rigor, conditional section requirements, and governance standards before an ADR can be saved in Phase G4. It mandates checks for unique ADR numbering, descriptive title and kebab slug matching filename, template-specific section presence, `Proposed` status enforcement (requiring multi-agent review for `Accepted`), active-voice problem-focused context, at least 2 alternatives with pros/cons, at least 1 negative consequence, actionable implementation notes, relative-path references, conditional triggers (Prior Art Investigation, Impact on Dependent Components, Agent-Specific Fields), non-duplication verification, and avoidance of AI sycophancy or filler language. Without it, generated ADRs would risk containing unvalidated placeholders, duplicate numbers, unearned `Accepted` statuses, or one-sided justifications.

## Phase — required
cross-phase

## Inputs — required
none

## Outputs — required
none

## Invokes — required
none

## Invoked by — required
- skill adr-generator — .claude/skills/adr-generator/SKILL.md:176
- skill adr-generator — .claude/skills/adr-generator/SKILL.md:223
- skill adr-generator — .claude/skills/adr-generator/SKILL.md:251

## Concepts named — required, verbatim
- `ADR Quality Checklist` — .claude/skills/adr-generator/references/quality-checklist.md:1 — defined here
- `Phase G4` — .claude/skills/adr-generator/references/quality-checklist.md:3 — used here
- `Structural Completeness` — .claude/skills/adr-generator/references/quality-checklist.md:5 — defined here
- `Content Quality` — .claude/skills/adr-generator/references/quality-checklist.md:14 — defined here
- `Conditional Sections` — .claude/skills/adr-generator/references/quality-checklist.md:23 — defined here
- `Governance` — .claude/skills/adr-generator/references/quality-checklist.md:29 — defined here

## Structure
- `# ADR Quality Checklist` — .claude/skills/adr-generator/references/quality-checklist.md:1
- `## Structural Completeness` — .claude/skills/adr-generator/references/quality-checklist.md:5
- `## Content Quality` — .claude/skills/adr-generator/references/quality-checklist.md:14
- `## Conditional Sections` — .claude/skills/adr-generator/references/quality-checklist.md:23
- `## Governance` — .claude/skills/adr-generator/references/quality-checklist.md:29

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
- Explicitly enforces that status on creation must remain `Proposed`; status cannot flip to `Accepted` until multi-agent debate review (`adr-review`) concludes.
- Includes strict anti-sycophancy check ("No sycophancy, AI filler phrases, or hedging language", line 34).

## Context cost
1550 bytes (~390 tokens). Invokes nothing additional.
