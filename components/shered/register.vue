<script setup lang="ts">
import type { FormError, FormSubmitEvent } from '#ui/types'
const state = reactive({
    email: undefined,
    name: undefined,
    password: undefined
})

const validate = (state: any): FormError[] => {
    const errors = []
    if (!state.email) errors.push({ path: 'email', message: 'Email required' })
    if (!state.name) errors.push({ path: 'name', message: 'Name required' })
    if (!state.password) errors.push({ path: 'password', message: 'Password required' })
    return errors
}

async function onSubmit(event: FormSubmitEvent<any>) {
    console.log(event.data)
}
</script>

<template>
    <div class="h-screen flex items-center justify-center">
        <div class="min-w-[500px] relative z-50 bg-gray-500 opacity-85 p-4 rounded-lg">
            <UForm :validate="validate" :state="state" class="space-y-4" @submit="onSubmit">
                <UFormGroup label="Name" name="name">
                    <UInput v-model="state.name" />
                </UFormGroup>
                <UFormGroup label="Email" name="email">
                    <UInput v-model="state.email" />
                </UFormGroup>

                <UFormGroup label="Password" name="password">
                    <UInput v-model="state.password" type="password" />
                </UFormGroup>

                <UButton type="submit" color="blue" class="w-full text-center flex items-center justify-center">
                    Submit
                </UButton>
            </UForm>

        </div>

    </div>
</template>
