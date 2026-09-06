---
package: addy
name: The One-Version Rule
slug: the-one-version-rule
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

# The One-Version Rule

## Definition — verbatim
> "Avoid forcing consumers to choose between multiple versions of the same dependency or API. Diamond dependency problems arise when different consumers need different versions of the same thing. Design for a world where only one version exists at a time — extend rather than fork." — skills/api-and-interface-design/SKILL.md:35

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/api-and-interface-design/SKILL.md | 33 | defined here | Core principle advising teams to extend existing interfaces rather than maintaining forked versions |

## Consumes
API and interface requirements, dependency dependency graphs.

## Produces
Unified, backward-compatible API contracts without concurrent conflicting versions.

## When applied
When designing public APIs, library interfaces, or shared module boundaries to prevent diamond dependency conflicts.

## Sub-concepts
none

## Part of
api-and-interface-design

## Implementation status
clean

## Design notes
The One-Version Rule requires maintaining a single actively supported version of an API or dependency by extending contracts additively rather than creating divergent version forks. This prevents diamond dependency conflicts where different consumers require mutually incompatible versions of the same underlying component.
