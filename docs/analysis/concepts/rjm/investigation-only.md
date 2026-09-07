---
package: rjm
name: Investigation-only
slug: investigation-only
kind: gate
package_phase: rjm:cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/ai-agents-change-control/SKILL.md, sha256: f8f0c4123832af7d146b3fd9b057b5886f1eb103bbaa48514c118bf478b9bcb2}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Investigation-only

## Definition — verbatim
> "| Investigation-only | Nothing outside the ADR-034 allowlist (below) | QA evidence row `SKIPPED: investigation-only` |" — .claude/skills/ai-agents-change-control/SKILL.md:33

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/ai-agents-change-control/SKILL.md | 33 | defined here | Classification table row defining investigation sessions constrained to the ADR-034 allowlist. |

## Consumes
PR diffs strictly matching the patterns defined in scripts/modules/investigation_allowlist.py.

## Produces
QA evidence record SKIPPED: investigation-only allowing fast-track merge for research sessions.

## When applied
Selected when PR files consist entirely of recognized investigation artifacts and session logs.

## Sub-concepts
investigation-only-allowlist

## Part of
change-control

## Implementation status
clean

## Design notes
Investigation-only is an ADR-034 change classification tier enabling exploratory research and debugging sessions to be merged without executing heavy test suites, bounded by an automated allowlist.
