---
package: matt
name: review agent
slug: review-agent
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

# review agent

## Definition — verbatim
> "The review agent has the least context pressure - it receives a diff, so no exploration needed. It often does not need to write code or debug." — skills/in-progress/retro/SKILL.md:33

## Also called — verbatim
`reviewer agent` — skills/in-progress/retro/SKILL.md:19

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/in-progress/retro/SKILL.md | 33 | defined here | Identifies the low-context-pressure role dedicated to reviewing diffs and enforcing repository coding standards. |

## Consumes
Implementation diffs and `CODING_STANDARDS.md`.

## Produces
Review verdicts, standards enforcement feedback, and defect identification.

## When applied
> "This means that the review agent should be responsible for imposing coding standards, not the implementation agent." — skills/in-progress/retro/SKILL.md:35

## Sub-concepts
none

## Part of
retro

## Implementation status
clean

## Design notes
A specialized evaluation role that operates on code diffs rather than full repository context. Because it does not explore or write code, it operates under minimal context pressure and can reliably enforce comprehensive coding standards that would otherwise overwhelm an implementation agent.
