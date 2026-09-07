---
package: rjm
name: Complexity
slug: complexity
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/software-engineering-library/references/philosophy-of-software-design.md, sha256: befb74458d7e26f163b688221fa3249bfeffe385a0ff863c0f970e17bc23b500}
  - {path: .claude/skills/taste-lints/SKILL.md, sha256: 0c46db6851ed918ce5e85c751df8a8154e4e15eb2e4b345d1e42c94ead1c9296}
  - {path: .claude/skills/taste-lints/scripts/taste_lints.py, sha256: 0291a0a69d6836830ca04174c8ddbfa2e15727b2775bdcace843df1e21162f80}
  - {path: scripts/validation/check_subprocess_encoding.py, sha256: 843f80d8eb5f5b0075c9f6e94c9fe2018b68c66d22889d0019d5c4c5d8b92c35}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Complexity

## Definition — verbatim
> "**Complexity**: anything that makes a system hard to understand or modify. It is what slows you down, not what looks ugly." — .claude/skills/software-engineering-library/references/philosophy-of-software-design.md:12

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/software-engineering-library/references/philosophy-of-software-design.md | 12 | defined here | Defined in core vocabulary as anything that makes a system hard to understand or modify. |
| .claude/skills/taste-lints/scripts/taste_lints.py | 34 | defined here | Defined as one of the active lint rules in ALL_RULES for AST-based cyclomatic complexity verification. |
| .claude/skills/taste-lints/SKILL.md | 125 | defined here | Listed as a valid taste lint rule identifier that can be checked or suppressed. |
| scripts/validation/check_subprocess_encoding.py | 3 | used here | Used in a taste-lint suppression comment for AST visitor branching complexity. |

## Consumes
Codebase syntax, function branches, interface definitions, and dependency structures.

## Produces
none

## When applied
Evaluated during module interface design, code reviews, and automated lint runs checking cyclomatic complexity thresholds.

## Sub-concepts
change-amplification, cognitive-load, unknown-unknowns

## Part of
none

## Implementation status
defects: doc-drift, other

## Design notes
A central concept in rjm measuring resistance to change and comprehension. It is identified conceptually through three symptoms (change amplification, cognitive load, unknown unknowns) and enforced statically by linter rules capping function cyclomatic complexity.
