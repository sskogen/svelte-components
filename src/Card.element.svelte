<svelte:options tag="card-element" />

<script>
    import Card from './Card.svelte';
    export let header = "Dette er en tittel";
    export let description = "Dette er innhold";
</script>

<Card {header} {description}/>