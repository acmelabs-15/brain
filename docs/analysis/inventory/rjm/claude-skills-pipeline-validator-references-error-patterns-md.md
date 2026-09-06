---
package: rjm
path: .claude/skills/pipeline-validator/references/error-patterns.md
type: reference
bytes: 5863
unit: inv-rjm-133
in_scope_via: .claude/skills/pipeline-validator/SKILL.md
aliases: []
memo_inputs:
  - {path: .claude/skills/pipeline-validator/references/error-patterns.md, sha256: 7699be1a64a928f9c8c37a2ff93c740246130ed982eadcc9fd882d268fa8b11b}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/skills/pipeline-validator/references/error-patterns.md

## Purpose — required, verbatim
> "Comprehensive catalog of pipeline failure patterns, diagnosis rules, and automated fix actions for the pipeline-validator skill." — .claude/skills/pipeline-validator/references/error-patterns.md:3

## Design intent — required
Provides an operational diagnostic taxonomy and remediation runbook for automated CI/CD pipeline repair in Azure DevOps environments. It pairs distinct failure signatures (such as C# compilation errors, TreatWarningsAsErrors flags, NuGet restore conflicts, missing path references, and permission denials) with concrete diagnostic PowerShell inspection commands and structured remediation actions. Without it, the `pipeline-validator` skill would lack structured heuristics for parsing build and timeline logs, risking unguided or hallucinated fixes during automated retry loops.

## Phase — required
rjm:ship

## Inputs — required
- Pipeline failure logs and build error strings (e.g. `error CS\d+`, `error MSB\d+`, `Build FAILED`, `error NU\d+`, `warning treated as error`, `File not found`, `FileNotFoundException`, `403`, `timeout`) matched during automated pipeline diagnosis.
- Repository configuration files scanned during diagnosis: `.csproj` files, `Directory.Build.props`, and `NuGet.config`.

## Outputs — required
none

## Invokes — required
none

## Invoked by — required
- skill pipeline-validator — .claude/skills/pipeline-validator/SKILL.md:285

## Concepts named — required, verbatim
- `pipeline-validator` — .claude/skills/pipeline-validator/references/error-patterns.md:3 — used here
- `Build Compilation Errors` — .claude/skills/pipeline-validator/references/error-patterns.md:9 — defined here
- `CS0246` — .claude/skills/pipeline-validator/references/error-patterns.md:21 — used here
- `CS0234` — .claude/skills/pipeline-validator/references/error-patterns.md:22 — used here
- `CS1061` — .claude/skills/pipeline-validator/references/error-patterns.md:23 — used here
- `CS0029` — .claude/skills/pipeline-validator/references/error-patterns.md:24 — used here
- `MSB3270` — .claude/skills/pipeline-validator/references/error-patterns.md:25 — used here
- `MSB4019` — .claude/skills/pipeline-validator/references/error-patterns.md:26 — used here
- `TreatWarningsAsErrors` — .claude/skills/pipeline-validator/references/error-patterns.md:30 — defined here
- `WarningsAsErrors` — .claude/skills/pipeline-validator/references/error-patterns.md:32 — used here
- `.NET 10` — .claude/skills/pipeline-validator/references/error-patterns.md:49 — used here
- `CA1873` — .claude/skills/pipeline-validator/references/error-patterns.md:53 — used here
- `CA2263` — .claude/skills/pipeline-validator/references/error-patterns.md:54 — used here
- `IDE0044` — .claude/skills/pipeline-validator/references/error-patterns.md:55 — used here
- `ASPDEPR008` — .claude/skills/pipeline-validator/references/error-patterns.md:56 — used here
- `SYSLIB0057` — .claude/skills/pipeline-validator/references/error-patterns.md:57 — used here
- `NuGet Package Errors` — .claude/skills/pipeline-validator/references/error-patterns.md:61 — defined here
- `NU1101` — .claude/skills/pipeline-validator/references/error-patterns.md:69 — used here
- `NU1605` — .claude/skills/pipeline-validator/references/error-patterns.md:70 — used here
- `NU1608` — .claude/skills/pipeline-validator/references/error-patterns.md:71 — used here
- `NU1510` — .claude/skills/pipeline-validator/references/error-patterns.md:72 — used here
- `NU1202` — .claude/skills/pipeline-validator/references/error-patterns.md:73 — used here
- `File Not Found / Path Reference Errors` — .claude/skills/pipeline-validator/references/error-patterns.md:85 — defined here
- `Assembly Loading Errors` — .claude/skills/pipeline-validator/references/error-patterns.md:100 — defined here
- `Helm / Deployment Errors` — .claude/skills/pipeline-validator/references/error-patterns.md:118 — defined here
- `Pattern 1: Build Compilation Error` — .claude/skills/pipeline-validator/references/error-patterns.md:140 — defined here
- `Pattern 2: TreatWarningsAsErrors` — .claude/skills/pipeline-validator/references/error-patterns.md:141 — defined here
- `Pattern 3: NuGet Package Error` — .claude/skills/pipeline-validator/references/error-patterns.md:145 — defined here
- `Pattern 4: File Not Found` — .claude/skills/pipeline-validator/references/error-patterns.md:148 — defined here
- `Pattern 6: Test Failure` — .claude/skills/pipeline-validator/references/error-patterns.md:151 — defined here
- `Pattern 7: Subscription Key Conflict` — .claude/skills/pipeline-validator/references/error-patterns.md:154 — defined here
- `Pattern 8: YAML Syntax Error` — .claude/skills/pipeline-validator/references/error-patterns.md:157 — defined here
- `Pattern 9: Permission Error (STOP)` — .claude/skills/pipeline-validator/references/error-patterns.md:160 — defined here
- `Pattern 10: Transient Error (retry)` — .claude/skills/pipeline-validator/references/error-patterns.md:163 — defined here
- `Pattern 11: Helm Error` — .claude/skills/pipeline-validator/references/error-patterns.md:166 — defined here
- `Pattern 12: Docker Error` — .claude/skills/pipeline-validator/references/error-patterns.md:169 — defined here

## Structure
Section headings in order (verbatim):
- `# Error Patterns Catalog`
- `## Pattern Categories`
- `### 1. Build Compilation Errors`
- `### 2. TreatWarningsAsErrors`
- `### 3. NuGet Package Errors`
- `### 4. File Not Found / Path Reference Errors`
- `### 5. Assembly Loading Errors`
- `### 11. Helm / Deployment Errors`

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- internal-contradiction · .claude/skills/pipeline-validator/references/error-patterns.md:38 · Action Options lists item `3.` (`Set TreatWarningsAsErrors to false`) directly under the heading without items 1 and 2.
- internal-contradiction · .claude/skills/pipeline-validator/references/error-patterns.md:91 · Step list under Pattern 4 has item `1.` (`Identify the referenced file from the error message`) but no subsequent numbered steps before the code block.
- internal-contradiction · .claude/skills/pipeline-validator/references/error-patterns.md:106 · Missing section headers and content for patterns 6, 7, 8, 9, 10; lines 106-114 jump from Pattern 5 diagnosis directly into unlabelled match/action blocks for permissions (Pattern 9) and transient retries (Pattern 10), completely omitting patterns 6 (Test Failure), 7 (Subscription Key Conflict), and 8 (YAML Syntax Error).
- internal-contradiction · .claude/skills/pipeline-validator/references/error-patterns.md:127 · Pattern 12 (Docker Error) heading is missing; lines 127-131 contain orphan bullet points and step `2.` (`Verify COPY source paths exist`) without a section title, introductory diagnosis, or step 1.
- internal-contradiction · .claude/skills/pipeline-validator/references/error-patterns.md:141 · Decision tree has two consecutive `YES` branches under the first condition (`error CS` or `Build FAILED`), branching to both Pattern 1 and Pattern 2.

## Observations
- Truncated document structure: Significant portions of the catalog (notably patterns 6 through 10 and pattern 12 headers) appear to have been corrupted or truncated during upstream document authoring, though the decision tree at lines 135-173 references all 12 patterns.
- Heavy Windows / .NET 10 specialization: Pattern rules focus specifically on .NET 10 upgrade warnings (`CA1873`, `CA2263`, `ASPDEPR008`, `SYSLIB0057`) and package pruning rules (`NU1510`), matching the operational context of the `dotnet10-upgrade` skill.

## Context cost
5863 bytes, ~1465 tokens. Isolated reference loading 0 additional files.
