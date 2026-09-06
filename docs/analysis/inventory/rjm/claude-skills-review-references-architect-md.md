---
package: rjm
path: .claude/skills/review/references/architect.md
type: reference
bytes: 10952
unit: inv-rjm-150
in_scope_via: .claude/skills/review/SKILL.md
aliases: []
memo_inputs:
  - {path: .claude/skills/review/references/architect.md, sha256: 7b7b77787fd3abd5ba75cfe3c29a5e7f91d33a661c2788f9b29a96f95a992e6e}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/skills/review/references/architect.md

## Purpose — required, verbatim
> "PR review focused on architectural design, system structure, and ADR conformance" — .claude/skills/review/references/architect.md:5

## Design intent — required
Specialized Stage-2 review prompt for the architect axis, evaluating pull requests for design pattern adherence, system boundaries and separation of concerns, extensibility and scalability, coupling and cohesion, breaking API changes, technical debt introduction, and Architectural Decision Record (ADR) conformance. It provides structured guidance on identifying ADR-worthy decisions (such as new external dependencies, protocol changes, or caching strategies) and cross-checks proposed changes against mental models including Chesterton's Fence, Conway's Law, and the 8 Fallacies of Distributed Computing. Without this reference prompt, architectural reviews would lack standardized criteria, allowing breaking changes, circular dependencies, unreviewed architectural decisions, and layer violations to merge without audit.

## Phase — required
rjm:review

## Inputs — required
- Pull request diff prepended with harness header `CONTEXT_MODE: [full|summary|partial]` (.claude/skills/review/references/architect.md:14)
- Existing ADRs located in `.agents/architecture/` or `docs/adr/` (.claude/skills/review/references/architect.md:105)
- Reference artifacts: `chestertons-fence` skill, `decision-critic` skill, `cva-analysis` skill, `.claude/skills/decision-critic/references/mental-models-conways-law.md`, `skillforge` multi-lens framework, `software-engineering-library` references, and `.claude/skills/observability/references/distributed-systems-fallacies.md` (.claude/skills/review/references/architect.md:47-53)

## Outputs — required
- Design Quality Assessment table (scores 1-5 across Pattern Adherence, Boundary Respect, Coupling, Cohesion, Extensibility) and Overall Design Score (.claude/skills/review/references/architect.md:120-130)
- Architectural Concerns table with Severity, Concern, Location, and Recommendation (.claude/skills/review/references/architect.md:132-136)
- Breaking Change Assessment covering Breaking Changes, Impact Scope, Migration Required, Migration Path (.claude/skills/review/references/architect.md:138-143)
- Technical Debt Analysis covering Debt Added, Debt Reduced, Net Impact (.claude/skills/review/references/architect.md:145-149)
- ADR Assessment covering ADR Required, Decisions Identified, Existing ADR, Recommendation (.claude/skills/review/references/architect.md:151-157)
- Recommendations list (.claude/skills/review/references/architect.md:158-160)
- Verdict line matching `(?m)^\s*(?i:(?:Final\s+)?Verdict):\s*\[?(PASS|WARN|CRITICAL_FAIL|REJECTED|FAIL|NEEDS_REVIEW|NON_COMPLIANT|COMPLIANT|PARTIAL|UNKNOWN)(?![|A-Z_])\]?` (.claude/skills/review/references/architect.md:171, 231-232)
- Structured JSON block conforming to inline schema with fields `verdict`, `message`, `agent`, `timestamp`, and `findings` array (.claude/skills/review/references/architect.md:189-206)

## Invokes — required
- skill chestertons-fence — .claude/skills/review/references/architect.md:47
- skill decision-critic — .claude/skills/review/references/architect.md:48
- skill cva-analysis — .claude/skills/review/references/architect.md:49
- reference mental-models-conways-law.md — .claude/skills/review/references/architect.md:50
- reference multi-lens-framework.md — .claude/skills/review/references/architect.md:51
- reference distributed-systems-fallacies.md — .claude/skills/review/references/architect.md:53
- script verdict.py — .claude/skills/review/references/architect.md:234

## Invoked by — required
- skill review — .claude/skills/review/SKILL.md:2

