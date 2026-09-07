---
unit: cc-rjm-177
phase: 2
package: rjm
session: 017
subagent_returned: complete
---

# Unit cc-rjm-177

## Files assigned
- [x] sources/rjm/.claude/skills/prose-self-check/SKILL.md
- [x] sources/rjm/.claude/skills/prose-self-check/scripts/prose_lint.py
- [x] sources/rjm/scripts/utils/markdown_parser.py
- [x] docs/analysis/inventory/rjm/claude-skills-prose-self-check-skill-md.md
- [x] docs/analysis/inventory/rjm/claude-skills-prose-self-check-scripts-prose-lint-py.md
- [x] docs/analysis/inventory/rjm/scripts-utils-markdown-parser-py.md

## Outputs produced
- docs/analysis/concepts/rjm/info.md (834 bytes)
- docs/analysis/concepts/rjm/em-dash.md (1075 bytes)
- docs/analysis/concepts/rjm/en-dash.md (1075 bytes)
- docs/analysis/concepts/rjm/low-signal-words.md (1075 bytes)
- docs/analysis/concepts/rjm/banned-vocabulary.md (1099 bytes)
- docs/analysis/concepts/rjm/markdown-it-py.md (1055 bytes)
- docs/analysis/concepts/rjm/contrast-framing.md (1221 bytes)
- docs/analysis/concepts/rjm/trailing-offer.md (1079 bytes)
- docs/analysis/concepts/rjm/signposting.md (1094 bytes)
- docs/analysis/concepts/rjm/model-identity.md (909 bytes)
- docs/analysis/concepts/rjm/discover-rules-file.md (929 bytes)
- docs/analysis/concepts/rjm/parse-banned-words.md (915 bytes)
- docs/analysis/concepts/rjm/banned-word.md (881 bytes)
- docs/analysis/concepts/rjm/banned-word-low-signal.md (936 bytes)
- docs/analysis/concepts/rjm/scan-prose.md (869 bytes)
- docs/analysis/concepts/rjm/lint-prose.md (880 bytes)
- docs/analysis/concepts/rjm/emptiness-gate.md (1419 bytes)
- docs/analysis/concepts/rjm/ai-vernacular-self-check.md (1335 bytes)
- docs/analysis/concepts/rjm/four-layers.md (1162 bytes)
- docs/analysis/concepts/rjm/ai-vernacular-tells.md (1253 bytes)
- docs/analysis/concepts/rjm/reader-trust.md (1197 bytes)
- docs/analysis/concepts/rjm/flat-rhythm.md (1115 bytes)
- docs/analysis/concepts/rjm/prose-lint-py.md (866 bytes)
- docs/analysis/concepts/rjm/layer-1-lexical.md (1163 bytes)
- docs/analysis/concepts/rjm/layer-2-structural.md (1220 bytes)
- docs/analysis/concepts/rjm/manufactured-trailing-offers.md (1160 bytes)
- docs/analysis/concepts/rjm/stop-token.md (1089 bytes)
- docs/analysis/concepts/rjm/signposting-throat-clearing-openers.md (1164 bytes)
- docs/analysis/concepts/rjm/rule-of-three-padding.md (1168 bytes)
- docs/analysis/concepts/rjm/inline-header-lists.md (1176 bytes)
- docs/analysis/concepts/rjm/_units/cc-rjm-177.md (this file)

## Scripts executed
- `bun scripts/synthesis/quote-check.ts docs/analysis/concepts/rjm/info.md docs/analysis/concepts/rjm/em-dash.md docs/analysis/concepts/rjm/en-dash.md docs/analysis/concepts/rjm/low-signal-words.md docs/analysis/concepts/rjm/banned-vocabulary.md docs/analysis/concepts/rjm/markdown-it-py.md docs/analysis/concepts/rjm/contrast-framing.md docs/analysis/concepts/rjm/trailing-offer.md docs/analysis/concepts/rjm/signposting.md docs/analysis/concepts/rjm/model-identity.md docs/analysis/concepts/rjm/discover-rules-file.md docs/analysis/concepts/rjm/parse-banned-words.md docs/analysis/concepts/rjm/banned-word.md docs/analysis/concepts/rjm/banned-word-low-signal.md docs/analysis/concepts/rjm/scan-prose.md docs/analysis/concepts/rjm/lint-prose.md docs/analysis/concepts/rjm/emptiness-gate.md docs/analysis/concepts/rjm/ai-vernacular-self-check.md docs/analysis/concepts/rjm/four-layers.md docs/analysis/concepts/rjm/ai-vernacular-tells.md docs/analysis/concepts/rjm/reader-trust.md docs/analysis/concepts/rjm/flat-rhythm.md docs/analysis/concepts/rjm/prose-lint-py.md docs/analysis/concepts/rjm/layer-1-lexical.md docs/analysis/concepts/rjm/layer-2-structural.md docs/analysis/concepts/rjm/manufactured-trailing-offers.md docs/analysis/concepts/rjm/stop-token.md docs/analysis/concepts/rjm/signposting-throat-clearing-openers.md docs/analysis/concepts/rjm/rule-of-three-padding.md docs/analysis/concepts/rjm/inline-header-lists.md` (exit code 0, 30 PASS, 0 FAIL across 30 cards)

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- Unit cc-rjm-177 covers 30 concept cards deriving from `prose-self-check` skill documentation (`SKILL.md`), its deterministic linting engine (`scripts/prose_lint.py`), and the shared CommonMark utility parser (`scripts/utils/markdown_parser.py`).
- Concepts were classified into lifecycle concepts vs. name-only items per D-023:
  - Code identifiers (constants `INFO`, `EM_DASH`, `EN_DASH`, `LOW_SIGNAL_WORDS`; finding kinds `contrast_framing`, `trailing_offer`, `signposting`, `model_identity`, `banned_word`, `banned_word_low_signal`; functions `discover_rules_file`, `parse_banned_words`, `scan_prose`, `lint_prose`), file names (`prose_lint.py`), headings (`Banned Vocabulary`), and third-party library dependencies (`markdown-it-py`) were assigned `kind: name-only`, `package_phase: none`, with `(used, not defined)` definitions and one-sentence design notes explaining their taxonomic role.
  - Lifecycle techniques, gates, and patterns (`emptiness gate`, `AI-vernacular self-check`, `Four layers`, `AI-vernacular tells`, `reader-trust`, `flat rhythm`, `Layer 1: Lexical`, `Layer 2: Structural`, `Manufactured trailing offers`, `STOP-TOKEN`, `Signposting / throat-clearing openers`, `Rule-of-three padding`, `Inline-header lists`) were assigned appropriate kinds (`gate`, `technique`, `pattern`) and `package_phase: cross-phase`.
- All 40 occurrence locations across the 30 concepts specified in `facts/cc-rjm-177.txt` were mapped into the cards' `Where used` tables with exact file paths, line numbers, roles, and descriptions.
- Defect classes from inventory cards were propagated: `script-bug`, `doc-drift`, `other` from `prose_lint.py`, and `missing-path` from `SKILL.md`.

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~42,500 tokens across 3 source files and 3 inventory cards.
Approximate tokens of output written: ~8,975 tokens across 30 concept cards and 1 unit report.
