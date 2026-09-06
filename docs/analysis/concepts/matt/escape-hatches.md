---
package: matt
name: escape hatches
slug: escape-hatches
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .out-of-scope/mainstream-issue-trackers-only.md, sha256: b640f37fb4dd35b88eeddd1438bd637dc3f813facfc668074c9a71f82d38847f}
  - {path: .out-of-scope/question-limits.md, sha256: a4c7ab33523e8f88b75be6549f657cf086b86d77be48b87d48276311e368cc9d}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# escape hatches

## Definition — verbatim
> "The escape hatches for non-mainstream trackers already exist:" — .out-of-scope/mainstream-issue-trackers-only.md:16

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .out-of-scope/mainstream-issue-trackers-only.md | 16 | defined here | Introduces local markdown and custom tracking as mechanisms avoiding tool-specific core skill modifications. |
| .out-of-scope/question-limits.md | 9 | defined here | Points to natural-language user steering and session termination as fallbacks instead of numeric question limits. |

## Consumes
User need to bypass default constraints or integrate non-standard tools.

## Produces
Unblocked workflow execution via manual intervention, natural-language steering, or alternative configuration.

## When applied
When standard skill behaviors, integrations, or session lengths do not fit the user's specific context or toolchain.

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
Escape hatches provide deliberate bypass mechanisms in the skills architecture, allowing users to handle edge cases or unsupported tooling via natural-language steering or lightweight conventions without expanding skill maintenance surface.
