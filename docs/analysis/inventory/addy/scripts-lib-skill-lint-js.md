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
verified: 2026-09-04 quote-check+coverage
---

# scripts/lib/skill-lint.js

## Purpose — required, verbatim
> "skill-lint.js — the skill validation rules, as a shared library." — scripts/lib/skill-lint.js:3

## Design intent — required
Serves as the single source of truth and shared validation engine for `SKILL.md` documents according to the specification in `docs/skill-anatomy.md`. By decoupling linting logic from the filesystem and process boundaries into pure functions (`lintSkillContent`), it allows comprehensive unit testing and flexible validation. It enforces structural integrity, frontmatter schema (`name`, `description`), kebab-case naming, character count limits, mandatory 'when to use' trigger phrasing, required sections, workflow step-to-section parity, exemption security (preventing unallowlisted self-exemptions and prototype pollution), and cross-skill reference integrity.

## Phase — required
cross-phase

## Inputs — required
- Directory name string `dirName` — scripts/lib/skill-lint.js:133
- Markdown string `content` — scripts/lib/skill-lint.js:133
- Set of known skill names `knownSkills` — scripts/lib/skill-lint.js:133
- Skill file read by `lintSkill` — scripts/lib/skill-lint.js:249

## Outputs — required
Returns validation result object `{ errors, warnings, exempt }` — scripts/lib/skill-lint.js:131
Exported functions: `parseFrontmatter`, `extractSkillReferences`, `lintSkillContent`, `lintSkill` — scripts/lib/skill-lint.js:271-274

## Invokes — required
none

## Invoked by — required
- script validate-skills.js — scripts/validate-skills.js:6
- script skill-lint-test.js — scripts/lib/skill-lint-test.js:8

## Concepts named — required, verbatim
- `skill-lint.js` — scripts/lib/skill-lint.js:3 — defined here
- `SKILL.md` — scripts/lib/skill-lint.js:11 — used here
- `MAX_DESCRIPTION_LENGTH` — scripts/lib/skill-lint.js:28 — defined here
- `KEBAB_CASE` — scripts/lib/skill-lint.js:32 — defined here
- `DESCRIPTION_TRIGGER` — scripts/lib/skill-lint.js:39 — defined here
- `DESCRIPTION_TRIGGER_NEGATE` — scripts/lib/skill-lint.js:40 — defined here
- `REQUIRED_SECTIONS` — scripts/lib/skill-lint.js:45 — defined here
- `SECTION_EXEMPT_SKILLS` — scripts/lib/skill-lint.js:57 — defined here
- `using-agent-skills` — scripts/lib/skill-lint.js:58 — used here
- `idea-refine` — scripts/lib/skill-lint.js:59 — used here
- `SKILL_REF_PATTERNS` — scripts/lib/skill-lint.js:65 — defined here
- `stripFencedCodeBlocks` — scripts/lib/skill-lint.js:84 — defined here
- `parseFrontmatter` — scripts/lib/skill-lint.js:93 — defined here
- `extractSkillReferences` — scripts/lib/skill-lint.js:113 — defined here
- `lintSkillContent` — scripts/lib/skill-lint.js:133 — defined here
- `lintSkill` — scripts/lib/skill-lint.js:249 — defined here

## Structure
none

## Scripts — required if type is script or the skill ships scripts
- path, language, lines: `scripts/lib/skill-lint.js`, JavaScript (Node.js CommonJS), 276 lines
- documented invocation: none documented for direct execution; imported via `require('./lib/skill-lint')` — scripts/validate-skills.js:19
- **executed:** yes
- actual command run, abridged stdout, **actual exit code**: `bun sources/addy/scripts/lib/skill-lint.js`, stdout ``, exit code: 0. Direct execution via Node fails with exit code 1 due to enclosing workspace package.json ESM module configuration (`ReferenceError: require is not defined in ES module scope`).
- documented exit codes vs. actual exit paths in code: none documented; library module contains zero `process.exit()` calls (returns error/warning collections to caller).
- for validators/gates: core validator library. Contains rules that return error strings that block CI when skills lack required frontmatter, triggers, or sections.
- does the output match what the documentation claims? Yes, exports `{ parseFrontmatter, extractSkillReferences, lintSkillContent, lintSkill }` providing full validation against `docs/skill-anatomy.md`.

## Defects — required
- `script-bug` · `scripts/lib/skill-lint.js:23` · Uses CommonJS `require()` without a local `package.json` declaring `"type": "commonjs"`; in projects where an enclosing package.json declares `"type": "module"`, importing via Node fails with `ReferenceError: require is not defined in ES module scope`.

## Observations
- Exemptions live in `SECTION_EXEMPT_SKILLS` rather than frontmatter so contributors cannot self-exempt skills from required sections.
- Uses `Object.hasOwn` rather than `in` to guard against prototype pollution from directory names like `constructor`.
- Validates that declared steps in `## The [Name] Workflow` match corresponding `### Step N:` subsections.

## Context cost
11808 bytes, ~2952 tokens.
