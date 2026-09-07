---
package: rjm
name: Rule of Three
slug: rule-of-three
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/golden-principles/references/design-dry-principle.md, sha256: 64a1c4d6a649c8223493fd2ee0bc7df70f1ce45dc32bdd08bb685df531359f0a}
  - {path: .claude/skills/software-engineering-library/references/refactoring.md, sha256: 4df115ec2bd76ec116af2e77c07f38a6c1a8ad6fc837386afdeb85276858f6fc}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Rule of Three

## Definition — verbatim
> "- **Rule of Three**: you are about to write the third near-duplicate of the same logic. Two duplicates is a coincidence; three is structure asking to emerge." — .claude/skills/software-engineering-library/references/refactoring.md:35

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/golden-principles/references/design-dry-principle.md | 64 | defined here | Cited as a rule against premature abstraction, advising waiting until a pattern is observed three times. |
| .claude/skills/software-engineering-library/references/refactoring.md | 35 | defined here | Formulated as a concrete refactoring trigger where writing a third near-duplicate indicates emerging structure. |

## Consumes
First and second occurrences of similar implementation logic, code duplication metrics, and refactoring candidates.

## Produces
Timely refactoring actions, substantiated architectural abstractions, and avoidance of premature generalizations.

## When applied
Applied before extracting shared functions or classes; engineers tolerate two instances and only introduce an abstraction upon encountering the third instance.

## Sub-concepts
none

## Part of
dry-principle, when-not-to-dry

## Implementation status
defects: missing-path, internal-contradiction

## Design notes
The Rule of Three is rjm's empirical timing guideline for code abstraction. Abstracting on the first duplicate often misjudges the true generalization parameters, creating rigid abstractions that distort subsequent requirements. Waiting until three concrete variations exist provides sufficient evidence to extract an abstraction that accurately reflects real domain variance.
