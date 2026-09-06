---
package: addy
name: anti-rationalization guards
slug: anti-rationalization-guards
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: docs/comparison.md, sha256: 652e4df31f4bc1e1d456db768ee15c6cc5fdd6dee754d9dfccffe5ce1eac7194}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# anti-rationalization guards

## Definition — verbatim
> "**agent-skills** organizes the *whole product lifecycle* (Define, Plan, Build, Verify, Review, Ship) with review personas, anti-rationalization guards, and an in-repo eval framework that checks the skills actually route and behave." — docs/comparison.md:11

## Also called — verbatim
> "Anti-rationalization tables" — docs/comparison.md:24

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/comparison.md | 11 | defines | Distinguishing architectural mechanism in agent-skills preventing models from rationalizing shortcuts |

## Consumes
Common excuses, shortcut inclinations, and rationalizations exhibited by LLMs.

## Produces
Explicit negative constraints and mandatory procedural checks that models cannot bypass.

## When applied
Embedded in every skill workflow to guard critical quality gates and review steps.

## Sub-concepts
anti-rationalization-tables

## Part of
agent-skills

## Implementation status
clean

## Design notes
Anti-rationalization guards explicitly enumerate common cognitive excuses coding agents use to skip tests or reviews, proactively dismantling these rationalizations before the agent can act on them.
