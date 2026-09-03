---
package: addy
path: scripts/lib/skill-lint.js
type: script
bytes: 11808
unit: inv-addy-11
---

# scripts/lib/skill-lint.js

## Purpose — required, verbatim
> "skill-lint.js — the skill validation rules, as a shared library.
 *
 * This is the single source of truth for what makes a SKILL.md valid
 * (docs/skill-anatomy.md). The CLI in scripts/validate-skills.js is a thin
 * wrapper over it. Splitting the rules out of the CLI keeps them importable
 * and unit-testable without spawning a process or touching the filesystem." — scripts/lib/skill-lint.js:3-8

## Design intent — required
Separates validation logic and structural rules for `SKILL.md` from filesystem traversal and CLI presentation, establishing an in-memory, pure validation library (`lintSkillContent`) alongside a thin filesystem reader (`lintSkill`). This architecture enables isolated, microsecond-scale unit testing without process spawning or temporary mock fixtures, while providing an authoritative single source of truth for skill frontmatter, naming, section structure, trigger syntax, and cross-reference integrity across automated tooling.

## Phase — required
`cross-phase`

## Inputs — required
- `lintSkillContent(dirName, content, knownSkills)`: `dirName` (string, skill directory name), `content` (raw markdown string of SKILL.md), `knownSkills` (Set of valid skill directory strings) — scripts/lib/skill-lint.js:144
- `lintSkill(dirName, skillsDir, knownSkills)`: `dirName` (string), `skillsDir` (filesystem path), `knownSkills` (Set of strings) — scripts/lib/skill-lint.js:255; reads `${skillsDir}/${dirName}/SKILL.md` via `fs.readFileSync` — scripts/lib/skill-lint.js:260

## Outputs — required
- Validation result object: `{ errors: string[], warnings: string[], exempt: boolean }` — scripts/lib/skill-lint.js:145, 269
- Side effects: `none`

## Invokes — required
- doc docs/skill-anatomy.md — scripts/lib/skill-lint.js:6
- script scripts/validate-skills.js — scripts/lib/skill-lint.js:6
- module node:fs (require('fs')) — scripts/lib/skill-lint.js:23
- module node:path (require('path')) — scripts/lib/skill-lint.js:24

## Invoked by — required
- script scripts/validate-skills.js — scripts/validate-skills.js:19
- script scripts/lib/skill-lint-test.js — scripts/lib/skill-lint-test.js:8

## Concepts named — required, verbatim
- `skill-lint.js` — scripts/lib/skill-lint.js:3 — defined here
- `SKILL.md` — scripts/lib/skill-lint.js:5, 258 — used here
- `YAML frontmatter` — scripts/lib/skill-lint.js:12, 148 — used here
- `when to use` — scripts/lib/skill-lint.js:16, 161 — used here
- `cross-skill references` — scripts/lib/skill-lint.js:20, 65, 237 — used here
- `REQUIRED_SECTIONS` — scripts/lib/skill-lint.js:45 — defined here
- `SECTION_EXEMPT_SKILLS` — scripts/lib/skill-lint.js:57 — defined here
- `dead-reference warning` — scripts/lib/skill-lint.js:63 — defined here
- `SKILL_REF_PATTERNS` — scripts/lib/skill-lint.js:65 — defined here
- `fenced code blocks` — scripts/lib/skill-lint.js:81 — defined here
- `DESCRIPTION_TRIGGER` — scripts/lib/skill-lint.js:34 — defined here
- `NAME_PATTERN` — scripts/lib/skill-lint.js:31 — defined here
- `exemption guard` — scripts/lib/skill-lint.js:175 — defined here
- `The [Workflow Name] Workflow` — scripts/lib/skill-lint.js:215-217 — used here
- `## Overview` — scripts/lib/skill-lint.js:46 — used here
- `## When to Use` — scripts/lib/skill-lint.js:47 — used here
- `## Common Rationalizations` — scripts/lib/skill-lint.js:48 — used here
- `## Red Flags` — scripts/lib/skill-lint.js:49 — used here
- `## Verification` — scripts/lib/skill-lint.js:50 — used here
- `using-agent-skills` — scripts/lib/skill-lint.js:58 — used here
- `idea-refine` — scripts/lib/skill-lint.js:59 — used here
- `lintSkillContent` — scripts/lib/skill-lint.js:144 — defined here
- `lintSkill` — scripts/lib/skill-lint.js:255 — defined here

## Structure
- Header block comment & purpose summary (lines 1-9)
- Rules summary comment (lines 11-21)
- Imports: fs, path (lines 23-24)
- // ─── Config ─────────────────────────────────────────────────────────────────── (line 26)
- // ─── Helpers ────────────────────────────────────────────────────────────────── (line 73)
- // ─── Linter ─────────────────────────────────────────────────────────────────── (line 142)
  - // ── Frontmatter ───────────────────────────────────────────────────────────── (line 147)
  - // ── Exemption guard ───────────────────────────────────────────────────────── (line 175)
  - // ── Required sections ─────────────────────────────────────────────────────── (line 200)
  - // ── Cross-skill references ────────────────────────────────────────────────── (line 236)
- Module exports (lines 271-276)

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/lib/skill-lint.js`
- language: JavaScript (Node.js / Bun CommonJS)
- lines: 276
- documented invocation:
  > "The CLI in scripts/validate-skills.js is a thin wrapper over it. Splitting the rules out of the CLI keeps them importable and unit-testable without spawning a process or touching the filesystem." — scripts/lib/skill-lint.js:6-8
  Invoked programmatically via `const { lintSkill, lintSkillContent } = require('./lib/skill-lint');`
- **executed:** yes
- actual command run: `cd sources/addy && bun scripts/validate-skills.js`
- abridged stdout:
  ```text
    ✓  api-and-interface-design
    ...
    ✓  using-agent-skills (section checks exempt)
  25 skills checked — 0 error(s), 0 warning(s) — PASSED
  ```
- **actual exit code:** 0
- documented exit codes: `none` for library; wrapper `scripts/validate-skills.js` documents `0 = all clear, 1 = one or more errors`. Library has 0 `process.exit` calls.
- for validators/gates: can exit non-zero via caller? Yes. Produces errors on missing frontmatter, mismatched name, missing trigger clause, invalid sections, and missing workflow step sections. Exits 0 on repository default branch.
- does the output match what the documentation claims? Yes.

## Defects — required
- `doc-drift` · scripts/lib/skill-lint.js:45-51 · Linter mandates five exact headings (`## Overview`, `## When to Use`, `## Common Rationalizations`, `## Red Flags`, `## Verification`) with zero alias tolerance, contradicting `docs/skill-anatomy.md:38-40` and `CONTRIBUTING.md:53` which claim section headings are a flexible recommended pattern where equivalents like `How It Works` or `Workflow` are acceptable.
- `doc-drift` · scripts/lib/skill-lint.js:158 · Enforces a 1024-character description limit that is undocumented in `docs/skill-anatomy.md`.

## Observations
- Uses `Object.hasOwn(SECTION_EXEMPT_SKILLS, dirName)` at line 194 instead of `dirName in SECTION_EXEMPT_SKILLS` to prevent prototype-chain poisoning where directory names matching `Object.prototype` properties (e.g. `constructor`, `toString`) would inadvertently inherit truthiness and bypass required-section validation.
- Uses `stripFencedCodeBlocks` before heading extraction to prevent example markdown snippets inside code blocks from satisfying or corrupting required section detection.

## Context cost
11,808 bytes, approximately 2,952 tokens.
