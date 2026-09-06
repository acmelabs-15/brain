---
package: rjm
path: .claude/skills/prose-self-check/SKILL.md
type: skill
bytes: 12884
unit: inv-rjm-144
in_scope_via: .claude/agents/explainer.md
aliases: []
memo_inputs:
  - {path: .claude/skills/prose-self-check/SKILL.md, sha256: 555fd5815cdbf74e3d945457ad745cbfb0e26cb9a3698febddf2677c1df3448d}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/skills/prose-self-check/SKILL.md

## Purpose — required, verbatim
> "Run this on prose you are about to emit. It catches AI-vernacular tells before the artifact lands. It audits your OWN output, not human-authored text. It does not touch code style (that is `style-enforcement`)." — .claude/skills/prose-self-check/SKILL.md:15-17

## Design intent — required
The prose-self-check skill provides an automated and guided pre-emission quality gate for agent-generated prose artifacts (such as PRDs, explainers, spec narratives, retrospectives, ADR context sections, PR descriptions, and issue bodies) to prevent the loss of human reader trust caused by AI-vernacular tells. Grounded in empirical reader-critique data from a ~90,000-post study, it prioritizes structural and semantic tells that destroy reader trust over superficial keyword matching. Without this skill, coding agents tend to produce fluent yet vacuous text characterized by repetitive sentence structures (flat rhythm / low burstiness), superficial contrast framing ("not X, it's Y"), uninvited trailing offers, throat-clearing signposting openers, and filler paragraphs lacking disagreeable, load-bearing claims. By decomposing the review into four distinct layers—Layer 1 Lexical (dashes and tiered banned vocabulary parsed dynamically from `.claude/rules/voice.md`), Layer 2 Structural (contrast framing, trailing offers, signposting openers), Layer 3 Distributional (sentence burstiness and concreteness proxies via `burstiness.py`), and Layer 4 Semantic (human/agent manual emptiness gate requiring every paragraph to make a nameable, disagreeable claim)—it separates mechanical pattern scanning from deep semantic adjudication. Crucially, it prevents harmful over-correction by instructing agents not to reflexively scrub low-signal words on presence alone and mandates that agents audit only their own generated prose, never human-authored text or code.

## Phase — required
cross-phase

## Inputs — required
- Target prose artifact file path: `FILE [FILE ...]` (.claude/skills/prose-self-check/SKILL.md:51-52, 182, 224)
- Target draft prose via standard input: `- < draft.md` (.claude/skills/prose-self-check/SKILL.md:183, 189)
- User invocation phrases and triggers: `prose self-check`, `audit my writing for AI tells`, `does this read as AI-written`, `check this prose before I send it` (.claude/skills/prose-self-check/SKILL.md:30-33)
- Optional CLI flags for `prose_lint.py`: `--json`, `--rules PATH` (.claude/skills/prose-self-check/SKILL.md:184-185)
- Optional CLI flag for `burstiness.py`: `--json` (.claude/skills/prose-self-check/SKILL.md:225)
- Banned vocabulary rule source file: `.claude/rules/voice.md` ("Banned Vocabulary" section) (.claude/skills/prose-self-check/SKILL.md:76-77, 274-275), or fallback locations: `$CLAUDE_PLUGIN_ROOT/rules/voice.md`, `$COPILOT_PLUGIN_ROOT/instructions/voice.instructions.md`, `.github/instructions/voice.instructions.md`, `rules/voice.md`, or `instructions/voice.instructions.md` (.claude/skills/prose-self-check/SKILL.md:200-205)
- Repository formatting and punctuation constraints: `.claude/rules/universal.md` (MUST NOT 5 dash ban) (.claude/skills/prose-self-check/SKILL.md:79-80, 276)

