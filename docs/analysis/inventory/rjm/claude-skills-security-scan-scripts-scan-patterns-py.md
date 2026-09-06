---
package: rjm
path: .claude/skills/security-scan/scripts/scan_patterns.py
type: script
bytes: 6798
unit: inv-rjm-156
in_scope_via: .claude/skills/security-scan/SKILL.md
aliases: []
memo_inputs:
  - {path: .claude/skills/security-scan/scripts/scan_patterns.py, sha256: 7042ee02bc65663085aa668adb62073f2f003f7a974226850c782ffba4737b48}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/skills/security-scan/scripts/scan_patterns.py

## Purpose — required, verbatim
> "CWE-78 (command injection) detection patterns by language." — .claude/skills/security-scan/scripts/scan_patterns.py:1

## Design intent — required
Isolates regular expression detection patterns, severities, risk descriptions, and safe recommendations for CWE-78 (command injection) across Python, PowerShell, Bash, and C# into a dedicated data module. Extracted verbatim from `scan_vulnerabilities.py` to keep the primary scanner script under file size constraints while preserving public API and test compatibility via re-export. Without this module, either the main scanner would exceed size guidelines or detection rules would be intermixed with execution flow logic, making pattern maintenance more error-prone.

## Phase — required
cross-phase

## Inputs — required
none

## Outputs — required
none

## Invokes — required
none

## Invoked by — required
- script scan_patterns — .claude/skills/security-scan/scripts/scan_vulnerabilities.py:56

## Concepts named — required, verbatim
- `CWE78_PATTERNS` — .claude/skills/security-scan/scripts/scan_patterns.py:17 — defined here

## Structure
- CWE78_PATTERNS
- python patterns (5)
- powershell patterns (4)
- bash patterns (4)
- csharp patterns (3)

## Scripts — required if type is script or the skill ships scripts
- path: `.claude/skills/security-scan/scripts/scan_patterns.py`, Python 3, 170 lines
- documented invocation: none (pure data dictionary module imported by `scan_vulnerabilities.py`)
- **executed:** yes
- actual command run: `python3 sources/rjm/.claude/skills/security-scan/scripts/scan_patterns.py`
  abridged stdout: (empty)
  **actual exit code:** 0
- documented exit codes: none documented or defined in file (pure data pattern dictionary)
- for validators/gates: compiles 16 regular expressions across 4 languages (5 Python, 4 PowerShell, 4 Bash, 3 C#)
- does the output match what the documentation claims: yes, patterns match the regex rules documented in `SKILL.md:144-159`

## Defects — required
none

## Observations
Pure data extraction containing 16 compiled regex patterns categorized into 4 languages. Main module `scan_vulnerabilities.py` re-exports `CWE78_PATTERNS` so external consumers and tests retain backward compatibility.

## Context cost
6798 bytes (approximately 1700 tokens). Loads no external modules except standard library `re`.
