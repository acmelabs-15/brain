---
package: rjm
name: Secret Detection & Environment Leak Scanning
slug: secret-detection-environment-leak-scanning
kind: technique
package_phase: rjm:review
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/agents/security.md, sha256: 46ca1d53246619dbec02d5bd354548264fd717ae0002a00613012fe2574d3261}
  - {path: templates/agents/security.shared.md, sha256: fd1b7d348b67538059ad93f967e9a43ed632ca0a5868e054bf07f17b7892c2f5}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Secret Detection & Environment Leak Scanning

## Definition — verbatim
(used, not defined)

> "Secret Detection & Environment Leak Scanning" — .claude/agents/security.md:326

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/security.md | 326 | defined here | Core security agent capability scanning for hardcoded secrets, API keys, credentials, and environment variable leaks. |
| templates/agents/security.shared.md | 297 | defined here | Reusable shared template definition of the secret detection and environment leak scanning capability. |

## Consumes
Source code files, configuration files, environment definitions, and Git diffs.

## Produces
Vulnerability findings identifying hardcoded credentials, exposed tokens, or environment variable leaks.

## When applied
During pre-implementation security audits and post-implementation verification reviews.

## Sub-concepts
none

## Part of
security-review

## Implementation status
clean

## Design notes
A specialized security inspection technique focused on identifying hardcoded secrets, API keys, and environment variable leak patterns across codebases and configuration templates.
