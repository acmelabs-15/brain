---
package: addy
name: Predictable Naming
slug: predictable-naming
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

# Predictable Naming

## Definition — verbatim
> "Plural nouns, no verbs" — skills/api-and-interface-design/SKILL.md:150

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/api-and-interface-design/SKILL.md | 146 | defined here | Core principle 5 establishing conventions for endpoints, parameters, fields, and enum values |

## Consumes
Resource domain models, API routing definitions, schema property definitions.

## Produces
Standardized naming conventions across REST endpoints (plural nouns), query parameters (camelCase), response fields (camelCase), booleans (is/has/can prefix), and enum values (UPPER_SNAKE).

## When applied
When naming endpoints, query parameters, data fields, and enum types across all public and internal interfaces.

## Sub-concepts
none

## Part of
api-and-interface-design

## Implementation status
clean

## Design notes
Predictable Naming establishes consistent lexical conventions across an API surface. Adhering to predictable patterns—such as plural nouns without verbs for REST endpoints, camelCase properties, and prefixed boolean flags—allows consumers to intuitively anticipate interface contracts and reduce integration errors.
