---
package: rjm
name: Redact secrets
slug: redact-secrets
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/commands/checkpoint.md, sha256: 69bd04f6a728255356b0644dd36ffb5b32f432ee113cb9df036719f0a69661ed}
  - {path: scripts/ci/invoke_copilot_cli.py, sha256: 279e376171031fb1d2eb9d4ccbe0178dc93aa91c7c81e25e98cb5c78bb32e84a}
  - {path: scripts/gh_retry_helpers.py, sha256: c89bd3c3d70fed06aa06c88d1d2d6cadbaca7930afc4ebab86ca53f2a1013051}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Redact secrets

## Definition — verbatim
> "6. Redact secrets before writing, then write the checkpoint. The checkpoint lands in git history; treat it" — .claude/commands/checkpoint.md:121

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/commands/checkpoint.md | 121 | defined here | Mandates filtering checkpoint bodies through the secret redactor before writing to disk. |
| scripts/ci/invoke_copilot_cli.py | 134 | defined here | Implemented as a utility function masking environment secrets and credentials before CI emission. |
| scripts/gh_retry_helpers.py | 110 | defined here | Implemented as an internal helper redacting credentials from GitHub command logs and error output. |

## Consumes
Raw text strings, checkpoint bodies, subprocess logs, and sensitive environment variables.

## Produces
Sanitized text output with credentials, tokens, and recognized secret shapes masked.

## When applied
Prior to persisting any durable checkpoint to disk or logging output from external CLI processes.

## Sub-concepts
none

## Part of
security-guardrails

## Implementation status
defects: orphan (scripts/ci/invoke_copilot_cli.py:1); clean in .claude/commands/checkpoint.md and scripts/gh_retry_helpers.py

## Design notes
Redact secrets provides a mandatory data-sanitization boundary protecting persistent repositories and CI artifacts from accidental credential leaks. By filtering text through regex-based masking scripts before saving files or streaming subprocess logs, it prevents sensitive tokens from being immortalized in version control.
