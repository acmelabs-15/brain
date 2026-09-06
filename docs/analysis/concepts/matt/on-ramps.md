---
package: matt
name: on-ramps
slug: on-ramps
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: docs/engineering/ask-matt.md, sha256: 813a78e29b999d895cbd2e7d95e09339e4d6dbf935c09133ac8dbd8dc3299299}
  - {path: external/ask-matt.md, sha256: 1fcf73a516b42ad9b5ddb1faa24574aad7490f97099e7b4276c364f870582b2d}
  - {path: skills/engineering/ask-matt/SKILL.md, sha256: b25d86fb36b1d294eeead5d7db529f86135f9671f2afcd607579a63bb2213769}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# on-ramps

## Definition — verbatim
> "A starting situation that generates work, then merges onto the main flow." — skills/engineering/ask-matt/SKILL.md:36

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/engineering/ask-matt.md | 30 | defined here | Describes on-ramps as routes for incoming bugs, broken systems, or foggy efforts that merge onto the main flow. |
| external/ask-matt.md | 37 | defined here | External catalog documentation detailing on-ramps into the engineering lifecycle. |
| skills/engineering/ask-matt/SKILL.md | 11 | defined here | Router definition establishing on-ramps as secondary pathways merging onto the main flow. |

## Consumes
Unstructured incoming work, reported bugs, or ambiguous project ideas.

## Produces
Triage-classified issues, reproducible regression tests, or clarified decision maps ready for the main flow.

## When applied
When work originates from an external source or requires disambiguation before entering the main flow.

## Sub-concepts
none

## Part of
none

## Implementation status
defects: doc-drift (router map lags newly added skills, false not installed bug due to disable-model-invocation)

## Design notes
Entry-point pathways in matt's lifecycle designed to intake messy, external, or highly ambiguous inputs (such as incoming bug reports in /triage, broken behaviors in /diagnosing-bugs, or vast foggy projects in /wayfinder). On-ramps structure and clarify this work until it can cleanly merge onto the main flow at /to-spec or /implement.
