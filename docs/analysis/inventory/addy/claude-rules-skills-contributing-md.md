---
package: addy
path: .claude/rules/skills-contributing.md
type: doc
bytes: 988
unit: inv-addy-2
aliases: []
verified: 2026-09-04 quote-check+coverage
memo_inputs:
  - {path: .claude/rules/skills-contributing.md, sha256: 6f8ff659388c3b957322ac46f788ff16d996e5c751f71a6c1e59e4761c437bbd}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
---

# .claude/rules/skills-contributing.md

## Purpose — required, verbatim
> "Anti-duplication guardrail for adding or changing skills" — .claude/rules/skills-contributing.md:2

## Design intent — required
Prevents redundant skill creation and repository fragmentation by establishing automated pre-flight contribution checks when editing skills, steering contributors toward improving existing skills rather than introducing duplicates.

## Phase — required
none

## Inputs — required
Proposed changes within `skills/**`, existing skills catalog, open pull requests inspected via `gh pr list --state open` (.claude/rules/skills-contributing.md:11), and guidelines defined in `CONTRIBUTING.md` and `docs/skill-anatomy.md`.

## Outputs — required
none

## Invokes — required
- doc CONTRIBUTING.md — .claude/rules/skills-contributing.md:11
- doc docs/skill-anatomy.md — .claude/rules/skills-contributing.md:13

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `development lifecycle` — .claude/rules/skills-contributing.md:9 — used here
- `pre-flight checks` — .claude/rules/skills-contributing.md:11 — used here
- `SKILL.md` — .claude/rules/skills-contributing.md:13 — used here
- `single source of truth` — .claude/rules/skills-contributing.md:15 — used here

## Structure
- "Adding or changing a skill" — .claude/rules/skills-contributing.md:7

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Configured via Claude Code rule frontmatter with path glob `skills/**` to automatically apply whenever files in the skills directory are accessed or edited.

## Context cost
988 bytes, ~250 tokens.
