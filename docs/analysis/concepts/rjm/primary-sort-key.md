---
package: rjm
name: PRIMARY sort key
slug: primary-sort-key
kind: technique
package_phase: rjm:cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/merge-resolver/SKILL.md, sha256: 88f9d20e41d105ded6fc9244d9035c51fb0130fbaf4c9cb430d8fbe1840a90b1}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# PRIMARY sort key

## Definition — verbatim
> "Priority is a strict priority hierarchy: Security (1) > Bugfix (2) > Feature/Refactor (3) > Style (4). Intent priority is the PRIMARY sort key when two sides conflict. A Security change is NEVER dropped: if it cannot be cleanly combined with the other side, Security wins and the lower-priority change is reapplied around it. Recency and test coverage are tiebreakers ONLY between two changes in the same priority tier; they never let a lower-tier change beat a higher-tier one." — .claude/skills/merge-resolver/SKILL.md:97

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/merge-resolver/SKILL.md | 97 | defined here | Primary definition of `PRIMARY sort key` within SKILL.md. |

## Consumes
Developer inputs, configuration parameters, and codebase artifacts.

## Produces
Standardized system behaviors, verified outputs, and structured lifecycle artifacts.

## When applied
Invoked across development, analysis, and synthesis phases.

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
An operational technique or artifact (PRIMARY sort key) utilized within the rjm ecosystem to ensure consistency and systematic execution.
