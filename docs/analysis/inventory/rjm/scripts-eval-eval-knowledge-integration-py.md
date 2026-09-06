---
package: rjm
path: scripts/eval/eval-knowledge-integration.py
type: script
bytes: 35810
unit: inv-rjm-228
in_scope_via: docs/workflow-commands.md
aliases: []
memo_inputs:
  - {path: scripts/eval/eval-knowledge-integration.py, sha256: cb592498e314781566e1d645748d3885e0715382ee8a49446d0045cdfa3a733f}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/eval/eval-knowledge-integration.py

## Purpose — required, verbatim
> "Skill Knowledge Integration Assessment: Evaluate how skill context improves responses." — scripts/eval/eval-knowledge-integration.py:2

## Design intent — required
Provides an automated empirical evaluation harness to quantify the value added by skill knowledge (the contents of `SKILL.md` and `references/`) compared against an unassisted baseline prompt without skill context ("no context" vs "with context"). By executing domain-specific scenario prompts across three qualitative dimensions (accuracy, depth, specificity scored 1-5 by an LLM judge) and aggregating results across multiple runs with an inter-call rate-limit delay, the harness calculates an overall delta per skill and applies a proportional kill gate (PROCEED, CONDITIONAL, STOP, or NO_DATA) to prevent regression or inclusion of low-value, token-wasting skills.

## Phase — required
none

## Inputs — required
- Target skill filter specified via `--skill` — scripts/eval/eval-knowledge-integration.py:612
- Custom prompts JSON file path specified via `--prompts-file` — scripts/eval/eval-knowledge-integration.py:613
- Model identifier specified via `--model` (defaults to `DEFAULT_MODEL`) — scripts/eval/eval-knowledge-integration.py:614
- Dry-run validation flag `--dry-run` — scripts/eval/eval-knowledge-integration.py:616
- Run count per scenario specified via `--runs` (defaults to 1; 3+ recommended for flakiness detection) — scripts/eval/eval-knowledge-integration.py:620
- Output file path specified via `--output` — scripts/eval/eval-knowledge-integration.py:624
- Built-in prompt scenarios in `PROMPTS` table across eight skills (`cva-analysis`, `decision-critic`, `golden-principles`, `threat-modeling`, `analyze`, `adr-generator`, `adr-review`, `world-model-diagnostic`) — scripts/eval/eval-knowledge-integration.py:89
- Skill directory root `.claude` / `skills` — scripts/eval/eval-knowledge-integration.py:49
- Skill file `SKILL.md` — scripts/eval/eval-knowledge-integration.py:70
- Skill reference files in `references` directory — scripts/eval/eval-knowledge-integration.py:74
- Anthropic API key loaded via `_load_api_key_for_selected_provider` (when not in dry-run mode) — scripts/eval/eval-knowledge-integration.py:632

## Outputs — required
- Evaluation results JSON payload with `results` and `kill_gate` written to stdout — scripts/eval/eval-knowledge-integration.py:729
- Formatted summary table printed to stderr with kill gate verdict and per-skill metrics — scripts/eval/eval-knowledge-integration.py:737
- JSON file written to `--output` destination when specified — scripts/eval/eval-knowledge-integration.py:726

## Invokes — required
- script _anthropic_api — scripts/eval/eval-knowledge-integration.py:32
- script _eval_common — scripts/eval/eval-knowledge-integration.py:35
- skill cva-analysis — scripts/eval/eval-knowledge-integration.py:90
- skill decision-critic — scripts/eval/eval-knowledge-integration.py:116
- skill golden-principles — scripts/eval/eval-knowledge-integration.py:142
- skill threat-modeling — scripts/eval/eval-knowledge-integration.py:168
- skill analyze — scripts/eval/eval-knowledge-integration.py:194
- skill adr-generator — scripts/eval/eval-knowledge-integration.py:220
- skill adr-review — scripts/eval/eval-knowledge-integration.py:246
- skill world-model-diagnostic — scripts/eval/eval-knowledge-integration.py:272

