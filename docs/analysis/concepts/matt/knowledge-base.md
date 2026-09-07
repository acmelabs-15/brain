---
package: matt
name: knowledge base
slug: knowledge-base
kind: artifact
package_phase: matt:Upkeep
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: external/triage.md, sha256: bd49b07f6c31218aa530c2da770e0fe60f893e266a9d5363f0e8891e4a094fbd}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# knowledge base

## Definition — verbatim
(used, not defined)

> "<code class=\"ah-code-inline\">wontfix</code> splits three ways, and the difference matters because only one of them writes to the knowledge base:" — external/triage.md:38

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| external/triage.md | 38 | used here | Refers to the project's repository of rejected enhancements in .out-of-scope/ consulted during triage deduplication checks. |

## Consumes
Rejected enhancement decisions detailing the rejected feature idea, rationale for refusal, and referencing issue numbers.

## Produces
A persistent, searchable repository of rejected design concepts in `.out-of-scope/` used by triage to prevent re-litigating settled decisions.

## When applied
Consulted during every `/triage` run prior to evaluating issues; written to when closing an enhancement request as `wontfix`.

## Sub-concepts
.out-of-scope/, design-document

## Part of
triage

## Implementation status
clean

## Design notes
The knowledge base in Matt Pocock's triage workflow is the `.out-of-scope/` directory, which maintains structured markdown design documents for explicitly rejected product enhancements. By searching this knowledge base by conceptual similarity rather than exact keywords, `/triage` detects duplicate enhancement proposals and surfaces historical architectural boundaries without wasting maintainer effort re-debating settled choices.
