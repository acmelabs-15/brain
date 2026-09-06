---
package: addy
name: Known limitations
slug: known-limitations
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: hooks/SDD-CACHE.md, sha256: 8c1d337a11ed7fd4f3f0e965856cb86a97cdf8b3de0b29b63345ad0133b3db12}
  - {path: hooks/SIMPLIFY-IGNORE.md, sha256: a7121b0505c960a8a7a7f09600c9fa81464fc403ab297b95d23f5109b13ea52a}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# Known limitations

## Definition — verbatim
(used, not defined)
> "## Known limitations" — hooks/SDD-CACHE.md:154

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| hooks/SDD-CACHE.md | 154 | defined here | Section heading listing architectural boundaries and constraints of the citation cache |
| hooks/SIMPLIFY-IGNORE.md | 81 | defined here | Section heading enumerating constraints and edge cases of the simplify-ignore hook |

## Consumes
none

## Produces
none

## When applied
none

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
Standard documentation section heading used to catalog operational boundaries and unhandled edge cases across hook guides, rather than an agent lifecycle concept.
