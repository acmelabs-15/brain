---
package: addy
name: HTML comment syntax
slug: html-comment-syntax
kind: name-only
package_phase: addy:Review
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: hooks/simplify-ignore-test.sh, sha256: 8f93c89e46c5a7478c01fa8531fa45e594fc5105411eaa7bd7c9f3ca8343926e}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# HTML comment syntax

## Definition — verbatim
(used, not defined)
> "Test 9: HTML comment syntax" — hooks/simplify-ignore-test.sh:218

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| hooks/simplify-ignore-test.sh | 218 | defined here | Test case title verifying HTML comment delimiter parsing (<!-- -->) in ignore blocks |

## Consumes
none

## Produces
none

## When applied
none

## Sub-concepts
none

## Part of
simplify-ignore-hook

## Implementation status
clean

## Design notes
Test scenario heading in `hooks/simplify-ignore-test.sh` validating HTML comment delimiter handling, not an agent lifecycle concept.
