---
package: rjm
name: Anti-Marketing Language
slug: anti-marketing-language
kind: technique
package_phase: rjm:plan
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/agents/roadmap.md, sha256: 7ed4de246b37a0747c8dc4f6ac71820ed8753daf2d7045ed0726790977fb5de2}
  - {path: templates/agents/roadmap.shared.md, sha256: fd92ee8e3cf1daac90afd929e18eef500c446fc015b43703096a4dffb49592b1}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Anti-Marketing Language

## Definition — verbatim
> "Epic descriptions use precise technical language. Avoid:" — .claude/agents/roadmap.md:63

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/roadmap.md | 61 | defined here | Section requiring technical precision in epic descriptions over marketing buzzwords. |
| templates/agents/roadmap.shared.md | 67 | defined here | Defined in the shared roadmap template to enforce quantifiable engineering specifications. |

## Consumes
Epic descriptions, feature proposals, and requirement summaries.

## Produces
Quantifiable, technically precise acceptance specifications substituting buzzwords with SLAs, protocols, and latency percentiles.

## When applied
Applied when writing or reviewing roadmap epic descriptions before approval.

## Sub-concepts
none

## Part of
- roadmap

## Implementation status
defects: doc-drift

## Design notes
Anti-Marketing Language is an epistemic linting standard in rjm that bans promotional phrases ("seamless", "blazing fast", "enterprise-grade") from roadmap artifacts. It forces authors to replace qualitative hype with falsifiable engineering criteria (latencies, protocols, audit retention), ensuring that roadmap epics define testable technical targets rather than ungrounded marketing aspirations.