## Invoked by — required
- script eval-suite — scripts/eval/eval-suite.py:379
- doc README — scripts/eval/README.md:91
- script eval-skill-overlap — scripts/eval/eval-skill-overlap.py:4
- script eval-agents — scripts/eval/eval-agents.py:706
- script _anthropic_api — scripts/eval/_anthropic_api.py:5
- script _eval_common — scripts/eval/_eval_common.py:3

## Concepts named — required, verbatim
- `Skill Knowledge Integration Assessment` — scripts/eval/eval-knowledge-integration.py:2 — defined here
- `eval-prompt-change.py` — scripts/eval/eval-knowledge-integration.py:6 — used here
- `eval-suite.py` — scripts/eval/eval-knowledge-integration.py:7 — used here
- `DEFAULT_MODEL` — scripts/eval/eval-knowledge-integration.py:32 — used here
- `EST_TOKENS_PER_CALL` — scripts/eval/eval-knowledge-integration.py:36 — used here
- `MalformedProviderMetadataError` — scripts/eval/eval-knowledge-integration.py:37 — used here
- `aggregate_multi_run_scores` — scripts/eval/eval-knowledge-integration.py:38 — used here
- `RATE_LIMIT_SLEEP_SEC` — scripts/eval/eval-knowledge-integration.py:45 — defined here
- `SKILLS_DIR` — scripts/eval/eval-knowledge-integration.py:49 — defined here
- `cva-analysis` — scripts/eval/eval-knowledge-integration.py:90 — used here
- `decision-critic` — scripts/eval/eval-knowledge-integration.py:116 — used here
- `golden-principles` — scripts/eval/eval-knowledge-integration.py:142 — used here
- `threat-modeling` — scripts/eval/eval-knowledge-integration.py:168 — used here
- `analyze` — scripts/eval/eval-knowledge-integration.py:194 — used here
- `adr-generator` — scripts/eval/eval-knowledge-integration.py:220 — used here
- `adr-review` — scripts/eval/eval-knowledge-integration.py:246 — used here
- `world-model-diagnostic` — scripts/eval/eval-knowledge-integration.py:272 — used here
- `Accuracy` — scripts/eval/eval-knowledge-integration.py:325 — defined here
- `Depth` — scripts/eval/eval-knowledge-integration.py:326 — defined here
- `Specificity` — scripts/eval/eval-knowledge-integration.py:327 — defined here
- `PROCEED` — scripts/eval/eval-knowledge-integration.py:365 — defined here
- `CONDITIONAL` — scripts/eval/eval-knowledge-integration.py:366 — defined here
- `STOP` — scripts/eval/eval-knowledge-integration.py:367 — defined here
- `NO_DATA` — scripts/eval/eval-knowledge-integration.py:368 — defined here
- `flakiness protocol` — scripts/eval/eval-knowledge-integration.py:465 — used here
- `dry-run` — scripts/eval/eval-knowledge-integration.py:515 — defined here
- `KILL GATE` — scripts/eval/eval-knowledge-integration.py:737 — defined here

