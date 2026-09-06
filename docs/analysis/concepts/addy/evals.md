---
package: addy
name: Evals
slug: evals
kind: technique
package_phase: addy:Verify
implementation_in_scope: true
memo_inputs:
  - {path: docs/developer-onboarding.md, sha256: 59a35b68045f34aa42161bc5901892489e6ecdac4b5bbfcf311fde65f8255eea}
  - {path: evals/cases/api-and-interface-design.json, sha256: b297745de905b4b40845551acb19c4f91e66141cb1231fda1b760f5abfb157a3}
  - {path: evals/cases/browser-testing-with-devtools.json, sha256: 0d670cbe54814c4cc1dbc8eb8aa1d5233a2130493b85eb69488dd2e8e3c7f8bf}
  - {path: evals/cases/ci-cd-and-automation.json, sha256: 96676c94258e2ce3e6df37c7488c2ba6b47e51563e6e4a7d903c2296ae766bf9}
  - {path: evals/cases/code-review-and-quality.json, sha256: afeaca38540db520a3aca1b25c199001f76a540b4777b08ad668313dd1d2ad7c}
  - {path: evals/cases/code-simplification.json, sha256: 42c97aefd638fc08eb275c393ef5bcfaac056ac12cb2767fbb1db9fc94b6c84c}
  - {path: evals/cases/constraint-driven-development.json, sha256: 45bb9aa099816de69a42147e0f217ffd03e8c6d97d4599a44ae40dec4d95625e}
  - {path: evals/cases/context-engineering.json, sha256: 38dd00d2f108fe1cb703d5a01dbb2310d6f3719cf32950bc2f9adbeabfb9c617}
  - {path: evals/cases/debugging-and-error-recovery.json, sha256: a7b0cfb380dfce578305913d7376426ad9ee78beb51a31a19b4d52ea7b3a86be}
  - {path: evals/cases/deprecation-and-migration.json, sha256: 9ee13965566161b30f3bf73f4d8d6f9e243f910f4d661d9f0835902714ecc6ec}
  - {path: evals/cases/documentation-and-adrs.json, sha256: 63369e93c8eccc4bd11dfd3830a28f25b5d50bf09844d3d2c7d5643f9051fd9e}
  - {path: evals/cases/doubt-driven-development.json, sha256: c92769c979e81afa55f9f937eff6a952e60599792e59d8a38ed8e68d7b7abeba}
  - {path: evals/cases/frontend-ui-engineering.json, sha256: ae0d255641d13fe5c8d06b35a12bb388b76a24a4f2dc9d6d801d359753b28f40}
  - {path: evals/cases/git-workflow-and-versioning.json, sha256: d89f00dcf6164edc74e721272259db4423c9ea59dd73aecd6202194aeb716a75}
  - {path: evals/cases/idea-refine.json, sha256: 559741e57427aca454ce9546df49771c1929208f5b3a89974ddc76ed0a15a224}
  - {path: evals/cases/incremental-implementation.json, sha256: 3f40c3955e0cccd725711818da2c4e3eac5c6eff0129afadea5cf8b74e558813}
  - {path: evals/cases/interview-me.json, sha256: 5fcd623b845d367ac360776008cee6d6bebec60bb2f16c175e5410424794886d}
  - {path: evals/cases/observability-and-instrumentation.json, sha256: 67e03c0bdd5d0ba53d45fbca244737519973cfacabaa2ffde0bc26840321c125}
  - {path: evals/cases/performance-optimization.json, sha256: cf861c034b311f807d0c266703569f3384acbacc7f9f2c18aea2c49cab33644f}
  - {path: evals/cases/planning-and-task-breakdown.json, sha256: 7747013709f9c76f96436e0229391b80058b7ba4b32cac5419523f3e5a688b10}
  - {path: evals/cases/security-and-hardening.json, sha256: a521a14857fe9dd79e11115568655135274bc1e636e43a6be1cd98c025569a0a}
  - {path: evals/cases/shipping-and-launch.json, sha256: 951445b40249b014e0daab37343fdbd18e9bc54fd3b0b8f30d7260fda6931436}
  - {path: evals/cases/source-driven-development.json, sha256: df9c000800d1c7e3f46012ee7b6de07b67d1af8e98917921130cc3accc072464}
  - {path: evals/cases/spec-driven-development.json, sha256: e6e637aad5de3e7dcec37ba6a3ae4ccf5f4394057a5a2266efb3e5f224ca719c}
  - {path: evals/cases/test-driven-development.json, sha256: b038011ea007a91aee8b92cb0fca7493c92f4027e2a6560d674bb4977fe4bf56}
  - {path: evals/cases/using-agent-skills.json, sha256: 19a914ca18cc5881fb1f89eb4e16b2ccdfb7cbd4e26db03f598a7819b3b80f2f}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# Evals

