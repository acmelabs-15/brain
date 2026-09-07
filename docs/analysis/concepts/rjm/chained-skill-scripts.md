---
package: rjm
name: Chained-skill scripts
slug: chained-skill-scripts
kind: pattern
package_phase: rjm:review
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/review/SKILL.md, sha256: cf8e377d27c1ac99b60acb63a0c4bdda2eae139abc38dda591cc9314be5f5dac}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Chained-skill scripts

## Definition — verbatim
> "- **Chained-skill scripts** (local axes 2 and 3: `golden-principles/scripts/scan_principles.py`, `taste-lints/scripts/taste_lints.py`): these are sibling skills, not under this skill's `references/`, so `CLAUDE_SKILL_DIR` does not locate them. For each, try each candidate in order, use the first that exists:" — .claude/skills/review/SKILL.md:53

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/review/SKILL.md | 53 | defined here | Resolution rules for sibling skill scripts invoked by review. |

## Consumes
Sibling skill script paths (`scan_principles.py`, `taste_lints.py`) resolved via Claude Code layout or vendored plugin install roots.

## Produces
Execution of local AST analysis scripts with diff-scoped base branch arguments.

## When applied
Step 5 of the review process when evaluating local-only skill axes.

## Sub-concepts
local-only-skill-axes

## Part of
review

## Implementation status
defects: missing-path, doc-drift

## Design notes
Chained-skill scripts define the cross-skill discovery pattern allowing `/review` to invoke executable validation scripts from sibling skills across differing filesystem layouts. By specifying fallback resolution chains and gracefully handling absent scripts with UNKNOWN verdicts rather than crashing, rjm ensures robust portability across diverse agent execution environments.
