---
package: rjm
path: .claude/skills/decision-critic/references/mental-models-chestertons-fence.md
type: reference
bytes: 1838
unit: inv-rjm-114
in_scope_via: .claude/skills/decision-critic/SKILL.md
aliases: []
memo_inputs:
  - {path: .claude/skills/decision-critic/references/mental-models-chestertons-fence.md, sha256: a25fbfb672bb5b888f219603a67db7738b430faa60074acaaf91535c0370a0c6}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/skills/decision-critic/references/mental-models-chestertons-fence.md

## Purpose — required, verbatim
> "Before removing or changing something, first understand why it exists." — .claude/skills/decision-critic/references/mental-models-chestertons-fence.md:11

## Design intent — required
Protects against unintended regressions and the destruction of tacit system knowledge during deprecation, refactoring, or deletion decisions. Proposers often label existing code as "legacy" or "needless complexity" without discovering the constraints, bugs, or edge cases that originally created it. This reference requires documenting the original purpose and active constraints before permitting removal or replacement.

## Phase — required
cross-phase

## Inputs — required
none

## Outputs — required
none

## Invokes — required
none

## Invoked by — required
- skill decision-critic — .claude/skills/decision-critic/SKILL.md:98
- skill decision-critic — src/copilot-cli/skills/decision-critic/SKILL.md:98

## Concepts named — required, verbatim
- `Chesterton's Fence` — .claude/skills/decision-critic/references/mental-models-chestertons-fence.md:7 — defined here
- `Decomposition` — .claude/skills/decision-critic/references/mental-models-chestertons-fence.md:17 — used here
- `Second System Effect` — .claude/skills/decision-critic/references/mental-models-chestertons-fence.md:35 — used here
- `Inversion Analysis` — .claude/skills/decision-critic/references/mental-models-chestertons-fence.md:37 — used here
- `VERIFIED` — .claude/skills/decision-critic/references/mental-models-chestertons-fence.md:46 — used here
- `Gall's Law` — .claude/skills/decision-critic/references/mental-models-chestertons-fence.md:55 — used here
- `Strangler Fig Pattern` — .claude/skills/decision-critic/references/mental-models-chestertons-fence.md:56 — used here
- `Hyrum's Law` — .claude/skills/decision-critic/references/mental-models-chestertons-fence.md:57 — used here

## Structure
- `# Chesterton's Fence` — .claude/skills/decision-critic/references/mental-models-chestertons-fence.md:7
- `## Principle` — .claude/skills/decision-critic/references/mental-models-chestertons-fence.md:9
- `## Decision Critic Application` — .claude/skills/decision-critic/references/mental-models-chestertons-fence.md:15
- `### Verification Questions` — .claude/skills/decision-critic/references/mental-models-chestertons-fence.md:19
- `### Red Flags in Decisions` — .claude/skills/decision-critic/references/mental-models-chestertons-fence.md:28
- `### Failure Modes (for Inversion Analysis)` — .claude/skills/decision-critic/references/mental-models-chestertons-fence.md:37
- `## Practical Checklist` — .claude/skills/decision-critic/references/mental-models-chestertons-fence.md:44
- `## Related Models` — .claude/skills/decision-critic/references/mental-models-chestertons-fence.md:53

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- `missing-path` · .claude/skills/decision-critic/references/mental-models-chestertons-fence.md:2 · Frontmatter source `wiki/concepts/Mental Models/Chestertons Fence.md` does not exist in the repository (`wiki/` directory is absent).

## Observations
- Identifies common red flags signaling lack of historical context: "This is legacy, remove it", "Nobody knows why this exists", "We don't need this anymore", and "Let's start fresh" (lines 32-35).
- Cites G.K. Chesterton's foundational aphorism: "Don't ever take a fence down until you know the reason it was put up." (line 13).

## Context cost
1838 bytes (~460 tokens). Invokes nothing additional.
