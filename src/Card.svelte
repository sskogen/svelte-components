<script>
    import {onMount} from 'svelte';

    let el;
    let large = false;
    export let header = "Header";
    export let description = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores aspernatur dolores error fugiat harum id in magnam, molestiae nisi recusandae sapiente similique temporibus totam velit voluptatem! Dolores perferendis sequi voluptatem!";

    onMount(() => {
        const resizeObserver = new ResizeObserver((entries) => {
            for (const entry of entries) {
                const width = entry.borderBoxSize?.[0].inlineSize;
                large = width > 600;
            }
        });
        resizeObserver.observe(el);
        return () => {
            resizeObserver.disconnect();
        }
    });
</script>

<div class="card" class:large bind:this={el}>
    <img src={`https://picsum.photos/${large ? "300/200" : "600/200"}`} alt="Random image" />
    <div class="content">
        <header>
            {header}
        </header>
        <description>
            {description}
        </description>
    </div>
</div>

<style lang="scss">
    .card {
        display: flex;
        flex-direction: column;

      &.large {
        flex-direction: row;
      }
    }

    header {
      font-size: 30px;
      line-height: 42px;
    }
    .content {
      font-size: 20px;
      padding: 12px;
      min-width: 50%;
    }
    img {
      width: 100%;
      object-fit: cover;
    }
</style>
