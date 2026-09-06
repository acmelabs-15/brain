---
package: rjm
path: scripts/validation/instruction_budget_globs.py
type: script
bytes: 18909
unit: inv-rjm-297
in_scope_via: docs/workflow-commands.md
aliases: []
memo_inputs:
  - {path: scripts/validation/instruction_budget_globs.py, sha256: 988a5b5ad39b3ed1644bcd5eeeae7b0f22ae5660a085a17205dda1cfc594a0d1}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/validation/instruction_budget_globs.py

## Purpose — required, verbatim
> "VS Code applyTo glob parsing for instruction budget validation." — scripts/validation/instruction_budget_globs.py:1

## Design intent — required
Provides a faithful, fail-closed Python port of VS Code instruction glob-to-regex parsing and path matching semantics (specifically porting `splitGlobAware`, `parseRegExp`, and `starsToRegExp` from `src/vs/base/common/glob.ts` and `computeAutomaticInstructions.ts`). It analyzes instruction frontmatter (`applyTo`) to decide whether rules universally match all files for a given programming language extension. By matching against diverse multi-axis probe paths (spanning depth, directories, and stem formats) and failing closed on invalid YAML, duplicate keys, or bracket character classes (`[...]`), it ensures instruction token budgets cannot be bypassed by tricky glob syntax or malformed rules.

## Phase — required
cross-phase

## Inputs — required
- Rule text containing YAML frontmatter delimited by `---` (scripts/validation/instruction_budget_globs.py:11, 348)
- Frontmatter `applyTo` field: either a single glob string or a list of glob strings (scripts/validation/instruction_budget_globs.py:309-327)
- File extension string `ext` (e.g. `".py"`, `".md"`, `".ps1"`, `".cs"`) (scripts/validation/instruction_budget_globs.py:74, 366)

## Outputs — required
- `parse_applyto(text)`: returns `set[str]` of parsed glob patterns (scripts/validation/instruction_budget_globs.py:329)
- `is_language_universal(patterns, ext)`: returns boolean flag (`True` if the union of patterns matches every probe path for `ext`, `False` otherwise) (scripts/validation/instruction_budget_globs.py:366-398)
- Raises `UnsupportedApplyToError` on malformed YAML, duplicate frontmatter mapping keys, unhashable keys, non-string list entries, or bracket character classes (scripts/validation/instruction_budget_globs.py:14-25, 48-53, 298-305, 321-326, 353-355)

## Invokes — required
none

## Invoked by — required
- script instruction_budget_globs — scripts/validation/instruction_budget.py:54

## Concepts named — required, verbatim
- `UnsupportedApplyToError` — scripts/validation/instruction_budget_globs.py:14 — defined here
- `applyTo` — scripts/validation/instruction_budget_globs.py:15 — used here
- `ADR-035` — scripts/validation/instruction_budget_globs.py:22 — used here
- `_UniqueKeySafeLoader` — scripts/validation/instruction_budget_globs.py:27 — defined here
- `_construct_unique_mapping` — scripts/validation/instruction_budget_globs.py:37 — defined here
- `_ALL_FILES_FORMS` — scripts/validation/instruction_budget_globs.py:71 — defined here
- `_probe_paths` — scripts/validation/instruction_budget_globs.py:74 — defined here
- `_split_glob_aware` — scripts/validation/instruction_budget_globs.py:96 — defined here
- `_vscode_effective_glob` — scripts/validation/instruction_budget_globs.py:132 — defined here
- `_stars_to_regexp` — scripts/validation/instruction_budget_globs.py:184 — defined here
- `_segment_to_regex` — scripts/validation/instruction_budget_globs.py:200 — defined here
- `_parse_regexp` — scripts/validation/instruction_budget_globs.py:241 — defined here
- `_glob_to_regex` — scripts/validation/instruction_budget_globs.py:274 — defined here
- `_iter_applyto_globs` — scripts/validation/instruction_budget_globs.py:309 — defined here
- `parse_applyto` — scripts/validation/instruction_budget_globs.py:329 — defined here
- `is_language_universal` — scripts/validation/instruction_budget_globs.py:366 — defined here

## Structure
- Module docstring (scripts/validation/instruction_budget_globs.py:1)
- `UnsupportedApplyToError` exception definition (scripts/validation/instruction_budget_globs.py:14-25)
- `_UniqueKeySafeLoader` and `_construct_unique_mapping` for duplicate YAML key detection (scripts/validation/instruction_budget_globs.py:27-61)
- `_ALL_FILES_FORMS` wildcard constants (scripts/validation/instruction_budget_globs.py:71)
- `_probe_paths`: multi-axis test path generator (scripts/validation/instruction_budget_globs.py:74-93)
- `_split_glob_aware`: brace- and bracket-aware delimiter splitting (scripts/validation/instruction_budget_globs.py:96-129)
- `_vscode_effective_glob`: normalizer prepending `**/` to relative patterns (scripts/validation/instruction_budget_globs.py:132-153)
- Regex translation routines `_stars_to_regexp`, `_segment_to_regex`, `_parse_regexp`, and cached `_glob_to_regex` (scripts/validation/instruction_budget_globs.py:184-307)
- `_iter_applyto_globs`: frontmatter structure flattener (scripts/validation/instruction_budget_globs.py:309-327)
- `parse_applyto`: YAML frontmatter extraction (scripts/validation/instruction_budget_globs.py:329-363)
- `is_language_universal`: probe testing against compiled regexes (scripts/validation/instruction_budget_globs.py:366-399)

## Scripts — required if type is script or the skill ships scripts
- **path:** `scripts/validation/instruction_budget_globs.py`
- **language:** Python (python3)
- **lines:** 399
- **documented invocation:** none
- **executed:** yes
- **actual command run:** `uv run --frozen python scripts/validation/instruction_budget_globs.py`
- **actual exit code:** 0
- **abridged stdout:** none (library module executes cleanly without stdout)
- **documented exit codes vs. actual exit paths in code:**
  - Documented: none (importable library module; raises `UnsupportedApplyToError` which caller maps to ADR-035 exit code 2)
  - Actual code paths: none (no direct `sys.exit` calls in module)
  - Result: module executes and imports without direct exit.
- **for validators/gates:**
  - Can exit non-zero: Not directly as a script; functions raise `UnsupportedApplyToError` on invalid/unsupported glob constructs, triggering exit code 2 in caller CLI validators.
  - Verified on repository: imports cleanly and functions execute under pytest test suite (`tests/validation/test_instruction_budget.py`).
- **does the output match what the documentation claims:** yes, provides the described parser functions and classes.

## Defects — required
none

## Observations
- Probes generated by `_probe_paths` span root and nested depths up to 5 levels, directory variations (`""`, `"a/"`, `"a/b/c/d/e/"`, `"zzz/"`), and multiple filename stem patterns (`"probe"`, `"X"`, `"a.b.c"`, `"weird-name_123"`).
- Pinned to VS Code implementation commit SHA `018354116a88cb1264790f93663de42198a44594` to prevent parser drift.
- Fails closed on bracket character classes (`[...]`) to avoid under-counting universal patterns.

## Context cost
18909 bytes, 399 lines, ~4500 tokens.
