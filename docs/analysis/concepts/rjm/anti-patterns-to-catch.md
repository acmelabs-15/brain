---
package: rjm
name: Anti-Patterns to Catch
slug: anti-patterns-to-catch
kind: checklist
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-08 quote-check+coverage
memo_inputs:
  - {path: templates/agents/critic.shared.md, sha256: 94cb41e3be663986453b13a24ae2df6f2036eeae38c7a07ef94499b76c457419}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Anti-Patterns to Catch

## Definition — verbatim
(used, not defined)

> "## Anti-Patterns to Catch" — templates/agents/critic.shared.md:211

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| templates/agents/critic.shared.md | 211 | defines | Section heading and diagnostic table cataloging common planning smells and required critique responses. |

## Consumes
Draft plan proposals, timeline estimates, dependency lists, reliability assertions, and rollback strategies.

## Produces
Adversarial critique findings flagging vague milestones, unverified dependencies, single points of failure, or unmeasured metrics.

## When applied
Consulted by the critic agent during plan evaluation to detect and flag structural planning omissions.

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
A quality assurance checklist used during plan critique to detect common flaws such as TBD acceptance criteria, missing rollbacks, and unquantified metrics.
