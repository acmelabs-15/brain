# Commits and task results

This contract governs intermediate work, completed tasks and integration. It preserves the verified slices that produced a task.

1. Commit each complete, verified slice. Stage its files by name. Keep unrelated changes intact. A task can need several slice and review-fix commits.
2. Before declaring a task complete, finish its acceptance checks and review. Its result file names the final verified implementation commit and lists the slice commits, scoped changes, verification commands, outcomes and remaining limits.
3. Before integration, the main session reads every result file and inspects the task's diff and acceptance evidence. A pass line is an index into that evidence, not permission to skip it.
4. Integrate one task at a time. Preserve its verified commits. Merge task branches with merge commits when merging is the chosen route. Run the required integration checks before closing the task.
5. The main session alone updates plan rows and task ticks. Record the implementation commit, or the integration commit when applicable, with its verification evidence. Commit that state update separately after the named commit exists.

A preparatory plan commit, implementation commits, an integration commit and a state-record commit serve different purposes. Do not squash them merely to claim one commit per task. An already approved build continues within that approval; a new product choice or outward action still follows the user's decision boundary.
