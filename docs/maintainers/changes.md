# Maintaining Brain instructions

Use this contract when adding, renaming, removing or changing a skill, command, agent, setup rule or host adapter. Read the affected sources and their operative references in full before editing.

## Choose the owner

- Entries in `upstream.lock.json` under `files` are vendored. Prepare their fixes upstream; preserve the pinned bytes here. Entries under `seeds` record origins for Brain-owned files.
- Change generated content at its named source. Run the renderer and review every affected output.
- Root `AGENTS.md` and `CLAUDE.md` guide Brain maintainers. Consumer startup belongs to the plugin's host adapters, protocol, router and workspace guidance.
- Keep installation instructions in the four `docs/install/` guides. A shared prerequisite can have one owner linked from each guide.

## Complete a change

1. Trace the behavior from its host entry to its owner. List the affected commands, router routes, invocation metadata, setup templates, human guides and checks. Record any surface that does not apply and why.
2. For skill or root-instruction authoring, load the official `skill-creator` plugin. Use `writing-for-agents` for pointers, reference placement and completion conditions. Read the active host's schema before making claims about invocation or question tools.
3. Reuse settled requirements. Ask through `ask-user-question` only for an unresolved user choice or missing permission. Put the evidence, recommendation and cost inside that question. Preserve the scope and conditions of the answer.
4. Implement at the owning source. Reconcile affected command behavior, router entries, skill metadata, host invocation flags, human docs and installation behavior in the same change. Keep user-only skills user-only.
5. Verify observable behavior at the existing public boundary. Static checks cover file structure and references; host validators cover declared host contracts; model evaluations cover observed agent behavior. A native dialog check requires a submitted answer followed by the expected next prompt. State each limit separately.
6. For a skill behavior change, compare the old and revised bundle using the official creator's evaluation loop. Preserve prompts, versions, traces, artifacts, grades, budgets and user feedback. Generate its review viewer. Prepare concrete fixtures and request any missing external-run authorization before sending them.
7. Run the scoped repository checks below, then review the diff. Follow the [commit contract](../../references/brain/commit-contract.md). Add a Changeset for a user-facing change. Publication requires the user's authorization.

## Checks and evidence

`package.json` owns the supported Bun range and available commands. Use Bun for shipped tools and adjacent `bun:test` tests. New TypeScript tests use `__tests__/<original-filename>.test.ts` beside the source.

For a code slice, run its touched tests, typecheck, lint, format check and the affected lifecycle, workspace, render, version and sync checks. For text, run the checks that consume that text. After integration, run the full `bun run check` and `bun run validate` once. Repeat a check after a change or failure that can affect its result.

Brain runs Claude's unmodified strict validator with JSON diagnostics. Its wrapper accepts only the exact warning for the intentional contributor `CLAUDE.md` at the real plugin root. The output says **accepted with one approved warning**, never that strict validation passed. Other strict warnings/errors, changed or malformed reports, incomplete checks and unexpected exits fail. Directory-catalog advice remains visible and has its documented separate scope; this is not Marketplace certification.

Record actual commands, outcomes and material limits. An old "Last run" record remains dated evidence. A successful validator exit alone does not prove complete skill loading or reliable routing.
