---
package: addy
name: /code-simplify
slug: code-simplify
kind: name-only
package_phase: addy:Review
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: README.md, sha256: 70d0e32bfa384c6093229bab18802d475112168033e182caeb0328330a492bbc}
  - {path: external/code-review-and-quality.md, sha256: 9cd4e257b466f8e1700ef732f39b9dae5ac66573a0d022fdf67381796e011773}
  - {path: external/performance-optimization.md, sha256: d1fe0e9a06b111d8e6920adb8f275abf4f32a4c8bda25dcb38fa22c7814953ac}
  - {path: external/security-and-hardening.md, sha256: 47b655926f0b175781fed1412394deeb576f631554fad3bef4c73ac054e106f9}
  - {path: hooks/SIMPLIFY-IGNORE.md, sha256: a7121b0505c960a8a7a7f09600c9fa81464fc403ab297b95d23f5109b13ea52a}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# /code-simplify

## Definition — verbatim
(used, not defined)
> "| Simplify the code | `/code-simplify` | Clarity over cleverness |" — README.md:35

## Also called — verbatim
> "Block-level protection for `/code-simplify`." — hooks/SIMPLIFY-IGNORE.md:3

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| external/code-review-and-quality.md | 12 | used here | Displayed as the command badge on the code-simplification card in the Review phase grid |
| external/performance-optimization.md | 12 | used here | Listed as command trigger for code-simplification |
| external/security-and-hardening.md | 12 | used here | Shown as command trigger for code-simplification |
| hooks/SIMPLIFY-IGNORE.md | 3 | used here | Referenced in hook setup explaining block-level protection during code simplification |
| README.md | 35 | defined here | Cataloged in the primary commands table mapping to code-simplification |

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
`/code-simplify` is an executable slash command identifier and CLI trigger in Addy Osmani's agent skills rather than an independent software development lifecycle concept.
