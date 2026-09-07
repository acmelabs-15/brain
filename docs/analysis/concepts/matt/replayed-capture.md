---
package: matt
name: replayed capture
slug: replayed-capture
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

# replayed capture

## Definition — verbatim
> "A replayed capture: a saved request, payload, or event log, run through the code path in isolation." — external/diagnosing-bugs.md:38

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| external/diagnosing-bugs.md | 38 | used here | Fifth rung on the feedback loop ladder, replaying saved production payloads through isolated code paths. |

## Consumes
A saved network request, API payload, or event log captured from an execution trace.

## Produces
An isolated local reproduction running against realistic captured inputs.

## When applied
When diagnosing defects triggered by complex payload schemas or distributed event sequences that are difficult to construct synthetically.

## Sub-concepts
none

## Part of
diagnosing-bugs, phase-1

## Implementation status
clean

## Design notes
A diagnostic technique that isolates bugs by re-running saved production artifacts through code paths in local isolation. It avoids the friction of mocking complex upstream dependencies while retaining realistic error triggers.
