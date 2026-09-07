---
package: rjm
name: structured logging
slug: structured-logging
kind: technique
package_phase: rjm:build
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/taste-lints/SKILL.md, sha256: 0c46db6851ed918ce5e85c751df8a8154e4e15eb2e4b345d1e42c94ead1c9296}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# structured logging

## Definition — verbatim
> "We statically enforce structured logging, naming conventions for schemas and types," — .claude/skills/taste-lints/SKILL.md:14

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/taste-lints/SKILL.md | 14 | used here | Cited in the quote from OpenAI Harness Engineering as a software quality practice statically enforced via custom lints. |

## Consumes
Application source code, event payloads, and logging schema specifications.

## Produces
Parseable JSON or structured key-value log entries suitable for telemetry and query engines.

## When applied
Applied during code authoring and review to ensure application telemetry emits structured machine-readable events rather than arbitrary unstructured strings.

## Sub-concepts
none

## Part of
harness-engineering

## Implementation status
defects: doc-drift

## Design notes
The practice of emitting standardized, parseable machine-readable log structures rather than free-form text strings, cited as one of the invariants targeted for static enforcement within agent harness engineering.
