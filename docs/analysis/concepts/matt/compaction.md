---
package: matt
name: compaction
slug: compaction
kind: technique
package_phase: cross-phase
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

# compaction

## Definition — verbatim
(used, not defined)

> "The fix is context hygiene: don&#x27;t <a class=\"decoration-primary/40 underline-offset-4 hover:decoration-primary\" data-state=\"closed\" href=\"/ai-coding-dictionary/clearing\">clear</a> or <a class=\"decoration-primary/40 underline-offset-4 hover:decoration-primary\" data-state=\"closed\" href=\"/ai-coding-dictionary/compaction\">compact</a> between <code class=\"ah-code-inline\">/to-spec</code> and <code class=\"ah-code-inline\">/to-tickets</code>." — external/to-spec.md:57

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| external/to-spec.md | 57 | used here | Warned against between /to-spec and /to-tickets to prevent truncating large specs. |

## Consumes
An active agent context window.

## Produces
A summarized or condensed context representation.

## When applied
Applied when an agent conversation approaches context limits, but avoided across spec-to-ticket transitions.

## Sub-concepts
none

## Part of
context hygiene

## Implementation status
clean

## Design notes
An automated or user-initiated context compression mechanism that summarises past conversation turns, which Matt cautions against when transitioning from `/to-spec` to `/to-tickets` because lossy compaction destroys detailed specification context.
