---
package: addy
name: Input/Output Separation
slug: input-output-separation
kind: pattern
package_phase: addy:Build
implementation_in_scope: true
deprecated: false
verified:
memo_inputs:
  - {path: skills/api-and-interface-design/SKILL.md, sha256: 5dafd0c44a3aabf11cae5bcb34f6fcc24dfa5c01ba6e0d3176bce997f4d68bc8}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Input/Output Separation

## Definition — verbatim
> "// Output: what the system returns (includes server-generated fields)" — skills/api-and-interface-design/SKILL.md:302

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/api-and-interface-design/SKILL.md | 293 | defined here | Pattern separating caller input schemas from server-generated response schemas |

## Consumes
Client-submitted fields, server-generated metadata (IDs, creation timestamps, audit records).

## Produces
Distinct TypeScript interfaces for creation/update inputs and persisted output domain models.

## When applied
When authoring API endpoint type definitions for create, update, and fetch operations.

## Sub-concepts
none

## Part of
api-and-interface-design

## Implementation status
clean

## Design notes
Input/Output Separation dictates creating distinct types for data provided by the caller versus data generated and returned by the server. This prevents clients from attempting to supply server-managed values like IDs or creation timestamps and eliminates ambiguities around optional fields.
