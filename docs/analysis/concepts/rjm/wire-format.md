---
package: rjm
name: wire format
slug: wire-format
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/software-engineering-library/references/clean-architecture.md, sha256: 05a2908c6aa793da85f31319368e04967eb1f225e7c32f9dc628f654bba8183a}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# wire format

## Definition — verbatim
> "- An adapter is the only place that knows the wire format. Once data crosses inward through an adapter, it is a domain object; once it crosses outward, it is a wire shape." — .claude/skills/software-engineering-library/references/clean-architecture.md:94

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/software-engineering-library/references/clean-architecture.md | 94 | used here | External serialized data shape known exclusively by adapters and prohibited from entering inner layers. |

## Consumes
Serialized data payloads from external networks, files, or APIs.

## Produces
Normalized data ready for transformation into domain entities.

## When applied
Applied when transmitting data across external network, process, or persistence boundaries.

## Sub-concepts
none

## Part of
adapters, interface-adapters

## Implementation status
clean

## Design notes
Wire format represents the serialized, transport-specific shape of data exchanged with external systems. In rjm, confining knowledge of wire formats strictly to interface adapters ensures that API field naming and serialization schemas never leak into agent domain reasoning or use cases.
