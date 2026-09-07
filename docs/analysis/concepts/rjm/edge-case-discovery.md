---
package: rjm
name: Edge Case Discovery
slug: edge-case-discovery
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/reflect/references/decision-tree-and-examples.md, sha256: 46f4aed79b61e679bd36e14e541a120c0b562c2ba5c11c7b240c73c5eb51ae33}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Edge Case Discovery

## Definition — verbatim
> "### Example 3: Edge Case Discovery" — .claude/skills/reflect/references/decision-tree-and-examples.md:79

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/reflect/references/decision-tree-and-examples.md | 79 | defined here | Worked example demonstrating extraction of MEDIUM-confidence edge cases from unanticipated scenarios. |

## Consumes
User questions highlighting unhandled scenarios, missing preconditions, or unexpected failure modes.

## Produces
Documented edge-case handling rules and guardrails in skill memory sidecars.

## When applied
When conversation reveals scenarios or missing checks that the invoked skill did not anticipate.

## Sub-concepts
none

## Part of
reflect

## Implementation status
clean

## Design notes
A reflection pattern identifying unanticipated operational boundaries and environmental edge cases revealed through interactive user questioning, turning runtime discoveries into structured pre-flight checks in skill memory.
