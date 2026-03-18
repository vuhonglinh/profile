<script lang="ts">
	import type { Stat } from '$lib/data/portfolio';

	let { highlights } = $props<{ highlights: Stat[] }>();
</script>

<section class="rounded-[2rem] bg-[#0d1116] px-6 py-10 md:px-10 md:py-12">
	<div class="space-y-2">
		<p class="section-kicker text-[color:var(--primary)]">Điểm nổi bật</p>
		<h2 class="section-title text-white">Những con số từ các hệ thống đã triển khai</h2>
	</div>

	<div class="mt-7 grid gap-4 md:grid-cols-3">
		{#each highlights as highlight (highlight.label)}
			<article class="rounded-2xl border border-white/14 bg-white/5 p-5">
				<p class="font-['Oswald'] text-5xl text-[color:var(--primary)]">{highlight.value}</p>
				<p class="mt-2 text-sm text-white/82">{highlight.label}</p>
			</article>
		{/each}
	</div>
</section>
