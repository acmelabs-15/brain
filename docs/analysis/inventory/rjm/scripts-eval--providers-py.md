---
package: rjm
path: scripts/eval/_providers.py
type: script
bytes: 16167
unit: inv-rjm-221
in_scope_via: .agents/architecture/README.md
aliases: []
memo_inputs:
  - {path: scripts/eval/_providers.py, sha256: 2b5fd7d1b39ad5792826f1c4d8ca4f17f8aa5a0fdc07213df29167eba2ee2f5d}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/eval/_providers.py

## Purpose — required, verbatim
> "Multi-provider transport strategy for the eval harness." — scripts/eval/_providers.py:1

## Design intent — required
Provides a pluggable, multi-vendor transport strategy layer (`EvalProvider` protocol) for the evaluation harness, enabling evaluation scripts to run across OpenAI models, GitHub Models, Anthropic SDK, and GitHub Copilot CLI in addition to the zero-dependency built-in Anthropic urllib transport. It implements an Open/Closed provider registry (`_REGISTRY`), normalizes SDK and CLI error messages into uniform `RuntimeError` shapes matching `_eval_api_adapter._categorize_error` conventions, handles reasoning model parameter differences (`max_completion_tokens` vs `max_tokens` and temperature omission), and enforces experimental design symmetry (ADR-058) requiring baseline and variant to evaluate through the same provider. Without this module, the evaluation harness would be hard-coupled to Anthropic's urllib API, preventing model comparison, evaluation when Anthropic API quotas are depleted, or low-cost evaluation via local Copilot CLI execution.

## Phase — required
none

## Inputs — required
- Environment variables:
  - `EVAL_PROVIDER` — scripts/eval/_providers.py:8,394
  - `ANTHROPIC_API_KEY` — scripts/eval/_providers.py:7,291
  - `OPENAI_API_KEY` — scripts/eval/_providers.py:342
  - `OPENAI_BASE_URL` — scripts/eval/_providers.py:343
  - `GITHUB_MODELS_TOKEN` — scripts/eval/_providers.py:351
  - `GITHUB_TOKEN` — scripts/eval/_providers.py:351
  - `GH_TOKEN` — scripts/eval/_providers.py:351
  - `GITHUB_MODELS_BASE_URL` — scripts/eval/_providers.py:56,352
  - `COPILOT_CLI_TIMEOUT` — scripts/eval/_providers.py:314
  - `COPILOT_CLI_BIN` — scripts/eval/_providers.py:328
- Local filesystem files:
  - Repository-root `.env` file for API key fallback (`.env` resolved relative to module location via `raw.resolve(strict=True).parents[2] / ".env"` at line 100)
- Method arguments to `complete()`:
  - `messages: list[dict[str, str]]` — scripts/eval/_providers.py:72,216,277
  - `system: str = ""` — scripts/eval/_providers.py:73,217,278
  - `model: str` — scripts/eval/_providers.py:74,218,279
  - `max_tokens: int = 1024` — scripts/eval/_providers.py:75,219,280
  - `temperature: float = 0.0` — scripts/eval/_providers.py:76,220,281
  - `seed: int | None = None` — scripts/eval/_providers.py:77,221,282

## Outputs — required
- Assistant completion text (`str`) returned by `complete()` method — scripts/eval/_providers.py:78,79,260,310
- Normalized `system_fingerprint: str | None` property on provider instances — scripts/eval/_providers.py:67,191,258,273
- `EvalProvider` instances returned by `resolve_provider()` factory — scripts/eval/_providers.py:388,405
- Normalized exceptions: raises `RuntimeError` matching shapes recognized by `_eval_api_adapter._categorize_error` — scripts/eval/_providers.py:15

## Invokes — required
- script _eval_api_adapter_constants — scripts/eval/_providers.py:50
- script _copilot_cli — scripts/eval/_providers.py:51
- script _eval_common — scripts/eval/_providers.py:52

## Invoked by — required
- script _providers — scripts/eval/_anthropic_api.py:103
- script _providers — scripts/eval/eval-model-panel.py:185
- script _copilot_cli.py — scripts/eval/_copilot_cli.py:3
- doc moq-analyzers-provider-comparison.md — docs/eval/moq-analyzers-provider-comparison.md:527

