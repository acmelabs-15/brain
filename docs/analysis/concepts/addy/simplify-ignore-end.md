---
package: addy
name: simplify-ignore-end
slug: simplify-ignore-end
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

# simplify-ignore-end

## Definition — verbatim
> "/* simplify-ignore-end */" — hooks/SIMPLIFY-IGNORE.md:16

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| hooks/simplify-ignore-test.sh | 57 | used here | Test fixture line demonstrating closing annotation marker |
| hooks/SIMPLIFY-IGNORE.md | 16 | defined here | Code example illustrating closing comment marker syntax |
| hooks/simplify-ignore.sh | 79 | used here | Case pattern match detecting block closing marker |

## Consumes
Active buffered block initiated by simplify-ignore-start

## Produces
Signals hook to write cached block content to disk cache and output placeholder line

## When applied
Placed in source comments immediately following code protected from /code-simplify

## Sub-concepts
none

## Part of
simplify-ignore-hook

## Implementation status
clean

## Design notes
Source code annotation delimiter used to mark the termination of a protected code block in simplify-ignore workflows.
