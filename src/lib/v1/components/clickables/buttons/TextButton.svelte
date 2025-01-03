<script lang='ts'>
    import { type Theme, Button, scale, smoothnessScale } from "$lib/v1";

    export let primary = false;
    export let navigation = true;
    export let bordered = false;
    export let download = false;
    export let external = false;
    export let using: Theme;
    export let onClick;
</script>


<Button onClick={onClick}>
    <div
        style="
        border-radius: {smoothnessScale(using)}px;
        {!navigation ? 'background-color: {primary ? using.primary : using.surface}' : ''};
        padding: {scale(-1)}rem {scale(0)}rem {scale(-1)}rem {scale(0)}rem;
        color: {primary ? using.background : using.foreground};
        font-family: {using.heading};
        "
    >
        <slot/>
    </div>
</Button>