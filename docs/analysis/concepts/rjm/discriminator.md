---
package: rjm
name: Discriminator
slug: discriminator
kind: gate
package_phase: rjm:build
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/validation/check_agent_skill_discriminator.py, sha256: fb835dbd3148f58de0a6befdf83d9365975869f178def8624ab3e2b1832db6ce}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Discriminator

## Definition — verbatim
> "Discriminator (locked by the #2003 audit; canonical source:" — scripts/validation/check_agent_skill_discriminator.py:8

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_agent_skill_discriminator.py | 8 | defined here | Multi-criteria classification rubric gating agent creation against accumulating skill-shape debt. |

## Consumes
Agent markdown definitions and slash command invocation references.

## Produces
Scoring breakdown and gate verdict determining whether an agent must be implemented as a skill.

## When applied
Evaluated during CI and pre-PR checks whenever new or modified agent definitions are submitted.

## Sub-concepts
the-3-pipeline-rule
c2-threshold
pipeline-rule-limit

## Part of
none

## Implementation status
defects: missing-path, other

## Design notes
The Discriminator provides a mechanical classification gate that evaluates agents on invocation pattern, structured content density, and sibling pipelines to prevent creating agents where skills are appropriate.
