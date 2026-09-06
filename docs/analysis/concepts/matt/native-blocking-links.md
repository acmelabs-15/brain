---
package: matt
name: native blocking links
slug: native-blocking-links
kind: artifact
package_phase: matt:to-tickets
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: CHANGELOG.md, sha256: ef5b5c5dfab4103bebcff8820eadbc9634b45fb06c2098c5ce39fb83039b4bcd}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# native blocking links

## Definition — verbatim
> "a **real tracker** writes them as native blocking links, so any ticket whose blockers are done is on the frontier and several agents can run at once." — CHANGELOG.md:183

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| CHANGELOG.md | 183 | defined here | Defined in changelog as real-tracker dependency links enabling parallel agent execution |

## Consumes
Inter-ticket dependency declarations emitted by `/to-tickets`

## Produces
First-class dependency relationships in issue tracking tools (GitHub, Linear)

## When applied
When publishing decomposed tickets to remote issue trackers that support blocking relationships

## Sub-concepts
none

## Part of
to-tickets

## Implementation status
defects: doc-drift (external/to-tickets.md:58 notes blocking dependencies written into issue bodies instead of using gh issue create --blocked-by)

## Design notes
Native blocking links utilize the host tracker's built-in relationship model to represent dependencies directly in the tracker UI, allowing automated dispatchers to identify unblocked tickets on the frontier without manual coordination.
