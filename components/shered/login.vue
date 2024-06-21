<script setup lang="ts">
import type { FormError, FormSubmitEvent } from '#ui/types'
import api from '~/connection/api';
import type { Login } from '~/interfaces/api';
const state = reactive({
    login: undefined,
    password: undefined
})

const validate = (state: any): FormError[] => {
    const errors = []
    if (!state.login) errors.push({ path: 'login', message: 'Loginni kiritish majburiy' })
    if (!state.password) errors.push({ path: 'password', message: 'Paro\'l kiritish majburiy' })
    return errors
}

async function onSubmit(event: FormSubmitEvent<any>) {
    let data: Login = {
        username: state.login,
        password: state.password
    }
    api.token(data).then((res) => {
        
        console.log('Success', res);
    }).catch((err: any) => {
        console.error('Failed to', err);
    })
}
</script>

<template>
    <div class="h-screen flex items-center justify-center">
        <div class="min-w-[500px] relative z-50 bg-gray-800 p-4 rounded-lg">
            <UForm :validate="validate" :state="state" class="space-y-4" @submit="onSubmit">
                <UFormGroup label="Login" name="login">
                    <UInput v-model="state.login" icon="i-heroicons-envelope" :trailing-icon="!state.login ? 'i-heroicons-exclamation-triangle-20-solid' : undefined"  />
                </UFormGroup>

                <UFormGroup label="Password" name="password">
                    <UInput v-model="state.password" type="password" icon="i-heroicons-light-bulb" />
                </UFormGroup>

                <UButton type="submit" color="blue" class="w-full text-center flex items-center justify-center">
                    Submit <UIcon name="i-ph-rocket-launch" dynamic />
                </UButton>
            </UForm>

        </div>

    </div>
</template>
