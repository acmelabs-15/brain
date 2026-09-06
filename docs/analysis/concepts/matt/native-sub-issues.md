---
package: matt
name: native sub-issues
slug: native-sub-issues
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

# native sub-issues

## Definition — verbatim
> "Publishing prefers the tracker's **native sub-issues** for parent → slice and **native blocking edges** for `Blocked by` where the tracker supports them, keeping the `## Parent` / `## Blocked by` body sections as the fallback." — CHANGELOG.md:185

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| CHANGELOG.md | 185 | defined here | Defines preference for native tracker hierarchy over body text conventions |

## Consumes
A parent feature spec or epic and its constituent slice tickets

## Produces
Parent-child issue relationships in trackers supporting sub-issues

## When applied
When publishing breakdown tickets to issue trackers supporting sub-issue hierarchies (such as GitHub Issues v2.94+)

## Sub-concepts
none

## Part of
to-tickets

## Implementation status
defects: doc-drift (external/to-tickets.md:56 reports GitHub integration failing to create native sub-issues despite CLI support; issue #554)

## Design notes
Native sub-issues organize granular implementation slices beneath their parent specification using the tracker's native hierarchy, maintaining clear provenance and roll-up visibility across the project.
