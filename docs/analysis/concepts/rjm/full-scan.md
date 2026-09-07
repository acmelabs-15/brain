---
package: rjm
name: Full Scan
slug: full-scan
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

# Full Scan

## Definition — verbatim
> "### Full Scan" — docs/codeql-integration.md:53

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/codeql-integration.md | 53 | defined here | Heading and command invocation for running a complete, CI-equivalent local CodeQL scan. |

## Consumes
Target repository codebase, CodeQL CLI, and `.github/codeql/codeql-config.yml`.

## Produces
Comprehensive CodeQL analysis results output to console or `.codeql/results`.

## When applied
Before opening a pull request to verify full CI-equivalent security compliance locally.

## Sub-concepts
none

## Part of
none

## Implementation status
defects: missing-path

## Design notes
Full Scan is the local on-demand execution mode that replicates CI/CD CodeQL scanning by analyzing all supported languages against the complete `.github/codeql/codeql-config.yml` query suite. It provides developers and agents with authoritative pre-PR verification, ensuring local code changes will pass the blocking Tier 1 CI gate without unexpected security findings.
