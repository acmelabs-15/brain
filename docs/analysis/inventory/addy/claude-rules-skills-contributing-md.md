---
package: addy
path: .claude/rules/skills-contributing.md
type: doc
bytes: 988
unit: inv-addy-2
aliases: []
memo_inputs:
  - {path: .claude/rules/skills-contributing.md, sha256: 6f8ff659388c3b957322ac46f788ff16d996e5c751f71a6c1e59e4761c437bbd}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# .claude/rules/skills-contributing.md

## Purpose — required, verbatim
> "Anti-duplication guardrail for adding or changing skills" — .claude/rules/skills-contributing.md:2

## Design intent — required
Enforces an anti-duplication guardrail for contributors creating or modifying skills within `skills/**`. It directs developers and coding agents to check the existing skill catalog and open GitHub PRs before proposing a new skill, strongly favoring extending existing skills over creating near-duplicates. It anchors `CONTRIBUTING.md` as the authoritative source of truth for the contribution workflow and mandates adhering to `docs/skill-anatomy.md`.

## Phase — required
cross-phase

## Inputs — required
- Glob path rule targeting `"skills/**"` — .claude/rules/skills-contributing.md:4
- Contribution workflow guidance in `CONTRIBUTING.md` — .claude/rules/skills-contributing.md:11, 15
- Open pull requests via GitHub CLI (`gh pr list --state open`) — .claude/rules/skills-contributing.md:11
- Skill structure guide `docs/skill-anatomy.md` — .claude/rules/skills-contributing.md:13

## Outputs — required
none

## Invokes — required
- doc CONTRIBUTING.md — .claude/rules/skills-contributing.md:11, 15
- doc docs/skill-anatomy.md — .claude/rules/skills-contributing.md:13

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `Anti-duplication guardrail` — .claude/rules/skills-contributing.md:2 — defined here
- `pre-flight checks` — .claude/rules/skills-contributing.md:11 — used here
- `docs/skill-anatomy.md` — .claude/rules/skills-contributing.md:13 — used here
- `CONTRIBUTING.md` — .claude/rules/skills-contributing.md:11, 15 — used here

## Structure
- `# Adding or changing a skill` — .claude/rules/skills-contributing.md:7

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Serves as a Claude Code path-scoped rule (`.claude/rules/`) configured with YAML frontmatter specifying `paths: ["skills/**"]`. It prevents fragmentation and duplication across the repository's 24 skill modules by requiring gap justification before creating any new skill directory.

## Context cost
988 bytes (~250 tokens). If linked documentation is traversed: `CONTRIBUTING.md` (6,326 bytes) and `docs/skill-anatomy.md` (3,445 bytes).
