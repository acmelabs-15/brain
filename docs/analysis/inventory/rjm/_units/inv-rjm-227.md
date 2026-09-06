---
unit: inv-rjm-227
phase: 1
package: rjm
session: 007
subagent_returned: complete
---

# Unit inv-rjm-227

## Files assigned
- [x] `scripts/eval/eval-agents.py`

## Outputs produced
- `docs/analysis/inventory/rjm/scripts-eval-eval-agents-py.md` — 15116 bytes
- `docs/analysis/inventory/rjm/_units/inv-rjm-227.md` — 2377 bytes

## Scripts executed
- `scripts/eval/eval-agents.py`: `python3 scripts/eval/eval-agents.py --agent analyst --dry-run` (exit code: 0)
- `scripts/eval/eval-agents.py`: `python3 scripts/eval/eval-agents.py --dry-run` (exit code: 0)
- `scripts/eval/eval-agents.py`: `python3 scripts/eval/eval-agents.py` (exit code: 1)
- `scripts/eval/eval-agents.py`: `python3 scripts/eval/eval-agents.py --help` (exit code: 0)
- `scripts/eval/eval-agents.py`: `python3 scripts/eval/eval-agents.py --agent spec-generator --dry-run` (exit code: 1)

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- `scripts/eval/eval-agents.py` defines built-in test prompts for 22 agent identifiers in `PROMPTS`, but three of them (`spec-generator`, `adr-generator`, and `context-retrieval`) lack corresponding agent markdown definition files in `.claude/agents/`. While `.claude/skills/spec-generator/` and `.claude/skills/adr-generator/` exist as skills, invoking `eval-agents.py --agent <name>` on them exits 1 because the script expects files under `.claude/agents/`. In default `--dry-run` mode over all agents, these three are omitted from testing because `list_agents()` only iterates existing `.claude/agents/*.md` files.
- `eval-agents.py` works complementarily with `eval-suite.py` and `eval-prompt-change.py`: `eval-suite.py` orchestrates routing to `eval-agents.py` when agent definitions change, whereas `eval-prompt-change.py` is reserved for comparative before/after prompt delta evaluation under ADR-057.

## Blocked or uncertain
none

## Time and size
Approx. 15,000 tokens of source read (59,882 bytes source code plus imported sibling utilities and referenced agent files); approx. 3,800 tokens of output written.