## Outputs — required
- Formatted prose lint report on stdout with findings printed as `FILE:LINE:COLUMN: SEVERITY: KIND: MATCH (note)` and summary `0 findings in N prose line(s) of M in K file(s)` or `Layers 1-2 clean: 0 findings in N prose line(s) of M in K file(s).` (.claude/skills/prose-self-check/SKILL.md:188, 191-192)
- Structured machine-readable JSON output when invoked with `--json` (.claude/skills/prose-self-check/SKILL.md:184, 225)
- Burstiness and concreteness distribution metrics on stdout: sentence count, word count, mean length, standard deviation, coefficient of variation, concreteness count, and optional flat-rhythm warning (.claude/skills/prose-self-check/SKILL.md:228-230)
- Exit code verdicts from `scripts/prose_lint.py`: exit `0` (clean / no high-severity findings), exit `1` (high-severity findings present), exit `2` (configuration or read error) (.claude/skills/prose-self-check/SKILL.md:211-213)
- Exit code verdicts from `scripts/burstiness.py`: exit `0` (analyzed successfully), exit `2` (input or read error) (.claude/skills/prose-self-check/SKILL.md:234-235)
- Layer 4 manual semantic adjudication verdict: identification and elimination of filler prose paragraphs lacking a nameable, disagreeable claim (.claude/skills/prose-self-check/SKILL.md:133-137, 249)
- Audited and revised prose artifact with AI-vernacular tells eliminated and layer-by-layer modification report (.claude/skills/prose-self-check/SKILL.md:146-155)

## Invokes — required
- script prose_lint.py — .claude/skills/prose-self-check/SKILL.md:51
- script burstiness.py — .claude/skills/prose-self-check/SKILL.md:52
- reference .claude/rules/voice.md — .claude/skills/prose-self-check/SKILL.md:76
- reference .claude/rules/universal.md — .claude/skills/prose-self-check/SKILL.md:79
- reference CLAUDE.md — .claude/skills/prose-self-check/SKILL.md:93
- reference .claude/skills/CLAUDE.md — .claude/skills/prose-self-check/SKILL.md:277
- skill style-enforcement — .claude/skills/prose-self-check/SKILL.md:268
- skill prompt-engineer — .claude/skills/prose-self-check/SKILL.md:269
- skill doc-accuracy — .claude/skills/prose-self-check/SKILL.md:270

## Invoked by — required
- agent explainer — .claude/agents/explainer.md:16
- agent retrospective — .claude/agents/retrospective.md:35
- agent pr-comment-responder — .claude/agents/pr-comment-responder.md:124
- agent analyst — .claude/agents/analyst.md:41
- skill spec-generator — src/copilot-cli/skills/spec-generator/SKILL.md:17
- skill ai-agents-research-methodology — src/copilot-cli/skills/ai-agents-research-methodology/SKILL.md:61
- skill ai-agents-docs-of-record — src/copilot-cli/skills/ai-agents-docs-of-record/SKILL.md:191

