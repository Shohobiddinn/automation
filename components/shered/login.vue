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
let err: any = ref('')
async function onSubmit(event: FormSubmitEvent<any>) {
    let data: Login = {
        username: state.login,
        password: state.password
    }
    api.token(data).then((res) => {

        console.log('Success', res);
    }).catch((err: any) => {
        console.log('vfsdjjnsf');
        
        err.value = "Login yoki paro'lda hatolik"
    })
}
</script>

<template>
    <div class="w-full min-h-screen h-max flex items-center justify-center bg-cover bg-no-repeat bg-center z-10 pt-10 pb-24"
        style="background-image: url(&quot;/assets/loginbg-0TR691AN.png&quot;);">
        <div
            class="flex flex-col items-center justify-center gap-2 w-[435px] max-md:w-[90%] p-6 bg-[var(--bgWhite-color)] shadow-[0_0px_8px_4px_var(--textOpasity-color)] rounded-md">

            <UForm :validate="validate" :state="state"
                class="space-y-4 w-full border border-[2px] rounded-lg p-3 border-blue-900  bg-gray-500 opacity-90" @submit="onSubmit">
                <h2 class="text-center">“Oʻzbekiston temir yoʻllari” AJ</h2>
                <UAlert v-if="err" :description="err" title="Error !" color="red"
                    variant="outline" />
                <UFormGroup label="Login" name="login">
                    <UInput v-model="state.login" icon="i-heroicons-envelope"
                        :trailing-icon="!state.login ? 'i-heroicons-exclamation-triangle-20-solid' : undefined" />
                </UFormGroup>

                <UFormGroup label="Password" name="password">
                    <UInput v-model="state.password" type="password" icon="i-heroicons-light-bulb" />
                </UFormGroup>

                <UButton type="submit" color="blue" class="w-full text-center flex items-center justify-center">
                    Submit
                    <UIcon name="i-ph-rocket-launch" dynamic />
                </UButton>
            </UForm>
            <div class="flex items-center justify-center w-full relative mt-5 opacity-70">
                <div class="w-full h-[0.5px] bg-[var(--textGray-color)] absolute left-0 top-[50%] translate-y-[-50%]">
                </div>

            </div>
            <div class="flex items-center justify-center gap-3 mt-3 w-full"></div>
        </div>

    </div>
</template>
