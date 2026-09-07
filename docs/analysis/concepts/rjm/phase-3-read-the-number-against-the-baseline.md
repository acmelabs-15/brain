---
package: rjm
name: Phase 3: Read the number against the baseline
slug: phase-3-read-the-number-against-the-baseline
kind: phase
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/ai-agents-diagnostics-toolkit/SKILL.md, sha256: e828ecf0ae117cb6cce4e44b70d490dee5da7418f2129f6801e9f6e9f9513d71}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Phase 3: Read the number against the baseline

## Definition — verbatim
> "### Phase 3: Read the number against the baseline" — .claude/skills/ai-agents-diagnostics-toolkit/SKILL.md:66

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/ai-agents-diagnostics-toolkit/SKILL.md | 66 | defined here | Defined as the third phase of diagnostics, comparing output numbers against documented baseline readings. |

## Consumes
Diagnostic output metrics and the baseline values recorded in `references/instrument-guides.md`.

## Produces
A delta evaluation assessing whether the change added new findings or increased budgets.

## When applied
Executed after obtaining output from a diagnostic instrument.

## Sub-concepts
none

## Part of
ai-agents-diagnostics-toolkit

## Implementation status
defects: unfailable-gate, other

## Design notes
The analytical interpretation phase of diagnostics. Rather than assuming main is completely green, it evaluates changes relative to current baseline measurements, ensuring PRs maintain a clean delta without introducing new violations.
