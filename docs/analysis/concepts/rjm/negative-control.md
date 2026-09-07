---
package: rjm
name: Negative control
slug: negative-control
kind: pattern
package_phase: none
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/ai-agents-empirical-probe-toolkit/SKILL.md, sha256: acb5f3ee40425bd518402bdbbfb3b658c032fc607fc43f6d99199974871f1a6b}
  - {path: .claude/skills/ai-agents-portability-campaign/SKILL.md, sha256: 826dba704e99870bb0d7c622006959840c8d96ac45eb540b94b5eb9e1f6ffae9}
  - {path: .claude/skills/ai-agents-research-frontier/SKILL.md, sha256: 4b7a7e015d377a63efb5d544e3b1658754c0056e223d5483fcde67625ae2de3f}
  - {path: .claude/skills/ai-agents-research-methodology/SKILL.md, sha256: 7141af7456e2a59337469559ce9bd051294b0413ffac614bab6bae44c49f9b83}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Negative control

## Definition — verbatim
> "- **Negative control**: a deliberately broken input run through the same harness as the passing case, proving the test or probe CAN fail. A check that cannot fail proves nothing." — .claude/skills/ai-agents-empirical-probe-toolkit/SKILL.md:15

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/ai-agents-empirical-probe-toolkit/SKILL.md | 15 | defines | Formally defined as a core term representing a deliberately broken input proving a test or probe can fail. |
| .claude/skills/ai-agents-portability-campaign/SKILL.md | 164 | references | Establishes that every runtime-contract test requires a negative control to avoid circular validation. |
| .claude/skills/ai-agents-research-frontier/SKILL.md | 70 | references | Mandates negative controls for every external probe under research program investigations. |
| .claude/skills/ai-agents-research-methodology/SKILL.md | 122 | defines | Requisite criterion for empirical probe execution in Phase 2 capability investigations. |

## Consumes
Testing frameworks, empirical probe harnesses, and input validation pipelines.

## Produces
Verified failure executions proving that validation checks are sensitive and non-tautological.

## When applied
Applied across all empirical probes, runtime-contract tests, and automated validator checks.

## Sub-concepts
negative-control-test-design

## Part of
empirical-probe-toolkit

## Implementation status
defects: missing-path, doc-drift, internal-contradiction

## Design notes
A foundational scientific discipline applied to software testing: running a deliberately invalid input through the identical harness used for passing cases. Without a negative control, a test may succeed vacuously due to tautological assertions or permissive harnesses, proving nothing about real runtime safety.
