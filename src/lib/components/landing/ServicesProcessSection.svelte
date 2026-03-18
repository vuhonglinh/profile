<script lang="ts">
	let { services, processSteps } = $props<{ services: string[]; processSteps: string[] }>();
</script>

<section class="grid gap-5 md:grid-cols-2">
	<article class="dark-panel p-6 md:p-8">
		<p class="section-kicker text-[color:var(--primary)]">Dịch vụ</p>
		<h2 class="section-title mt-2 text-white">Những gì tôi có thể làm cho sản phẩm của bạn</h2>
		<ul class="mt-5 space-y-2 text-sm leading-relaxed text-white/82">
			{#each services as service (service)}
				<li class="flex items-start gap-2">
					<span class="mt-1.5 h-2 w-2 rounded-full bg-[color:var(--primary)]"></span>
					{service}
				</li>
			{/each}
		</ul>
	</article>

	<article class="surface-card p-6 md:p-8">
		<p class="section-kicker">Cách tôi làm việc</p>
		<h2 class="section-title mt-2">Từ yêu cầu đến triển khai sản phẩm</h2>
		<ol class="mt-5 space-y-3">
			{#each processSteps as step, index (step)}
				<li class="flex gap-3">
					<span
						class="inline-grid h-6 w-6 shrink-0 place-items-center rounded-full bg-[#121a24] text-xs font-bold text-[color:var(--primary)]"
						>{index + 1}</span
					>
					<p class="muted text-sm leading-relaxed">{step}</p>
				</li>
			{/each}
		</ol>
	</article>
</section>
