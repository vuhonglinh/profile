<script lang="ts">
	import type { Profile } from '$lib/data/portfolio';

	let { profile } = $props<{ profile: Profile }>();
</script>

<section id="contact" class="rounded-[2rem] bg-[color:var(--paper)] px-6 py-10 md:px-10 md:py-12">
	<div class="space-y-2">
		<p class="section-kicker">Liên hệ</p>
		<h2 class="section-title">Cùng xây dựng sản phẩm tiếp theo của bạn</h2>
		<p class="muted max-w-2xl leading-relaxed">
			Hãy chia sẻ phạm vi dự án và thời gian mong muốn. Tôi có thể hỗ trợ kiến trúc hệ thống, triển
			khai chức năng và đưa sản phẩm lên môi trường production.
		</p>
	</div>

	<div class="mt-6 grid gap-5 lg:grid-cols-2">
		<div class="dark-panel p-6">
			<p class="font-['Oswald'] text-2xl text-white">Liên hệ trực tiếp</p>
			<div class="mt-4 space-y-3 text-sm text-white/84">
				<p>
					<span class="font-semibold text-white">Email:</span>
					<a href={`mailto:${profile.email}`} class="ml-2 hover:text-[color:var(--primary)]">
						{profile.email}
					</a>
				</p>
				<p>
					<span class="font-semibold text-white">Số điện thoại:</span>
					<a href={`tel:${profile.phone}`} class="ml-2 hover:text-[color:var(--primary)]">
						{profile.phone}
					</a>
				</p>
				<p>
					<span class="font-semibold text-white">GitHub:</span>
					<a
						href="https://github.com/vuhonglinh"
						target="_blank"
						rel="noreferrer"
						class="ml-2 hover:text-[color:var(--primary)]"
					>
						github.com/vuhonglinh
					</a>
				</p>
				<p>
					<span class="font-semibold text-white">LinkedIn:</span>
					<a
						href="https://www.linkedin.com/in/vu-linh-1698aa319/"
						target="_blank"
						rel="noreferrer"
						class="ml-2 hover:text-[color:var(--primary)]"
					>
						linkedin.com/in/vu-linh-1698aa319/
					</a>
				</p>
			</div>
		</div>

		<form class="surface-card space-y-3 p-5">
			<label class="block text-xs font-semibold tracking-wide text-[#51616c] uppercase">
				Họ và tên
				<input
					class="mt-1 w-full rounded-full border border-black/14 bg-white px-4 py-2.5 text-sm text-[#1a2c39] outline-none focus:border-black/40"
					type="text"
					placeholder="Nguyễn Văn A"
				/>
			</label>
			<label class="block text-xs font-semibold tracking-wide text-[#51616c] uppercase">
				Email
				<input
					class="mt-1 w-full rounded-full border border-black/14 bg-white px-4 py-2.5 text-sm text-[#1a2c39] outline-none focus:border-black/40"
					type="email"
					placeholder="ban@example.com"
				/>
			</label>
			<label class="block text-xs font-semibold tracking-wide text-[#51616c] uppercase">
				Tin nhắn
				<textarea
					class="mt-1 min-h-28 w-full rounded-3xl border border-black/14 bg-white px-4 py-3 text-sm text-[#1a2c39] outline-none focus:border-black/40"
					placeholder="Hãy cho tôi biết bạn đang muốn xây dựng sản phẩm gì..."
				></textarea>
			</label>
			<button type="button" class="btn-primary w-full py-2.5 text-sm">Gửi tin nhắn</button>
		</form>
	</div>
</section>
