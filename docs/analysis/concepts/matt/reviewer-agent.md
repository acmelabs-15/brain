---
package: matt
name: reviewer agent
slug: reviewer-agent
kind: role
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: skills/in-progress/retro/SKILL.md, sha256: 264f3330f1e2382af89610ed048ba0ed6d08883eb69f596a8f1df3f1e1a4c6a1}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# reviewer agent

## Definition — verbatim
> "- **Coding standards**: should the **reviewer agent** be given a new rule to enforce? Should an existing rule be removed or clarified? _Use when_ the reviewer agent failed to catch a mistake." — skills/in-progress/retro/SKILL.md:19

## Also called — verbatim
`review agent` — skills/in-progress/retro/SKILL.md:33

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/in-progress/retro/SKILL.md | 19 | defined here | Evaluator role assigned coding standards whose performance is audited in retrospectives. |

## Consumes
Pull request diffs and repository coding standards from `CODING_STANDARDS.md`.

## Produces
Code review comments, approval or rejection verdicts, and convention enforcement.

## When applied
> "This means that the review agent should be responsible for imposing coding standards, not the implementation agent." — skills/in-progress/retro/SKILL.md:35

## Sub-concepts
none

## Part of
retro

## Implementation status
clean

## Design notes
An evaluation agent role tasked with inspecting code diffs and enforcing repository coding standards. Operating under low context pressure because it does not explore codebases or debug implementations, the reviewer agent serves as the primary enforcement gate for repository conventions. When reviewer agents fail to catch mistakes, retrospectives update and clarify coding rules.
