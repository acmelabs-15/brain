---
package: addy
name: Prefer Addition Over Modification
slug: prefer-addition-over-modification
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

# Prefer Addition Over Modification

## Definition — verbatim
> "Extend interfaces without breaking existing consumers:" — skills/api-and-interface-design/SKILL.md:127

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/api-and-interface-design/SKILL.md | 125 | defined here | Core principle 4 establishing backward-compatible interface extension rules |

## Consumes
Existing public interface definitions, evolving system requirements.

## Produces
Additive interface definitions featuring optional new parameters or endpoints without mutating existing types or removing properties.

## When applied
Whenever modifying, extending, or refactoring existing public interfaces or component properties.

## Sub-concepts
none

## Part of
api-and-interface-design

## Implementation status
clean

## Design notes
Prefer Addition Over Modification preserves backward compatibility by requiring changes to public interfaces to be strictly additive—adding new optional fields or new endpoints rather than changing existing property types or deleting fields. This protects existing consumers from breaking changes during system evolution.
