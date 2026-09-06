---
package: rjm
path: scripts/ai_review_common/cache_guard.py
type: script
bytes: 5630
unit: inv-rjm-195
in_scope_via: .claude/skills/review/SKILL.md
aliases: []
memo_inputs:
  - {path: scripts/ai_review_common/cache_guard.py, sha256: 831609daa3a9693507ede9335562af1c3b2f85fc21491bcca96471cceef458c6}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/ai_review_common/cache_guard.py

## Purpose — required, verbatim
> "Cache population guard for the agent-review composite action." — scripts/ai_review_common/cache_guard.py:1

## Design intent — required
Cache population guard and safety mechanism for the GitHub Actions agent-review composite action. Prevents corrupted, incomplete, or malformed AI review results from polluting the review cache. It validates agent names against a strict regex to prevent directory traversal (CWE-22), resolves cache storage anchored to the repository root rather than the process working directory, and rejects caching whenever an infrastructure failure occurred, when verdicts are empty, or when the verdict is `NEEDS_REVIEW` (indicating malformed AI output). Uses atomic writes via temporary files and `os.replace` to prevent partial cache files during crashes or concurrent executions. Without this script, transient network timeouts, infrastructure glitches, or malformed model responses could be cached as valid review results, causing subsequent CI runs to trust invalid review data.

## Phase — required
rjm:review

## Inputs — required
- Target agent name from environment variable `AGENT` — scripts/ai_review_common/cache_guard.py:141
- Review verdict token from environment variable `VERDICT` — scripts/ai_review_common/cache_guard.py:142
- Detailed review findings from environment variable `FINDINGS` — scripts/ai_review_common/cache_guard.py:143
- Infrastructure failure flag from environment variable `INFRA_FAILURE` — scripts/ai_review_common/cache_guard.py:144
- GitHub Actions step output file destination `GITHUB_OUTPUT` — scripts/ai_review_common/cache_guard.py:134

## Outputs — required
- Cache files written atomically to disk including `verdict.txt` — scripts/ai_review_common/cache_guard.py:114
- GitHub Actions step output parameter `cache_populated` — scripts/ai_review_common/cache_guard.py:107
- Process exit codes (0 for success, 2 for configuration errors, 3 for filesystem errors)

## Invokes — required
none

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `Cache population guard` — scripts/ai_review_common/cache_guard.py:1 — defined here
- `NON_CACHEABLE_VERDICTS` — scripts/ai_review_common/cache_guard.py:13 — defined here
- `NEEDS_REVIEW` — scripts/ai_review_common/cache_guard.py:13 — used here
- `CWE-22` — scripts/ai_review_common/cache_guard.py:43 — used here
- `CacheGuardConfigError` — scripts/ai_review_common/cache_guard.py:55 — defined here

## Structure
none

## Scripts — required if type is script or the skill ships scripts
The file is an executable CLI script:
- path: `scripts/ai_review_common/cache_guard.py`, language: Python, lines: 158
- documented invocation: `python3 scripts/ai_review_common/cache_guard.py`
- **executed:** yes
- actual command run:
  ```bash
  python3 -c "
  import tempfile, os, subprocess
  with tempfile.NamedTemporaryFile('w+', delete=False) as f: gh_out = f.name
  env = dict(os.environ, GITHUB_OUTPUT=gh_out, AGENT='architect', VERDICT='NEEDS_REVIEW', FINDINGS='Needs review', INFRA_FAILURE='false')
  res = subprocess.run(['python3', 'scripts/ai_review_common/cache_guard.py'], cwd='sources/rjm', env=env, capture_output=True, text=True)
  print('exit:', res.returncode)
  print('stdout:', res.stdout.strip())
  with open(gh_out) as f: print('gh_out:', f.read().strip())
  os.unlink(gh_out)
  "
  ```
- actual stdout (abridged):
  ```text
  exit: 0
  stdout: Skipping cache save: verdict is NEEDS_REVIEW (malformed AI output)
  gh_out: cache_populated=false
  ```
- **actual exit code:** 0
- documented exit codes vs. actual exit paths: none documented in docstring vs. actual exit paths in code:
  - `scripts/ai_review_common/cache_guard.py:137` — `return 2` when GITHUB_OUTPUT is unset
  - `scripts/ai_review_common/cache_guard.py:149` — `return 2` on CacheGuardConfigError (invalid agent name)
  - `scripts/ai_review_common/cache_guard.py:152` — `return 3` on OSError during cache creation
  - `scripts/ai_review_common/cache_guard.py:153` — `return 0` on successful population or skipped save
- for validators/gates: can exit non-zero (exits 2 or 3). Exits 2 on the default branch when invoked without GITHUB_OUTPUT (`::error::GITHUB_OUTPUT is required`).
- does the output match what the documentation claims? yes (safely guards cache population and emits GITHUB_OUTPUT)

## Defects — required
- orphan · scripts/ai_review_common/cache_guard.py:1 · Invoked by GitHub Actions workflow definitions (`.github/workflows/`), but has no caller within in-scope lifecycle scripts or commands.

## Observations
Implements security-focused path handling: anchors cache paths to the nearest ancestor containing `.git` or `.claude` via `get_repo_root()` rather than relying on CWD, preventing path traversal vulnerabilities (CWE-22). Features atomic writes via temporary files and `os.replace` to prevent race conditions and corrupted caches.

## Context cost
5,630 bytes (~1,400 tokens) standalone. Loads only standard library modules.
