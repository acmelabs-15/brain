---
package: rjm
name: Hook Audit Logging
slug: hook-audit-logging
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/security/ADR-045-framework-extraction-security-review.md, sha256: 6c350b6780facde5089676879bbebc79c433b725b5505868a7c3b3ce1e14c57b}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Hook Audit Logging

## Definition — verbatim
> "### Hook Audit Logging" — .agents/security/ADR-045-framework-extraction-security-review.md:667

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/security/ADR-045-framework-extraction-security-review.md | 667 | defined here | Remediation specification establishing structured append-only logging of hook execution timestamps, exit codes, and tool matchers. |

## Consumes
Hook execution lifecycle events, plugin namespaces, exit codes, and duration measurements.

## Produces
Structured JSON log records appended to `.agents/sessions/hooks.log` with 30-day daily rotation.

## When applied
Emitted whenever a plugin hook starts or finishes execution.

## Sub-concepts
none

## Part of
security-controls

## Implementation status
defects: missing-path

## Design notes
`Hook Audit Logging` is a security and observability pattern in rjm specifying structured append-only logging for all plugin hook invocations into `.agents/sessions/hooks.log`. It captures execution timestamps, plugin names, scripts executed, exit codes, and execution duration while explicitly excluding environment variables, file contents, and tool parameters to prevent secret leakage.
