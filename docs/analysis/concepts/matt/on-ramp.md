---
package: matt
name: on-ramp
slug: on-ramp
kind: pattern
package_phase: matt:Triage
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: docs/engineering/triage.md, sha256: 7bdab6379baf24a6617db8349b53f332f1837227add23144d61ba9245eb15d14}
  - {path: external/triage.md, sha256: bd49b07f6c31218aa530c2da770e0fe60f893e266a9d5363f0e8891e4a094fbd}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# on-ramp

## Definition — verbatim
> "`triage` is an **on-ramp**, not a step in the main chain. The main flow runs from an idea you had (grill, spec, tickets, implement, review), and `triage` is the parallel lane for work that arrived instead." — docs/engineering/triage.md:99

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/engineering/triage.md | 99 | defined here | Defined as a parallel workflow lane for externally arriving work that merges into the main implementation pipeline. |
| external/triage.md | 50 | defined here | External documentation describing triage as an on-ramp for unsolicited inbound issues. |

## Consumes
External issues, bug reports, and unsolicited pull requests.

## Produces
Work items formatted and labeled to merge directly into the primary execution frontier (ready-for-agent).

## When applied
Applied when receiving external contributions or bug reports outside the planned feature cycle.

## Sub-concepts
none

## Part of
triage

## Implementation status
clean

## Design notes
An `on-ramp` describes a workflow pattern that accommodates work arriving outside the primary project lifecycle (such as public issue reports or community PRs). It processes and shapes external inputs into standardized artifacts that merge seamlessly into the core build chain without disrupting mainline planning.
