---
package: rjm
name: Boundary Audit
slug: boundary-audit
kind: technique
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/world-model-diagnostic/SKILL.md, sha256: 1d4618c507facabd7551cdd650759bf7c952d3d199d25fd7f0e0b929b519728d}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Boundary Audit

## Definition — verbatim
> "### Phase 4: Boundary Audit" — .claude/skills/world-model-diagnostic/SKILL.md:142

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/world-model-diagnostic/SKILL.md | 142 | defined here | Phase heading defining the structured inspection of high-value information flows to classify automated routing vs human editorial review. |

## Consumes
Prioritized operational information flows (top 5 to 10) impacting money, customers, roadmap, risk, or staffing.

## Produces
A structured boundary audit table capturing flow names, sources, consumers, current human editors, classification (`act on this` vs `interpret this first`), and exposure levels.

## When applied
> "audit where we automate judgment" — .claude/skills/world-model-diagnostic/SKILL.md:31

## Sub-concepts
boundary-layer, editorial-judgment, simulated-judgment

## Part of
world-model-diagnostic

## Implementation status
defects: missing-path (.claude/skills/world-model-diagnostic/SKILL.md:290); orphan (.claude/skills/world-model-diagnostic/SKILL.md:2)

## Design notes
A targeted auditing technique in rjm that systematically examines high-value business information flows to establish whether automated agents can safely act on data directly or whether human interpretation must occur first. It provides the empirical foundation needed to configure safe autonomous boundaries.
