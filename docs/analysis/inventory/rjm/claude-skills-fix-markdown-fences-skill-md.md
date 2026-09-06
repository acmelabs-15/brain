---
package: rjm
path: .claude/skills/fix-markdown-fences/SKILL.md
type: skill
bytes: 15114
unit: inv-rjm-120
in_scope_via: docs/SKILL-AUTHORING.md
aliases: []
memo_inputs:
  - {path: .claude/skills/fix-markdown-fences/SKILL.md, sha256: da1471c97fd2ea0fac4de1751c27ff033cd044030c03d44963895917bd55712a}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/skills/fix-markdown-fences/SKILL.md

## Purpose — required, verbatim
> "Scan and repair malformed closing fences in markdown files. Closing fences must never contain language identifiers." — .claude/skills/fix-markdown-fences/SKILL.md:17

## Design intent — required
Deterministic, CommonMark-compliant automated repair and validation engine for markdown code block fence closings. Solves the ubiquitous defect where closing fences erroneously contain language identifiers (causing code blocks to bleed into surrounding prose), where nested or unclosed code blocks break document rendering, or where naive regex/LLM editing damages valid nested structures. Without it, agents and human authors would attempt error-prone manual line edits or hallucinate state machine transitions in-context, leading to document corruption or invalid closing fence insertions across documentation.

## Phase — required
cross-phase

## Inputs — required
- Target markdown file or directory paths: `FILE_OR_DIR` or `PATH [PATH ...]` (defaults to current directory if omitted).
- CLI flags: `--write` (in-place repair), `--json` (emit machine-readable JSON), `--pattern` (glob pattern for directory scans, default `*.md`).
- Markdown files read as raw bytes and decoded with UTF-8 / UTF-8-sig.
- User trigger phrases: `"fix markdown fences"`, `"repair code block closings"`, `"markdown rendering broken"`, `"code blocks bleeding into content"`, `"validate markdown code blocks"`.

## Outputs — required
- Diagnostic report to stdout: formatted as `FILE:LINE: KIND: TEXT` in reporting mode (detecting `malformed_closing` and `unclosed_block` defects), or machine-readable JSON with `--json`.
- In-place repaired files when `--write` is specified (inserting bare closing fences or appending closing fences at EOF).
- Exit codes per ADR-035: `0` (clean or successfully repaired), `1` (report mode found defects; nothing written), `2` (requested path does not exist, or file read/write error).

## Invokes — required
- script fix_fences.py — .claude/skills/fix-markdown-fences/SKILL.md:59

## Invoked by — required
- doc docs/SKILL-AUTHORING.md — docs/SKILL-AUTHORING.md:258
- doc docs/skill-reference.md — docs/skill-reference.md:182
- skill doc-accuracy — .claude/skills/doc-accuracy/SKILL.md:10

## Concepts named — required, verbatim
- `fix-markdown-fences` — .claude/skills/fix-markdown-fences/SKILL.md:2 — defined here
- `haiku` — .claude/skills/fix-markdown-fences/SKILL.md:4 — used here
- `model_tiers` — .claude/skills/fix-markdown-fences/SKILL.md:5 — used here
- `ADR-080` — .claude/skills/fix-markdown-fences/SKILL.md:5 — used here
- `doc-accuracy` — .claude/skills/fix-markdown-fences/SKILL.md:11 — used here
- `fix_fences.py` — .claude/skills/fix-markdown-fences/SKILL.md:53 — used here
- `malformed_closing` — .claude/skills/fix-markdown-fences/SKILL.md:63 — defined here
- `unclosed_block` — .claude/skills/fix-markdown-fences/SKILL.md:65 — defined here
- `CommonMark` — .claude/skills/fix-markdown-fences/SKILL.md:98 — used here
- `info string` — .claude/skills/fix-markdown-fences/SKILL.md:105 — used here
- `list item` — .claude/skills/fix-markdown-fences/SKILL.md:110 — used here
- `content column` — .claude/skills/fix-markdown-fences/SKILL.md:112 — defined here
- `thematic break` — .claude/skills/fix-markdown-fences/SKILL.md:115 — used here
- `link reference definition` — .claude/skills/fix-markdown-fences/SKILL.md:121 — used here
- `leaf block` — .claude/skills/fix-markdown-fences/SKILL.md:128 — used here
- `indented code block` — .claude/skills/fix-markdown-fences/SKILL.md:130 — used here
- `lazy continuation` — .claude/skills/fix-markdown-fences/SKILL.md:132 — used here
- `raw HTML block` — .claude/skills/fix-markdown-fences/SKILL.md:144 — used here
- `blockquote` — .claude/skills/fix-markdown-fences/SKILL.md:151 — used here
- `setext` — .claude/skills/fix-markdown-fences/SKILL.md:167 — used here
- `fuzz baselines` — .claude/skills/fix-markdown-fences/SKILL.md:177 — used here
- `ADR-035` — .claude/skills/fix-markdown-fences/SKILL.md:184 — used here
- `UTF-8 BOM` — .claude/skills/fix-markdown-fences/SKILL.md:281 — used here

