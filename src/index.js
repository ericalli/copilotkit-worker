import { CopilotRuntime, OpenAIAdapter } from "@copilotkit/runtime";

export default {
	async fetch(request, env, ctx) {
		return new Response('Hello World!')
	}
}
