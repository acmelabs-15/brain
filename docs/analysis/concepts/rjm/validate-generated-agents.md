---
package: rjm
name: Validate Generated Agents
slug: validate-generated-agents
kind: gate
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .github/workflows/validate-generated-agents.yml, sha256: bfec11e4e278d7959a9341743431c53b8f4c68ee7d453a25390ec6e58777e6ca}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Validate Generated Agents

## Definition — verbatim
> "name: Validate Generated Agents" — .github/workflows/validate-generated-agents.yml:9

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .github/workflows/validate-generated-agents.yml | 9 | defined here | Workflow name for the CI quality gate ensuring generated agent files match shared templates. |

## Consumes
Committed agent files, platform configurations, and shared agent templates.

## Produces
CI pass/fail validation verdict verifying that generated agent files have not been edited directly.

## When applied
Triggered on push, pull request, and merge group events targeting the main branch.

## Sub-concepts
check-paths, validate-generated-files

## Part of
quality-gates

## Implementation status
defects: internal-contradiction

## Design notes
Validate Generated Agents is a CI verification gate in rjm enforcing template-to-agent fidelity by regenerating all platform agent variants and failing if committed files differ from their template sources.
