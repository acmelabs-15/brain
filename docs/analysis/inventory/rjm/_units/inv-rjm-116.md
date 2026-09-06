---
unit: inv-rjm-116
phase: 1
package: rjm
session: 005
subagent_returned: complete
---

# Unit inv-rjm-116

## Files assigned
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/.claude/skills/doc-accuracy/scripts/doc_accuracy.py` (read in full)
Context read:
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/.claude/skills/doc-accuracy/SKILL.md` (read in full for skill context)

## Outputs produced
- `docs/analysis/inventory/rjm/claude-skills-doc-accuracy-scripts-doc-accuracy-py.md`: 15882 bytes

## Scripts executed
- `.claude/skills/doc-accuracy/scripts/doc_accuracy.py`: `python3 sources/rjm/.claude/skills/doc-accuracy/scripts/doc_accuracy.py --help`, exit code 0
- `.claude/skills/doc-accuracy/scripts/doc_accuracy.py`: `python3 sources/rjm/.claude/skills/doc-accuracy/scripts/doc_accuracy.py --target sources/rjm --diff-base HEAD --output-dir /tmp/rjm-diff-test --format summary`, exit code 0
- `.claude/skills/doc-accuracy/scripts/doc_accuracy.py`: `python3 sources/rjm/.claude/skills/doc-accuracy/scripts/doc_accuracy.py --target sources/rjm --diff-base 12bea5f59 --output-dir /tmp/rjm-diff-test-2 --format summary`, exit code 10

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- Unit `inv-rjm-116` covers Part 1 of the `.claude/skills/doc-accuracy` skill (`scripts/doc_accuracy.py`). Part 2 (`scripts/pr_snapshot.py` and `SKILL.md`) is assigned to unit `inv-rjm-117`.
- `scripts/pr_snapshot.py` in unit `inv-rjm-117` directly references and executes `doc_accuracy.py` at line 542 (`scanner_script = Path(__file__).parent / "doc_accuracy.py"`).
- `doc-accuracy` is directly wired into the core lifecycle pipeline as Mandatory Exit Gate 3 of `/build` in `.claude/commands/build.md:69` (`Skill(skill="doc-accuracy") with --diff-base main`).
- Identification regex bug & comment noise: `_extract_identifiers` does not strip comments or string literals before tokenizing, extracting leading capitalized English prose words (e.g. `# Pass the tree...`) and uppercase regex tokens (`TODO`, `TBD`), resulting in false-positive `unresolved_symbol` findings on valid documentation files.
- Python compilability validation gap: While `_extract_python_symbols` captures public `def` functions, `run_compilability_check` skips all identifiers not matching `^[A-Z][a-zA-Z0-9]+$`, meaning snake_case Python functions in code blocks are never verified.
- Unindexed full-scan complexity: `run_assessment` performs full-text scans across all documentation files ($D = 4,548$) for every indexed source symbol ($S = 36,782$), generating $>167$ million substring operations. Scoping with `--diff-base` is mandatory for performant execution.

## Blocked or uncertain
none

## Time and size
Source read: ~14,000 tokens (.claude/skills/doc-accuracy/scripts/doc_accuracy.py: 47,394 bytes, plus SKILL.md context: 9,275 bytes).
Output written: ~4,500 tokens (inventory card: 15,882 bytes, unit report: 2,700 bytes).
