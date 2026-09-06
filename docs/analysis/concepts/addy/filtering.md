---
package: addy
name: Filtering
slug: filtering
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

# Filtering

## Definition — verbatim
> "Use query parameters for filters:" — skills/api-and-interface-design/SKILL.md:254

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/api-and-interface-design/SKILL.md | 252 | defined here | Recommends query parameter conventions for filtering collection resources |

## Consumes
HTTP query string parameters, database query predicates.

## Produces
Filtered collection subsets matching client criteria without altering endpoint URI paths.

## When applied
When designing list endpoints that support slicing data by status, ownership, timestamp, or other attributes.

## Sub-concepts
none

## Part of
api-and-interface-design

## Implementation status
clean

## Design notes
Filtering standardizes using query parameters rather than custom path verbs or POST bodies for read queries. This preserves clean REST resource identification while offering expressive query capabilities to clients.
