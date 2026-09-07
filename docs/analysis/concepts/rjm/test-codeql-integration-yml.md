---
package: rjm
name: test-codeql-integration.yml
slug: test-codeql-integration-yml
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .github/AGENTS.md, sha256: 0e2bb069b704651214e2129c6d8b44543bcefe17f3878a3237f16602c4e3cd63}
  - {path: scripts/ci/verify_codeql_artifacts.py, sha256: abda124f6dbe8089fa9e0659ed6070f298394457ab3a81a9543008035bec8e46}
  - {path: scripts/ci/verify_codeql_sarif_structure.py, sha256: bb1ab0941302ba0f029311f469b82725674072a7b4276dfc30a8be4f0c0e61e5}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# test-codeql-integration.yml

## Definition — verbatim
(used, not defined)

> "### test-codeql-integration.yml" — .github/AGENTS.md:275

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .github/AGENTS.md | 275 | defined here | Heading documenting the CodeQL integration test runner GitHub Actions workflow. |
| scripts/ci/verify_codeql_artifacts.py | 5 | used here | Docstring reference to the CI workflow whose inline shell block was replaced. |
| scripts/ci/verify_codeql_sarif_structure.py | 6 | used here | Docstring reference to the CI workflow whose inline shell/Python block was replaced. |

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
defects: missing-path, orphan

## Design notes
test-codeql-integration.yml is a GitHub Actions workflow file name rather than an agent lifecycle concept.
