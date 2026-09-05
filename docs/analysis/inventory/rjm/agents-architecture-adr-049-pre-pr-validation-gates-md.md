---
package: rjm
path: .agents/architecture/ADR-049-pre-pr-validation-gates.md
type: agent
bytes: 4635
unit: inv-rjm-18
in_scope_via: .agents/architecture/README.md
aliases: []
memo_inputs:
  - {path: .agents/architecture/ADR-049-pre-pr-validation-gates.md, sha256: e9fca386ce2c9bfe87b801d629d7ebf2d44a14111a1bb6906e8e07b991006470}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .agents/architecture/ADR-049-pre-pr-validation-gates.md

## Purpose — required, verbatim
> "All PRs MUST pass a local validation gate before creation. The gate checks:" — .agents/architecture/ADR-049-pre-pr-validation-gates.md:42

## Design intent — required
Architecture decision record establishing mandatory local pre-PR validation gates prior to pull request creation to prevent unconstrained scope expansion and reviewer burden (motivated by PR #908's 228+ review comments, 59 commits, and 95 changed files). Establishes quantitative thresholds (commit count <=20, files changed <=10, lines added <=500, zero blocking synthesis issues, full ADR compliance) alongside a structured bypass mechanism requiring session log justification and PR tagging.

## Phase — required
rjm:ship

## Inputs — required
- Git commit counts, file change sets, and line addition metrics against base branch — .agents/architecture/ADR-049-pre-pr-validation-gates.md:46-48
- Architecture review verdicts and ADR compliance status — .agents/architecture/ADR-049-pre-pr-validation-gates.md:49-50

## Outputs — required
- Local pre-PR validation verdicts, bypass justifications logged to session logs, and `bypass:pre-pr-gate` PR labels — .agents/architecture/ADR-049-pre-pr-validation-gates.md:54-58

## Invokes — required
- reference ADR-008 — .agents/architecture/ADR-049-pre-pr-validation-gates.md:106
- reference ADR-035 — .agents/architecture/ADR-049-pre-pr-validation-gates.md:107
- reference ADR-042 — .agents/architecture/ADR-049-pre-pr-validation-gates.md:108
- reference ADR-043 — .agents/architecture/ADR-049-pre-pr-validation-gates.md:109
- doc PROJECT-CONSTRAINTS.md — .agents/architecture/ADR-049-pre-pr-validation-gates.md:117

## Invoked by — required
- doc readme — .agents/architecture/README.md:169

## Concepts named — required, verbatim
- `Pre-PR Validation Gates` — .agents/architecture/ADR-049-pre-pr-validation-gates.md:12 — defined here
- `PR #908` — .agents/architecture/ADR-049-pre-pr-validation-gates.md:24 — used here
- `atomic commit standard` — .agents/architecture/ADR-049-pre-pr-validation-gates.md:27 — used here
- `advisory limits` — .agents/architecture/ADR-049-pre-pr-validation-gates.md:31 — used here
- `local validation gate` — .agents/architecture/ADR-049-pre-pr-validation-gates.md:42 — defined here
- `BLOCKING synthesis issues` — .agents/architecture/ADR-049-pre-pr-validation-gates.md:49 — used here
- `ADR compliance` — .agents/architecture/ADR-049-pre-pr-validation-gates.md:50 — used here
- `Bypass Mechanism` — .agents/architecture/ADR-049-pre-pr-validation-gates.md:52 — defined here
- `bypass:pre-pr-gate` — .agents/architecture/ADR-049-pre-pr-validation-gates.md:57 — defined here
- `shift-left` — .agents/architecture/ADR-049-pre-pr-validation-gates.md:81 — used here

## Structure
- # ADR-049: Pre-PR Validation Gates
- ## Status
- ## Date
- ## Context
- ### Forces
- ## Decision
- ### Bypass Mechanism
- ## Rationale
- ### Alternatives Considered
- ### Trade-offs
- ## Consequences
- ### Positive
- ### Negative
- ### Neutral
- ## Implementation Notes
- ## Related Decisions
- ## References

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- `missing-path` · `.agents/architecture/ADR-049-pre-pr-validation-gates.md:99` · References proposed `scripts/validate_pr_readiness.py` which does not exist in repository.
- `missing-path` · `.agents/architecture/ADR-049-pre-pr-validation-gates.md:101` · References `.claude/skills/push-pr` skill directory which does not exist in repository.
- `missing-path` · `.agents/architecture/ADR-049-pre-pr-validation-gates.md:31` · References `SESSION-PROTOCOL.md` which is not present in `.agents/` or repository root.

## Observations
Exemplifies shift-left quality engineering for AI coding agents by demonstrating that advisory documentation constraints fail under task completion pressure, requiring deterministic local enforcement prior to remote git push. Note that subsequent ADR-099 removed the commit-count gate component due to workflow friction.

## Context cost
4635 bytes (~1158 tokens). Architecture decision record for pre-submission PR gates.
