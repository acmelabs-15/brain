---
package: addy
path: .claude/rules/skills-contributing.md
type: doc
bytes: 988
unit: inv-addy-2
deprecated: false
aliases: []
memo_inputs:
  - {path: .claude/rules/skills-contributing.md, sha256: 6f8ff659388c3b957322ac46f788ff16d996e5c751f71a6c1e59e4761c437bbd}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/rules/skills-contributing.md

## Purpose — required, verbatim
> "Anti-duplication guardrail for adding or changing skills" — .claude/rules/skills-contributing.md:2

## Design intent — required
Enforces anti-duplication discipline on AI coding assistants whenever touching files under `skills/**`. It prevents catalog sprawl, fragmenting workflows, and redundant implementations by requiring agents to search existing skills, inspect open pull requests, and justify catalog additions before creating new skill directories.

## Phase — required
none

## Inputs — required
Target file path matching `skills/**` (.claude/rules/skills-contributing.md:4); pre-flight checks against `CONTRIBUTING.md` (.claude/rules/skills-contributing.md:11), open pull requests via `gh pr list --state open` (.claude/rules/skills-contributing.md:11), and skill anatomy rules in `docs/skill-anatomy.md` (.claude/rules/skills-contributing.md:13).

## Outputs — required
none

## Invokes — required
- doc CONTRIBUTING.md — .claude/rules/skills-contributing.md:11
- doc docs/skill-anatomy.md — .claude/rules/skills-contributing.md:13

## Invoked by — required
none

## Concepts named — required, verbatim
- `Anti-duplication guardrail` — .claude/rules/skills-contributing.md:2 — defined here
- `pre-flight checks` — .claude/rules/skills-contributing.md:11 — used here
- `SKILL.md` — .claude/rules/skills-contributing.md:13 — used here

## Structure
- `# Adding or changing a skill` — .claude/rules/skills-contributing.md:7

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Employs Claude Code's path-scoped rule convention (`.claude/rules/*.md` with YAML frontmatter `paths: ["skills/**"]`) to automatically trigger guardrails only when relevant files are modified.

## Context cost
988 bytes, ~250 tokens.
