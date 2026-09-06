---
package: addy
path: scripts/lib/skill-lint.js
type: script
bytes: 11808
unit: inv-addy-36
aliases: []
memo_inputs:
  - {path: scripts/lib/skill-lint.js, sha256: bf9d058b42516e7cdc01f3681313a7cc727496b571a0b67a03a9444a894f4925}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# scripts/lib/skill-lint.js

## Purpose — required, verbatim
> "skill-lint.js — the skill validation rules, as a shared library." — scripts/lib/skill-lint.js:3

## Design intent — required
Shared validation engine implementing the structural and syntactic rules that govern every `SKILL.md` file across the repository as specified in `docs/skill-anatomy.md`. Decoupled from the CLI runner (`scripts/validate-skills.js`) to allow pure in-memory testing without filesystem dependencies. Enforces kebab-case directory naming, valid YAML frontmatter containing `name` and `description`, name/directory correspondence, description length constraints (<= 1024 chars), presence of non-negated trigger clauses ("Use when..."), enforcement of required sections (`## Overview`, `## When to Use`, `## Common Rationalizations`, `## Red Flags`, `## Verification`) with allowlisted exemptions (`using-agent-skills`, `idea-refine`), prototype-pollution safety via `Object.hasOwn`, workflow step continuity, and detection of dead cross-skill references.

## Phase — required
none

## Inputs — required
Skill directory name, file content string (for `lintSkillContent`), skills directory path (for `lintSkill`), and Set of known skill names (`knownSkills`).

## Outputs — required
Validation report object: `{ errors: string[], warnings: string[], exempt: boolean }`.

## Invokes — required
- doc docs/skill-anatomy.md — scripts/lib/skill-lint.js:6

## Invoked by — required
- script scripts/validate-skills.js — scripts/validate-skills.js:6
- script scripts/lib/skill-lint-test.js — scripts/lib/skill-lint-test.js:8

## Concepts named — required, verbatim
- `MAX_DESCRIPTION_LENGTH` — scripts/lib/skill-lint.js:28 — defined here
- `KEBAB_CASE` — scripts/lib/skill-lint.js:32 — defined here
- `DESCRIPTION_TRIGGER` — scripts/lib/skill-lint.js:39 — defined here
- `DESCRIPTION_TRIGGER_NEGATE` — scripts/lib/skill-lint.js:40 — defined here
- `REQUIRED_SECTIONS` — scripts/lib/skill-lint.js:45 — defined here
- `SECTION_EXEMPT_SKILLS` — scripts/lib/skill-lint.js:57 — defined here
- `SKILL_REF_PATTERNS` — scripts/lib/skill-lint.js:65 — defined here
- `stripFencedCodeBlocks` — scripts/lib/skill-lint.js:84 — defined here
- `parseFrontmatter` — scripts/lib/skill-lint.js:93 — defined here
- `extractSkillReferences` — scripts/lib/skill-lint.js:113 — defined here
- `lintSkillContent` — scripts/lib/skill-lint.js:133 — defined here
- `lintSkill` — scripts/lib/skill-lint.js:249 — defined here
- `docs/skill-anatomy.md` — scripts/lib/skill-lint.js:6 — used here
- `scripts/validate-skills.js` — scripts/lib/skill-lint.js:6 — used here

## Structure
none

## Scripts — required if type is script or the skill ships scripts
- path, language, lines: `scripts/lib/skill-lint.js`, JavaScript (Node.js CommonJS module), 276 lines
- documented invocation: none documented (shared library module invoked by `scripts/validate-skills.js` and `scripts/lib/skill-lint-test.js`)
- **executed:** yes
- actual command run: `bun ./scripts/lib/skill-lint.js` (executed from `sources/addy`), abridged stdout: `(empty)`, **actual exit code:** 0; also executed via `node -e "require('./scripts/lib/skill-lint.js')"` with actual exit code 0.
- documented exit codes: none documented for library module vs. actual exit paths in code: no process.exit calls; returns `{ errors, warnings, exempt }` object or `{ errors: ['Missing SKILL.md'], warnings: [], exempt: false }` at scripts/lib/skill-lint.js:253, `{ errors: [\`Unreadable SKILL.md: ${err.message}\`], warnings: [], exempt: false }` at scripts/lib/skill-lint.js:260.
- for validators/gates: validator library module; produces error strings that cause caller CLI to exit non-zero.
- does the output match what the documentation claims? Yes, exports pure and filesystem validation functions matching `docs/skill-anatomy.md` specifications.

## Defects — required
- other — scripts/lib/skill-lint.js:1: CommonJS module format (`module.exports = ...`, `require('fs')`) in a `.js` file fails in Node.js when root `package.json` specifies `"type": "module"`.

## Observations
- Utilizes `Object.hasOwn(SECTION_EXEMPT_SKILLS, dirName)` instead of the `in` operator to defend against prototype-pollution vulnerabilities where names such as `constructor` or `toString` could bypass section checks.
- Strips fenced code blocks (`stripFencedCodeBlocks`) before evaluating headings to avoid false positives on markdown headings inside examples or templates.
- Enforces workflow documentation integrity by checking that any declared numbered workflow steps (`^\s*(\d+)\.\s+[A-Z][A-Z -]*\s+→`) have matching `### Step N:` process subsections.

## Context cost
11,808 bytes (~2,952 tokens). Standalone module with standard library `fs` and `path` imports.
