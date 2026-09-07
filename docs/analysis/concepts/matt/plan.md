---
package: matt
name: plan
slug: plan
kind: artifact
package_phase: matt:engineering
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: external/implement.md, sha256: 2638a9f77278fd77acb55f67e7c04f1350e00d9cd7d4155657cd774e9bac4e26}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# plan

## Definition — verbatim
(used, not defined)

> "or the plan you just agreed in the conversation" — external/implement.md:25

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| external/implement.md | 25 | used here | Listed alongside tickets and specs as a valid settled input for /implement. |

## Consumes
A settled agreement, task breakdown, or architectural consensus reached during an interactive session.

## Produces
Sequential implementation steps executed by /implement.

## When applied
Passed into /implement as the settled target work to build.

## Sub-concepts
none

## Part of
implement

## Implementation status
defects: orphan, doc-drift, cross-file-contradiction, other

## Design notes
In Matt's engineering workflow, a plan is an agreed outline of changes that serves as an input to /implement. The skill treats the plan as immutable during implementation—it never reopens or second-guesses the plan, turning settled items directly into code commits.
