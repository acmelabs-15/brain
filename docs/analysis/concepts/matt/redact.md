---
package: matt
name: Redact
slug: redact
kind: technique
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: skills/engineering/diagnosing-bugs/SKILL.md, sha256: 77f3cf31bc99b2f49af943222526531fcc9fc41d047626d3640e875e85af3e84}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Redact

## Definition — verbatim
> "## Redact" — skills/engineering/diagnosing-bugs/SKILL.md:12

> "**Redact every secret first**: write `<REDACTED>` in its place." — skills/engineering/diagnosing-bugs/SKILL.md:14

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/engineering/diagnosing-bugs/SKILL.md | 12 | defined here | Section heading and core instruction requiring secrets to be sanitized from commands, outputs, and captured traces. |

## Consumes
Commands, terminal outputs, error logs, and captured debugging traces containing sensitive credentials.

## Produces
Sanitized command strings, outputs, and captured artifacts with secrets replaced by `<REDACTED>`.

## When applied
Before displaying any command invocation, output, or captured artifact during bug diagnosis.

## Sub-concepts
none

## Part of
diagnosing-bugs

## Implementation status
clean

## Design notes
A critical privacy and safety technique in diagnosing bugs that mandates replacing credentials and secrets with `<REDACTED>` and keeping secrets in environment variables. Without this sanitization, auth tokens and credentials would be leaked into terminal context and recorded logs.
