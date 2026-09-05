---
package: addy
path: scripts/lib/skill-lint.js
type: script
bytes: 11808
unit: inv-addy-36
deprecated: false
aliases: []
memo_inputs:
  - {path: scripts/lib/skill-lint.js, sha256: bf9d058b42516e7cdc01f3681313a7cc727496b571a0b67a03a9444a894f4925}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/lib/skill-lint.js

## Purpose — required, verbatim
> "This is the single source of truth for what makes a SKILL.md valid" — scripts/lib/skill-lint.js:5

## Design intent — required
Provides the centralized, pure validation engine for SKILL.md files in `agent-skills`, separating linting policy and rule evaluation from filesystem operations and CLI execution. Verifies frontmatter validity (name matching directory, description character limits, mandatory "when to use" trigger phrasing), directory kebab-case naming, presence of five required markdown sections (`## Overview`, `## When to Use`, `## Common Rationalizations`, `## Red Flags`, `## Verification`) with protected exemptions for meta-skills, step-to-section consistency in multi-step workflows, and dead cross-skill references. Decoupling this engine enables fast, process-free unit testing and reusable static analysis across toolchains.

## Phase — required
none

## Inputs — required
- Skill directory name, SKILL.md markdown text, and `knownSkills` set passed to `lintSkillContent` — scripts/lib/skill-lint.js:133.
- Reads `SKILL.md` from disk via `fs.readFileSync` — scripts/lib/skill-lint.js:258 in `lintSkill` — scripts/lib/skill-lint.js:249.

## Outputs — required
- Validation result object `{ errors, warnings, exempt }` returned by `lintSkillContent` — scripts/lib/skill-lint.js:133 and `lintSkill` — scripts/lib/skill-lint.js:249.

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

## Structure
- Header and Rules Overview — scripts/lib/skill-lint.js:1-21
- Config — scripts/lib/skill-lint.js:26-76
- Helpers — scripts/lib/skill-lint.js:78-124
- Linter — scripts/lib/skill-lint.js:126-241
- Filesystem Wrapper — scripts/lib/skill-lint.js:243-264
- Exports — scripts/lib/skill-lint.js:266-276

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/lib/skill-lint.js`, language: JavaScript (Node.js CommonJS module), lines: 276
- documented invocation: "The CLI in scripts/validate-skills.js is a thin" — scripts/lib/skill-lint.js:6
- **executed:** yes
- actual command run: `bun sources/addy/scripts/lib/skill-lint.js`, abridged stdout: (empty, exports module functions), **actual exit code:** 0; and `bun sources/addy/scripts/validate-skills.js`, abridged stdout: `25 skills checked — 0 error(s), 0 warning(s) — PASSED`, **actual exit code:** 0
- documented exit codes: none documented in module vs. actual exit paths in code: library module contains no `process.exit` calls; validation results `{ errors, warnings, exempt }` are evaluated by caller `scripts/validate-skills.js` (which exits 1 if `totalErrors > 0`).
- for validators/gates: can it exit non-zero? Library itself returns errors array; caller CLI exits 1 on errors. Does it fail on the source repo's own default branch? No, all 25 skills pass with 0 errors and 0 warnings.
- does the output match what the documentation claims? Yes, correctly enforces all SKILL.md validation rules specified in `docs/skill-anatomy.md`.

## Defects — required
none

## Observations
- Prototype pollution safeguard: explicitly uses `Object.hasOwn(SECTION_EXEMPT_SKILLS, dirName)` rather than `in` operator (`scripts/lib/skill-lint.js:194`), closing a potential bypass where a skill directory named `constructor` would match `Object.prototype.constructor` and avoid section checks.
- Code block isolation: `stripFencedCodeBlocks` (`scripts/lib/skill-lint.js:84`) strips multi-line markdown backtick fences to prevent headings, references, or trigger phrases inside documentation code samples from satisfying validation checks.
- Multi-step workflow verification: inspects workflow summaries declared in `## The ... Workflow` and verifies that every numbered step has a corresponding `### Step N:` subsection (`scripts/lib/skill-lint.js:215-231`).

## Context cost
11808 bytes (~2800 tokens). Exported functions loaded by `scripts/validate-skills.js` and `scripts/lib/skill-lint-test.js`.
