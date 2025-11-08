<template>
    <div class="min-h-screen items-center justify-center flex font-footer p-4">
        <div class="bg-[#f3f3f3] max-w-sm w-full rounded-sm  shadow-sm border-6 border-border p-4 ">
            <h2 class="text-2xl font-bold text-[#3a3b38] mb-6 text-center">Sign In <font-awesome-icon icon="fa-solid fa-champagne-glasses" class="" /></h2>
            <form class="space-y-4">
                <div>
                    <label class="block text-sm font-medium text-[#3a3b38] mb-1">Email</label>
                        <input 
                            type="email" 
                            class="w-full px-4 py-2 mb-4 text-[#3a3b38] border border-gray-300 rounded-lg focus:ring-2 focus:ring-border2 focus:border-border2 outline-none transition-all"
                            placeholder="your@email.com"
                            />
                    <label class="block text-sm font-medium text-[#3a3b38] mb-1">Password</label>
                        <input 
                            type="password" 
                            class="w-full px-4 py-2 mb-4 text-[#3a3b38] border border-gray-300 rounded-lg focus:ring-2 focus:ring-border2 focus:border-border outline-none transition-all"
                            placeholder="••••••••"
                            />
                    </div>
                    <button class="w-full bg-border hover:bg-border2 text-white font-medium py-2.5 rounded-lg transition-colors">
                        Sign
                    </button>
                    

            </form>

        </div>

    </div>
</template>

<script>

</script>

<style  scoped>

</style>