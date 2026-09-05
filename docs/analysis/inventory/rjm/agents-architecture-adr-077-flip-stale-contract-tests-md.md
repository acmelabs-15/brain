---
package: rjm
path: .agents/architecture/ADR-077-flip-stale-contract-tests.md
type: agent
bytes: 8076
unit: inv-rjm-32
in_scope_via: .agents/architecture/README.md
aliases: []
memo_inputs:
  - {path: .agents/architecture/ADR-077-flip-stale-contract-tests.md, sha256: c4b19bb8f1453828b502f31578a375d9fd70f1446abf25e4f094ca50a2efd652}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .agents/architecture/ADR-077-flip-stale-contract-tests.md

## Purpose — required, verbatim
> "Add a governance rule to `.agents/governance/TESTING-RIGOR.md`: when a change alters an observable contract, the author must find and flip stale tests in the same diff." — .agents/architecture/ADR-077-flip-stale-contract-tests.md:32

## Design intent — required
Architecture decision record establishing a 90-day experimental governance rule in `.agents/governance/TESTING-RIGOR.md` requiring authors of contract-changing modifications to search for and update (flip) tests asserting the previous observable contract within the same diff, accompanied by rationale in the commit body. Solves the false-pass failure mode where existing test suites pass green despite encoding obsolete return values, signatures, exceptions, or error messages, preventing stale behavioral assertions from surviving silently into production.

## Phase — required
cross-phase

## Inputs — required
- Issue #2789 mirror-obligation cognition epic and #2791 testing-rigor child issue — .agents/architecture/ADR-077-flip-stale-contract-tests.md:28
- Existing test rigor rule in `TESTING-RIGOR.md` — .agents/architecture/ADR-077-flip-stale-contract-tests.md:24

## Outputs — required
- Governance rule update in `.agents/governance/TESTING-RIGOR.md` requiring authors to find and flip stale tests — .agents/architecture/ADR-077-flip-stale-contract-tests.md:32
- Commit body explanation requirement for changed test assertions — .agents/architecture/ADR-077-flip-stale-contract-tests.md:38
- Review verification checklist criteria — .agents/architecture/ADR-077-flip-stale-contract-tests.md:101-105

## Invokes — required
- doc TESTING-RIGOR.md — .agents/architecture/ADR-077-flip-stale-contract-tests.md:24
- agent implementer — .agents/architecture/ADR-077-flip-stale-contract-tests.md:124
- agent critic — .agents/architecture/ADR-077-flip-stale-contract-tests.md:125
- reference ADR-023 — .agents/architecture/ADR-077-flip-stale-contract-tests.md:137
- reference ADR-057 — .agents/architecture/ADR-077-flip-stale-contract-tests.md:138

## Invoked by — required
- doc readme — .agents/architecture/README.md:179

## Concepts named — required, verbatim
- `Flip Stale Contract Tests` — .agents/architecture/ADR-077-flip-stale-contract-tests.md:12 — defined here
- `TESTING-RIGOR.md` — .agents/architecture/ADR-077-flip-stale-contract-tests.md:24 — used here
- `mirror-obligation synthesis` — .agents/architecture/ADR-077-flip-stale-contract-tests.md:28 — used here
- `observable contract` — .agents/architecture/ADR-077-flip-stale-contract-tests.md:32 — defined here
- `coverage targets` — .agents/architecture/ADR-077-flip-stale-contract-tests.md:48 — used here
- `verification steps` — .agents/architecture/ADR-077-flip-stale-contract-tests.md:48 — used here
- `branch coverage` — .agents/architecture/ADR-077-flip-stale-contract-tests.md:54 — used here
- `Mutation testing` — .agents/architecture/ADR-077-flip-stale-contract-tests.md:73 — used here
- `snapshot testing` — .agents/architecture/ADR-077-flip-stale-contract-tests.md:73 — used here
- `consumer-driven contract tests` — .agents/architecture/ADR-077-flip-stale-contract-tests.md:73 — used here
- `pure refactors` — .agents/architecture/ADR-077-flip-stale-contract-tests.md:90 — used here
- `critic agent` — .agents/architecture/ADR-077-flip-stale-contract-tests.md:107 — used here
- `implementer` — .agents/architecture/ADR-077-flip-stale-contract-tests.md:107 — used here
- `inverse tests` — .agents/architecture/ADR-077-flip-stale-contract-tests.md:107 — defined here

## Structure
- # ADR-077: Flip Stale Contract Tests
- ## Status
- ## Date
- ## Context
- ## Decision
- ## Prior Art Investigation
- ### What Currently Exists
- ### Historical Rationale
- ### Why Change Now
- ## Rationale
- ### Alternatives Considered
- ### Trade-offs
- ## Consequences
- ### Positive
- ### Negative
- ### Neutral
- ## Confirmation
- ## Legacy Migration Strategy
- ## Review Checkpoint
- ## Impact on Dependent Components
- ## Implementation Notes
- ## Related Decisions
- ## References

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
- This ADR establishes a 90-day experimental governance rule with a scheduled review checkpoint on 2026-09-27 to evaluate whether it catches stale assertions or generates unnecessary friction.
- Enforces behavioral discipline at the author and reviewer level via grep and commit message justification rather than through automated CI enforcement during the initial trial period.

## Context cost
8076 bytes (~2019 tokens). Reference decision record that loads no child modules or dependencies on invocation.
