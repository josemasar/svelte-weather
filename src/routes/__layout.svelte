<div>
    <slot />
</div>

<style>
    :global(body){ 
        background: #fdfdfd;
        display: grid;
        place-content: center;
        min-height: 100vh;
    }

    div {
        aspect-ratio: 9 / 16;
        max-width: 400px;
        width: 100%;
        border: 1px solid #eee;
        display: block;
        box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
        border-radius: 8px;
    }
</style>
