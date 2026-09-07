---
package: rjm
name: path traversal risk
slug: path-traversal-risk
kind: technique
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/critique/ADR-045-debate-log.md, sha256: 1a7c67dec37cdc5b039615e4f59a49517fc570566436ec2c344dd54473da1a82}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# path traversal risk

## Definition — verbatim
(used, not defined)

> "Security agent identified path traversal risk (CVSS 7.8)" — .agents/critique/ADR-045-debate-log.md:43

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/critique/ADR-045-debate-log.md | 43 | used here | Identified by Security agent as a high-severity vulnerability (CVSS 7.8) in plugin path abstraction. |

## Consumes
Untrusted consumer environment variables or unvalidated directory path parameters.

## Produces
Vulnerability finding and mandatory path normalization / validation controls.

## When applied
Evaluated during architectural security reviews of plugin file operations and environment variable path overrides.

## Sub-concepts
none

## Part of
path-abstraction

## Implementation status
defects: cross-file-contradiction

## Design notes
Path traversal risk is a vulnerability consideration identified in ADR-045 where unvalidated path abstraction environment variables could allow malicious or misconfigured inputs (e.g. `../../.ssh`) to access files outside intended directories.
