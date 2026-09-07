---
package: matt
name: Other
slug: other
kind: name-only
package_phase: matt:Setup
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: docs/engineering/setup-matt-pocock-skills.md, sha256: 4a4129edb23d9ba1491e2ef9ccba964ebc3d85830b013c089f0b8b4dd58ebbe6}
  - {path: external/setup-matt-pocock-skills.md, sha256: 82b75b3fb87a505e180f800fe63bd1e5735c24f407dab635115d7bcdadeaca58}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Other

## Definition — verbatim
(used, not defined)

> "| **Other** | wherever you say | one paragraph from you describing the workflow |" — docs/engineering/setup-matt-pocock-skills.md:45

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/engineering/setup-matt-pocock-skills.md | 45 | defined here | Table option in issue tracker setup allowing custom, freeform workflow prose. |
| external/setup-matt-pocock-skills.md | 39 | defined here | External catalog table option for configuring non-standard issue tracking systems. |

## Consumes
none

## Produces
none

## When applied
none

## Sub-concepts
none

## Part of
setup-matt-pocock-skills

## Implementation status
clean

## Design notes
An issue tracker configuration option in `setup-matt-pocock-skills` allowing developers to define custom issue tracking workflows via freeform prose, classified as name-only because it represents a setup option rather than an independent lifecycle concept.
