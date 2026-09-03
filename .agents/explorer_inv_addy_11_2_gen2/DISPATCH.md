## 2026-09-03T10:42:30Z

<USER_REQUEST>
You are Explorer 2 Gen 2 (explorer_inv_addy_11_2_gen2) for work unit inv-addy-11.
Your working directory is: /Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/explorer_inv_addy_11_2_gen2

MANDATORY FIRST STEP: Read the original user request at:
/Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/ORIGINAL_REQUEST.md
Also read METHOD.md (especially §3 R1-R6 and §4 checklist):
/Users/peterkloss/Dev/ACMElabs/brain-v2/docs/plan/METHOD.md
Also read SCOPE.md:
/Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/orchestrator_inv_addy_11_1/SCOPE.md

Your assigned files to explore thoroughly:
1. `sources/addy/.claude-plugin/marketplace.json` (856 bytes)
2. `sources/addy/.claude-plugin/plugin.json` (463 bytes)
3. `sources/addy/commands/ship.toml` (4,712 bytes)
4. `sources/addy/commands/webperf.toml` (2,031 bytes)
5. `sources/addy/commands/planning.toml` (635 bytes)
6. `sources/addy/commands/review.toml` (844 bytes)

Tasks:
1. Read each assigned file completely from line 1 to end.
2. For plugin configs:
   - Analyze schema, marketplace registration, plugin metadata, entry points, declared skills and commands.
   - Verify every referenced path with ls.
3. For commands (.toml):
   - Analyze TOML structure: command name, description, prompt, arguments, prereqs, outputs.
   - Check what skills/agents/scripts each command invokes or refers to.
   - Verify all referenced paths with ls.
4. For each file, prepare the exact inventory sections per `docs/plan/templates/inventory-entry.md`:
   - Purpose (verbatim quote with path:line)
   - Design intent (your words, 1 paragraph)
   - Phase (e.g. `addy:Ship`, `addy:Plan`, `addy:Review`, or `cross-phase`)
   - Inputs
   - Outputs
   - Invokes (kind, name, path:line)
   - Invoked by (e.g. plugin.json, documentation, CLI)
   - Concepts named (verbatim with path:line, defined here | used here)
   - Structure (sections/keys in order)
   - Defects (§4 checklist: missing-path, doc-drift, etc.)
   - Observations
   - Context cost (bytes, approximate tokens)
5. Write your full, comprehensive findings to `/Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/explorer_inv_addy_11_2_gen2/handoff.md`.
6. Send a brief message to parent orchestrator with the path to your handoff report.
</USER_REQUEST>
