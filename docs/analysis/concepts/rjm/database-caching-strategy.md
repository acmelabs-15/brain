---
package: rjm
name: "Database Caching Strategy"
slug: database-caching-strategy
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-041-codeql-integration.md, sha256: 6ccbe8a2a535418e33f8f759b7511e36df157bb78c387180d7c6edb35839810a}
  - {path: docs/codeql-architecture.md, sha256: ff63b856aa506fee02c6d7651e4f059622e7a415a714b9e05b49d4fd081c8b93}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Database Caching Strategy

## Definition — verbatim
> "Local scans can reuse databases when the caller passes `--use-cache`." — docs/codeql-architecture.md:484

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-041-codeql-integration.md | 287 | defined here | Section heading and implementation note detailing cache directory layout. |
| docs/codeql-architecture.md | 482 | defined here | Section heading in performance optimization explaining database reuse with --use-cache. |

## Consumes
Pre-existing CodeQL databases stored under .codeql/db/{language}/ and the --use-cache CLI flag.

## Produces
Accelerated query re-execution by bypassing the repository extraction and database building stages.

## When applied
Applied during developer local iterations when running repeated scans against incrementally modified code.

## Sub-concepts
none

## Part of
multi-tier-strategy

## Implementation status
defects: doc-drift, missing-path, script-bug

## Design notes
A performance optimization pattern in CodeQL local scanning that preserves compiled query databases under .codeql/db/{language}/. When --use-cache is passed, the scanner skips database compilation and directly runs queries, cutting local scan times from minutes to seconds.
