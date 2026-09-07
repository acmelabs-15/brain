---
package: rjm
name: taste invariants
slug: taste-invariants
kind: checklist
package_phase: rjm:build
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/taste-lints/SKILL.md, sha256: 0c46db6851ed918ce5e85c751df8a8154e4e15eb2e4b345d1e42c94ead1c9296}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# taste invariants

## Definition — verbatim
> "taste_lints.py full scan" — .claude/skills/taste-lints/SKILL.md:26

## Also called — verbatim
`Taste Invariants` — .claude/skills/taste-lints/SKILL.md:38

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/taste-lints/SKILL.md | 26 | defined here | Trigger phrase operation mapping a full taste invariants scan to `taste_lints.py`. |
| .claude/skills/taste-lints/SKILL.md | 38 | defined here | Section heading introducing the four foundational taste rules: file size limits, naming conventions, function complexity, and skill prompt size. |

## Consumes
Source files across python, yaml, powershell, and markdown in the repository.

## Produces
Validation verdicts confirming codebase compliance with repository design aesthetics and structural limits.

## When applied
Applied during code authoring, PR preparation, and code review to maintain consistency and readability.

## Sub-concepts
file-size-limits, function-complexity, skill-prompt-size

## Part of
none

## Implementation status
defects: other, doc-drift

## Design notes
The core set of repository design and aesthetic rules in rjm enforcing modularity, cohesion, and naming uniformity to optimize code comprehension for autonomous agents.
