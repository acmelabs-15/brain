---
package: rjm
path: .agents/architecture/ADR-075-form-factor-eval-methodology.md
type: agent
bytes: 14757
unit: inv-rjm-30
in_scope_via: .agents/architecture/README.md
aliases: []
memo_inputs:
  - {path: .agents/architecture/ADR-075-form-factor-eval-methodology.md, sha256: 1354265b364c96bc78dc198932ba51ed1a53db825a41c0b24e086c4e48ff8fe8}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .agents/architecture/ADR-075-form-factor-eval-methodology.md

## Purpose — required, verbatim
> "This ADR defines how to decide, and applies it to the security domain." — .agents/architecture/ADR-075-form-factor-eval-methodology.md:30

## Design intent — required
Resolves whether specialized domain capability should ship as a subagent (subagent system prompt with isolated context) or as a skill loaded into the parent agent's context and reasoned over inline (`SKILL.md`). While ADR-058 proved that specialized domain content outperforms naive baselines, it left open whether the delivery form factor itself affects recall or cost. Without this methodology, agent architectures risk incurring unnecessary subagent invocation latency, parent-to-subagent dispatch token overhead, context-isolation complexity, and 1M-context failure modes (e.g. anthropics/claude-code#55694), or alternatively polluting parent context without empirical justification. ADR-075 provides a fixture-based three-variant evaluation framework (`baseline`, `agent`, `skill`) holding content and model constant, establishing for the security domain that once content is strictly byte-controlled, form factor has no measurable effect on recall or input tokens.

## Phase — required
none

## Inputs — required
- Prior ADRs and issues: `ADR-058 (agent eval discipline)` (.agents/architecture/ADR-075-form-factor-eval-methodology.md:16, 26, 140, 145), issue `#1875` (.agents/architecture/ADR-075-form-factor-eval-methodology.md:16, 47, 81, 150), issue `#2936` (.agents/architecture/ADR-075-form-factor-eval-methodology.md:98, 100), and issue `#2678` (.agents/architecture/ADR-075-form-factor-eval-methodology.md:73, 116, 120, 152)
- Domain content prompt variants: naive content baseline prompt (.agents/architecture/ADR-075-form-factor-eval-methodology.md:43); agent system prompt `templates/agents/<name>.shared.md` (.agents/architecture/ADR-075-form-factor-eval-methodology.md:44, 80, 102); and skill prompt `SKILL.md` (.agents/architecture/ADR-075-form-factor-eval-methodology.md:45, 81, 103)
- Held-out evaluation fixtures: `evals/security-spike/fixtures/` (F001 to F016) (.agents/architecture/ADR-075-form-factor-eval-methodology.md:82, 106)
- Model specification: `claude-sonnet-4-6` (.agents/architecture/ADR-075-form-factor-eval-methodology.md:82, 83, 106, 107)
- Runner CLI options: `--agent`, `--fixtures`, `--n-runs`, `--model`, `--include-skill`, and `--skill-path` (.agents/architecture/ADR-075-form-factor-eval-methodology.md:47, 83, 107, 141)

## Outputs — required
- Evaluation run reports: first-run report `evals/security-spike/reports/20260619T161735Z-ad60bbe5/REPORT.md` (.agents/architecture/ADR-075-form-factor-eval-methodology.md:85); confirmatory rerun report `evals/security-spike/reports/ff2936confirm/REPORT.md` (.agents/architecture/ADR-075-form-factor-eval-methodology.md:109); and aggregated `report.json` (.agents/architecture/ADR-075-form-factor-eval-methodology.md:120, 126)
- Form-factor verdicts: `prefer-skill-form` (.agents/architecture/ADR-075-form-factor-eval-methodology.md:53), `prefer-agent-form` (.agents/architecture/ADR-075-form-factor-eval-methodology.md:54), and `inconclusive` (.agents/architecture/ADR-075-form-factor-eval-methodology.md:55, 120)
- Cost accounting and recall metrics: model call counts, input/output token totals (.agents/architecture/ADR-075-form-factor-eval-methodology.md:61, 90, 114, 117), bootstrap confidence intervals (.agents/architecture/ADR-075-form-factor-eval-methodology.md:57, 92, 116), and minimum cost savings threshold guard `FORM_FACTOR_MIN_COST_SAVINGS_FRACTION` (.agents/architecture/ADR-075-form-factor-eval-methodology.md:120)
- Content-controlled evaluation fixture artifact: `evals/security-spike/skill-content-controlled/SKILL.md` (.agents/architecture/ADR-075-form-factor-eval-methodology.md:103)

## Invokes — required
- script scripts/eval/eval-agent-vs-baseline.py — .agents/architecture/ADR-075-form-factor-eval-methodology.md:47
- template templates/agents/security.shared.md — .agents/architecture/ADR-075-form-factor-eval-methodology.md:80
- skill .claude/skills/security-review/SKILL.md — .agents/architecture/ADR-075-form-factor-eval-methodology.md:81
- doc evals/security-spike/reports/20260619T161735Z-ad60bbe5/REPORT.md — .agents/architecture/ADR-075-form-factor-eval-methodology.md:85
- skill evals/security-spike/skill-content-controlled/SKILL.md — .agents/architecture/ADR-075-form-factor-eval-methodology.md:103
- file tests/evals/test_form_factor_eval.py — .agents/architecture/ADR-075-form-factor-eval-methodology.md:104
- doc evals/security-spike/reports/ff2936confirm/REPORT.md — .agents/architecture/ADR-075-form-factor-eval-methodology.md:109
- script scripts/eval/_anthropic_api.py — .agents/architecture/ADR-075-form-factor-eval-methodology.md:136
- doc ADR-058 — .agents/architecture/ADR-075-form-factor-eval-methodology.md:145
- doc ADR-057 — .agents/architecture/ADR-075-form-factor-eval-methodology.md:146

