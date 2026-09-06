---
package: addy
name: general-purpose
slug: general-purpose
kind: role
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: references/orchestration-patterns.md, sha256: 61e543d86f19f86b83074f8c1c769455c7085a2c72dd47b1da21a8c63785be4a}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# general-purpose

## Definition — verbatim
> "Multi-step tasks needing both exploration and modification." — references/orchestration-patterns.md:158

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| references/orchestration-patterns.md | 158 | used here | Cataloged built-in subagent role for multi-step tasks requiring both exploration and code modification |

## Consumes
Complex tasks requiring read, analysis, and file modification tools

## Produces
Completed multi-step modifications and execution reports

## When applied
When subagent tasks require both searching and writing code, rather than read-only analysis

## Sub-concepts
none

## Part of
orchestration-patterns

## Implementation status
clean

## Design notes
general-purpose represents the built-in Claude Code subagent equipped with full exploration and editing capabilities. In addy's architecture, developers are advised to recognize and leverage this built-in capability for complex multi-step execution tasks rather than reinventing ad hoc generalist subagents, layering custom domain personas on top when specific specialist guidance is required.
