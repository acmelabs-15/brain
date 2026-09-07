---
package: rjm
name: database caching
slug: database-caching
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: docs/codeql-integration.md, sha256: 4db4d2e49e3e741bdb61f24d96a927e180249217611b99e31815ce8838560ac8}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# database caching

## Definition — verbatim
> "### How does database caching work?" — docs/codeql-integration.md:467

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/codeql-integration.md | 467 | defined here | FAQ heading and explanation of reusing local compiled CodeQL databases via `--use-cache`. |

## Consumes
Existing compiled CodeQL databases in `.codeql/db/`.

## Produces
Accelerated scan execution by skipping database extraction and compilation.

## When applied
Invoked with `--use-cache` during repeated local scan runs on unchanged codebases.

## Sub-concepts
none

## Part of
none

## Implementation status
defects: missing-path

## Design notes
Database caching optimizes local CodeQL turnaround time by persisting compiled AST databases under `.codeql/db/`. When `--use-cache` is enabled, repeated scan invocations query pre-existing databases directly instead of re-extracting source files, significantly reducing the latency of iterative security reviews.
