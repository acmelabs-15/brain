---
package: rjm
name: GitHub skills
slug: github-skills
kind: name-only
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/detect_skill_violation.py, sha256: afe11d459bd7604bb9ef80647f0efd016f7e19ac492cf6690322d1b21b457cf7}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# GitHub skills

## Definition — verbatim
(used, not defined)

> "Detect raw gh command usage when GitHub skills exist." — scripts/detect_skill_violation.py:2

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/detect_skill_violation.py | 2 | used here | Named in module docstring as the preferred skill scripts under .claude/skills/github/ to use instead of raw gh commands. |

## Consumes
none

## Produces
none

## When applied
none

## Sub-concepts
none

## Part of
none

## Implementation status
defects: missing-path

## Design notes
GitHub skills refers to the tooling suite located under .claude/skills/github/ for GitHub operations rather than an SDLC lifecycle concept.
