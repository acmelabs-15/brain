---
package: addy
name: TTFB Diagnosis
slug: ttfb-diagnosis
kind: technique
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

# TTFB Diagnosis

## Definition — verbatim
> "When TTFB is slow (> 800ms), check each component in DevTools Network waterfall:" — references/performance-checklist.md:25

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| references/performance-checklist.md | 8 | defines | Diagnostic procedure outlining systematic investigation steps for slow Time to First Byte in browser network waterfalls |

## Consumes
Network waterfall traces, server response metrics (> 800ms TTFB)

## Produces
Root cause isolation across DNS resolution, TCP/TLS handshakes, and server processing

## When applied
When web pages experience high initial response latency or poor TTFB during loading

## Sub-concepts
none

## Part of
performance-checklist

## Implementation status
clean

## Design notes
A structured diagnostic technique to troubleshoot server response latency (> 800ms). It breaks TTFB into distinct network and compute stages (DNS, connection/TLS, server execution), prescribing targeted remediations for each.
