---
package: addy
name: Measurement Commands
slug: measurement-commands
kind: reference
package_phase: cross-phase
implementation_in_scope: true
memo_inputs:
  - {path: references/performance-checklist.md, sha256: 40f564d1e62341e277c01ba42c42d95264b9ef3b8e5a23249dc6e121a7e70067}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# Measurement Commands

## Definition — verbatim
(used, not defined)
> "## Measurement Commands" — references/performance-checklist.md:185

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| references/performance-checklist.md | 12 | defines | Section detailing CLI measurement tooling (Lighthouse, bundle visualizers, web-vitals attribution) and DevTools profiling workflows |

## Consumes
Running web application, production build artifacts (stats.json), user interaction events

## Produces
Concrete command lines for Lighthouse auditing, bundle inspection, and real-user metric logging

## When applied
When establishing baselines, diagnosing interaction delays, or verifying bundle budgets

## Sub-concepts
none

## Part of
performance-checklist

## Implementation status
clean

## Design notes
A curated set of CLI and SDK measurement commands enabling engineers to collect reproducible synthetic baselines and granular RUM attribution data for web vitals and bundles.
