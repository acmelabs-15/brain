---
package: matt
name: design document
slug: design-document
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

# design document

## Definition — verbatim
(used, not defined)

> "<code class=\"ah-code-inline\">.out-of-scope/</code> is one markdown file per rejected <strong class=\"ah-prose-strong\">concept</strong>, not per issue, written as a short design document rather than a database row: what was rejected, why, and every issue that has asked for it." — external/triage.md:40

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| external/triage.md | 40 | used here | Describes files in .out-of-scope/ as short markdown design documents per rejected concept documenting what was rejected, why, and citing requesting issues. |

## Consumes
A maintainer's decision to reject a requested enhancement, including the domain concept, reasoning, and linked issue discussions.

## Produces
A concise, structured markdown file in `.out-of-scope/` capturing the rejection rationale and historical issue references.

## When applied
Authored and stored in `.out-of-scope/` when closing an inbound enhancement request as `wontfix`.

## Sub-concepts
none

## Part of
.out-of-scope/, knowledge base, triage

## Implementation status
clean

## Design notes
In Matt Pocock's triage framework, a design document is a compact markdown record stored under `.out-of-scope/` representing a deliberate product or architectural boundary. Rather than recording rejections as ephemeral issue comments or database entries, each document treats a rejected feature idea as an enduring domain concept, enabling semantic matching against subsequent proposals and saving maintainers from repeated deliberation.
