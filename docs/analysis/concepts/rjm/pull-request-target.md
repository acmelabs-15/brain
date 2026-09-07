---
package: rjm
name: pull_request_target
slug: pull-request-target
kind: name-only
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/steering/security-practices.md, sha256: de8c639a9cd6f34b9f787dc4c2b581ca5a1d314e8956cf87d6c0412e430a0d84}
  - {path: scripts/ci/validate_vendor_provenance.py, sha256: 65858093c108f169cc0e34423abc589c0d79f7047b2211c82c7e4457c57d0a9c}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# pull_request_target

## Definition — verbatim
(used, not defined)

> "Runs from BASE branch via pull_request_target. Validates candidate vendor tree" — scripts/ci/validate_vendor_provenance.py:5

## Also called — verbatim
> "#### Avoiding `pull_request_target` Risks" — .agents/steering/security-practices.md:86

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/steering/security-practices.md | 86 | used here | Section heading warning against security vulnerabilities when checking out untrusted PR head SHAs in pull_request_target workflows. |
| scripts/ci/validate_vendor_provenance.py | 5 | used here | Docstring citing the GitHub Actions event trigger under which the base-branch provenance validation script runs. |

## Consumes
none

## Produces
none

## When applied
> "Use `pull_request` event for untrusted code, `pull_request_target` only for trusted operations." — .agents/steering/security-practices.md:99

## Sub-concepts
none

## Part of
security-practices

## Implementation status
defects: doc-drift, missing-path, orphan

## Design notes
A GitHub Actions workflow trigger event that executes in the security context of the target repository base branch with elevated secrets access. Classified as name-only per D-023 as it is a third-party platform trigger identifier rather than an internal development lifecycle concept.
