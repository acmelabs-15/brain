---
package: rjm
name: Clear to Complicated
slug: clear-to-complicated
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/cynefin-classifier/references/domain-transitions.md, sha256: 1823ee0f7fa344196f64b2288320ec3430976256773d7d559f0f12b61b845eec}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Clear to Complicated

## Definition — verbatim
> "### Clear to Complicated" — .claude/skills/cynefin-classifier/references/domain-transitions.md:51

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/cynefin-classifier/references/domain-transitions.md | 51 | defines | Disruptive transition when context changes invalidate existing best practices, requiring expert re-analysis. |

## Consumes
Failing automated pipelines, broken standard assumptions, or updated environmental dependencies.

## Produces
Re-engagement of domain experts and deep analysis of changing contextual requirements.

## When applied
Triggered by the diagnostic signal "The standard approach isn't working anymore."

## Sub-concepts
none

## Part of
counter-clockwise

## Implementation status
clean

## Design notes
`Clear to Complicated` occurs when standard automated procedures or runbooks begin failing due to subtle environmental shifts, requiring teams to step back from rote execution and engage experts to diagnose what assumptions broke.
