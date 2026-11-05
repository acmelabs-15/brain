---
id: IDEA-004
status: parked
---
# IDEA-004: Resolve the remaining keystone workflow findings

## Intent
- Outcome: preserve every remaining keystone workflow finding and define its follow-up change without losing the evidence.
- User: Brain maintainers and agents that resume this work.
- Why now: the audit finds unfinished work beyond the repairs pushed in PR #28. Peter asks to capture all of it.
- Success: all 17 remaining findings have an open row and evidence; completed fixes remain distinct; follow-up decisions and specs can resume from this file.
- Constraint: preserve existing work, reuse evidence, respect vendored ownership, and separate design decisions from implementation and publication approval.
- Out of scope: executing the follow-ups during this capture, repeating the completed audit, or reopening completed repairs without new evidence.

## Destination
A complete definition of the remaining work, carried into decisions or specs, with an explicit disposition for any deferred finding. This file is the map; detailed evidence stays in the research record.

## Notes

### Capture and authority
- Captured on 2026-11-05 at Peter's request. All remaining recommendations, defects and verification gaps need a durable home. Capture alone does not select every new design or start implementation.
- [RES-069: Keystone workflow audit and approved repairs](../research/RES-069-keystone-workflow-audit.md) holds the findings, source references, probes, reviews and evaluation limits. Its K, U and E identifiers are retained below.
- PR #28 contains the completed repairs through commit 0cd5a70663d3013569c75964a83c481ef110c024. They are pushed. K1 (missing fixed spec files) and K2 (proposed decisions resolving rows) are already fixed and excluded from this open map.
- Earlier interview recovery, workspace-owned status and the approved security import remain completed work. The removed status skill stays removed.
- Delegated review approval covers the completed change. Older held decisions remain held; this map does not close or supersede rows in IDEA-003.
- No question is pending and no worker is running for this idea. On 2026-11-05 Peter split this idea by scope (DEC-025). All 17 rows moved to IDEA-005 to IDEA-012, so this idea holds no open work. Out of scope names where each row went, and the table below keeps each row's old number.

### Evidence and recommended direction

| Row | Audit finding | Captured problem and direction |
|---|---|---|
| 01 | K3 | A spec with an empty plan disappears from active work. Define durable preparation and approval state so it remains visible and resumable. |
| 02 | K4 | External spec ownership conflicts with Brain's planning/build/status storage. Define one integration rule without duplicate specification authority. |
| 03 | K5 | Ideation and prototype detours lack explicit mode and continuous partial-state returns. Pass the parent row, scope, mode and saved answers; return progress to the sole map writer. |
| 04 | K6 | Idea-refine fixes question counts, requests oversized multi-select lists, and promotes tentative preferences to constraints. Use the shared question procedure and preserve uncertainty. |
| 05 | K7 | Spec, build and review disagree about parallel work and who runs review. Give a capable coordinator clear ownership within actual host limits. |
| 06 | K8 | Review can prefer inferred issue context over explicit user scope, and its diff examples mix comparison meanings. Honor explicit scope and define each comparison correctly. |
| 07 | K9 | Direct document creation can bypass setup's newer-layout refusal. Establish the compatibility rule for every writer at a shared boundary. |
| 08 | K10 | Lexical overlap cannot prove equivalent instructions. Preserve distinct conditions, ordering and permissions during optional root cleanup. |
| 09 | K11 | Ordinary setup can leave partial writes after a filesystem failure. Define and verify a recovery or transactional-write guarantee. |
| 10 | K12 | Planning approvals, review verdicts, performance experiments and long deployment monitoring lack consistent recovery handoffs. Define state destinations, evidence, approvals and next actions. |
| 11 | U1 | The upstream sample quality checker misses untracked files and can echo sensitive matching lines. Fix or replace that reference through the proper ownership route. |
| 12 | U2 | Upstream orchestration examples conflict with Brain's coordinator and writable research records. Bound their use or correct the owning source. |
| 13 | U3 | Upstream testing examples contradict the rules for mocking internal code and preserving tests. Correct the examples without weakening the quality bar. |
| 14 | U4 | Secondary skills can reintroduce fixed question counts, repeated approval, root edits and host-specific assumptions. Reconcile their interfaces with Brain's current owners. |
| 15 | U5 | The optional cache can pair old content with newer validators and has other trust limits. Resolve the reference and ownership approach; it remains unwired and no live exploit is claimed. |
| 16 | E1 | Evaluated resumes often omit the required user-visible status report. Verify what the user sees, separately from context delivered to the model. |
| 17 | E2 | Evaluated recommendations include unsupported compatibility, scheduling and data-loss claims. Verify the basis of option claims and retain qualifications. |

### Resume
1. Read this idea and RES-069. Inspect the current branch, working changes and later records before acting.
2. Reconcile each row with work completed since the audit. Reuse supported answers; investigate only facts still missing or changed.
3. Separate concrete corrections from genuine design choices. Prepare alternatives before a question and use existing delegation within its actual scope.
4. Establish blocking links and a coherent next change. Record decisions and research through Brain's helpers, then create the needed specs and plans.
5. Keep source evidence, model behavior and native-client verification distinct. A captured recommendation is not a completed implementation.

## Map

| # | Question | Type | Status | Blocked by | Result |
|---|---|---|---|---|---|

## Not yet specified
Exact follow-up boundaries, implementation order, verification scope and any further state fields remain to be defined. The map captures the known questions without choosing their answers.

## Out of scope
- Row 01, How does a spec awaiting approval or planning remain visible and resumable?: moved to IDEA-008 row 01.
- Row 02, How do external specifications integrate with Brain without duplicate authority?: moved to IDEA-010 row 01.
- Row 03, What state must ideation and prototype detours save and return throughout an exchange?: moved to IDEA-009 row 01.
- Row 04, Which idea-refine instructions and examples must change to obey the shared question rules?: moved to IDEA-009 row 02.
- Row 05, Who schedules build tasks and independent reviews within each host's actual capacity?: moved to IDEA-007 row 01.
- Row 06, What review lookup and diff rules preserve the user's explicit scope?: moved to IDEA-007 row 02.
- Row 07, What supported-layout rule must every workspace writer enforce?: moved to IDEA-006 row 01.
- Row 08, How does optional root cleanup preserve rules that only look similar?: moved to IDEA-006 row 02.
- Row 09, What recovery guarantee should ordinary setup provide after a partial write failure?: moved to IDEA-006 row 03.
- Row 10, What durable handoff does each planning, review, performance and shipping stage return?: moved to IDEA-008 row 02.
- Row 11, Which upstream correction fixes the sample quality checker's missed files and sensitive output?: moved to IDEA-011 row 01.
- Row 12, Which orchestration references or caller boundaries must change to match Brain's workflow?: moved to IDEA-007 row 03.
- Row 13, Which testing examples need correction to preserve the agreed test boundaries and quality bar?: moved to IDEA-011 row 02.
- Row 14, Which secondary-skill interfaces reintroduce conflicting approval, root-file or host rules?: moved to IDEA-009 row 03.
- Row 15, What should happen to the optional cache guidance and its freshness and trust defects?: moved to IDEA-005 row 01.
- Row 16, What change and observable check make restored status visible to the user?: moved to IDEA-012 row 01.
- Row 17, What change and evidence check keep recommendation claims within their support?: moved to IDEA-012 row 02.
- Repeating or undoing completed PR #28 repairs without new evidence.
- Treating prior held decisions as newly approved because they carry accepted frontmatter.
- Editing vendored bytes locally, updating unrelated upstream pins, or activating the optional cache during capture.
- Starting implementation, a release, or new external model runs solely because this map exists.
