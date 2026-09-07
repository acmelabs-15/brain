---
package: matt
name: snapshot
slug: snapshot
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

# snapshot

## Definition — verbatim
(used, not defined)

> "A CLI invocation with a fixture input, diffed against a known-good snapshot." — external/diagnosing-bugs.md:36

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| external/diagnosing-bugs.md | 36 | used here | Third rung on the feedback loop ladder, used to verify CLI tool output against baseline fixtures. |

## Consumes
A fixture input and a verified baseline output.

## Produces
A diff comparison indicating regression or divergence between current execution output and expected baseline.

## When applied
When diagnosing CLI tools, compilers, formatters, or code generators where unit tests are unwieldy but stdout/file outputs can be diffed.

## Sub-concepts
none

## Part of
diagnosing-bugs, phase-1

## Implementation status
clean

## Design notes
An oracle artifact used in CLI and transformation pipelines. By diffing fixture-driven execution output against an established known-good snapshot, the agent gains an immediate, deterministic regression indicator.
