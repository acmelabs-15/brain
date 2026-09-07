---
package: rjm
name: Secret Masking
slug: secret-masking
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

# Secret Masking

## Definition — verbatim
(used, not defined)

> "### P1-7: No Secret Masking in Plugin Hooks (Security)" — .agents/critique/ADR-045-debate-log.md:87

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/critique/ADR-045-debate-log.md | 87 | defined here | Raised as a P1 security issue requiring secret redaction in plugin hook execution logs. |

## Consumes
Raw log streams, hook command stdout/stderr, environment variable values.

## Produces
Redacted, audit-safe log output with credentials, tokens, and secrets masked.

## When applied
Applied during hook execution, command logging, and agent transcript recording.

## Sub-concepts
none

## Part of
4-plugin-model

## Implementation status
defects: cross-file-contradiction

## Design notes
Secret Masking is a security technique in rjm that filters and redacts API keys, credentials, and sensitive environment variables from logs and agent tool outputs to prevent accidental exfiltration or credential leaks.
