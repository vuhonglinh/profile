<script lang="ts">
	import type { Experience } from '$lib/data/portfolio';

	let { experiences } = $props<{ experiences: Experience[] }>();
</script>

<section id="experience" class="space-y-7">
	<div class="space-y-2">
		<p class="section-kicker">Kinh nghiệm & Thực hành</p>
		<h2 class="section-title">Hành trình xây dựng và phát triển</h2>
	</div>

	<div class="space-y-4 border-l border-black/12 pl-6 md:pl-9">
		{#each experiences as item (item.period)}
			<article class="surface-card relative p-5 md:p-6">
				<span
					aria-hidden="true"
					class="absolute top-8 -left-[1.95rem] h-3.5 w-3.5 rounded-full border-4 border-white bg-[color:var(--primary)] md:-left-[2.5rem]"
				></span>
				<p class="font-['Oswald'] text-sm tracking-[0.1em] text-[#314553] uppercase">
					{item.period}
				</p>
				<h3 class="mt-2 text-3xl">{item.role}</h3>
				<p class="text-sm font-semibold text-[#5a6872]">{item.company}</p>
				<ul class="muted mt-4 space-y-2 text-sm leading-relaxed">
					{#each item.points as point (point)}
						<li>- {point}</li>
					{/each}
				</ul>
			</article>
		{/each}
	</div>
</section>
