---
package: rjm
name: Operating-model drift
slug: operating-model-drift
kind: gate
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

# Operating-model drift

## Definition — verbatim
> "- **Check 9e, Operating-model drift (Tier 5 only)**:" — .claude/commands/spec.md:135

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/commands/spec.md | 135 | defined here | Check 9e verifying that Tier 5 architectural specifications remain consistent with the organization's operating model. |

## Consumes
Tier 5 specification proposals and operating model context elicited from `work-operating-model`.

## Produces
Verification verdict confirming implementation proposals align with decision rights, communication pathways, and conflict resolution mechanisms.

## When applied
Evaluated at Step 9 of `/spec` exclusively on Tier 5 specifications.

## Sub-concepts
none

## Part of
spec

## Implementation status
defects: doc-drift

## Design notes
Operating-model drift is a specialized governance check for Tier 5 architectural specifications. It ensures that large-scale technical reorganizations do not inadvertently violate established organizational operating agreements, such as decision authorities, work intake pathways, or retrospection protocols, without explicit governance review.
