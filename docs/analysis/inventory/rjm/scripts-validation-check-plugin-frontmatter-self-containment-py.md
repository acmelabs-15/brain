---
package: rjm
path: scripts/validation/check_plugin_frontmatter_self_containment.py
type: script
bytes: 32869
unit: inv-rjm-281
in_scope_via: .github/workflows/validate-generated-agents.yml
aliases: []
memo_inputs:
  - {path: scripts/validation/check_plugin_frontmatter_self_containment.py, sha256: 80c17e1875128b3805186d2139dc90218d179594a7098af3a1823e8027d8004c}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/validation/check_plugin_frontmatter_self_containment.py

## Purpose — required, verbatim
> "Frontmatter self-containment gate for shipped plugin files (issue #3565)." — scripts/validation/check_plugin_frontmatter_self_containment.py:13

## Design intent — required
Prevents shipped plugin Markdown files (under `.claude`, `src/claude`, `src/copilot-cli`) from referencing repository-internal, upstream-only files (such as `docs/`, `.agents/`, `.github/`, `scripts/`, `build/`, `templates/`) or using unanchored root-prefixed paths in frontmatter fields (`description` and `name`). Unlike body prose, frontmatter descriptions are loaded into every consumer session for model routing regardless of whether a skill is invoked, making dangling references in frontmatter visible to every consumer while completely unresolvable in an installed plugin environment. By enforcing an un-baselined, absolute zero-tolerance gate with path-specific opt-out markers (`<!-- vendor-portability: <path> -->`), the script ensures shipped plugin metadata is entirely self-contained within installed plugin roots, avoiding routing confusion, broken consumer experiences, and cross-plugin root dependency leaks.

## Phase — required
rjm:test

## Inputs — required
- Command-line arguments parsed via `build_parser()`:
  - `"--repo-root"` — scripts/validation/check_plugin_frontmatter_self_containment.py:651 (default repository root: `Path(__file__).resolve().parents[2]` — scripts/validation/check_plugin_frontmatter_self_containment.py:661)
- Configuration manifests:
  - `.claude-plugin/marketplace.json` and `.github/plugin/marketplace.json` read via `MARKETPLACE_MANIFESTS` — scripts/validation/check_plugin_frontmatter_self_containment.py:153 and `_manifest_sources` — scripts/validation/check_plugin_frontmatter_self_containment.py:174
- On-disk Markdown files:
  - Tracked `.md` files under resolved plugin roots discovered via `_tracked_files` — scripts/validation/check_plugin_frontmatter_self_containment.py:601 and `iter_markdown` — scripts/validation/check_plugin_frontmatter_self_containment.py:615
- Shipped content existence checks:
  - Evaluates candidate paths against target file directory and owning plugin root via `reference_shipper` — scripts/validation/check_plugin_frontmatter_self_containment.py:538

## Outputs — required
- Stdout / Stderr reporting:
  - Success message on stdout: "No outward frontmatter references." — scripts/validation/check_plugin_frontmatter_self_containment.py:689
  - Violation report on stderr: "Outward frontmatter references in" — scripts/validation/check_plugin_frontmatter_self_containment.py:694
  - Guidance message on stderr: "A frontmatter description loads into every session" — scripts/validation/check_plugin_frontmatter_self_containment.py:699
  - Configuration error message on stderr if marketplace manifest or plugin source directory is missing or malformed via `ConfigError` — scripts/validation/check_plugin_frontmatter_self_containment.py:664
- Exit status:
  - 0 (`EXIT_OK`) on clean scan — scripts/validation/check_plugin_frontmatter_self_containment.py:350, 692
  - 1 (`EXIT_VIOLATION`) if violations found — scripts/validation/check_plugin_frontmatter_self_containment.py:351, 707
  - 2 (`EXIT_CONFIG`) on configuration or file read/parse error — scripts/validation/check_plugin_frontmatter_self_containment.py:352, 666, 676, 683

## Invokes — required
none

## Invoked by — required
- config .github/workflows/validate-generated-agents.yml — .github/workflows/validate-generated-agents.yml:182

