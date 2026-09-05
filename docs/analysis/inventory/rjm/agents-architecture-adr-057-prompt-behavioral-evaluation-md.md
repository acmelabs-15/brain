---
package: rjm
path: .agents/architecture/ADR-057-prompt-behavioral-evaluation.md
type: agent
bytes: 22813
unit: inv-rjm-20
in_scope_via: .agents/architecture/README.md
aliases: []
memo_inputs:
  - {path: .agents/architecture/ADR-057-prompt-behavioral-evaluation.md, sha256: 924e6f5e3f68c755ac189d1ade6220f4f904c62a74c32547df99dc5e58a64aa7}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .agents/architecture/ADR-057-prompt-behavioral-evaluation.md

## Purpose — required, verbatim
> "Adopt scenario-based LLM evaluation as the standard method for validating behavioral correctness of prompt changes." — .agents/architecture/ADR-057-prompt-behavioral-evaluation.md:64

## Design intent — required
Elevates scenario-based LLM evaluation to architectural policy for all prompt, command, agent, and skill changes, overcoming the limitation of structural Pester tests (ADR-023) which verify format and syntax in seconds but cannot detect behavioral regressions (such as the 20-percentage-point regression in Issue #1686 caused by ambiguous budget wording). Without it, subtle wording shifts that pass structural tests can degrade LLM decision logic, cause premature stop conditions, or introduce model drift undetected until PR merge or production failure.

## Phase — required
none

## Inputs — required
- Target prompt text before and after modification, plus scenario definitions containing named input conditions, expected verdicts, and reason-contains assertions (.agents/architecture/ADR-057-prompt-behavioral-evaluation.md:83-86)
- API keys from environment variables loaded via `_anthropic_api.py load_api_key()` (.agents/architecture/ADR-057-prompt-behavioral-evaluation.md:242)
- Runner configuration parameters: `--security-critical`, `--runs`, target prompt, and scenario files (.agents/architecture/ADR-057-prompt-behavioral-evaluation.md:111, 119, 239-241)

## Outputs — required
- Evaluation results: `before_score`, `after_score`, delta, and `regressions` list (.agents/architecture/ADR-057-prompt-behavioral-evaluation.md:91-92, 103)
- Acceptance gate verdict enforcing `no_regression`, `no_unexplained_regressions`, and `no_high_flakiness` (.agents/architecture/ADR-057-prompt-behavioral-evaluation.md:103)
- Flakiness rate metrics per scenario, blocking when flakiness exceeds 40% (.agents/architecture/ADR-057-prompt-behavioral-evaluation.md:94, 121, 238)
- PR review reporting fields and CI workflow verdicts in `.github/workflows/slash-command-quality.yml` (.agents/architecture/ADR-057-prompt-behavioral-evaluation.md:92, 231, 294-295)

## Invokes — required
- doc .agents/testing/prompt-eval-methodology.md — .agents/architecture/ADR-057-prompt-behavioral-evaluation.md:64
- config .github/workflows/slash-command-quality.yml — .agents/architecture/ADR-057-prompt-behavioral-evaluation.md:92
- command .claude/commands/spec.md — .agents/architecture/ADR-057-prompt-behavioral-evaluation.md:99
- config tests/evals/spec-scenarios.json — .agents/architecture/ADR-057-prompt-behavioral-evaluation.md:258
- script scripts/validation/pre_pr.py — .agents/architecture/ADR-057-prompt-behavioral-evaluation.md:271
- script .agents/security/benchmarks/test_agent_review_quality.py — .agents/architecture/ADR-057-prompt-behavioral-evaluation.md:308
- doc .agents/steering/testing-approach.md — .agents/architecture/ADR-057-prompt-behavioral-evaluation.md:309
- command .claude/commands/research.md — .agents/architecture/ADR-057-prompt-behavioral-evaluation.md:30
- doc ADR-023-quality-gate-prompt-testing.md — .agents/architecture/ADR-057-prompt-behavioral-evaluation.md:300
- doc ADR-010-quality-gates-evaluator-optimizer.md — .agents/architecture/ADR-057-prompt-behavioral-evaluation.md:301

## Invoked by — required
- doc .agents/architecture/README.md — .agents/architecture/README.md:130
- doc .agents/architecture/ADR-058-agent-eval-discipline.md — .agents/architecture/ADR-058-agent-eval-discipline.md:445

## Concepts named — required, verbatim
- `structural validation` — .agents/architecture/ADR-057-prompt-behavioral-evaluation.md:24 — used here
- `behavioral regressions` — .agents/architecture/ADR-057-prompt-behavioral-evaluation.md:26 — used here
- `scenario-based evaluation` — .agents/architecture/ADR-057-prompt-behavioral-evaluation.md:30 — defined here
- `model drift detection` — .agents/architecture/ADR-057-prompt-behavioral-evaluation.md:39 — defined here
- `scenario-based LLM evaluation` — .agents/architecture/ADR-057-prompt-behavioral-evaluation.md:64 — defined here
- `Scenarios` — .agents/architecture/ADR-057-prompt-behavioral-evaluation.md:83 — defined here
- `Runner` — .agents/architecture/ADR-057-prompt-behavioral-evaluation.md:84 — defined here
- `Before/after comparison` — .agents/architecture/ADR-057-prompt-behavioral-evaluation.md:85 — defined here
- `Acceptance Gate` — .agents/architecture/ADR-057-prompt-behavioral-evaluation.md:87 — defined here
- `regressions` — .agents/architecture/ADR-057-prompt-behavioral-evaluation.md:92 — defined here
- `has_improvement` — .agents/architecture/ADR-057-prompt-behavioral-evaluation.md:95 — defined here
- `Acceptance Gate Relaxation` — .agents/architecture/ADR-057-prompt-behavioral-evaluation.md:97 — defined here
- `Security-Critical Prompt Tier` — .agents/architecture/ADR-057-prompt-behavioral-evaluation.md:107 — defined here
- `--security-critical` — .agents/architecture/ADR-057-prompt-behavioral-evaluation.md:111 — defined here
- `Flakiness Protocol` — .agents/architecture/ADR-057-prompt-behavioral-evaluation.md:115 — defined here
- `DEFAULT_RUNS` — .agents/architecture/ADR-057-prompt-behavioral-evaluation.md:119 — defined here
- `FLAKINESS_BLOCK_THRESHOLD` — .agents/architecture/ADR-057-prompt-behavioral-evaluation.md:121 — defined here
- `Scenario Adequacy` — .agents/architecture/ADR-057-prompt-behavioral-evaluation.md:134 — defined here
- `Cost Expectations` — .agents/architecture/ADR-057-prompt-behavioral-evaluation.md:143 — defined here
- `Golden Corpus Testing` — .agents/architecture/ADR-057-prompt-behavioral-evaluation.md:186 — used here
- `eval-prompt-change.py` — .agents/architecture/ADR-057-prompt-behavioral-evaluation.md:103 — used here

## Structure
- # ADR-057: Prompt Behavioral Evaluation Methodology
- ## Context and Problem Statement
- ## Decision Drivers
- ## Prior Art Investigation
- ### What Currently Exists
- ### Historical Rationale
- ### Why Change Now
- ## Decision
- ### Scope: Files Requiring Behavioral Evaluation
- ### Core Pattern
- ### Acceptance Gate
- #### Acceptance Gate Relaxation (2026-06-01, Issue #2197)
- #### Security-Critical Prompt Tier
- #### Flakiness Protocol
- ### When to Run
- ### Scenario Adequacy
- ### Cost Expectations
- ### Scenario Storage
- ### Relationship to Structural Tests
- ## Considered Options
- ### Option 1: Manual Testing (Status Quo for Behavioral Changes)
- ### Option 2: Golden Corpus Testing
- ### Option 3: Scenario-Based LLM Evaluation (Chosen)
- ## Consequences
- ### Positive
- ### Negative
- ### Neutral
- ## Confirmation
- ### Enforced (automated gates)
- ### Not enforced (code review only)
- ### Enforcement Path
- ## Amendment 2026-07-22 (Issue #3185): eval enforcement is advisory, not commit-blocking
- ## Reversibility Assessment
- ## Impact on Dependent Components
- ## Related Decisions
- ## References

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- doc-drift · .agents/architecture/ADR-057-prompt-behavioral-evaluation.md:296 · Impact on Dependent Components requires adding an ADR-057 back-reference to .agents/testing/prompt-eval-methodology.md, but that file was never updated with the back-reference.
- doc-drift · .agents/architecture/ADR-057-prompt-behavioral-evaluation.md:103 · References eval-prompt-change.py and _anthropic_api.py by filename without the scripts/eval/ directory path prefix.

## Observations
Provides a mature and nuanced evaluation policy that explicitly balances regression prevention with developer velocity. Relaxes the original hard requirement for `has_improvement` so changes are not blocked by pre-existing failing baseline scenarios, while enforcing strict zero-regression blocking on passing scenarios. Includes Amendment 2026-07-22 (Issue #3185) which retired an inert PreToolUse hook (`invoke_prompt_eval_gate.py`) and clarified that eval enforcement is advisory at PR review except for the blocking `/spec` CI leg.

## Context cost
22813 bytes, ~5500 tokens. When factoring in the methodology document `.agents/testing/prompt-eval-methodology.md` (5600 bytes), the CI workflow `.github/workflows/slash-command-quality.yml` (3880 bytes), and test template `.agents/security/benchmarks/test_agent_review_quality.py` (5871 bytes), total referenced context is ~38164 bytes (~9500 tokens).
