---
package: rjm
name: Security Model
slug: security-model
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/projects/v0.4.0/PLAN.md, sha256: baac365e5ebb496bc12b222f22255687cd233cfaa43be637433f2d3f8a898570}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Security Model

## Definition — verbatim
(used, not defined)

> "## Security Model" — .agents/projects/v0.4.0/PLAN.md:624

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/projects/v0.4.0/PLAN.md | 624 | defined here | Section heading outlining security controls across supply chain pinning, hook execution context, path containment, and secret masking. |

## Consumes
Threat model findings, ADR-045 security review requirements, and consumer trust boundary definitions.

## Produces
Architectural security policies and enforcement mechanisms across plugins.

## When applied
Applied across all phases of framework extraction and consumer plugin installation.

## Sub-concepts
none

## Part of
v0-4-0-milestone-framework-extraction-awesome-ai

## Implementation status
defects: missing-path, doc-drift

## Design notes
The Security Model in rjm's v0.4.0 plan defines defensive controls for extracting and distributing agent frameworks as plugins. It addresses the lack of platform sandboxing in Claude Code by requiring strict cryptographic SHA pinning of plugins and CI actions, fail-closed path normalization via `get_safe_path()`, and mandatory secret masking to protect consumer repositories from supply chain compromises and credential leakage.