## Concepts named — required, verbatim
- `prose-self-check` — .claude/skills/prose-self-check/SKILL.md:2 — defined here
- `AI-vernacular self-check` — .claude/skills/prose-self-check/SKILL.md:4 — defined here
- `Four layers` — .claude/skills/prose-self-check/SKILL.md:6 — defined here
- `style-enforcement` — .claude/skills/prose-self-check/SKILL.md:9 — used here
- `Prose Self-Check` — .claude/skills/prose-self-check/SKILL.md:13 — defined here
- `AI-vernacular tells` — .claude/skills/prose-self-check/SKILL.md:15 — defined here
- `reader-trust` — .claude/skills/prose-self-check/SKILL.md:19 — defined here
- `flat rhythm` — .claude/skills/prose-self-check/SKILL.md:25 — defined here
- `prose_lint.py` — .claude/skills/prose-self-check/SKILL.md:51 — defined here
- `burstiness.py` — .claude/skills/prose-self-check/SKILL.md:52 — defined here
- `Layer 1: Lexical` — .claude/skills/prose-self-check/SKILL.md:60 — defined here
- `High-signal` — .claude/skills/prose-self-check/SKILL.md:65 — defined here
- `Low-signal` — .claude/skills/prose-self-check/SKILL.md:68 — defined here
- `LOW_SIGNAL_WORDS` — .claude/skills/prose-self-check/SKILL.md:73 — used here
- `Banned Vocabulary` — .claude/skills/prose-self-check/SKILL.md:76 — used here
- `Layer 2: Structural` — .claude/skills/prose-self-check/SKILL.md:82 — defined here
- `Contrast framing` — .claude/skills/prose-self-check/SKILL.md:88 — defined here
- `contrast_framing` — .claude/skills/prose-self-check/SKILL.md:88 — defined here
- `Manufactured trailing offers` — .claude/skills/prose-self-check/SKILL.md:91 — defined here
- `trailing_offer` — .claude/skills/prose-self-check/SKILL.md:91 — defined here
- `STOP-TOKEN` — .claude/skills/prose-self-check/SKILL.md:93 — used here
- `Signposting / throat-clearing openers` — .claude/skills/prose-self-check/SKILL.md:94 — defined here
- `signposting` — .claude/skills/prose-self-check/SKILL.md:94 — defined here
- `Rule-of-three padding` — .claude/skills/prose-self-check/SKILL.md:100 — defined here
- `Inline-header lists` — .claude/skills/prose-self-check/SKILL.md:104 — defined here
- `Layer 3: Distributional` — .claude/skills/prose-self-check/SKILL.md:109 — defined here
- `Burstiness proxy` — .claude/skills/prose-self-check/SKILL.md:114 — defined here
- `Concreteness proxy` — .claude/skills/prose-self-check/SKILL.md:127 — defined here
- `Layer 4: Semantic` — .claude/skills/prose-self-check/SKILL.md:131 — defined here
- `emptiness gate` — .claude/skills/prose-self-check/SKILL.md:131 — defined here
- `Anti-Patterns` — .claude/skills/prose-self-check/SKILL.md:157 — defined here
- `unterminated_fence` — .claude/skills/prose-self-check/SKILL.md:194 — defined here
- `prompt-engineer` — .claude/skills/prose-self-check/SKILL.md:269 — used here
- `doc-accuracy` — .claude/skills/prose-self-check/SKILL.md:270 — used here

## Structure
- `## Triggers` — .claude/skills/prose-self-check/SKILL.md:28
- `## When To Use` — .claude/skills/prose-self-check/SKILL.md:35
- `## Process` — .claude/skills/prose-self-check/SKILL.md:43
- `### Layer 1: Lexical (weakest signal)` — .claude/skills/prose-self-check/SKILL.md:60
- `### Layer 2: Structural` — .claude/skills/prose-self-check/SKILL.md:82
- `### Layer 3: Distributional (proxy only)` — .claude/skills/prose-self-check/SKILL.md:109
- `### Layer 4: Semantic (emptiness gate)` — .claude/skills/prose-self-check/SKILL.md:131
- `## Output` — .claude/skills/prose-self-check/SKILL.md:144
- `## Anti-Patterns` — .claude/skills/prose-self-check/SKILL.md:157
- `## Scripts` — .claude/skills/prose-self-check/SKILL.md:171
- `### prose_lint.py` — .claude/skills/prose-self-check/SKILL.md:173
- `### burstiness.py` — .claude/skills/prose-self-check/SKILL.md:215
- `## Verification` — .claude/skills/prose-self-check/SKILL.md:237
- `## Evidence` — .claude/skills/prose-self-check/SKILL.md:255
- `## Related Skills` — .claude/skills/prose-self-check/SKILL.md:264
- `## References` — .claude/skills/prose-self-check/SKILL.md:272

