<script lang="ts">
	import { resolve } from '$app/paths';

	const contactHref = resolve('/#contact');
</script>

<section id="about" class="grid gap-6 lg:grid-cols-[1.02fr_0.98fr]">
	<div class="surface-card p-6 md:p-8">
		<p class="section-kicker text-[#52636f]">Về tôi</p>
		<h2 class="section-title mt-2">Lập trình viên Full-Stack định hướng sản phẩm</h2>

		<p class="mt-4 max-w-2xl text-base leading-8 text-[#334350]">
			Tôi làm việc xuyên suốt từ backend, database, frontend đến triển khai hệ thống để xây dựng
			các sản phẩm hoàn chỉnh, dễ bảo trì và sẵn sàng mở rộng trong môi trường production.
		</p>

		<p class="mt-4 max-w-2xl text-base leading-8 text-[#334350]">
			Các dự án chính của tôi tập trung vào dashboard, nền tảng học trực tuyến (LMS), thương mại
			điện tử và hệ thống nội bộ, với ưu tiên về hiệu năng, kiến trúc rõ ràng và khả năng phát
			triển nhanh cùng team sản phẩm.
		</p>

		<div class="mt-6 grid grid-cols-1 gap-3 text-sm font-medium text-[#24323d] sm:grid-cols-2">
			<p class="flex items-center gap-2">
				<span class="inline-block h-2.5 w-2.5 rounded-full bg-[color:var(--primary)]"></span>
				Thiết kế kiến trúc API và cơ sở dữ liệu
			</p>

			<p class="flex items-center gap-2">
				<span class="inline-block h-2.5 w-2.5 rounded-full bg-[color:var(--primary)]"></span>
				Frontend với Svelte và React
			</p>

			<p class="flex items-center gap-2">
				<span class="inline-block h-2.5 w-2.5 rounded-full bg-[color:var(--primary)]"></span>
				Xây dựng hệ thống auth, thanh toán và CMS
			</p>

			<p class="flex items-center gap-2">
				<span class="inline-block h-2.5 w-2.5 rounded-full bg-[color:var(--primary)]"></span>
				Triển khai và vận hành hệ thống production
			</p>
		</div>
	</div>

	<div class="dark-panel relative overflow-hidden p-6 md:p-8">
		<img
			src="/plexify/card-4.png"
			alt="About visual"
			class="absolute inset-0 h-full w-full object-cover opacity-34"
		/>
		<div class="absolute inset-0 bg-black/52"></div>

		<div class="relative z-10 space-y-4">
			<p class="section-kicker text-[color:var(--primary)]">Vì sao nên hợp tác</p>

			<h3 class="text-4xl leading-tight text-white">
				Triển khai nhanh với khả năng làm chủ toàn bộ hệ thống
			</h3>

			<ul class="space-y-2 text-sm leading-relaxed text-white/82">
				<li>- Lên kiến trúc ngay từ đầu để tránh vấn đề khi scale sau này.</li>
				<li>- Xây dựng frontend tái sử dụng và backend ổn định trong cùng một quy trình.</li>
				<li>- Giao tiếp rõ ràng với team product và design.</li>
				<li>- Ưu tiên giá trị người dùng, tốc độ release và khả năng bảo trì.</li>
			</ul>

			<a href={contactHref} class="btn-primary mt-3 py-2.5 text-xs">
				Bắt đầu trao đổi
			</a>
		</div>
	</div>
</section>