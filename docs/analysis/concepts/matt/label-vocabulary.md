---
package: matt
name: label vocabulary
slug: label-vocabulary
kind: reference
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

# label vocabulary

## Definition — verbatim
> "<code class=\"ah-code-inline\">triage</code> reads and writes your issue tracker, so <a class=\"ah-prose-a\" href=\"/skills-setup-matt-pocock-skills\">setup-matt-pocock-skills</a> has to have configured that tracker and its label vocabulary first." — external/triage.md:32

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| external/triage.md | 32 | defined here | Establishes the label vocabulary as the mapping between tracker-specific label strings and canonical triage roles configured by setup. |

## Consumes
Repository issue tracker setup configuration.

## Produces
Configured issue tracker labels and mapping rules stored in `docs/agents/triage-labels.md`.

## When applied
Configured during initial repository setup and read during every `/triage` and `/to-tickets` run.

## Sub-concepts
category role, state role

## Part of
setup-matt-pocock-skills, triage

## Implementation status
defects: missing-path

## Design notes
The formal set of labels and tracker-specific string mappings configured for a repository to represent the canonical two-category and five-state triage roles.
