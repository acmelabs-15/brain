## 2026-09-03T05:49:38Z
<USER_REQUEST>
You are Explorer 3 (explorer_inv_addy_11_3) for work unit inv-addy-11.
Your working directory is: /Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/explorer_inv_addy_11_3

MANDATORY FIRST STEP: Read the original user request at:
/Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/ORIGINAL_REQUEST.md
Also read METHOD.md (especially §3 R1-R6 and §4 checklist):
/Users/peterkloss/Dev/ACMElabs/brain-v2/docs/plan/METHOD.md
Also read SCOPE.md:
/Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/orchestrator_inv_addy_11_1/SCOPE.md

Your assigned files to explore thoroughly:
1. `sources/addy/commands/constraints.toml` (2,775 bytes)
2. `sources/addy/commands/build.toml` (3,840 bytes)
3. `sources/addy/commands/spec.toml` (911 bytes)
4. `sources/addy/commands/code-simplify.toml` (1,066 bytes)
5. `sources/addy/commands/test.toml` (650 bytes)

Tasks:
1. Read each assigned file completely from line 1 to end.
2. For each command (.toml):
   - Analyze TOML structure: command name, description, prompt, arguments, phases, prerequisites, outputs.
   - Check what skills/agents/scripts each command invokes or refers to.
   - Verify all referenced paths with ls.
3. Cross-cutting integration analysis across ALL 16 files in inv-addy-11:
   - How `validate-commands.js` validates these TOML commands. Run `bun scripts/validate-commands.js` to see validation behavior!
   - How commands connect to skills in `sources/addy/skills/`.
   - How `.claude-plugin/plugin.json` and `marketplace.json` declare commands and skills.
   - Any defects or discrepancies across commands and scripts.
4. For each assigned file, prepare the exact inventory sections per `docs/plan/templates/inventory-entry.md`:
   - Purpose (verbatim quote with path:line)
   - Design intent
   - Phase (e.g. `addy:Build`, `addy:Define`, `addy:Verify`, etc.)
   - Inputs, Outputs, Invokes, Invoked by
   - Concepts named (verbatim with path:line)
   - Structure
   - Defects (§4 checklist)
   - Observations
   - Context cost
5. Write your full, comprehensive findings to `/Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/explorer_inv_addy_11_3/handoff.md`.
6. Send a brief message to parent orchestrator with the path to your handoff report.
</USER_REQUEST>
