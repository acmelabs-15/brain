---
package: addy
name: Partial Updates (PATCH)
slug: partial-updates-patch
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

# Partial Updates (PATCH)

## Definition — verbatim
> "Accept partial objects — only update what's provided:" — skills/api-and-interface-design/SKILL.md:262

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/api-and-interface-design/SKILL.md | 260 | defined here | Specifies HTTP PATCH semantics for updating specific fields while preserving omitted attributes |

## Consumes
Partial update payloads containing subsets of entity fields.

## Produces
Updated domain resources reflecting targeted changes while keeping unmentioned properties intact.

## When applied
When updating resource attributes without requiring clients to fetch and resend the complete entity state.

## Sub-concepts
none

## Part of
api-and-interface-design

## Implementation status
clean

## Design notes
Partial Updates (PATCH) allows consumers to update only the fields they intend to change. Unlike PUT, which requires transferring the complete resource representation and risks clobbering concurrent modifications, PATCH reduces payload overhead and minimizes race conditions on unchanged fields.
