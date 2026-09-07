---
package: rjm
name: Data Stores
slug: data-stores
kind: artifact
package_phase: rjm:spec
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/threat-modeling/SKILL.md, sha256: a4ed722e2a09f53130a86c1f42db100ac87f504c85e0198e726a5c40cfdbbb62}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Data Stores

## Definition — verbatim
> "- **Data Stores**: Databases, files, caches (where data persists)" — .claude/skills/threat-modeling/SKILL.md:128

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/threat-modeling/SKILL.md | 128 | defined here | Defined as required DFD elements representing persistent storage locations such as databases, files, and caches. |

## Consumes
Storage schemas, database configurations, caching layers, and file persistence definitions.

## Produces
Persisted data assets subject to Tampering, Information Disclosure, and Denial of Service threats.

## When applied
Applied during DFD modeling to map all locations where data persists at rest.

## Sub-concepts
none

## Part of
data-flow-diagram, threat-modeling

## Implementation status
defects: exit-code-mismatch, missing-path

## Design notes
`Data Stores` represents repositories where application state and sensitive information persist at rest, serving as focal points for Tampering, Information Disclosure, and Denial of Service threat evaluations.