## Scripts — required if type is script or the skill ships scripts
### prose_lint.py
- path: `.claude/skills/prose-self-check/scripts/prose_lint.py`, language: Python 3, lines: 1440
- documented invocation:
  - "python3 \"${COPILOT_PLUGIN_ROOT:-${CLAUDE_PLUGIN_ROOT:-.claude}}/skills/prose-self-check/scripts/prose_lint.py\" FILE" — .claude/skills/prose-self-check/SKILL.md:51
  - "python3 \"${COPILOT_PLUGIN_ROOT:-${CLAUDE_PLUGIN_ROOT:-.claude}}/skills/prose-self-check/scripts/prose_lint.py\" FILE [FILE ...]" — .claude/skills/prose-self-check/SKILL.md:182
  - "python3 \"${COPILOT_PLUGIN_ROOT:-${CLAUDE_PLUGIN_ROOT:-.claude}}/skills/prose-self-check/scripts/prose_lint.py\" - < draft.md" — .claude/skills/prose-self-check/SKILL.md:183
  - "python3 \"${COPILOT_PLUGIN_ROOT:-${CLAUDE_PLUGIN_ROOT:-.claude}}/skills/prose-self-check/scripts/prose_lint.py\" FILE --json" — .claude/skills/prose-self-check/SKILL.md:184
  - "python3 \"${COPILOT_PLUGIN_ROOT:-${CLAUDE_PLUGIN_ROOT:-.claude}}/skills/prose-self-check/scripts/prose_lint.py\" FILE --rules PATH" — .claude/skills/prose-self-check/SKILL.md:185
  - "python3 \"${COPILOT_PLUGIN_ROOT:-${CLAUDE_PLUGIN_ROOT:-.claude}}/skills/prose-self-check/scripts/prose_lint.py\" FILE" — .claude/skills/prose-self-check/SKILL.md:240
- **executed:** yes
- actual command run: `python3 .claude/skills/prose-self-check/scripts/prose_lint.py .claude/skills/prose-self-check/SKILL.md` (run from `sources/rjm`)
  abridged stdout:
  ```
  Layers 1-2 clean: 0 findings in 187 prose line(s) of 277 in 1 file(s).
  Layer 4 (emptiness gate) is still yours to run.
  ```
  **actual exit code**: 0
- documented exit codes vs. actual exit paths:
  Documented in SKILL.md:
  - "`0` no high-severity findings (`info` findings may still be present)" — .claude/skills/prose-self-check/SKILL.md:211
  - "`1` at least one high-severity finding" — .claude/skills/prose-self-check/SKILL.md:212
  - "`2` configuration error (a named file or the rules file cannot be read)" — .claude/skills/prose-self-check/SKILL.md:213
  Actual exit paths in script code:
  - `return 2` (.claude/skills/prose-self-check/scripts/prose_lint.py:1414) when rules file resolution fails
  - `return 2` (.claude/skills/prose-self-check/scripts/prose_lint.py:1423) when input file cannot be read (OSError, UnicodeDecodeError)
  - `return 1 if any(f.severity == HIGH for s in results.values() for f in s.findings) else 0` (.claude/skills/prose-self-check/scripts/prose_lint.py:1435) returning 1 on high-severity findings or 0 otherwise
  - `sys.exit(main())` (.claude/skills/prose-self-check/scripts/prose_lint.py:1439)
- for validators/gates: can it exit non-zero? Yes, exits 1 on high-severity findings (verified by passing an em-dash, exiting 1) and exits 2 on unreadable input or missing rules file. Does it fail on the source repo's own default branch? Exits 0 on `.claude/skills/prose-self-check/SKILL.md`.
- does the output match what the documentation claims? Yes, findings and summary match documented formats at lines 188, 191-192.

### burstiness.py
- path: `.claude/skills/prose-self-check/scripts/burstiness.py`, language: Python 3, lines: 164
- documented invocation:
  - "python3 \"${COPILOT_PLUGIN_ROOT:-${CLAUDE_PLUGIN_ROOT:-.claude}}/skills/prose-self-check/scripts/burstiness.py\" FILE" — .claude/skills/prose-self-check/SKILL.md:52
  - "python3 \"${COPILOT_PLUGIN_ROOT:-${CLAUDE_PLUGIN_ROOT:-.claude}}/skills/prose-self-check/scripts/burstiness.py\" FILE" — .claude/skills/prose-self-check/SKILL.md:120
  - "python3 \"${COPILOT_PLUGIN_ROOT:-${CLAUDE_PLUGIN_ROOT:-.claude}}/skills/prose-self-check/scripts/burstiness.py\" FILE" — .claude/skills/prose-self-check/SKILL.md:224
  - "python3 \"${COPILOT_PLUGIN_ROOT:-${CLAUDE_PLUGIN_ROOT:-.claude}}/skills/prose-self-check/scripts/burstiness.py\" FILE --json" — .claude/skills/prose-self-check/SKILL.md:225
  - "python3 \"${COPILOT_PLUGIN_ROOT:-${CLAUDE_PLUGIN_ROOT:-.claude}}/skills/prose-self-check/scripts/burstiness.py\" FILE" — .claude/skills/prose-self-check/SKILL.md:242
