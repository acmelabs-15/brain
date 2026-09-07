---
package: rjm
name: Pit of Success
slug: pit-of-success
kind: pattern
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-042-python-migration-strategy.md, sha256: cfab3df343cee127a80f7dc1fb5e9cedc7052c9abe8e684d5f1f9693c0a45e2d}
  - {path: .claude/skills/planner/references/design-pit-of-success.md, sha256: c4ff5d944193baea5ecd7c5d5cd000c773ccf709f300a953e8ea17ab634a2064}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Pit of Success

## Definition — verbatim
> "We want our customers to simply fall into winning practices by using our platform and frameworks." — .claude/skills/planner/references/design-pit-of-success.md:9

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-042-python-migration-strategy.md | 212 | used here | Cited as the design principle requiring that npm consumers not be burdened with Python prerequisites. |
| .claude/skills/planner/references/design-pit-of-success.md | 7 | defined here | Reference document defining the guiding software design philosophy of making right practices the easiest path. |

## Consumes
Platform design choices, user journey expectations, and friction analysis.

## Produces
System architecture and tooling interfaces that naturally steer users into correct behaviors.

## When applied
Applied when designing developer workflows, agent toolchains, and distribution boundaries.

## Sub-concepts
none

## Part of
none

## Implementation status
defects: missing-path

## Design notes
Pit of Success is a guiding architectural philosophy emphasizing that platforms and agent frameworks should guide developers and autonomous agents into correct practices by default without requiring exceptional effort or complex configuration.
