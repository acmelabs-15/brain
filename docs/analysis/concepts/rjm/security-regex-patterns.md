---
package: rjm
name: Security Regex Patterns
slug: security-regex-patterns
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/archive/planning/PR-60/005-consolidated-agent-review-summary.md, sha256: e11aa763a1febe5a2c62d0a51c49614ecebe5c619126b422219b604722fd1107}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Security Regex Patterns

## Definition — verbatim
(used, not defined)

> "#### C3: Harden Security Regex Patterns ⚠️ BLOCKING" — .agents/archive/planning/PR-60/005-consolidated-agent-review-summary.md:56

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/archive/planning/PR-60/005-consolidated-agent-review-summary.md | 56 | used here | Specified as blocking condition C3 to replace vulnerable regex expressions with hardened patterns resistant to newlines and Unicode injection. |

## Consumes
User inputs, issue titles, labels, or AI-generated strings passed to shell or script interpreters.

## Produces
Sanitized tokens, strict validation verdicts, and injection-safe strings.

## When applied
Used during input validation to sanitize strings before interpolating them into shell executions or workflow commands.

## Sub-concepts
none

## Part of
input-validation

## Implementation status
defects: cross-file-contradiction, internal-contradiction (.agents/archive/planning/PR-60/005-consolidated-agent-review-summary.md:56, 94)

## Design notes
`Security Regex Patterns` represents input validation patterns specifically crafted to avoid injection vulnerabilities, ensuring that patterns strictly reject control characters, whitespace, newlines, and multi-byte bypass sequences.
