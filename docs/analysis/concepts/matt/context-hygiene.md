---
package: matt
name: context hygiene
slug: context-hygiene
kind: technique
package_phase: matt:engineering
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: external/to-spec.md, sha256: 41628409b39e15d59b669342fc26a9416c89af7eb2295fed324138e7e3dba8fd}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# context hygiene

## Definition — verbatim
> "The fix is context hygiene: don&#x27;t <a class=\"decoration-primary/40 underline-offset-4 hover:decoration-primary\" data-state=\"closed\" href=\"/ai-coding-dictionary/clearing\">clear</a> or <a class=\"decoration-primary/40 underline-offset-4 hover:decoration-primary\" data-state=\"closed\" href=\"/ai-coding-dictionary/compaction\">compact</a> between <code class=\"ah-code-inline\">/to-spec</code> and <code class=\"ah-code-inline\">/to-tickets</code>." — external/to-spec.md:57

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| external/to-spec.md | 57 | defined here | Prescribes context hygiene (avoiding /clear or /compact between /to-spec and /to-tickets) to prevent spec truncation issues. |

## Consumes
Active conversation context containing the generated specification from `/to-spec`.

## Produces
Preserved in-memory context across the transition from `/to-spec` to `/to-tickets`.

## When applied
Applied between executing `/to-spec` and `/to-tickets`.

## Sub-concepts
none

## Part of
to-spec, to-tickets

## Implementation status
defects: doc-drift

## Design notes
A context management discipline in Matt Pocock's workflow that avoids resetting or compacting agent context between `/to-spec` and `/to-tickets`, ensuring the full specification is directly readable in memory rather than truncated during tracker API round-trips.
