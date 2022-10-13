<script lang="ts">
// @ts-nocheck

    import { user } from '$lib/sessionStore'
    import { supabase } from '$lib/supabaseClient'
    import Auth from '$lib/Auth.svelte'
    import Profile from '$lib/Profile.svelte'
    import ButtomNavBar from '$lib/components/mobile/BottomNavBarMobile.svelte'
	import BottomNavBar from '$lib/components/mobile/BottomNavBarMobile.svelte';
	import Title from '$lib/components/both/Title.svelte';
  
    user.set(supabase.auth.user())
  
    supabase.auth.onAuthStateChange((_, session) => {
      user.set(session.user)
    })
  </script>
  
  <div class="container " style="padding: 50px 0 100px 0;">
    <!-- <section/> -->
    {#if $user}
    <Profile />
    {:else}
    <Auth />
    {/if}

  </div>

  <style scoped>
    /* section {
      height: 12vh;
    } */
  </style>

  