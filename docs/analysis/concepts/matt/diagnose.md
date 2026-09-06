---
package: matt
name: diagnose
slug: diagnose
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: true
memo_inputs:
  - {path: .agents/adr/0001-explicit-setup-pointer-only-for-hard-dependencies.md, sha256: 8f60cf9bf19f1ee8cc09a15c2e06e1d7a9cb51f79d9a273dd9b20b8a2a494f80}
  - {path: external/diagnosing-bugs.md, sha256: e98918deb1006ce9e3e40d12e60c54410a8a9820225e85cb4a78c0323a8c5c40}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# diagnose

## Definition — verbatim
(used, not defined)
> "- **Soft dependency** (`diagnose`, `tdd`, `improve-codebase-architecture`): reference "the project's domain glossary" and "ADRs in the area you're touching" in vague prose only." — .agents/adr/0001-explicit-setup-pointer-only-for-hard-dependencies.md:8

## Also called — verbatim
> "What happened to <code class=\"ah-code-inline\">/diagnose</code>?" — external/diagnosing-bugs.md:64
> "Renamed to <code class=\"ah-code-inline\">/diagnosing-bugs</code> in v1.0.0." — external/diagnosing-bugs.md:65

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/adr/0001-explicit-setup-pointer-only-for-hard-dependencies.md | 8 | used here | Listed as an exemplar soft-dependency engineering skill |
| external/diagnosing-bugs.md | 64 | used here | Documented in FAQ noting the skill was renamed to diagnosing-bugs |

## Consumes
Reproduction script, symptom report, or error output.

## Produces
Root cause analysis, reproduction test case, and minimal fix proposal.

## When applied
When investigating an observable software bug or regression before applying a fix.

## Sub-concepts
none

## Part of
soft-dependency

## Implementation status
deprecated: renamed to `diagnosing-bugs` in v1.0.0; the former `/diagnose` command name is retired.

## Design notes
Legacy name for the root-cause bug diagnosis skill, subsequently renamed to `diagnosing-bugs` in v1.0.0. Cited in ADR 0001 as a canonical soft-dependency skill that references domain glossaries and ADRs in vague prose without demanding hard configuration setup.