- **executed:** yes
- actual command run: `python3 .claude/skills/prose-self-check/scripts/burstiness.py .claude/skills/prose-self-check/SKILL.md` (run from `sources/rjm`)
  abridged stdout:
  ```
  sentences:        112
  words:            1996
  mean length:      17.82
  stddev length:    14.0
  variation (CV):   0.786
  concreteness:     140
  ```
  **actual exit code**: 0
- documented exit codes vs. actual exit paths:
  Documented in SKILL.md:
  - "`0` analyzed successfully (with or without a flat-rhythm warning)" — .claude/skills/prose-self-check/SKILL.md:234
  - "`2` configuration or input error (missing file, unreadable path)" — .claude/skills/prose-self-check/SKILL.md:235
  Actual exit paths in script code:
  - `return 2` (.claude/skills/prose-self-check/scripts/burstiness.py:152) on FileNotFoundError, OSError, UnicodeDecodeError
  - `return 0` (.claude/skills/prose-self-check/scripts/burstiness.py:159) on successful analysis
  - `sys.exit(main())` (.claude/skills/prose-self-check/scripts/burstiness.py:163)
- for validators/gates: can it exit non-zero? Yes, exits 2 on unreadable or missing file. Does not gate on low variance (prints a flat-rhythm warning when variance is low and sentences >= 4, but exits 0 per ADR-035). Does it fail on the source repo's own default branch? Exits 0 on `.claude/skills/prose-self-check/SKILL.md`.
- does the output match what the documentation claims? Yes, metrics match documented fields at lines 228-230.

## Defects — required
- missing-path · .claude/skills/prose-self-check/SKILL.md:206 · Fallback plugin install root marker .claude-plugin/plugin.json does not exist in sources/rjm/.claude-plugin/ (only marketplace.json exists).

## Observations
- Empirical foundation: Explicitly cites John Carter's 89k Reddit post study on r/ClaudeCode (2026-06-22) using the `unslop-ai-text` scanner and 600-post manual audit, establishing that em-dashes (7.1%), flat rhythm (4.0%), and contrast framing (2.8%) dominate reader complaints, while top keyword tells (`however`, `moreover`, `nuanced`) represent ~0% of reader citations.
- Anti-over-correction safeguard: Warns against reflexively scrubbing low-signal keywords (`info` level in `prose_lint.py`), observing that stripping them indiscriminately creates a "robot pretending not to be a robot" style that reads worse than the original text.
- Mechanical vs semantic separation: Layers 1–3 are delegated to Python scripts (`prose_lint.py`, `burstiness.py`), preserving agent attention for Layer 4 semantic adjudication (requiring every paragraph to make a nameable, disagreeable claim).
- Multi-agent lifecycle enforcement: Explicitly integrated into multiple upstream agent workflows (`explainer.md:16`, `retrospective.md:35`, `pr-comment-responder.md:124`, `analyst.md:41`) as a mandatory pre-emission check for all prose artifacts.
- Exact duplicate outside manifest: `sources/rjm/src/copilot-cli/skills/prose-self-check/SKILL.md` is an exact 12884-byte duplicate of `.claude/skills/prose-self-check/SKILL.md`, but is outside the manifest graph.
- Test coverage: Bundles 58 tests in `.claude/skills/prose-self-check/tests/` (`test_burstiness.py`, `test_skill_structure.py`, `test_wiring.py`), all passing via `uv run pytest .claude/skills/prose-self-check/tests/ -q`.

## Context cost
111732 bytes total (~27933 tokens). Comprises `SKILL.md` (12884 bytes), `scripts/prose_lint.py` (65128 bytes), `scripts/burstiness.py` (5394 bytes), `.claude/rules/voice.md` (18142 bytes), `.claude/rules/universal.md` (5888 bytes), and `.claude/skills/CLAUDE.md` (4296 bytes).
