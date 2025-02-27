import { StoryMap } from "../metadata/story_id";

function validateStoryIds(): void {
  try {
    const ids = Object.values(StoryMap).map((story) => story.id);
    const seenIds = new Set<string | number>();
    const duplicates: (string | number)[] = [];

    for (const id of ids) {
      if (seenIds.has(id)) {
        duplicates.push(id);
      }
      seenIds.add(id);
    }

    if (duplicates.length > 0) {
      throw new Error(`Duplicate story IDs found: ${duplicates.join(", ")}`);
    }

    console.log("All story IDs are unique!");
    process.exit(0);
  } catch (error) {
    console.error(
      "Validation failed:",
      error instanceof Error ? error.message : String(error)
    );
    process.exit(1);
  }
}

validateStoryIds();
