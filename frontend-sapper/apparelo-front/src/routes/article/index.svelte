<script context="module">
	export function preload() {
		return this.fetch(`http://ec2-15-236-181-77.eu-west-3.compute.amazonaws.com:3000/article/by-type/Textile`).then(r => r.json()).then(articles => {
			return { articles };
		});
	}
</script>

<script>
	export let articles;
</script>

<style>

	/* --- Products --- */
	
	.container-product {
		width: 80%;
		margin: auto;
		padding: 40px 0; 
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
	}
	
	.img {
		width: fit-content;
		display: flex;
		justify-content: center;
		flex-direction: column;
	}
	
	.img-article {
		width: fit-content;
		border: 5px solid #5c9599;
		border-radius: 20px;
	}
	
	.img-article:hover {
		background-color: #5c9599;
		border: 5px solid #000;
	}
	
	.article-title {
		text-align: center;
		font-size: 20px;
		font-weight: bold;
		margin: 15px 0;
	}
	
	a {
		text-decoration: none;
	}
	
	</style>
	
<section class="container-product">

	{#each articles as article}
		<!-- we're using the non-standard `rel=prefetch` attribute to
				tell Sapper to load the data for the page as soon as
				the user hovers over the link or taps it, instead of
				waiting for the 'click' event -->

				<a href="article/{article.id}" class="img">
					<div class="img-article">
						<img src="/Images/articles/{article.family}.png" alt="{article.family}" >
					</div>
					<!-- <h4 class="article-title">{item.id}</h4> -->
					<h4 class="article-title">{article.denomination}</h4></a>
		<!-- <li><a rel="prefetch" href="blog/{article.slug}">{article.family}</a></li> -->
	{/each}

</section>