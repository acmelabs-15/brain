---
package: rjm
name: Docs-only
slug: docs-only
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

# Docs-only

## Definition — verbatim
> "| Docs-only | Markdown prose only; no code, no generated trees | QA evidence row `SKIPPED: docs-only` (case-insensitive; ADR-034 cites it as the pre-existing pattern) |" — .claude/skills/ai-agents-change-control/SKILL.md:32

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/ai-agents-change-control/SKILL.md | 32 | defined here | Classification table row defining Markdown prose changes and establishing the QA evidence exemption pattern. |

## Consumes
PR diffs touching strictly Markdown prose documentation.

## Produces
QA evidence record SKIPPED: docs-only exempting the PR from running full test suites.

## When applied
Selected during change control classification when PR changes are restricted to prose docs.

## Sub-concepts
none

## Part of
change-control

## Implementation status
clean

## Design notes
Docs-only is a change control classification tier that safely streamlines review and merge workflows for prose-only updates by exempting them from full QA test execution.
