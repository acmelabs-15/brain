---
package: matt
name: canonical
slug: canonical
kind: pattern
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

# canonical

## Definition — verbatim
(used, not defined)

> "The role names below are <strong class=\"ah-prose-strong\">canonical</strong>; the label strings in your tracker may differ, and the mapping is what setup provides." — external/triage.md:32

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| external/triage.md | 32 | used here | Distinguishes canonical triage role names from tracker-specific label strings mapped during repository setup. |

## Consumes
The standard concept names of the triage state machine.

## Produces
Normalized role names that abstract away underlying platform label conventions.

## When applied
Applied when configuring or interpreting issue tracker labels in `/triage`.

## Sub-concepts
none

## Part of
label vocabulary, triage

## Implementation status
clean

## Design notes
The convention of maintaining standardized, tool-agnostic role names (`bug`, `enhancement`, `needs-triage`, `needs-info`, `ready-for-agent`, `ready-for-human`, `wontfix`) across all skills, mapping them to local tracker labels without coupling workflow logic to platform strings.
