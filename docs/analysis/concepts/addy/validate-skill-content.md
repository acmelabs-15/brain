---
package: addy
name: Validate skill content
slug: validate-skill-content
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .github/workflows/test-plugin-install.yml, sha256: a4bb5dbf0d3a2c81d405722a100b9de1256130512e74ca8561f6ec61281cc5f5}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# Validate skill content

## Definition — verbatim
(used, not defined)
> "name: Validate skill content" — .github/workflows/test-plugin-install.yml:10

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .github/workflows/test-plugin-install.yml | 10 | defines | Defines the GitHub Actions workflow job name that validates skill structure and markdown schema |

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
GitHub Actions CI workflow job name validating skill schema and required sections; it is a CI configuration label rather than a software development lifecycle concept.
