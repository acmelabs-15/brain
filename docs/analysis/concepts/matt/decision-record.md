---
package: matt
name: decision record
slug: decision-record
kind: pattern
package_phase: matt:The Main Flow
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: external/to-spec.md, sha256: 41628409b39e15d59b669342fc26a9416c89af7eb2295fed324138e7e3dba8fd}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# decision record

## Definition — verbatim
> "The spec is a decision record" — external/to-spec.md:33

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| external/to-spec.md | 33 | defined here | Conceptual framework defining the spec as a durable record of decisions reached during grilling that survives context clearing. |

## Consumes
Conversational agreements, trade-off debates, and explicit non-goals settled during grilling.

## Produces
A persistent markdown specification issue recording settled choices for downstream agent sessions.

## When applied
When synthesising an agreed conversational design into a formal specification prior to clearing the context window.

## Sub-concepts
none

## Part of
to-spec

## Implementation status
defects: orphan, doc-drift

## Design notes
In Matt's workflow, a specification is explicitly conceived as a decision record rather than a validation mechanism. Its primary function is to freeze the outcomes of human-agent deliberation—settled architectures, deliberate exclusions, and negotiated seams—so that stateless downstream agent sessions can implement them without re-litigating settled questions.