## Structure
- `# Fix Markdown Code Fence Closings` — .claude/skills/fix-markdown-fences/SKILL.md:15
- `## Triggers` — .claude/skills/fix-markdown-fences/SKILL.md:19
- `## Quick Reference` — .claude/skills/fix-markdown-fences/SKILL.md:29
- `## When to Use` — .claude/skills/fix-markdown-fences/SKILL.md:37
- `## Process` — .claude/skills/fix-markdown-fences/SKILL.md:50
- `## Scripts` — .claude/skills/fix-markdown-fences/SKILL.md:80
- `### fix_fences.py` — .claude/skills/fix-markdown-fences/SKILL.md:82
- `## Reference: the algorithm` — .claude/skills/fix-markdown-fences/SKILL.md:190
- `## Verification` — .claude/skills/fix-markdown-fences/SKILL.md:215
- `## Anti-Patterns` — .claude/skills/fix-markdown-fences/SKILL.md:227
- `## Prevention` — .claude/skills/fix-markdown-fences/SKILL.md:237

## Scripts — required if type is script or the skill ships scripts
For `.claude/skills/fix-markdown-fences/scripts/fix_fences.py`:
- path, language, lines: `.claude/skills/fix-markdown-fences/scripts/fix_fences.py`, Python 3, 1217 lines
- documented invocation:
  > "python3 \"${COPILOT_PLUGIN_ROOT:-${CLAUDE_PLUGIN_ROOT:-.claude}}/skills/fix-markdown-fences/scripts/fix_fences.py\" PATH [PATH ...]"` — .claude/skills/fix-markdown-fences/SKILL.md:88
- **executed:** yes
- actual command run, abridged stdout, **actual exit code**:
  `python3 sources/rjm/.claude/skills/fix-markdown-fences/scripts/fix_fences.py sources/rjm/.claude/skills/fix-markdown-fences/SKILL.md`
  stdout: `No fence defects found`
  actual exit code: `0`
  (Also tested missing path: `python3 sources/rjm/.claude/skills/fix-markdown-fences/scripts/fix_fences.py non_existent_file.md` -> stderr: `Error: path does not exist: non_existent_file.md`, exit code: `2`)
- documented exit codes (verbatim) vs. actual exit paths in code:
  - Documented:
    > "- `0` no defects found, or `--write` repaired every defect it found" — .claude/skills/fix-markdown-fences/SKILL.md:186
    Actual exit path: `return 1 if (results and not args.write) else 0` at `.claude/skills/fix-markdown-fences/scripts/fix_fences.py:1213` via `sys.exit(main())` at `.claude/skills/fix-markdown-fences/scripts/fix_fences.py:1217`.
  - Documented:
    > "- `1` report mode found at least one defect; nothing was written" — .claude/skills/fix-markdown-fences/SKILL.md:187
    Actual exit path: `return 1 if (results and not args.write) else 0` at `.claude/skills/fix-markdown-fences/scripts/fix_fences.py:1213` via `sys.exit(main())` at `.claude/skills/fix-markdown-fences/scripts/fix_fences.py:1217`.
  - Documented:
    > "- `2` a requested path does not exist, or a file could not be read or written" — .claude/skills/fix-markdown-fences/SKILL.md:188
    Actual exit paths: `return 2` at `.claude/skills/fix-markdown-fences/scripts/fix_fences.py:1177` (missing path), `.claude/skills/fix-markdown-fences/scripts/fix_fences.py:1194` (unreadable file), and `.claude/skills/fix-markdown-fences/scripts/fix_fences.py:1209` (unwritable file), all exiting via `sys.exit(main())` at `.claude/skills/fix-markdown-fences/scripts/fix_fences.py:1217`.
- for validators/gates: can it exit non-zero? does it fail on the source repo's own default branch?
  Yes, it exits 1 when reporting un-repaired defects and 2 on bad paths or I/O errors. Running over valid markdown files in the repository exits 0.
- does the output match what the documentation claims?
  Yes, defect reports match `FILE:LINE: KIND: TEXT` formatting and exit codes strictly comply with ADR-035.

## Defects — required
- doc-drift · docs/SKILL-AUTHORING.md:264 — .claude/skills/fix-markdown-fences/SKILL.md:3 — docs/SKILL-AUTHORING.md:264 quotes frontmatter as version 1.1.0, which has drifted from .claude/skills/fix-markdown-fences/SKILL.md:3 specifying version 1.3.0.
- other · .claude/skills/fix-markdown-fences/SKILL.md:144-177 — .claude/skills/fix-markdown-fences/scripts/fix_fences.py:1181 — The skill self-documents known destructive parser edge cases when running --write over raw HTML blocks, blockquotes interrupting paragraphs, escaped tabs in link destinations, and setext underlines directly under list items.

## Observations
- Explicit model tier pinning: `SKILL.md` frontmatter assigns `model: haiku` with an explicit rationale citing ADR-080 rule 3, designating fence repair as mechanical routing work where cheaper inference models suffice over default Sonnet tiers.
- High transparency on edge cases: lines 144-177 extensively detail where the scanner diverges from CommonMark reference specifications (such as raw HTML blocks swallowing fences or blockquote paragraph interruptions), advising against running `--write` unattended over documents containing raw HTML.
- Exact byte preservation: the scanner and repair logic preserves CRLF, CR, UTF-8 BOM, and non-standard whitespace separators (U+000B through U+2029) without line-ending normalization.

## Context cost
- 15114 bytes (~3,778 tokens) for `SKILL.md`.
- Total with shipped script (`scripts/fix_fences.py`, 56770 bytes): 71,884 bytes (~17,970 tokens).