## Definition — verbatim
> "| **Evals** | `evals/cases/<name>.json` | Proof that skills trigger and behave correctly | *Does it work* |" — docs/developer-onboarding.md:19

## Also called — verbatim
- `evals` — evals/cases/api-and-interface-design.json:29

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/developer-onboarding.md | 19 | used here | Defined in the mental model table as proof that skills trigger and behave correctly. |
| evals/cases/api-and-interface-design.json | 29 | defined here | Configured as the behavioral evaluation case array for api-and-interface-design. |
| evals/cases/browser-testing-with-devtools.json | 29 | defined here | Configured as the behavioral evaluation case array for browser-testing-with-devtools. |
| evals/cases/ci-cd-and-automation.json | 29 | defined here | Configured as the behavioral evaluation case array for ci-cd-and-automation. |
| evals/cases/code-review-and-quality.json | 29 | defined here | Configured as the behavioral evaluation case array for code-review-and-quality. |
| evals/cases/code-simplification.json | 28 | defined here | Configured as the behavioral evaluation case array for code-simplification. |
| evals/cases/constraint-driven-development.json | 41 | defined here | Configured as the behavioral evaluation case array for constraint-driven-development. |
| evals/cases/context-engineering.json | 29 | defined here | Configured as the behavioral evaluation case array for context-engineering. |
| evals/cases/debugging-and-error-recovery.json | 29 | defined here | Configured as the behavioral evaluation case array for debugging-and-error-recovery. |
| evals/cases/deprecation-and-migration.json | 28 | defined here | Configured as the behavioral evaluation case array for deprecation-and-migration. |
| evals/cases/documentation-and-adrs.json | 29 | defined here | Configured as the behavioral evaluation case array for documentation-and-adrs. |
| evals/cases/doubt-driven-development.json | 27 | defined here | Configured as the behavioral evaluation case array for doubt-driven-development. |
| evals/cases/frontend-ui-engineering.json | 36 | defined here | Configured as the behavioral evaluation case array for frontend-ui-engineering. |
| evals/cases/git-workflow-and-versioning.json | 32 | defined here | Configured as the behavioral evaluation case array for git-workflow-and-versioning. |
| evals/cases/idea-refine.json | 29 | defined here | Configured as the behavioral evaluation case array for idea-refine. |
| evals/cases/incremental-implementation.json | 29 | defined here | Configured as the behavioral evaluation case array for incremental-implementation. |
| evals/cases/interview-me.json | 29 | defined here | Configured as the behavioral evaluation case array for interview-me. |
| evals/cases/observability-and-instrumentation.json | 28 | defined here | Configured as the behavioral evaluation case array for observability-and-instrumentation. |
| evals/cases/performance-optimization.json | 37 | defined here | Configured as the behavioral evaluation case array for performance-optimization. |
| evals/cases/planning-and-task-breakdown.json | 28 | defined here | Configured as the behavioral evaluation case array for planning-and-task-breakdown. |
| evals/cases/security-and-hardening.json | 29 | defined here | Configured as the behavioral evaluation case array for security-and-hardening. |
| evals/cases/shipping-and-launch.json | 28 | defined here | Configured as the behavioral evaluation case array for shipping-and-launch. |
| evals/cases/source-driven-development.json | 29 | defined here | Configured as the behavioral evaluation case array for source-driven-development. |
| evals/cases/spec-driven-development.json | 41 | defined here | Configured as the behavioral evaluation case array for spec-driven-development. |
| evals/cases/test-driven-development.json | 29 | defined here | Configured as the behavioral evaluation case array for test-driven-development. |
| evals/cases/using-agent-skills.json | 28 | defined here | Configured as the behavioral evaluation case array for using-agent-skills. |

## Consumes
Skill definitions (`skills/*/SKILL.md`), trigger prompt suites, workspace test fixtures (`evals/fixtures/`), and behavioral assertions.

## Produces
Trigger ranking metrics, collision reports, execution traces, and graded evaluation output (`evals/results/`).

## When applied
Executed in CI pipelines (Tier 2 trigger evaluations) and during local release testing (Tier 3 behavioral execution).

## Sub-concepts
- `tier-1`
- `tier-2`
- `tier-3`
- `trigger-prompts`

## Part of
- `three-tier-eval-framework`

## Implementation status
defects: doc-drift

## Design notes
Evals provide empirical verification for the agent-skills catalog. Defined on a per-skill basis in `evals/cases/<skill>.json`, evals test that skills trigger reliably in response to natural developer language, remain lexically distinct from neighboring skills, and guide agent execution to satisfy verifiable task assertions.
