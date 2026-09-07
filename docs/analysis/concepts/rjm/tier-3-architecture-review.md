---
package: rjm
name: Tier 3 architecture review
slug: tier-3-architecture-review
kind: gate
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-058-agent-eval-discipline.md, sha256: 772b9974abe96bcf928a8c9e89bd63fa9ecfb82e51baff7ccbfc07ce198daf51}
  - {path: .agents/specs/requirements/REQ-004-agent-eval-harness-spike.md, sha256: d4d4d47d8635f0c96a17abe1ff50382189eea4aab68a7a7e39bf691d033c6e0a}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Tier 3 architecture review

## Definition — verbatim
(used, not defined)

> "The architect role owns the graduate / audit / scrap / halt-due-to-flakiness decision via Tier 3 architecture review." — .agents/architecture/ADR-058-agent-eval-discipline.md:200

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-058-agent-eval-discipline.md | 200 | used here | Designates architect role ownership of evaluation verdicts via Tier 3 architecture review before PR merge |
| .agents/specs/requirements/REQ-004-agent-eval-harness-spike.md | 223 | used here | Establishes decision owner as the architect role via Tier 3 architecture review |

## Consumes
Completed spike evaluation reports (`REPORT.md`, `report.json`) with metrics and proposed recommendation verdicts.

## Produces
Ratified architectural decision approving or rejecting agent graduation, audit retention, or scrapping.

## When applied
Applied before committing and merging final evaluation verdicts for specialized agents.

## Sub-concepts
none

## Part of
none

## Implementation status
defects: doc-drift, internal-contradiction, missing-path

## Design notes
Tier 3 architecture review is the mandatory governance gate where an architect-tier reviewer evaluates and ratifies offline eval verdicts before they can be committed to the repository. In rjm's process, it ensures that automated statistical signals are critically reviewed for methodology soundness and system-wide implications before changes are merged.