## Concepts named — required, verbatim
- `taste-lint` — scripts/validation/check_plugin_frontmatter_self_containment.py:2 — used here
- `file-size` — scripts/validation/check_plugin_frontmatter_self_containment.py:2 — used here
- `check_skill_md_portability.py` — scripts/validation/check_plugin_frontmatter_self_containment.py:15 — used here
- `vendor-portability` — scripts/validation/check_plugin_frontmatter_self_containment.py:64 — used here
- `MUST-2` — scripts/validation/check_plugin_frontmatter_self_containment.py:83 — used here
- `MUST-3` — scripts/validation/check_plugin_frontmatter_self_containment.py:85 — used here
- `MARKETPLACE_MANIFESTS` — scripts/validation/check_plugin_frontmatter_self_containment.py:153 — defined here
- `ConfigError` — scripts/validation/check_plugin_frontmatter_self_containment.py:156 — defined here
- `FrontmatterParseError` — scripts/validation/check_plugin_frontmatter_self_containment.py:160 — defined here
- `plugin_roots` — scripts/validation/check_plugin_frontmatter_self_containment.py:194 — defined here
- `PLUGIN_ROOTS` — scripts/validation/check_plugin_frontmatter_self_containment.py:210 — defined here
- `UPSTREAM_ONLY` — scripts/validation/check_plugin_frontmatter_self_containment.py:242 — defined here
- `SHOULD-2` — scripts/validation/check_plugin_frontmatter_self_containment.py:256 — used here
- `REMOTE_URI` — scripts/validation/check_plugin_frontmatter_self_containment.py:284 — defined here
- `OPAQUE_URI` — scripts/validation/check_plugin_frontmatter_self_containment.py:297 — defined here
- `LOCAL_URI` — scripts/validation/check_plugin_frontmatter_self_containment.py:311 — defined here
- `OUTWARD_FILE` — scripts/validation/check_plugin_frontmatter_self_containment.py:343 — defined here
- `DECLARATION` — scripts/validation/check_plugin_frontmatter_self_containment.py:345 — defined here
- `CHECKED_KEYS` — scripts/validation/check_plugin_frontmatter_self_containment.py:348 — defined here
- `EXIT_OK` — scripts/validation/check_plugin_frontmatter_self_containment.py:350 — defined here
- `EXIT_VIOLATION` — scripts/validation/check_plugin_frontmatter_self_containment.py:351 — defined here
- `EXIT_CONFIG` — scripts/validation/check_plugin_frontmatter_self_containment.py:352 — defined here
- `PLACEHOLDER` — scripts/validation/check_plugin_frontmatter_self_containment.py:398 — defined here
- `SkillForge` — scripts/validation/check_plugin_frontmatter_self_containment.py:402 — used here
- `reference_shipper` — scripts/validation/check_plugin_frontmatter_self_containment.py:538 — defined here
- `scan_file` — scripts/validation/check_plugin_frontmatter_self_containment.py:578 — defined here
- `iter_markdown` — scripts/validation/check_plugin_frontmatter_self_containment.py:615 — defined here
- `owning_root` — scripts/validation/check_plugin_frontmatter_self_containment.py:637 — defined here

## Structure
(no markdown headings; flat python script)

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/validation/check_plugin_frontmatter_self_containment.py`, language: Python 3, lines: 712
- documented invocation: `"Repository root. Defaults to the tree containing this script." — scripts/validation/check_plugin_frontmatter_self_containment.py:654`
- **executed:** yes
- actual command run, abridged stdout, **actual exit code**:
  - standard run: `uv run --directory sources/rjm python scripts/validation/check_plugin_frontmatter_self_containment.py`, stdout: `No outward frontmatter references. Scanned 908 files across 3 plugin roots.`, **actual exit code**: 0
  - help invocation: `uv run --directory sources/rjm python scripts/validation/check_plugin_frontmatter_self_containment.py --help`, stdout: `usage: check_plugin_frontmatter_self_containment.py [-h] [--repo-root REPO_ROOT]`, **actual exit code**: 0
  - configuration error check: `uv run --directory sources/rjm python scripts/validation/check_plugin_frontmatter_self_containment.py --repo-root /nonexistent`, stderr: `Marketplace manifest not found: /nonexistent/.claude-plugin/marketplace.json`, **actual exit code**: 2
- documented exit codes:
  - `"0 - no undeclared outward file references in frontmatter" — scripts/validation/check_plugin_frontmatter_self_containment.py:136`
  - `"1 - at least one violation" — scripts/validation/check_plugin_frontmatter_self_containment.py:137`
  - `"2 - configuration error (no plugin root found)" — scripts/validation/check_plugin_frontmatter_self_containment.py:138`
  vs. actual exit paths:
  - `scripts/validation/check_plugin_frontmatter_self_containment.py:666` (`return EXIT_CONFIG` [2])
  - `scripts/validation/check_plugin_frontmatter_self_containment.py:676` (`return EXIT_CONFIG` [2])
  - `scripts/validation/check_plugin_frontmatter_self_containment.py:683` (`return EXIT_CONFIG` [2])
  - `scripts/validation/check_plugin_frontmatter_self_containment.py:692` (`return EXIT_OK` [0])
  - `scripts/validation/check_plugin_frontmatter_self_containment.py:707` (`return EXIT_VIOLATION` [1])
  - `scripts/validation/check_plugin_frontmatter_self_containment.py:711` (`raise SystemExit(main())`)
- for validators/gates: can it exit non-zero? Yes, exits 1 on outward file violations and 2 on configuration errors. Does it fail on the source repo's own default branch? No, exits 0 (`No outward frontmatter references. Scanned 908 files across 3 plugin roots.`).
- does the output match what the documentation claims? Yes, exit codes and reporting match documented specifications.

## Defects — required
none

## Observations
- File-size suppression rationale: The script includes `# taste-lint: ignore file-size` with detailed documentation explaining that regex boundary explanations and defect provenance outweigh executable code lines to keep load-bearing rationale co-located with the patterns.
- High precision regex boundary design: Pre-strips remote URIs (`REMOTE_URI`) and opaque URIs (`OPAQUE_URI`) to avoid false positives on URLs containing path substrings, isolates `file:/` local URIs (`LOCAL_URI`), requires trailing extensions to allow workspace directory writes, and narrows `templates/` to upstream-only `templates/agents/` and `templates/platforms/`.
- Scoped opt-out mechanism: `<!-- vendor-portability: <path> -->` suppression is scoped strictly to the paths declared within the marker body, preventing whole-file opt-out drift.
- Dual file discovery: Queries `git ls-files` under plugin roots, falling back to filesystem rglob walk when outside a git checkout.

## Context cost
32869 bytes, approximately 8217 tokens.
