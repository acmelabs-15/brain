---
unit: inv-rjm-155
phase: 1
package: rjm
session: 006
subagent_returned: complete
---

# Unit inv-rjm-155

## Files assigned
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/.claude/skills/reviewer-findings/SKILL.md` (read in full)
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/.claude/skills/security-detection/detect_infrastructure.py` (read in full)
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/.claude/skills/security-detection/SKILL.md` (read in full)
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/.claude/skills/security-review/SKILL.md` (read in full)

## Outputs produced
- `docs/analysis/inventory/rjm/claude-skills-reviewer-findings-skill-md.md` (6964 bytes)
- `docs/analysis/inventory/rjm/claude-skills-security-detection-detect-infrastructure-py.md` (6406 bytes)
- `docs/analysis/inventory/rjm/claude-skills-security-detection-skill-md.md` (8053 bytes)
- `docs/analysis/inventory/rjm/claude-skills-security-review-skill-md.md` (6749 bytes)

## Scripts executed
- `.claude/skills/security-detection/detect_infrastructure.py`: `python3 sources/rjm/.claude/skills/security-detection/detect_infrastructure.py --files .github/workflows/ci.yml src/auth/login.cs`, exit code 0
- `.claude/skills/security-detection/detect_infrastructure.py`: `python3 sources/rjm/.claude/skills/security-detection/detect_infrastructure.py --files README.md`, exit code 0
- `.claude/skills/security-detection/detect_infrastructure.py`: `python3 sources/rjm/.claude/skills/security-detection/detect_infrastructure.py --files .github/workflows/ci.yml --json`, exit code 0
- `.claude/skills/security-detection/detect_infrastructure.py`: `printf '.github/workflows/ci.yml\0' | python3 sources/rjm/.claude/skills/security-detection/detect_infrastructure.py --files-from-stdin`, exit code 0
- `.claude/skills/security-detection/detect_infrastructure.py`: `python3 sources/rjm/.claude/skills/security-detection/detect_infrastructure.py --use-git-staged`, exit code 0

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- `.claude/skills/reviewer-findings/SKILL.md` is an orphan in the manifest reachability graph: it is only invoked by `.claude/skills/pr-comment-responder/SKILL.md:201`, which is excluded from scope under METHOD.md §1.2 (`pr-*`). It entered the manifest because `.agents/architecture/ADR-058-agent-eval-discipline.md` referenced the `.claude/skills` directory, causing a recursive filesystem walk.
- `.claude/skills/security-review/SKILL.md` explicitly projects content from `templates/agents/security.shared.md` as an inline parent-context form-factor alternative to the full `security` subagent, and intentionally diverges in its verdict vocabulary (IDENTIFY / OK / ESCALATE instead of APPROVED / CONDITIONAL / BLOCKED) to match automated evaluation harnesses (`eval-agent-vs-baseline.py`).
- `.claude/skills/security-detection/SKILL.md` exhibits doc-drift: it refers to "either script" and mentions PowerShell variables `$CriticalPatterns` / `$HighPatterns`, but only `detect_infrastructure.py` exists in the directory.

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~10,727 tokens (42,908 bytes).
Approximate tokens of output written: ~7,043 tokens (28,172 bytes across 4 inventory cards).
