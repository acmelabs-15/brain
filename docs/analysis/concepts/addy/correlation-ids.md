---
package: addy
name: Correlation IDs
slug: correlation-ids
kind: technique
package_phase: addy:Ship
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: skills/observability-and-instrumentation/SKILL.md, sha256: bcec2ada212de6d07daa16886859cc0f2d954c845fc65fdbb7b23106df6aa8c0}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# Correlation IDs

## Definition — verbatim
> "**Correlation IDs are mandatory.** Generate (or accept) a request ID at the system boundary and attach it to every log line, span, and outbound call. Without it, you cannot reconstruct a single request from interleaved logs:" — skills/observability-and-instrumentation/SKILL.md:79

## Also called — verbatim
- "request ID" — skills/observability-and-instrumentation/SKILL.md:79

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/observability-and-instrumentation/SKILL.md | 79 | defined here | Core telemetry rule requiring unique identifiers to link interleaved logs, traces, and downstream calls. |

## Consumes
Inbound headers (`x-request-id`) or generated UUIDs at application entrypoints.

## Produces
A ubiquitous tracking ID propagated through child loggers, HTTP headers, queue messages, and trace spans.

## When applied
> "**Correlation IDs are mandatory.** Generate (or accept) a request ID at the system boundary and attach it to every log line, span, and outbound call." — skills/observability-and-instrumentation/SKILL.md:79

## Sub-concepts
none

## Part of
- observability-and-instrumentation

## Implementation status
clean

## Design notes
A context-propagation technique that binds every log entry, span, and downstream service call associated with a single user request together, allowing engineers to reconstruct full transaction histories despite interleaved logs.
