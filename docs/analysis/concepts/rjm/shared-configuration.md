---
package: rjm
name: Shared Configuration
slug: shared-configuration
kind: artifact
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

# Shared Configuration

## Definition — verbatim
> "### Shared Configuration" — docs/codeql-integration.md:285

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/codeql-integration.md | 285 | defined here | Section heading and specification of the unified CodeQL configuration file (`.github/codeql/codeql-config.yml`). |

## Consumes
Security query suite definitions and path inclusion/exclusion rules.

## Produces
Standardized configuration file at `.github/codeql/codeql-config.yml`.

## When applied
Default configuration loaded by GitHub Actions CodeQL analysis and local `invoke_codeql_scan.py` runs.

## Sub-concepts
none

## Part of
none

## Implementation status
defects: missing-path

## Design notes
Shared Configuration establishes `.github/codeql/codeql-config.yml` as the single canonical configuration artifact for all CodeQL analysis in the repository. By sharing query suite definitions, path filters, and severity thresholds across CI workflows and local CLI tools, it guarantees consistent vulnerability detection rules and prevents divergent scanner behavior.
