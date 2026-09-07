---
package: rjm
name: /spec
slug: spec
kind: phase
package_phase: rjm:spec
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: README.md, sha256: ca72955c7f43ad2e17a21064c0dfe9a7b2b594b958a130f1af308ad413640d7f}
  - {path: scripts/sync/detect_spec_drift.py, sha256: 4dc1517b2ead41c00958be4f3f4986ed5e2fa73971a79bac8c20a143afd635f6}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# /spec

## Definition — verbatim
> "   /spec          /plan          /build        /test         /review       /ship" — README.md:311

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| README.md | 311 | defined here | Slash command mapped to the DEFINE lifecycle stage in the workflow command diagram. |
| scripts/sync/detect_spec_drift.py | 4 | used here | Forward lifecycle path docstring cites `/spec` as the originating command turning intent into code. |

## Consumes
User feature request, problem description, or issue ticket.

## Produces
Comprehensive specification document, CVA matrix, user stories, acceptance criteria, and critic review signoff.

## When applied
Initiated at the beginning of development to refine ideas into actionable technical specifications.

## Sub-concepts
define, cva-matrix, acceptance-criteria

## Part of
lifecycle

## Implementation status
defects: missing-path, doc-drift

## Design notes
`/spec` is the primary entry-point command for the specification phase in rjm, initiating multi-agent discovery, customer value analysis (CVA), acceptance criteria generation, and specification review before planning.
