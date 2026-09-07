---
package: rjm
name: Rule Audit Procedure
slug: rule-audit-procedure
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/context-optimizer/references/rule-audit-procedure.md, sha256: 410c727ad2802a3cd5dd5d32009daf60016a6b3eb02947b0bd0693d068007b4b}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Rule Audit Procedure

## Definition — verbatim
> "# Rule Audit Procedure" — .claude/skills/context-optimizer/references/rule-audit-procedure.md:1

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/context-optimizer/references/rule-audit-procedure.md | 1 | defined here | Contributor-facing reference procedure defining the 9-step empirical protocol (Steps 0-8) for auditing always-on rules. |

## Consumes
Proposed rule addition or modification, candidate scenario files, baseline model benchmarks, and token budgets.

## Produces
Pre-registered decision rule, deterministic baseline, behavioral baseline, delta proof, and audit verdicts.

## When applied
Run this when a new model ships, when a harness updates, or when someone proposes adding or cutting always-on content.

## Sub-concepts
pre-register-the-decision-rule, deterministic-baseline, conflict-audit, complementary-altitude, scope-graduation, behavioral-baseline, fail-judge-errors, prove-the-delta, known-instrument-gotchas, scenario-files, skip-rule-not-applicable

## Part of
context-optimizer

## Implementation status
clean

## Design notes
An empirical 9-step evaluation protocol (Steps 0a through 8) designed to replace subjective arguments about always-on prompt instructions with measurable evaluation criteria. It prevents context bloat and instruction interference by requiring pre-registration, baseline establishment, conflict auditing, and statistically significant delta proof before any prompt rule is admitted into persistent agent context.
