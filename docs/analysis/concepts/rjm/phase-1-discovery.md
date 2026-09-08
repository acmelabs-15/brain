---
package: rjm
name: Phase 1: Discovery
slug: phase-1-discovery
kind: phase
package_phase: none
implementation_in_scope: true
deprecated: false
verified: 2026-09-08 quote-check+coverage
memo_inputs:
  - {path: templates/agents/quality-auditor.shared.md, sha256: 73cdee7f95b0c0e748d6ceeaea42ab94ddb32653de6c146cbeb4311d995d5713}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Phase 1: Discovery

## Definition — verbatim
> "### Phase 1: Discovery" — templates/agents/quality-auditor.shared.md:62

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| templates/agents/quality-auditor.shared.md | 62 | defined here | First phase of the quality auditor process, auto-detecting and validating repository domains. |

## Consumes
Repository structure and automated domain discovery via `grade_domains.py`.

## Produces
Validated inventory of detected and specified domains to audit.

## When applied
Executed at the start of a quality audit session before grading begins.

## Sub-concepts
grade-domains-py

## Part of
quality-auditor

## Implementation status
defects: missing-path

## Design notes
The initial phase of the quality auditor agent that discovers and enumerates repository domains across architectural layers, ensuring full coverage before grading commences.
