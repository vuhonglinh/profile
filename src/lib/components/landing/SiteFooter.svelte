<script lang="ts">
	import { resolve } from '$app/paths';
	import type { Profile } from '$lib/data/portfolio';

	let { profile } = $props<{ profile: Profile }>();

	const topHref = resolve('/#top');
</script>

<footer class="mt-16 bg-[#0d1116] text-white">
	<div class="mx-auto grid max-w-7xl gap-5 px-5 py-10 md:px-8 lg:grid-cols-[1.05fr_0.95fr]">
		<div class="space-y-3">
			<p class="max-w-xl text-sm leading-relaxed text-white/72">
				Tôi xây dựng các sản phẩm web end-to-end, từ kiến trúc backend đến frontend hoàn thiện, đảm
				bảo hiệu năng tốt và code dễ bảo trì.
			</p>
		</div>

		<div class="grid gap-4 sm:grid-cols-2">
			<div class="space-y-2 text-sm text-white/76">
				<p class="font-['Oswald'] text-base text-white uppercase">Liên kết nhanh</p>
				<p>
					<a href={topHref} class="hover:text-[color:var(--primary)]">Trang chủ</a>
				</p>
				<p>
					<a
						href="https://github.com/vuhonglinh"
						target="_blank"
						rel="noreferrer"
						class="hover:text-[color:var(--primary)]">GitHub</a
					>
				</p>
				<p>
					<a
						href="https://www.linkedin.com/in/vu-linh-1698aa319/"
						target="_blank"
						rel="noreferrer"
						class="hover:text-[color:var(--primary)]">LinkedIn</a
					>
				</p>
			</div>

			<div class="space-y-2 text-sm text-white/76">
				<p class="font-['Oswald'] text-base text-white uppercase">Liên hệ</p>
				<p>
					<a href={`mailto:${profile.email}`} class="hover:text-[color:var(--primary)]">
						{profile.email}
					</a>
				</p>
				<p>
					<a href={`tel:${profile.phone}`} class="hover:text-[color:var(--primary)]">
						{profile.phone}
					</a>
				</p>
			</div>
		</div>
	</div>

	<div class="border-t border-white/10">
		<div class="mx-auto max-w-7xl px-5 py-4 text-xs text-white/62 md:px-8">
			© 2026 {profile.name}. Bản quyền thuộc về tác giả.
		</div>
	</div>
</footer>
