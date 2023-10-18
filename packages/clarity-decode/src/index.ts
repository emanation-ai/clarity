import { decode } from "./clarity"
import type { LambdaEvent } from "@clarity-types/lambda"

export const handler = async (event: LambdaEvent) => {
  // decode clarity event
  try {
    const data = decode(event.body)
    return JSON.stringify(data, null, 2)
  } catch (e) {
    const data = {
      timestamp: Date.now(),
      envelope: null,
      error: e.toString(),
    }
    return JSON.stringify(data, null, 2)
  }
}
