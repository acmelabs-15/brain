# Commands, skills and agents in Brain

Brain uses one workflow across four hosts. Commands are host-specific entry points;
skills own the procedures; agents perform the bounded work their caller assigns.

## Entry and ownership

- `using-brain` restores the current request and selects its workflow. The consumer
  workspace document owns state reporting and effort selection.
- Claude and Gemini commands call the matching skills. Codex and Antigravity use
  their supported skill controls. Read the relevant [install guide](../README.md#install)
  for the host's actual invocation and discovery behavior.
- `interview-me` owns the map and delegates one research row per worker. Its
  [research brief](../skills/interview-me/RESEARCH.md) defines the worker's record,
  continuous progress, outcome, retry condition and reply.
- The Claude-only researcher carries its tool policy in
  [its definition](../claude/agents/researcher.md). Other hosts receive the same
  research brief through their supported agent mechanism. Verify actual tool and
  concurrency limits before dispatch.
- Build workers change only their assigned scope in isolated checkouts. The main
  session reads every result and its evidence before integration, and alone writes
  plan rows and task ticks. The [commit contract](../references/brain/commit-contract.md)
  governs that handoff.

## Review personas

The vendored review personas supply specialist criteria. A Brain workflow supplies
the selected effort, fixed diff, requirements, project standards, allowed tools and
result destination. Persona examples describing an upstream command or “this repo”
do not replace that Brain contract.

A worker returns findings and any capability limit to its caller. The caller owns
the combined verdict and state update. A summary line or a passing test does not
prove that a required review ran. When the host cannot run an assigned review,
report it as pending and preserve the evidence needed to finish it.

`code-review-and-quality` owns the five-axis change review. The ship command also
uses the general reviewer, security auditor and test engineer. The web performance
auditor applies to browser performance work; it reports measurements only when
the supplied tools or artifacts establish them.

## State and authority

The main session owns user questions through `ask-user-question`. Workers return
unresolved user choices to that session. A worker's result supplies evidence, not
permission to widen scope, publish or close an unrelated row.

Use the workflow's existing record or conversation state. Read saved answers and
verify uncertain effects before repeating work after interruption. Preserve
partial results and their next action; only the owning workflow can decide that
its completion conditions hold.
