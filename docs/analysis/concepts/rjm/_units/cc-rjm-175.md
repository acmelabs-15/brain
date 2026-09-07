---
unit: cc-rjm-175
phase: 2
package: rjm
session: 017
subagent_returned: complete
---

# Unit cc-rjm-175

## Files assigned
- [x] sources/rjm/.claude/skills/prompt-engineer/SKILL.md
- [x] sources/rjm/.claude/skills/prompt-engineer/references/prompt-engineering-single-turn.md
- [x] sources/rjm/.claude/skills/prompt-engineer/references/prompting-ai-detection-cliff.md
- [x] sources/rjm/.claude/skills/prompt-engineer/references/prompting-anti-patterns.md
- [x] sources/rjm/.claude/skills/prompt-engineer/references/workflow.md

## Outputs produced
- docs/analysis/concepts/rjm/auto-cot.md (1580 bytes)
- docs/analysis/concepts/rjm/ai-detection-cliff.md (1735 bytes)
- docs/analysis/concepts/rjm/gptzero.md (978 bytes)
- docs/analysis/concepts/rjm/probability-surface.md (1520 bytes)
- docs/analysis/concepts/rjm/dipper-11b.md (947 bytes)
- docs/analysis/concepts/rjm/humaneyes.md (940 bytes)
- docs/analysis/concepts/rjm/vhumanize.md (950 bytes)
- docs/analysis/concepts/rjm/detection-neutral-craft-techniques.md (1662 bytes)
- docs/analysis/concepts/rjm/structural-unpredictability.md (1798 bytes)
- docs/analysis/concepts/rjm/sico-method.md (1292 bytes)
- docs/analysis/concepts/rjm/acronym-frameworks.md (1367 bytes)
- docs/analysis/concepts/rjm/biasing-headers.md (1533 bytes)
- docs/analysis/concepts/rjm/anthropic-3-step-hallucination-reduction.md (1631 bytes)
- docs/analysis/concepts/rjm/engineering-restraint.md (1555 bytes)
- docs/analysis/concepts/rjm/claude-md-pattern.md (1525 bytes)
- docs/analysis/concepts/rjm/cognitive-infrastructure-pattern.md (1614 bytes)
- docs/analysis/concepts/rjm/natural-human-voice.md (1571 bytes)
- docs/analysis/concepts/rjm/the-subtraction-trap.md (1619 bytes)
- docs/analysis/concepts/rjm/more-rules-more-fingerprint.md (1684 bytes)
- docs/analysis/concepts/rjm/multi-agent-verification-pattern.md (1570 bytes)
- docs/analysis/concepts/rjm/lightweight-process.md (1473 bytes)
- docs/analysis/concepts/rjm/full-process.md (1618 bytes)
- docs/analysis/concepts/rjm/operating-context.md (1368 bytes)
- docs/analysis/concepts/rjm/current-state-assessment.md (1337 bytes)
- docs/analysis/concepts/rjm/visual-card-layout.md (1612 bytes)
- docs/analysis/concepts/rjm/card-template.md (1336 bytes)
- docs/analysis/concepts/rjm/integration-checks.md (1375 bytes)
- docs/analysis/concepts/rjm/quality-verification.md (1525 bytes)
- docs/analysis/concepts/rjm/completion-checkpoint.md (1883 bytes)
- docs/analysis/concepts/rjm/prompt-optimizer.md (1564 bytes)
- docs/analysis/concepts/rjm/_units/cc-rjm-175.md (this report)

## Scripts executed
- scripts/synthesis/quote-check.ts, `bun scripts/synthesis/quote-check.ts <30 cards>`, exit code 0 (47 PASS, 0 FAIL)

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- All 30 concepts assigned to cc-rjm-175 under unit-facts were extracted and authored.
- Concepts span the prompt-engineer skill and its references: academic research foundations (diversity-based demonstration selection), empirical detection cliff benchmarks, prompt design anti-patterns, and human-in-the-loop optimization workflows.
- Multi-occurrence concepts:
  - `Completion Checkpoint` (3 occurrences): Defined in `references/workflow.md:345` as a comprehensive 13-point verification checklist before final presentation, referenced in `SKILL.md:84` as a core workflow resource, and defined in `SKILL.md:136` as the completion quality gate.
- Concepts classified as `kind: name-only` per D-023:
  - `GPTZero`: External commercial AI detection service and benchmark metric.
  - `DIPPER 11B`: External 11-billion parameter paraphrasing model benchmarked in detection evasion experiments.
  - `Humaneyes`: External commercial text humanizer tool tested in detection experiments.
  - `VHumanize`: External commercial text rewriter evaluated in detection tests.
- Lifecycle concepts:
  - Techniques: `Auto-CoT`, `Detection-neutral craft techniques`, `Structural Unpredictability`, `SICO method`, `Anthropic 3-Step Hallucination Reduction`, `Lightweight Process`, `Full Process`, `Operating Context`, `Current State Assessment`.
  - Patterns: `AI Detection Cliff`, `probability surface`, `Acronym frameworks`, `Biasing Headers`, `Engineering Restraint`, `CLAUDE.md Pattern`, `Cognitive Infrastructure Pattern`, `Natural Human Voice`, `The Subtraction Trap`, `More Rules = More Fingerprint`, `Multi-agent verification pattern`.
  - Templates: `Visual Card Layout`, `Card Template`.
  - Checklists: `Integration Checks`, `Quality Verification`.
  - Gates: `Completion Checkpoint`.
  - Roles: `Prompt Optimizer`.

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~38,000 tokens across 5 source files and 5 inventory cards; approximate tokens of output written: ~12,500 tokens across 30 concept cards and this unit report.