## Concepts named — required, verbatim
- `architect` — .claude/skills/review/references/architect.md:2 — defined here
- `Context Mode Enforcement` — .claude/skills/review/references/architect.md:12 — defined here
- `CONTEXT_MODE` — .claude/skills/review/references/architect.md:14 — used here
- `manipulation-resistance control` — .claude/skills/review/references/architect.md:31 — defined here
- `Grounding Rules` — .claude/skills/review/references/architect.md:36 — defined here
- `Conway's Law` — .claude/skills/review/references/architect.md:50 — used here
- `clean architecture` — .claude/skills/review/references/architect.md:52 — used here
- `domain-driven design` — .claude/skills/review/references/architect.md:52 — used here
- `enterprise patterns` — .claude/skills/review/references/architect.md:52 — used here
- `8 Fallacies of Distributed Computing` — .claude/skills/review/references/architect.md:53 — used here
- `Design Pattern Adherence` — .claude/skills/review/references/architect.md:57 — defined here
- `SOLID` — .claude/skills/review/references/architect.md:59 — used here
- `DRY` — .claude/skills/review/references/architect.md:59 — used here
- `KISS` — .claude/skills/review/references/architect.md:59 — used here
- `System Boundaries` — .claude/skills/review/references/architect.md:64 — defined here
- `Extensibility & Scalability` — .claude/skills/review/references/architect.md:71 — defined here
- `Coupling & Cohesion` — .claude/skills/review/references/architect.md:78 — defined here
- `Breaking Changes` — .claude/skills/review/references/architect.md:85 — defined here
- `Technical Debt` — .claude/skills/review/references/architect.md:92 — defined here
- `Architecture Decision Records` — .claude/skills/review/references/architect.md:99 — defined here
- `Design Quality Assessment` — .claude/skills/review/references/architect.md:120 — defined here
- `Overall Design Score` — .claude/skills/review/references/architect.md:130 — defined here
- `Architectural Concerns` — .claude/skills/review/references/architect.md:132 — defined here
- `Breaking Change Assessment` — .claude/skills/review/references/architect.md:138 — defined here
- `Technical Debt Analysis` — .claude/skills/review/references/architect.md:145 — defined here
- `ADR Assessment` — .claude/skills/review/references/architect.md:151 — defined here
- `Critical Failure Triggers` — .claude/skills/review/references/architect.md:175 — defined here
- `Structured JSON Output` — .claude/skills/review/references/architect.md:187 — defined here
- `Output Schema` — .claude/skills/review/references/architect.md:209 — defined here
- `extract_verdict` — .claude/skills/review/references/architect.md:226 — used here
- `merge_verdicts` — .claude/skills/review/references/architect.md:234 — used here

## Structure
- # Architect Review Task (.claude/skills/review/references/architect.md:8)
- ## Context Mode Enforcement (REQUIRED) (.claude/skills/review/references/architect.md:12)
- ## Grounding Rules (.claude/skills/review/references/architect.md:36)
- ## Reference Material (.claude/skills/review/references/architect.md:43)
- ## Analysis Focus Areas (.claude/skills/review/references/architect.md:55)
  - ### 1. Design Pattern Adherence (.claude/skills/review/references/architect.md:57)
  - ### 2. System Boundaries (.claude/skills/review/references/architect.md:64)
  - ### 3. Extensibility & Scalability (.claude/skills/review/references/architect.md:71)
  - ### 4. Coupling & Cohesion (.claude/skills/review/references/architect.md:78)
  - ### 5. Breaking Changes (.claude/skills/review/references/architect.md:85)
  - ### 6. Technical Debt (.claude/skills/review/references/architect.md:92)
  - ### 7. Architecture Decision Records (ADRs) (.claude/skills/review/references/architect.md:99)
- ## Output Requirements (.claude/skills/review/references/architect.md:116)
  - ### Design Quality Assessment (.claude/skills/review/references/architect.md:120)
  - ### Architectural Concerns (.claude/skills/review/references/architect.md:132)
  - ### Breaking Change Assessment (.claude/skills/review/references/architect.md:138)
  - ### Technical Debt Analysis (.claude/skills/review/references/architect.md:145)
  - ### ADR Assessment (.claude/skills/review/references/architect.md:151)
  - ### Recommendations (.claude/skills/review/references/architect.md:158)
  - ### Verdict (.claude/skills/review/references/architect.md:162)
- ## Critical Failure Triggers (.claude/skills/review/references/architect.md:175)
- ## Structured JSON Output (.claude/skills/review/references/architect.md:187)
- ## Output Schema (.claude/skills/review/references/architect.md:209)

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- doc-drift — .claude/skills/review/references/architect.md:134 — Architectural Concerns table schema uses columns `Severity | Concern | Location | Recommendation`, omitting the required `Category` field that Output Schema (.claude/skills/review/references/architect.md:215) and JSON Schema (.claude/skills/review/references/architect.md:200) require (`category: design-pattern|boundaries|coupling|cohesion|extensibility|breaking-change|tech-debt|adr`).
- doc-drift — .claude/skills/review/references/architect.md:52 — Mentions `software-engineering-library` references without citing a specific markdown file path under that directory.
- missing-path — .claude/skills/review/references/architect.md:105 — Mentions `docs/adr/` as an alternative ADR directory, which does not exist in `sources/rjm/` (where `.agents/architecture/` is used).
- other — .claude/skills/review/references/architect.md:34 — Cites `.agents/governance/AI-REVIEW-MODEL-POLICY.md` and `.agents/schemas/pr-quality-gate-output.schema.json` (:189), which are upstream-only artifacts absent in vendored plugin installations (declared vendor portability notice at :239).

## Observations
- Comprehensive ADR triggers: Lines 107-115 explicitly enumerate mandatory ADR triggers (new external dependencies, changes to data storage or caching strategies, new integration patterns or protocols, security architecture changes, performance trade-offs, pattern deprecation).
- Strict critical failure triggers: Lines 177-186 mandate `CRITICAL_FAIL` on breaking changes to public APIs without migration path, circular dependencies, abstraction layer bypasses, god objects (>10 responsibilities), hard-coded dependencies that should be injected, presentation-to-data direct access, and significant architectural decisions lacking an ADR.

## Context cost
10,952 bytes (~2,740 tokens). If loading referenced skill materials (`chestertons-fence`, `decision-critic`, `cva-analysis`, and distributed systems references), total evaluation context can exceed 45,000 bytes (~11,250 tokens).
