---
package: rjm
name: Complicated to Clear
slug: complicated-to-clear
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

# Complicated to Clear

## Definition — verbatim
> "### Complicated to Clear" — .claude/skills/cynefin-classifier/references/domain-transitions.md:35

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/cynefin-classifier/references/domain-transitions.md | 35 | defined here | Clockwise transition when expert knowledge is codified into runbooks, automation, and standard procedures. |

## Consumes
Validated expert knowledge, established good practices, and proven diagnostic workflows.

## Produces
Documented runbooks, automated scripts, checklists, and procedures executable by junior engineers.

## When applied
Triggered by the milestone signal "We've created a runbook for this."

## Sub-concepts
none

## Part of
clockwise

## Implementation status
clean

## Design notes
`Complicated to Clear` represents the final step of natural evolution where expert knowledge is distilled into deterministic automation and standard procedures, freeing expensive expert attention for new complicated and complex challenges.
