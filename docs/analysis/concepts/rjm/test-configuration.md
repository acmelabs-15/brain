---
package: rjm
name: Test Configuration
slug: test-configuration
kind: pattern
package_phase: rjm:ship
implementation_in_scope: true
deprecated: false
verified: 2026-09-08 quote-check+coverage
memo_inputs:
  - {path: templates/agents/devops.shared.md, sha256: 42dd58d44d630513772f17edd4be65b8fb318f99c9ca47335f2a80c12e7ccb1f}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Test Configuration

## Definition — verbatim
> "# Standard test filters" — templates/agents/devops.shared.md:217

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| templates/agents/devops.shared.md | 214 | defines | Standard test filter configuration for CI test execution. |

## Consumes
Compiled test binaries from build step and solution files.

## Produces
Filtered CI test execution excluding local-only, benchmark, and slow integration test categories.

## When applied
When executing test stages in CI/CD workflows without rebuilding.

## Sub-concepts
none

## Part of
devops-agent

## Implementation status
clean

## Design notes
Specifies standard test filters to exclude non-CI test categories (such as localOnly, Benchmark, SOAP, REST, and IntegrationTests) while running release builds without recompilation, balancing test coverage against CI pipeline duration.
