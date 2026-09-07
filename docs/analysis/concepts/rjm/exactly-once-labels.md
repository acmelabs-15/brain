---
package: rjm
name: Exactly-once labels
slug: exactly-once-labels
kind: pattern
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/software-engineering-library/references/data-intensive-applications.md, sha256: 849c17929d9fcbfb67cd80bfaf45d998ed1def423b7783192cf7e3dbe997cb51}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Exactly-once labels

## Definition — verbatim
> "- **Exactly-once labels**: any design artifact that promises exactly-once delivery. Replace with at-least-once plus idempotent." — .claude/skills/software-engineering-library/references/data-intensive-applications.md:162

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/software-engineering-library/references/data-intensive-applications.md | 162 | defined here | Defined as an anti-pattern where architectural diagrams or specifications falsely claim exactly-once delivery. |

## Consumes
System design documents, architecture diagrams, protocol specifications.

## Produces
Misleading architectural specifications that conceal failure modes and omit deduplication logic.

## When applied
Flagged during design review whenever documentation or architecture diagrams claim exactly-once delivery.

## Sub-concepts
none

## Part of
anti-patterns

## Implementation status
defects: doc-drift

## Design notes
Exactly-once labels is an architectural anti-pattern where design diagrams claim impossible transport-level exactly-once delivery instead of properly modeling at-least-once transport combined with idempotent receivers.
