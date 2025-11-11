<template>
    <div class="min-h-screen items-center justify-center flex font-footer p-4">
        <div class="bg-[#f3f3f3] max-w-sm w-full rounded-sm  shadow-sm border-6 border-border p-4 ">
            <h2 class="text-2xl font-bold text-[#3a3b38] mb-6 text-center">Sign In <font-awesome-icon icon="fa-solid fa-champagne-glasses" class="" /></h2>
            <!-- Error message -->
            <div v-if="errorMessage" class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
                {{ errorMessage }}
            </div>
            
            <!-- Success message -->
            <div v-if="successMessage" class="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
                {{ successMessage }}
            </div>
            <form @submit.prevent="handleLogin" class="space-y-4">
                <div>
                    <label class="block text-sm font-medium text-[#3a3b38] mb-1">Email</label>
                        <input 
                            v-model="email"
                            type="email" 
                            required
                            class="w-full px-4 py-2 mb-4 text-[#3a3b38] border border-gray-300 rounded-lg focus:ring-2 focus:ring-border2 focus:border-border2 outline-none transition-all"
                            placeholder="your@email.com"
                            />
                    <label class="block text-sm font-medium text-[#3a3b38] mb-1">Password</label>
                        <input 
                            v-model="password"
                            type="password" 
                            required
                            class="w-full px-4 py-2 mb-4 text-[#3a3b38] border border-gray-300 rounded-lg focus:ring-2 focus:ring-border2 focus:border-border outline-none transition-all"
                            placeholder="••••••••"
                            />
                    </div>
                    <button
                     type="submit"
                     :disabled="loading"
                     class="w-full bg-border hover:bg-border2 text-white font-medium py-2.5 rounded-lg transition-colors">
                        {{ loading ? 'Signing in...' : 'Sign In' }}
                    </button>
            </form>
        </div>
    </div>
</template>

<script setup>
        import { ref } from 'vue'
        import { useRouter } from 'vue-router'
        import { supabase } from '../../../lib/supabase'

        const router = useRouter()

        const email = ref('')
        const password = ref('')
        const loading = ref(false)
        const errorMessage = ref('')
        const successMessage = ref('')

        const handleLogin = async () => {
        loading.value = true
        errorMessage.value = ''
        successMessage.value = ''
        
        try {
            const { data, error } = await supabase.auth.signInWithPassword({
            email: email.value,
            password: password.value,
            })
            
            if (error) {
            errorMessage.value = error.message
            return
            }
            
            if (data.user) {
            successMessage.value = 'Login successful! Redirecting...'
            
            // Simpan session
            localStorage.setItem('isAuthenticated', 'true')
            
            // Redirect ke admin dashboard
            setTimeout(() => {
                router.push('/admin')
            }, 1000)
            }
        } catch (err) {
            errorMessage.value = 'An unexpected error occurred'
            console.error('Login error:', err)
        } finally {
            loading.value = false
        }
        }

</script>

<style  scoped>

</style>