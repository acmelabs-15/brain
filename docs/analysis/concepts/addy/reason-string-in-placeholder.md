---
package: addy
name: Reason string in placeholder
slug: reason-string-in-placeholder
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

# Reason string in placeholder

## Definition — verbatim
(used, not defined)
> "Test 4: Reason string in placeholder" — hooks/simplify-ignore-test.sh:129

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| hooks/simplify-ignore-test.sh | 129 | defined here | Test case title verifying preservation of reason descriptions in placeholder comments |

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
Test case heading in `hooks/simplify-ignore-test.sh` asserting that annotation reasons are included in placeholder comment text, not an agent lifecycle concept.
