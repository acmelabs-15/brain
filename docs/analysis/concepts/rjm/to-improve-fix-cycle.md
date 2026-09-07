---
package: rjm
name: To Improve fix cycle
slug: to-improve-fix-cycle
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/software-engineering-library/references/working-with-legacy-code.md, sha256: c60a6eb46d697b79a4517c521499b3db023b8198e336e3fc74fd340d85aa8467}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# To Improve fix cycle

## Definition — verbatim
(used, not defined)

> "The change is part of a To Improve fix cycle. A previous worker (junior or medior, in the auto-escalation ladder) attempted this change and the attempt failed or regressed. The escalated worker MUST add tests around the surface area before reproducing or extending the prior attempt." — .claude/skills/software-engineering-library/references/working-with-legacy-code.md:14

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/software-engineering-library/references/working-with-legacy-code.md | 14 | used here | Describes a remediation fix cycle where an earlier worker attempt failed, requiring escalated workers to establish characterization tests first. |

## Consumes
Failed task attempts, regression reports, and prior worker execution history.

## Produces
Mandatory characterization test coverage around failed surfaces prior to re-attempting code fixes.

## When applied
Triggered when an issue is escalated after a previous automated worker failed or caused a regression.

## Sub-concepts
none

## Part of
auto-escalation-ladder

## Implementation status
clean

## Design notes
A remediation cycle in rjm governing tasks escalated after a previous worker failed or caused a regression. To prevent compounding errors, the escalated worker must first pin down existing behavior with characterization tests before making code changes.
