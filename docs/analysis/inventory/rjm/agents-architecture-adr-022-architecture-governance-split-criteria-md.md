---
package: rjm
path: .agents/architecture/ADR-022-architecture-governance-split-criteria.md
type: agent
bytes: 18345
unit: inv-rjm-10
in_scope_via: .agents/architecture/README.md
aliases: []
memo_inputs:
  - {path: .agents/architecture/ADR-022-architecture-governance-split-criteria.md, sha256: da77b4cbae09bfeb2e26a5ca1a2f486548a991e8e1dfd80f4226e3c1c32fa60a}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .agents/architecture/ADR-022-architecture-governance-split-criteria.md

## Purpose — required, verbatim
> "Adopt a **hybrid approach** with explicit split criteria:" — .agents/architecture/ADR-022-architecture-governance-split-criteria.md:69

## Design intent — required
Establishes a comprehensive taxonomy and decision workflow to delineate between architectural decisions (`.agents/architecture/`) and operational governance policies (`.agents/governance/`). Evaluates the tension between the MADR "Any Decision Record" philosophy (which risks diluting architectural clarity with operational churn) and strict segregation (which risks disconnecting policy from technical context). Adopts a three-tier model: ADR-only for technical, design-time decisions affecting structure and quality attributes; Governance-only for operational standards and compliance policies; and Split (ADR + Governance) when an immutable architectural decision mandates evolving operational enforcement and compliance monitoring.

## Phase — required
none

## Inputs — required
Decision evaluation criteria (primary concern, architectural impact, enforcement requirement, change frequency, audience, reversibility), MADR debate literature, existing ADR-024 and COST-GOVERNANCE.md exemplar split, and ADR-021 bundled policy analysis.

## Outputs — required
Decision Classification Matrix, placement rules, decision workflow diagram, split triggers for existing ADRs, and formal templates for ADRs and governance policies.

## Invokes — required
- doc ADR-024 — .agents/architecture/ADR-022-architecture-governance-split-criteria.md:50
- doc COST-GOVERNANCE.md — .agents/architecture/ADR-022-architecture-governance-split-criteria.md:50
- doc ADR-021 — .agents/architecture/ADR-022-architecture-governance-split-criteria.md:54
- doc AI-REVIEW-MODEL-POLICY.md — .agents/architecture/ADR-022-architecture-governance-split-criteria.md:164
- doc ADR-013 — .agents/architecture/ADR-022-architecture-governance-split-criteria.md:233
- template .agents/architecture/ADR-TEMPLATE.md — .agents/architecture/ADR-022-architecture-governance-split-criteria.md:392
- template .agents/governance/POLICY-TEMPLATE.md — .agents/architecture/ADR-022-architecture-governance-split-criteria.md:393

## Invoked by — required
- doc .agents/architecture/README.md — .agents/architecture/README.md:165

## Concepts named — required, verbatim
- `Any Decision Record` — .agents/architecture/ADR-022-architecture-governance-split-criteria.md:24 — used here
- `MADR` — .agents/architecture/ADR-022-architecture-governance-split-criteria.md:28 — used here
- `hybrid approach` — .agents/architecture/ADR-022-architecture-governance-split-criteria.md:69 — defined here
- `Decision Classification Matrix` — .agents/architecture/ADR-022-architecture-governance-split-criteria.md:71 — defined here
- `ADR-only` — .agents/architecture/ADR-022-architecture-governance-split-criteria.md:86 — defined here
- `Governance-only` — .agents/architecture/ADR-022-architecture-governance-split-criteria.md:121 — defined here
- `Split` — .agents/architecture/ADR-022-architecture-governance-split-criteria.md:156 — defined here
- `Decision Workflow` — .agents/architecture/ADR-022-architecture-governance-split-criteria.md:213 — defined here
- `Architecturally Significant Requirements` — .agents/architecture/ADR-022-architecture-governance-split-criteria.md:422 — used here
- `RFC 2119` — .agents/architecture/ADR-022-architecture-governance-split-criteria.md:593 — used here

