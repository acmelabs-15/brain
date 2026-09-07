---
package: rjm
name: slis
slug: slis
kind: name-only
package_phase: rjm:spec
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/slo-designer/templates/slo-config-template.yaml, sha256: e7371ba6f5c2a36e647af72ee6d8bbc7121c4e1c0ccebbce160477e54506a38d}
  - {path: .claude/skills/spec-generator/references/spec-prior-art-schema.md, sha256: 8202f29a8ee823367505128164055e0d25fc83557ae3a3055396c0ecab7f7978}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# slis

## Definition — verbatim
(used, not defined)

> "- SLIs (Service Level Indicators): what is measured and how." — .claude/skills/spec-generator/references/spec-prior-art-schema.md:225

## Also called — verbatim
`SLIs` — .claude/skills/spec-generator/references/spec-prior-art-schema.md:225

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/slo-designer/templates/slo-config-template.yaml | 17 | defined here | Top-level configuration key defining the list of Service Level Indicator metric measurements. |
| .claude/skills/spec-generator/references/spec-prior-art-schema.md | 225 | used here | Structured output component produced by slo-designer embedded into the PRD Observability section. |

## Consumes
none

## Produces
none

## When applied
none

## Sub-concepts
none

## Part of
slo-configuration-template

## Implementation status
defects: orphan, internal-contradiction, missing-path, doc-drift

## Design notes
slis is a YAML configuration schema key in slo-config-template.yaml and plural abbreviation for Service Level Indicators in spec-generator rather than an independent lifecycle concept, classified as name-only per D-023.
