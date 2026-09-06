---
package: addy
name: simplify-ignore-start
slug: simplify-ignore-start
kind: artifact
package_phase: addy:Review
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: hooks/SIMPLIFY-IGNORE.md, sha256: a7121b0505c960a8a7a7f09600c9fa81464fc403ab297b95d23f5109b13ea52a}
  - {path: hooks/simplify-ignore-test.sh, sha256: 8f93c89e46c5a7478c01fa8531fa45e594fc5105411eaa7bd7c9f3ca8343926e}
  - {path: hooks/simplify-ignore.sh, sha256: 1256c677adbce33f3c361793d7dae2405fb02a7efc07b19cc8f42134def8a5cd}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# simplify-ignore-start

## Definition — verbatim
> "/* simplify-ignore-start: perf-critical */" — hooks/SIMPLIFY-IGNORE.md:10

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| hooks/simplify-ignore-test.sh | 57 | used here | Test fixture line demonstrating opening annotation marker |
| hooks/SIMPLIFY-IGNORE.md | 10 | defined here | Code example illustrating block opening marker syntax with reason |
| hooks/simplify-ignore.sh | 69 | used here | Case pattern match detecting block opening marker |

## Consumes
Code comments in source files marked for exclusion from simplification

## Produces
Trigger signal instructing simplify-ignore hook to buffer following lines until closing marker

## When applied
Placed in source comments immediately before code that should not be visible to /code-simplify

## Sub-concepts
none

## Part of
simplify-ignore-hook

## Implementation status
clean

## Design notes
Source code annotation marker used to denote the start of a protected block that must be hidden from LLM code simplification agents by replacing it with a hash-keyed placeholder.
