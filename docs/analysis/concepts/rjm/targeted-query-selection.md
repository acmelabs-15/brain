---
package: rjm
name: Targeted Query Selection
slug: targeted-query-selection
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: docs/codeql-architecture.md, sha256: ff63b856aa506fee02c6d7651e4f059622e7a415a714b9e05b49d4fd081c8b93}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Targeted Query Selection

## Definition — verbatim
> "### Targeted Query Selection" — docs/codeql-architecture.md:499

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/codeql-architecture.md | 499 | defined here | Performance optimization strategy using quick-scan query suites for rapid local security feedback. |

## Consumes
Targeted query suite configuration (`.github/codeql/codeql-config-quick.yml`).

## Produces
Rapid local security scan results focused on critical vulnerability classes.

## When applied
During active development when fast local feedback is needed instead of full CI-equivalent coverage.

## Sub-concepts
none

## Part of
none

## Implementation status
defects: script-bug, doc-drift, missing-path

## Design notes
Targeted Query Selection trades exhaustive static analysis coverage for developer iteration speed. By constraining the query set to high-severity, fast-executing vulnerability checks (injections, credential exposure, path traversal), developers and agents can validate security posture in under 60 seconds without waiting for the full 300-second CI test suite.
