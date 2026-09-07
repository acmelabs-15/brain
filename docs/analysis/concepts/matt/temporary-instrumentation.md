---
package: matt
name: temporary instrumentation
slug: temporary-instrumentation
kind: technique
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

# temporary instrumentation

## Definition — verbatim
(used, not defined)

> "permission to add temporary instrumentation." — external/diagnosing-bugs.md:46

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| external/diagnosing-bugs.md | 46 | used here | Identified as an escalated permission request when an automated feedback loop cannot be built otherwise. |

## Consumes
User consent to modify application code with transient diagnostic probes.

## Produces
Ephemeral log statements, metrics, or diagnostic assertions embedded directly in the execution path.

## When applied
When an automated reproduction loop cannot be constructed without internal visibility into execution state.

## Sub-concepts
none

## Part of
diagnosing-bugs, instrumentation

## Implementation status
clean

## Design notes
Temporary diagnostic code inserted to expose internal state during bug diagnosis. Matt's lifecycle treats adding temporary instrumentation as an escalated intervention requiring human permission and disciplined tagging (e.g. `[DEBUG-a4f2]`) to ensure complete removal before fixing.
