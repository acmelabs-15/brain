---
package: rjm
name: Skill Deprecation Process
slug: skill-deprecation-process
kind: pattern
package_phase: cross-phase
implementation_in_scope: false
deprecated: false
memo_inputs:
  - {path: .agents/archive/planning/PRD-skills-index-registry.md, sha256: 8c7296bd5c209f7cfbe45d6c293c42e9f69f47807850313b34affcec7b5fb1b9}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Skill Deprecation Process

## Definition — verbatim
> "When deprecating a skill, agents MUST:" — .agents/archive/planning/PRD-skills-index-registry.md:192

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/archive/planning/PRD-skills-index-registry.md | 190 | defined here | Specified as functional requirement FR-8 detailing the 4-step protocol for deprecating obsolete skills. |

## Consumes
Superseded or obsolete skill files and replacement skill references.

## Produces
Updated registry entries marking the skill Deprecated, additions to the Deprecated Skills table, and redirected cross-references.

## When applied
Applied whenever a skill is superseded by a newer pattern or rendered obsolete by architectural changes.

## Sub-concepts
none

## Part of
skill-lifecycle-governance

## Implementation status
defects: missing-path, internal-contradiction

## Design notes
The procedural workflow in rjm ensuring that obsolete skills are gracefully retired rather than abruptly deleted. It updates the index status to Deprecated, logs the rationale and replacement in the deprecated table, and updates existing cross-references.
