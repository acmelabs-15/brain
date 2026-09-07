---
package: matt
name: Coding standards
slug: coding-standards
kind: technique
package_phase: matt:in-progress
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

# Coding standards

## Definition — verbatim
> "- **Coding standards**: should the **reviewer agent** be given a new rule to enforce? Should an existing rule be removed or clarified? _Use when_ the reviewer agent failed to catch a mistake." — skills/in-progress/retro/SKILL.md:19

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/in-progress/retro/SKILL.md | 19 | defined here | Retrospective category evaluating whether reviewer agent rules need addition, removal, or clarification. |

## Consumes
Session logs of missed mistakes, pull request diffs, and existing rules in `CODING_STANDARDS.md`.

## Produces
New, updated, or clarified coding rules assigned to the reviewer agent.

## When applied
> "_Use when_ the reviewer agent failed to catch a mistake." — skills/in-progress/retro/SKILL.md:19

## Sub-concepts
reviewer-agent

## Part of
retro

## Implementation status
clean

## Design notes
A retrospective evaluation category that refines repository coding standards based on observed failures during coding sessions. In Matt's architecture, coding standards are enforced exclusively by review agents on diffs to protect implementation agents from context overload. Retrospectives evaluate reviewer mistakes to determine whether conventions need to be added, clarified, or converted into automated checks.