## Concepts named — required, verbatim
- `Transport` — scripts/eval/_providers.py:3 — used here
- `Open/Closed` — scripts/eval/_providers.py:10 — used here
- `Experimental Design Symmetry` — scripts/eval/_providers.py:20 — used here
- `EvalProvider` — scripts/eval/_providers.py:63 — defined here
- `CWE-22 defense` — scripts/eval/_providers.py:98 — used here
- `_REASONING_MODEL_RE` — scripts/eval/_providers.py:164 — defined here
- `_OpenAICompatibleProvider` — scripts/eval/_providers.py:172 — defined here
- `_AnthropicSDKProvider` — scripts/eval/_providers.py:262 — defined here
- `_REGISTRY` — scripts/eval/_providers.py:362 — defined here
- `DEFAULT_ANTHROPIC_NAMES` — scripts/eval/_providers.py:374 — defined here
- `resolve_provider` — scripts/eval/_providers.py:387 — defined here

## Structure
- Module docstring (lines 1-35)
- Imports and module constants (lines 37-61)
- class EvalProvider(Protocol) (lines 63-80)
- def _read_env_key (lines 83-125)
- def _http_code_from_exc (lines 128-140)
- def _normalize_and_raise (lines 143-156)
- Reasoning model handling: _REASONING_MODEL_RE, def _is_reasoning_model (lines 159-169)
- class _OpenAICompatibleProvider (lines 172-260)
- class _AnthropicSDKProvider (lines 262-310)
- Provider factories: _make_copilot_cli, _make_openai, _make_github, _make_anthropic_sdk (lines 313-358)
- Provider registry and dispatch: _REGISTRY, DEFAULT_ANTHROPIC_NAMES, is_default_anthropic, known_provider_names, resolve_provider (lines 360-405)

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/eval/_providers.py`, language: `Python`, lines: 406
- documented invocation (verbatim, path:line):
  > "`EVAL_PROVIDER` environment variable or an explicit `--provider` flag." — scripts/eval/_providers.py:8
  > "call `_anthropic_api.call_api` directly instead of resolve_provider()." — scripts/eval/_providers.py:398
- executed: yes
- actual command run: `python3 sources/rjm/scripts/eval/_providers.py`
  abridged stdout: `(no output)`
  actual exit code: `0`
- functional execution test command:
  `python3 -c "import sys; sys.path.insert(0, 'sources/rjm/scripts/eval'); import _providers; print(_providers.known_provider_names())"`
  stdout: `['anthropic', 'anthropic-http', 'anthropic-sdk', 'anthropic-urllib', 'codex', 'copilot', 'copilot-cli', 'github', 'github-models', 'openai']`
  actual exit code: `0`
- documented exit codes (verbatim) vs. actual exit paths in code:
  Documented exit codes: none (library transport module). Actual exit paths: no `sys.exit()`, `exit()`, or `process.exit` calls in code. Direct execution terminates with exit code 0. Failure paths raise `RuntimeError` (lines 97-99, 121-125, 148-150, 153, 154-156, 197-200, 247-250, 253-256, 287-290, 320-322, 324-326, 396-399, 402-404).
- for validators/gates: can it exit non-zero? does it fail on the source repo's own default branch?
  Not a standalone CLI validator or gate; it is a library transport strategy module. Direct execution and module import exit with 0.
- does the output match what the documentation claims? one line
  Yes; direct execution produces no output and exits 0, while library dispatch functions correctly resolve registered providers and known provider names as documented.

## Defects — required
- `doc-drift` · scripts/eval/_providers.py:3 · Module docstring cites `DESIGN-004 §5.4` as defining the `Transport` seam, but in DESIGN-004 §5.4 covers persistence while §5.2 covers API/transport execution.
- `doc-drift` · scripts/eval/_providers.py:8 · Mentions an explicit `--provider` CLI flag, but the module only inspects the `EVAL_PROVIDER` environment variable and function arguments; CLI flag parsing is delegated to calling runners.

## Observations
- CWE-22 symlink traversal protection at line 96 prevents attackers from using symlinked module paths to divert API key discovery from the repository root `.env` file.
- Reasoning model handling dynamically routes models matching `_REASONING_MODEL_RE` (o-series, gpt-5) to `max_completion_tokens` rather than `max_tokens` and suppresses custom temperature to comply with API schema constraints.
- Sensitive information redaction in error messages at lines 155, 249, and 255 suppresses raw model identifiers and provider network payload details.

## Context cost
16,167 bytes (~4,042 tokens). Total with immediate sibling imports (`_eval_api_adapter_constants.py`, `_copilot_cli.py`, `_eval_common.py`): ~56,949 bytes (~14,237 tokens).
