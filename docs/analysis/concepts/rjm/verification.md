---
package: rjm
name: Verification
slug: verification
kind: gate
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/agent-harness-reference/SKILL.md, sha256: 14891e17feb0fc88842a48f8d44b570badb38861a40292484adeb6854d22f372}
  - {path: .claude/skills/analyze/SKILL.md, sha256: a832f5ff2b626334f44a3dffc83b53525983976f8d47af52b90986f88a46e7a2}
  - {path: .claude/skills/analyze/references/DEVELOPMENT.md, sha256: 5602933212eb69cbc09c0bc6999de9cfa4f8631ca9ee973ad271013c504002bb}
  - {path: .claude/skills/analyze/references/strategy-ooda-loop.md, sha256: b27a9dfc0c884c93391b7acecade4bd48ec460803cd31b4e1b2ddaff101e21b7}
  - {path: .claude/skills/analyze/scripts/analyze.py, sha256: ea1822893c16811b9955a98e2059edf0eb46073e93a8f2c3bd1f2f3abc255a4b}
  - {path: .claude/skills/business-strategy/SKILL.md, sha256: 367a3f83f1a5a7da8258c8cfb0d0c98909a69c4c84976f869c6a17d7b19ba1db}
  - {path: .claude/skills/decision-critic/SKILL.md, sha256: 43c7e0effd00ca60aa277b29a6a0c525de1f3339fdde293f7e19bda9bce39d30}
  - {path: .claude/skills/decision-critic/references/critical-thinking-brandolinis-law.md, sha256: 9b965f79cb3d9306372944d26d89fad405b9479e7515201709191307e45bfa21}
  - {path: .claude/skills/decision-critic/references/critical-thinking-falsifiability.md, sha256: 16b92ac278886404388a0459346144c6d32187344443c3d57185d6abf438d1d6}
  - {path: .claude/skills/decision-critic/references/rewrite-regression-check.md, sha256: 99924952eb755b00631c90a5aa6d1fded4ea201460304a3d916ba0e9e3384c14}
  - {path: .claude/skills/decision-critic/scripts/decision-critic.py, sha256: 7023b3544db880a33f7ef99b77b933de70e70933c8a1be50bb226fe05039a033}
  - {path: .claude/skills/git-advanced-workflows/SKILL.md, sha256: f47de2380592b3c3bc098f7f3683406968b1df7aadd981c57f79315205659161}
  - {path: .claude/skills/github-url-intercept/SKILL.md, sha256: 598a7fda8d4d2d6d3308524266285eeec763778d3f7998d49ff35b39054abbd8}
  - {path: .claude/skills/prompt-engineer/SKILL.md, sha256: 3d8237e4839c2714ee6e7ad4eaa523f285392c5ae35d22c0a7f68bcccf1c7277}
  - {path: .claude/skills/prompt-engineer/references/prompt-engineering-multi-turn.md, sha256: d4baf475bf65bb62eebadd4ee3458feed74409068cf1fad9195fbade1ff5ae06}
  - {path: .claude/skills/reflect/SKILL.md, sha256: 645403addd017edc990804ffecd3e577ef8c2b3a15e7e841b599c2e901b33c77}
  - {path: .claude/skills/requirements-interview/SKILL.md, sha256: 346b3ef376ecb63eeaaf31870494a19d3bf7ab00499526efb21084bdc76af4cc}
  - {path: .claude/skills/security-scan/SKILL.md, sha256: 03e48076bcdaf02504ae25b8f8f0b2b45230fea3b2944ab7fac885aeb20cffb5}
  - {path: .claude/skills/skillforge/assets/templates/skill-md-template.md, sha256: 9763a68d08742fd8f643cd25ffbb78e32260e4376f0a3ce0bc462c01c3afa277}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Verification

## Definition — verbatim
> "Techniques where the model fact-checks its own outputs through targeted questioning." — .claude/skills/prompt-engineer/references/prompt-engineering-multi-turn.md:202

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/agent-harness-reference/SKILL.md | 278 | defines | Section defining post-edit validation steps and tests to verify harness contract changes. |
| .claude/skills/analyze/references/DEVELOPMENT.md | 32 | defines | Establishes test suite execution and validation criteria for development changes in the analyze skill. |
| .claude/skills/analyze/references/strategy-ooda-loop.md | 36 | defines | Details the verification step in strategic analysis ensuring findings are grounded in empirical evidence. |
| .claude/skills/analyze/scripts/analyze.py | 10 | defines | Lists automated verification checks and commands executed during repo analysis. |
| .claude/skills/analyze/SKILL.md | 121 | defines | Defines verification criteria and commands to execute upon completing codebase analysis. |
| .claude/skills/business-strategy/SKILL.md | 95 | defines | Defines validation gates ensuring strategic recommendations satisfy viability and risk constraints. |
| .claude/skills/decision-critic/references/critical-thinking-brandolinis-law.md | 19 | references | Emphasizes verification rigor to counter low-effort asymmetric misinformation. |
| .claude/skills/decision-critic/references/critical-thinking-falsifiability.md | 21 | references | Frames empirical verification through the lens of Popperian falsifiability and testable hypotheses. |
| .claude/skills/decision-critic/references/rewrite-regression-check.md | 20 | references | Details regression verification procedures to ensure refactorings preserve existing behavioral guarantees. |
| .claude/skills/decision-critic/scripts/decision-critic.py | 20 | defines | Executes verification assertions and quality checks over candidate decisions. |
| .claude/skills/decision-critic/SKILL.md | 28 | defines | Defines verification gates required before signing off on critique conclusions. |
| .claude/skills/git-advanced-workflows/SKILL.md | 176 | defines | Outlines post-operation git repository verification checks (clean status, reflog integrity). |
| .claude/skills/github-url-intercept/SKILL.md | 377 | defines | Defines verification tests confirming intercepted GitHub URLs are parsed and handled correctly. |
| .claude/skills/prompt-engineer/references/prompt-engineering-multi-turn.md | 200 | defines | Explains verification questioning techniques where models evaluate their own outputs. |
| .claude/skills/prompt-engineer/SKILL.md | 160 | defines | Defines verification tests to evaluate prompt optimizations against performance baselines. |
| .claude/skills/reflect/SKILL.md | 120 | defines | Specifies verification actions to validate that extracted session reflections yield accurate memories. |
| .claude/skills/requirements-interview/SKILL.md | 85 | defines | Defines verification criteria confirming requirements interviews have resolved unknown unknowns and reached alignment. |
| .claude/skills/security-scan/SKILL.md | 250 | defines | Specifies verification checklists and commands to confirm security scans completed without unhandled findings. |
| .claude/skills/skillforge/assets/templates/skill-md-template.md | 64 | defines | Provides the template section defining post-execution verification checks for newly generated skills. |

## Consumes
Candidate artifacts, source code modifications, analysis findings, and prompt revisions.

## Produces
Validation verdicts, automated test pass/fail results, and proven empirical assertions.

## When applied
Applied continuously across the lifecycle after any code, specification, analysis, or prompt modification before sign-off.

## Sub-concepts
gate-ladder, shift-left-runner, ci-required-checks

## Part of
quality-gates

## Implementation status
defects: doc-drift, orphan, exit-code-mismatch, missing-path, internal-contradiction

## Design notes
Verification is the foundational quality principle spanning all skills in rjm. Rather than accepting assertions or unverified model completions, verification mandates that every change be independently evaluated against executable tests, linters, empirical probes, and falsifiability criteria before proceeding to subsequent workflow stages.
