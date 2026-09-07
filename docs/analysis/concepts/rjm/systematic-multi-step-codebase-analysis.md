---
package: rjm
name: Systematic multi-step codebase analysis
slug: systematic-multi-step-codebase-analysis
kind: technique
package_phase: rjm:analyze
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/analyze/SKILL.md, sha256: a832f5ff2b626334f44a3dffc83b53525983976f8d47af52b90986f88a46e7a2}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Systematic multi-step codebase analysis

## Definition — verbatim
> "description: Systematic multi-step codebase analysis producing prioritized findings with file-line evidence." — .claude/skills/analyze/SKILL.md:4

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/analyze/SKILL.md | 4 | defined here | Skill description declaring the core multi-step analytical methodology. |

## Consumes
Codebase repositories, problem prompts, and multi-file code questions.

## Produces
Prioritized findings backed by verbatim file:line citations and structured remediation plans.

## When applied
Triggered on user requests to analyze a codebase, review architecture, or assess system quality across multiple files.

## Sub-concepts
guided-exploration, investigation-plan, action-plan

## Part of
analyze

## Implementation status
defects: missing-path, doc-drift

## Design notes
`Systematic multi-step codebase analysis` defines `rjm`'s disciplined alternative to ad-hoc, unstructured code skimming. By breaking investigation into explicit phases (exploration, focus selection, planning, deep analysis, verification, synthesis), it prevents context flooding and guarantees reproducible, evidenced findings.
