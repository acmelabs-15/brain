---
unit: inv-rjm-226
phase: 1
package: rjm
session: 011
subagent_returned: complete
---

# Unit inv-rjm-226

## Files assigned
- [x] sources/rjm/scripts/eval/eval-agent-vs-baseline.py

## Outputs produced
- docs/analysis/inventory/rjm/scripts-eval-eval-agent-vs-baseline-py.md (16132 bytes)

## Scripts executed
- scripts/eval/eval-agent-vs-baseline.py: `python3 scripts/eval/eval-agent-vs-baseline.py --agent security --fixtures evals/security-spike/fixtures --dry-run`, exit code 0
- scripts/eval/eval-agent-vs-baseline.py: `python3 scripts/eval/eval-agent-vs-baseline.py --agent analyst --fixtures evals/analyst-spike/fixtures --n-runs 3 --model claude-sonnet-4-6 --dry-run`, exit code 0

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- `eval-agent-vs-baseline.py` serves as the core evaluation runner for the `rjm` offline evaluation harness. It is invoked or referenced by `eval-model-sweep.py` (unit inv-rjm-229), `eval-model-panel.py` (unit inv-rjm-228), `.claude/skills/ai-agents-empirical-probe-toolkit/SKILL.md` (unit inv-rjm-088), and `.claude/skills/ai-agents-diagnostics-toolkit/references/instrument-guides.md` (unit inv-rjm-087).
- Its output-shape constraint (`OUTPUT_SHAPE_SUFFIX`: `IDENTIFY, OK, or ESCALATE. Then briefly explain in <=80 words.`) directly motivates the intentional verdict divergence documented in `.claude/skills/security-review/SKILL.md:47-50` where the inline skill diverges from the canonical security agent's `APPROVED / CONDITIONAL / BLOCKED` vocabulary to match the automated eval harness fixtures.
- Addresses Phase 1V finding in `docs/analysis/inventory/rjm/_verification.md` requiring the `verified:` frontmatter line (`verified: 2026-09-06 quote-check+coverage`), which is now present and verified.

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~11,400 tokens (45,289 bytes of source file plus 116,164 bytes of helper dependencies).
Approximate tokens of output written: ~4,100 tokens (16,132 bytes of card output).
