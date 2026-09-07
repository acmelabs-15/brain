---
package: matt
name: throwaway harness
slug: throwaway-harness
kind: artifact
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

# throwaway harness

## Definition — verbatim
(used, not defined)

> "A throwaway harness: a minimal subset of the system, one function call." — external/diagnosing-bugs.md:39

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| external/diagnosing-bugs.md | 39 | used here | Sixth rung on the feedback loop construction ladder, exercising a bug with a minimal sub-system. |

## Consumes
The defective code path and minimal or mocked dependencies.

## Produces
An ephemeral execution driver triggering the defect with minimal runtime overhead.

## When applied
When full system boot is too slow or unwieldy, but the defect can be isolated to a single function or service call.

## Sub-concepts
none

## Part of
diagnosing-bugs, phase-1

## Implementation status
clean

## Design notes
A throwaway harness discards full environment orchestration to create the most direct, lightweight execution path possible. It prioritizes fast iteration and isolation during bug diagnosis over permanent test architecture.
