---
package: addy
name: Validate plugin structure
slug: validate-plugin-structure
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

# Validate plugin structure

## Definition — verbatim
(used, not defined)
> "name: Validate plugin structure" — .github/workflows/test-plugin-install.yml:67

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .github/workflows/test-plugin-install.yml | 67 | defines | Defines the GitHub Actions workflow job name verifying overall plugin packaging and installation integrity |

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
GitHub Actions CI job name verifying plugin directory structure and dependencies; it is a CI check identifier rather than a software development lifecycle concept.
