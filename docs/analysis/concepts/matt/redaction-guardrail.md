---
package: matt
name: redaction guardrail
slug: redaction-guardrail
kind: gate
package_phase: matt:diagnosing-bugs
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: external/diagnosing-bugs.md, sha256: e98918deb1006ce9e3e40d12e60c54410a8a9820225e85cb4a78c0323a8c5c40}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# redaction guardrail

## Definition — verbatim
(used, not defined)

> "<a href=\"https://github.com/mattpocock/skills/issues/674\" rel=\"noopener noreferrer\" target=\"_blank\" class=\"ah-prose-a\">Issue #674</a> raises exactly this (credentials, tokens, cookies, and personal data riding along into a chat, an issue, or a PR) and proposes a redaction guardrail." — external/diagnosing-bugs.md:61

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| external/diagnosing-bugs.md | 61 | used here | Proposed safety mechanism to scrub secrets, credentials, and PII from captured reproduction outputs before sharing. |

## Consumes
Diagnostic logs, network captures, HAR files, or command outputs containing potentially sensitive information.

## Produces
Sanitized artifacts with credentials and sensitive values replaced by tokens like `<REDACTED>`.

## When applied
Prior to posting reproduction command outputs or diagnostic logs into chats, PRs, or public issue trackers.

## Sub-concepts
none

## Part of
diagnosing-bugs

## Implementation status
defects: doc-drift (external doc describes it as unimplemented issue #674, while in-repo SKILL.md:12-14 implements mandatory ## Redact section)

## Design notes
The redaction guardrail prevents credentials, session tokens, and sensitive data from leaking into agent transcripts, pull requests, or issue comments. Although external documentation discusses it as an unimplemented proposal in issue #674, the repository implementation enforces a mandatory redaction phase before pasting test outputs.
