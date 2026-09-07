---
package: matt
name: Phase 4
slug: phase-4
kind: phase
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

# Phase 4

## Definition — verbatim
> "Into Phase 4</td><td>3–5 ranked, falsifiable hypotheses exist, each stating its prediction, shown to you before any is tested" — external/diagnosing-bugs.md:49

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| external/diagnosing-bugs.md | 49 | defined here | Specifies the gate requirements and entry criteria for Phase 4 (hypothesis testing and targeted probing). |

## Consumes
A minimized reproduction case and 3–5 ranked hypotheses with falsifiable predictions from Phase 3.

## Produces
Targeted diagnostic probes and debug logs verifying or falsifying candidate hypotheses one variable at a time.

## When applied
During bug diagnosis after hypotheses are formulated and reviewed, before modifying application code to implement a fix.

## Sub-concepts
temporary-instrumentation

## Part of
diagnosing-bugs

## Implementation status
clean

## Design notes
Phase 4 executes disciplined hypothesis testing by inserting targeted probes to test predictions one variable at a time. It prevents wild goose chases by requiring all probes and logs to be mapped directly to an explicit prediction and tagged for clean removal.
