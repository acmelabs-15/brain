---
package: addy
name: Browser/runtime compatibility
slug: browser-runtime-compatibility
kind: reference
package_phase: addy:Build
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: skills/source-driven-development/SKILL.md, sha256: 719d4e54083c90ded62112fb41df3dbc4619309118ee0e6aa4d846f92d8204af}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# Browser/runtime compatibility

## Definition — verbatim
> "| 4 | Browser/runtime compatibility | caniuse.com, node.green |" — skills/source-driven-development/SKILL.md:74

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/source-driven-development/SKILL.md | 74 | defined here | Priority 4 documentation source in the source hierarchy for platform support matrices. |

## Consumes
Target browser baselines and runtime engine versions from project requirements.

## Produces
Compatibility matrices and runtime feature support data.

## When applied
When evaluating whether modern platform features are sufficiently supported across target environments.

## Sub-concepts
none

## Part of
source-hierarchy

## Implementation status
defects: orphan, missing-path, doc-drift

## Design notes
Priority-four documentation tier (caniuse.com, node.green) verifying that platform APIs work across target browser and runtime versions before adoption in implementation code.
