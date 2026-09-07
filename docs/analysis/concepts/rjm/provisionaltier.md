---
package: rjm
name: ProvisionalTier
slug: provisionaltier
kind: technique
package_phase: rjm:spec
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/commands/spec.md, sha256: f7da01531eeb6c779e39894ebbf99c076b122fed686f185c99b0306abf65f350}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# ProvisionalTier

## Definition — verbatim
> "#### Step 0.5 ProvisionalTier (auto-classified, no user prompt)" — .claude/commands/spec.md:41

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/commands/spec.md | 41 | defined here | Step 0.5 automated calculation (`max(hours_tier, entity_tier)`) determining knowledge-graph exploration depth. |

## Consumes
Step 0 intake answers estimating engineering hours and identifying affected system entities.

## Produces
An initial complexity tier rating (1 through 5) used to parameterize automated graph traversal.

## When applied
Calculated automatically at Step 0.5 of `/spec` without prompting the user.

## Sub-concepts
none

## Part of
spec

## Implementation status
defects: doc-drift

## Design notes
ProvisionalTier provides an automated, non-interactive complexity classification early in the `/spec` process. By taking the maximum of estimated engineering duration and the number of affected entities, it gates the depth of knowledge graph traversal (shallow, medium, or deep) to prevent excessive token expenditure on simple changes while ensuring complex projects receive comprehensive context exploration.
