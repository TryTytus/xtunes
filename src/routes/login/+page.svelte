<script lang="ts">
	import { supabase } from '$lib/supabaseClient';

    let email = ''
    let password = ''

	let handle = async () => {
		const { user, session, error } = await supabase.auth.signIn({
			email,
			password
		});
        if (error) {
            alert(JSON.stringify(error))
        }
	};
</script>

<form on:submit|preventDefault={handle}>
	<h1>Log in</h1>
	<input bind:value={email} type="email" />
	<input bind:value={password} type="password" />
	<button type="submit">Submit</button>
</form>