## Structure
- def _get_skill_dir — scripts/eval/eval-knowledge-integration.py:56
- def load_skill_context — scripts/eval/eval-knowledge-integration.py:62
- def run_prompt — scripts/eval/eval-knowledge-integration.py:303
- def score_response — scripts/eval/eval-knowledge-integration.py:312
- def apply_kill_gate — scripts/eval/eval-knowledge-integration.py:363
- def _avg_scores — scripts/eval/eval-knowledge-integration.py:448
- def _aggregate_multi_run_scores — scripts/eval/eval-knowledge-integration.py:464
- def run_assessment — scripts/eval/eval-knowledge-integration.py:470
- def _run_assessment_or_exit — scripts/eval/eval-knowledge-integration.py:585
- def main — scripts/eval/eval-knowledge-integration.py:610

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/eval/eval-knowledge-integration.py`
- language: Python
- lines: 774
- documented invocation:
> "python3 scripts/eval/eval-knowledge-integration.py --dry-run" — scripts/eval/eval-knowledge-integration.py:16
- **executed:** yes
- actual command run: `python3 scripts/eval/eval-knowledge-integration.py --skill cva-analysis --dry-run`
- abridged stdout:
```json
{
  "model": "claude-sonnet-4-6",
  "skills_evaluated": [
    "cva-analysis"
  ],
  "total_prompts": 6,
  "results": {
    "cva-analysis": {
      "context_chars": 87344,
      "baseline_avg": {
        "accuracy": 0.0,
        "depth": 0.0,
        "specificity": 0.0
      },
      "enhanced_avg": {
        "accuracy": 0.0,
        "depth": 0.0,
        "specificity": 0.0
      }
    }
  },
  "kill_gate": {
    "passed": false,
    "verdict": "STOP",
    "failures": [
      "cva-analysis: delta 0.00 < 0.5 threshold"
    ]
  }
}
```
- **actual exit code:** 1
- documented exit codes vs. actual exit paths:
No exit code summary in the docstring; code comments cite ADR-035 exit code 2.
Actual exit paths:
- `sys.exit(1)` at scripts/eval/eval-knowledge-integration.py:607 (`RuntimeError` during assessment)
- `sys.exit(1)` at scripts/eval/eval-knowledge-integration.py:635 (`RuntimeError` loading API key)
- `sys.exit(2)` at scripts/eval/eval-knowledge-integration.py:641 (`RuntimeError` verifying model availability)
- `sys.exit(1)` at scripts/eval/eval-knowledge-integration.py:650 (Skill directory not found)
- `sys.exit(2)` at scripts/eval/eval-knowledge-integration.py:680 (Zero prompts found for selected skill, ADR-035 config error)
- `sys.exit(0 if gate["passed"] else 1)` at scripts/eval/eval-knowledge-integration.py:769 (exits 0 if gate passes [PROCEED or CONDITIONAL]; exits 1 if gate fails [STOP or NO_DATA])
- for validators/gates: Can exit non-zero: exits 1 when kill gate verdict is STOP or NO_DATA (including `--dry-run` where all scores are 0, resulting in zero delta and STOP verdict). Does it fail on default branch: Yes, `--dry-run` consistently exits 1 due to zero delta triggering STOP.
- does output match what documentation claims: Yes, evaluates skill context loading and outputs JSON results with kill gate evaluation per plan.

## Defects — required
- doc-drift · scripts/eval/eval-knowledge-integration.py:86 · Comment claims `# Built-in prompts (30 total, 6 per skill)`, but there are 8 skills with 6 prompts each, totaling 48 prompts.
- doc-drift · scripts/eval/eval-knowledge-integration.py:612 · CLI `--skill` argument help states `help="Eval a single skill instead of all 5"`, but the script contains 8 built-in skills.

## Observations
- Implements a four-tier kill gate (`PROCEED`, `CONDITIONAL`, `STOP`, `NO_DATA`) where `NO_DATA` explicitly guards against false-negative `STOP` verdicts when an empty evaluation run occurs (issue #2345).
- Employs an LLM-as-judge scoring pattern across three qualitative dimensions (`accuracy`, `depth`, `specificity`) on a 1-5 scale using JSON schema extraction with regex fallback for markdown code fences.
- Incorporates ADR-057 flakiness detection via `--runs` (defaulting to 1, but recommending 3+ for production gating), flagging items whose variance across runs exceeds thresholds.
- Enforces a fixed 1-second sleep (`RATE_LIMIT_SLEEP_SEC = 1.0`) between API calls to prevent Anthropic rate limiting without implementing a full exponential backoff retry loop.

## Context cost
File size: 35,810 bytes (~8,950 tokens).
Loaded context when executed:
- `scripts/eval/_anthropic_api.py` (8,116 bytes)
- `scripts/eval/_eval_common.py` (10,958 bytes)
Total skill contexts across all 8 skills exceeds 350,000 bytes (~88,000 tokens).
Total execution context cost: ~405,000 bytes (~101,000 tokens).
