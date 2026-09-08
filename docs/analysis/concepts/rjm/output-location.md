---
package: rjm
name: Output Location
slug: output-location
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
verified: 2026-09-08 quote-check+coverage
memo_inputs:
  - {path: templates/agents/architect.shared.md, sha256: cc34d58497548aa34e8f5d926ac342c35bdccf70cc8a61e9d120d02b7c6900ff}
  - {path: templates/agents/qa.shared.md, sha256: 7dbd4253b250290b87341f59885ccb93c7f5813272a96b955db391c9b035c941}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Output Location

## Definition — verbatim
(used, not defined)

> "## Output Location" — templates/agents/architect.shared.md:721

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| templates/agents/architect.shared.md | 721 | defines | Section heading prescribing `.agents/architecture/` as the storage directory for ADRs and design reviews. |
| templates/agents/qa.shared.md | 721 | defines | Section heading prescribing `.agents/qa/` as the storage directory for test strategies and test reports. |

## Consumes
none

## Produces
none

## When applied
none

## Sub-concepts
none

## Part of
none

## Implementation status
defects: missing-path

## Design notes
A markdown section heading in agent shared templates designating artifact output paths rather than an operational lifecycle concept.
