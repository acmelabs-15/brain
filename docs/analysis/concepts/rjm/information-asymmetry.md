---
package: rjm
name: Information Asymmetry
slug: information-asymmetry
kind: technique
package_phase: rjm:support
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/agents/negotiation.md, sha256: 1caac2daaa29dde1d3f672383afb71a93b165b4d6f9fb267c62081e03994aff4}
  - {path: templates/agents/negotiation.shared.md, sha256: f3c95963b9fcb4b3824e2ae1bfc03e514aca724e316bce209a0742f8394023a5}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Information Asymmetry

## Definition — verbatim
> "- `information-asymmetry`: What each party knows vs. does not know" — .claude/agents/negotiation.md:63

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/negotiation.md | 95 | used here | Structured analysis section identifying known and unknown information between parties. |
| templates/agents/negotiation.shared.md | 101 | defined here | Shared template output section enumerating information differentials. |

## Consumes
Disclosed offer details, confidential business context, and market intelligence.

## Produces
Two-column audit mapping "We know, they don't" versus "They likely know, we don't".

## When applied
Conducted during Step 2 of the RADAR negotiation analysis protocol.

## Sub-concepts
none

## Part of
analyze-map-the-zone

## Implementation status
clean

## Design notes
Information Asymmetry maps the differential knowledge distribution between negotiating parties. In rjm, making explicit what each party knows and does not know prevents accidental leakage of private constraints and directs discovery questions toward critical knowledge gaps.