## Invoked by — required
- doc .agents/architecture/README.md — .agents/architecture/README.md:178
- doc .agents/architecture/ADR-058-agent-eval-discipline.md — .agents/architecture/ADR-058-agent-eval-discipline.md:121

## Concepts named — required, verbatim
- `Form-Factor Evaluation Methodology` — .agents/architecture/ADR-075-form-factor-eval-methodology.md:12 — defined here
- `Agent vs Skill` — .agents/architecture/ADR-075-form-factor-eval-methodology.md:12 — defined here
- `adr-review` — .agents/architecture/ADR-075-form-factor-eval-methodology.md:18 — used here
- `agent eval discipline` — .agents/architecture/ADR-075-form-factor-eval-methodology.md:16 — used here
- `content baseline` — .agents/architecture/ADR-075-form-factor-eval-methodology.md:26 — used here
- `form-factor question` — .agents/architecture/ADR-075-form-factor-eval-methodology.md:26 — defined here
- `subagent-isolation` — .agents/architecture/ADR-075-form-factor-eval-methodology.md:28 — used here
- `Recall parity` — .agents/architecture/ADR-075-form-factor-eval-methodology.md:35 — defined here
- `three-variant eval` — .agents/architecture/ADR-075-form-factor-eval-methodology.md:41 — defined here
- `baseline` — .agents/architecture/ADR-075-form-factor-eval-methodology.md:43 — used here
- `agent` — .agents/architecture/ADR-075-form-factor-eval-methodology.md:44 — used here
- `skill` — .agents/architecture/ADR-075-form-factor-eval-methodology.md:45 — used here
- `eval-agent-vs-baseline.py` — .agents/architecture/ADR-075-form-factor-eval-methodology.md:47 — used here
- `prefer-skill-form` — .agents/architecture/ADR-075-form-factor-eval-methodology.md:53 — defined here
- `prefer-agent-form` — .agents/architecture/ADR-075-form-factor-eval-methodology.md:54 — defined here
- `inconclusive` — .agents/architecture/ADR-075-form-factor-eval-methodology.md:55 — defined here
- `equivalence margin` — .agents/architecture/ADR-075-form-factor-eval-methodology.md:57 — defined here
- `Cost accounting` — .agents/architecture/ADR-075-form-factor-eval-methodology.md:59 — defined here
- `Content-controlled confirmatory rerun` — .agents/architecture/ADR-075-form-factor-eval-methodology.md:98 — defined here
- `content confound` — .agents/architecture/ADR-075-form-factor-eval-methodology.md:100 — defined here
- `content-controlled skill variant` — .agents/architecture/ADR-075-form-factor-eval-methodology.md:100 — defined here
- `TestContentControlledPromptParity` — .agents/architecture/ADR-075-form-factor-eval-methodology.md:104 — used here
- `SkillForge` — .agents/architecture/ADR-075-form-factor-eval-methodology.md:105 — used here
- `skillforge` — .agents/architecture/ADR-075-form-factor-eval-methodology.md:105 — used here
- `FORM_FACTOR_MIN_COST_SAVINGS_FRACTION` — .agents/architecture/ADR-075-form-factor-eval-methodology.md:120 — defined here
- `form_factor.verdict` — .agents/architecture/ADR-075-form-factor-eval-methodology.md:120 — defined here
- `_anthropic_api.py` — .agents/architecture/ADR-075-form-factor-eval-methodology.md:136 — used here

## Structure
- # ADR-075: Form-Factor Evaluation Methodology (Agent vs Skill)
- ## Status
- ## Date
- ## Context and Problem Statement
- ## Decision Drivers
- ## Decision
- ### Decision criteria
- ### Cost accounting
- ## Considered Options
- ## Consequences
- ## Confirmation
- ### Content-controlled confirmatory rerun (#2936)
- ## Reversibility Assessment
- ## Vendor Lock-in Assessment
- ## Impact on Dependent Components
- ## Related Decisions
- ## References

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- internal-contradiction · .agents/architecture/ADR-075-form-factor-eval-methodology.md:4 · Frontmatter declares date 2026-07-20 whereas ## Date heading at line 22 declares 2026-06-19.
- cross-file-contradiction · .agents/architecture/ADR-075-form-factor-eval-methodology.md:120 · ADR-075 records the corrected verdict of the content-controlled rerun as inconclusive (no measurable form effect), but .agents/architecture/ADR-058-agent-eval-discipline.md:121 still cites the superseded first verdict (prefer-skill-form for the security domain).

## Observations
Provides an empirical evaluation methodology to disentangle domain prompt content efficacy from packaging/delivery form factor (subagent vs inline skill). Disproved the initial assumption of a 3x token savings for inline skills by demonstrating through byte-identical content control (issue #2936) that the token difference was purely an artifact of prompt length rather than delivery form. The current evaluation harness charges one call per (fixture, run) and does not model production parent-to-subagent dispatch overhead or prompt wrapping. Highlights that non-significance tests (confidence intervals spanning zero) without an equivalence margin can perversely reward underpowered fixture counts.

## Context cost
14757 bytes, ~3700 tokens. When evaluated alongside referenced fixtures and variants — `templates/agents/security.shared.md` (33588 bytes), `.claude/skills/security-review/SKILL.md` (9995 bytes), `evals/security-spike/skill-content-controlled/SKILL.md` (32916 bytes), and `evals/security-spike/reports/ff2936confirm/REPORT.md` (3033 bytes) — total referenced context is ~94289 bytes (~23500 tokens).