## Structure
- # ADR-022: Architecture vs Governance Decision Split Criteria — .agents/architecture/ADR-022-architecture-governance-split-criteria.md:12
- ## Status — .agents/architecture/ADR-022-architecture-governance-split-criteria.md:14
- ## Date — .agents/architecture/ADR-022-architecture-governance-split-criteria.md:18
- ## Context — .agents/architecture/ADR-022-architecture-governance-split-criteria.md:22
- ### The "Any Decision Record" Debate — .agents/architecture/ADR-022-architecture-governance-split-criteria.md:26
- ### Current Codebase Pattern — .agents/architecture/ADR-022-architecture-governance-split-criteria.md:43
- ## Decision — .agents/architecture/ADR-022-architecture-governance-split-criteria.md:67
- ### 1. Decision Classification Matrix — .agents/architecture/ADR-022-architecture-governance-split-criteria.md:71
- ### 2. Placement Rules — .agents/architecture/ADR-022-architecture-governance-split-criteria.md:84
- #### Use **ADR-only** when: — .agents/architecture/ADR-022-architecture-governance-split-criteria.md:86
- #### Use **Governance-only** when: — .agents/architecture/ADR-022-architecture-governance-split-criteria.md:121
- #### Use **Split (ADR + Governance)** when: — .agents/architecture/ADR-022-architecture-governance-split-criteria.md:156
- ### 3. Decision Workflow — .agents/architecture/ADR-022-architecture-governance-split-criteria.md:213
- ### 4. When to Split Existing ADRs — .agents/architecture/ADR-022-architecture-governance-split-criteria.md:240
- ## Rationale — .agents/architecture/ADR-022-architecture-governance-split-criteria.md:254
- ### Why Hybrid Approach? — .agents/architecture/ADR-022-architecture-governance-split-criteria.md:256
- ### Why Not "Any Decision Record" Everywhere? — .agents/architecture/ADR-022-architecture-governance-split-criteria.md:263
- ### Why Not Separate Everything? — .agents/architecture/ADR-022-architecture-governance-split-criteria.md:272
- ## Alternatives Considered — .agents/architecture/ADR-022-architecture-governance-split-criteria.md:281
- ### Alternative 1: "Any Decision Record" Everywhere — .agents/architecture/ADR-022-architecture-governance-split-criteria.md:283
- ### Alternative 2: Strict ADR + Separate Policy Directory — .agents/architecture/ADR-022-architecture-governance-split-criteria.md:301
- ### Alternative 3: Policy References in ADRs (No Governance Directory) — .agents/architecture/ADR-022-architecture-governance-split-criteria.md:319
- ### Alternative 4: Tags/Metadata Instead of Directory Split — .agents/architecture/ADR-022-architecture-governance-split-criteria.md:337
- ## Consequences — .agents/architecture/ADR-022-architecture-governance-split-criteria.md:353
- ### Positive — .agents/architecture/ADR-022-architecture-governance-split-criteria.md:355
- ### Negative — .agents/architecture/ADR-022-architecture-governance-split-criteria.md:363
- ### Neutral — .agents/architecture/ADR-022-architecture-governance-split-criteria.md:370
- ## Implementation Guidance — .agents/architecture/ADR-022-architecture-governance-split-criteria.md:375
- ### For New Decisions — .agents/architecture/ADR-022-architecture-governance-split-criteria.md:377
- ### For Existing Decisions — .agents/architecture/ADR-022-architecture-governance-split-criteria.md:384
- ### Template Locations — .agents/architecture/ADR-022-architecture-governance-split-criteria.md:390
- ### Enforcement — .agents/architecture/ADR-022-architecture-governance-split-criteria.md:395
- ## Success Metrics — .agents/architecture/ADR-022-architecture-governance-split-criteria.md:401
- ## Related Decisions — .agents/architecture/ADR-022-architecture-governance-split-criteria.md:410
- ## References — .agents/architecture/ADR-022-architecture-governance-split-criteria.md:416
- ## Appendix A: Real-World Examples — .agents/architecture/ADR-022-architecture-governance-split-criteria.md:428
- ### Example 1: ADR-024 + COST-GOVERNANCE (Split Pattern) — .agents/architecture/ADR-022-architecture-governance-split-criteria.md:430
- ### Example 2: naming-conventions.md (Governance-only) — .agents/architecture/ADR-022-architecture-governance-split-criteria.md:448
- ### Example 3: ADR-021 Model Routing (Candidate for Split) — .agents/architecture/ADR-022-architecture-governance-split-criteria.md:459
- ## Appendix B: Decision Workflow Examples — .agents/architecture/ADR-022-architecture-governance-split-criteria.md:482
- ### Case 1: New Linting Tool Selection — .agents/architecture/ADR-022-architecture-governance-split-criteria.md:484
- ### Case 2: API Authentication Strategy — .agents/architecture/ADR-022-architecture-governance-split-criteria.md:496
- ### Case 3: Database Migration Strategy — .agents/architecture/ADR-022-architecture-governance-split-criteria.md:509
- ## Appendix C: Templates — .agents/architecture/ADR-022-architecture-governance-split-criteria.md:525
- ### ADR Template — .agents/architecture/ADR-022-architecture-governance-split-criteria.md:527
- ### Governance Policy Template — .agents/architecture/ADR-022-architecture-governance-split-criteria.md:581

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- missing-path · .agents/architecture/ADR-022-architecture-governance-split-criteria.md:393 · References `.agents/governance/POLICY-TEMPLATE.md` to be created, but the file does not exist in the repository.

## Observations
Provides a well-grounded analysis of decision architecture, offering practical workflows for maintaining immutable ADR records while permitting operational governance policies to adapt. Forms the justification for splitting ADR-021 and ADR-024 from their operational policies.

## Context cost
18345 bytes, ~4600 tokens. Loads no external files.
