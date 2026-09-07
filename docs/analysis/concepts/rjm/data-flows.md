---
package: rjm
name: Data Flows
slug: data-flows
kind: artifact
package_phase: rjm:spec
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/threat-modeling/SKILL.md, sha256: a4ed722e2a09f53130a86c1f42db100ac87f504c85e0198e726a5c40cfdbbb62}
  - {path: .claude/skills/threat-modeling/templates/threat-model-template.md, sha256: c71c0a861f9e434e26f25c1019c9ddf047f2a9dec295b7d012f7c59f28088a42}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Data Flows

## Definition — verbatim
> "- **Data Flows**: Arrows showing data movement (labeled with protocol)" — .claude/skills/threat-modeling/SKILL.md:129

## Also called — verbatim
> "### Data Flows" — .claude/skills/threat-modeling/templates/threat-model-template.md:71

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/threat-modeling/SKILL.md | 129 | defined here | Defined as required DFD elements representing data movement labeled with communication protocols. |
| .claude/skills/threat-modeling/templates/threat-model-template.md | 71 | used here | Section heading and tabular structure documenting data flow source, destination, protocol, and authentication. |

## Consumes
Network protocols, API communication channels, IPC mechanisms, and serialization formats.

## Produces
Documented data flow paths across components, evaluated for in-transit Tampering, Information Disclosure, and Denial of Service.

## When applied
Applied during architectural decomposition and threat modeling when mapping inter-component communication channels.

## Sub-concepts
none

## Part of
data-flow-diagram, threat-model-template

## Implementation status
defects: exit-code-mismatch, missing-path

## Design notes
`Data Flows` represents communications and data transmissions moving between external entities, processes, and data stores, requiring protocol labeling and cryptographic validation against in-transit threats.
