---
package: matt
name: cross-skill invocation
slug: cross-skill-invocation
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .changeset/skill-tool-invocation-terminology.md, sha256: 3fb3ccf597c7975987c671483f337a9e4d2804bf595e4bec0d854fbaffc6c8c1}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# cross-skill invocation

## Definition — verbatim
> "Standardize cross-skill invocation on an explicit" — .changeset/skill-tool-invocation-terminology.md:5

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .changeset/skill-tool-invocation-terminology.md | 5 | defined here | Introduces standardized 'Call the Skill tool' terminology for cross-skill invocation across 10 skills. |

## Consumes
A workflow step requiring capabilities from a separate model-invoked skill.

## Produces
An explicit instruction invoking the Skill tool with the target skill name.

## When applied
When a skill needs another model-invoked skill to execute as a sub-routine or prerequisite.

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
A composition pattern and calling convention where one skill invokes another by explicitly instructing the agent to call the harness Skill tool. This replaces bare slash-command mentions in prose, raising invocation reliability and ensuring harness-neutral interoperability.
